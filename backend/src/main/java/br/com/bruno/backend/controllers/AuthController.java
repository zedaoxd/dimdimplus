package br.com.bruno.backend.controllers;

import br.com.bruno.backend.controllers.requests.AuthRequest;
import br.com.bruno.backend.controllers.requests.RegisterRequest;
import br.com.bruno.backend.controllers.responses.AuthResponse;
import br.com.bruno.backend.services.AuthService;
import br.com.bruno.backend.services.EmailService;
import lombok.RequiredArgsConstructor;
import net.bytebuddy.utility.RandomString;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authenticationService;
    private final EmailService emailService;

    @PostMapping("/update-reset-password")
    public ResponseEntity<String> updateResetPasswordToken (
            @RequestParam("email") String email
    ) {
        String token = RandomString.make(45);
        authenticationService.updateResetPasswordToken(token, email);
        emailService.sendEmail(email, token);

        return ResponseEntity.ok("Email sent");
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register (
            @RequestBody RegisterRequest registerRequest
    ) {
        return ResponseEntity.ok(authenticationService.register(registerRequest));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthResponse> authenticate (
            @RequestBody AuthRequest authenticationRequest
    ) {
        return ResponseEntity.ok(authenticationService.authenticate(authenticationRequest));
    }
}
