package br.com.bruno.backend.services;

import br.com.bruno.backend.controllers.responses.ResetPasswordResponse;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class EmailService {

    @Value("${app.frontend.url}")
    private String reactUrl;

    private final JavaMailSender mailSender;

    @SneakyThrows
    public ResetPasswordResponse sendEmail(String email, String token)  {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom("dimdimplusoficial@gmail.com", "DIMDIM PLUS");
        helper.setTo(email);

        String subject = "Aqui está o link para redefinir sua senha";
        String link = reactUrl + "/reset-password?token=" + token;
        String content = "<p>Olá,</p>"
                + "<p>Você solicitou redefinir sua senha.</p>"
                + "<p>Clique no link abaixo para redefinir sua senha:</p>"
                + "<p><b><a href=\"" + link + "\">Redefinir senha</a></b></p>"
                + "<br>"
                + "<p>Ignore este email se você lembra da sua senha</p>"
                + "<br>"
                + "<p>Atenciosamente,</p>"
                + "<p>Equipe DIMDIM PLUS</p>";

        helper.setSubject(subject);
        helper.setText(content, true);

        mailSender.send(message);

        return new ResetPasswordResponse("Email sent");
    }
}
