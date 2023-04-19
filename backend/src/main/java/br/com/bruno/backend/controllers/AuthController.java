package br.com.bruno.backend.controllers;

import br.com.bruno.backend.controllers.requests.AuthRequest;
import br.com.bruno.backend.controllers.requests.RegisterRequest;
import br.com.bruno.backend.controllers.requests.ResetPasswordRequest;
import br.com.bruno.backend.controllers.responses.AuthResponse;
import br.com.bruno.backend.controllers.responses.ResetPasswordResponse;
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
    public ResponseEntity<ResetPasswordResponse> updateResetPasswordToken(
            @RequestParam("email") String email
    ) {
        String token = RandomString.make(45);
        authenticationService.updateResetPasswordToken(token, email);
        return ResponseEntity.ok(emailService.sendEmail(email, token));
    }

    @PostMapping("/reset-password")
    public ResponseEntity<ResetPasswordResponse> resetPassword(@RequestBody ResetPasswordRequest resetPasswordRequest) {
        var reset = authenticationService.resetPassword(
                resetPasswordRequest.getToken(),
                resetPasswordRequest.getNewPassword());
        return ResponseEntity.ok(reset);
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(
            @RequestBody RegisterRequest registerRequest
    ) {
        return ResponseEntity.ok(authenticationService.register(registerRequest));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthResponse> authenticate(
            @RequestBody AuthRequest authenticationRequest
    ) {
        return ResponseEntity.ok(authenticationService.authenticate(authenticationRequest));
    }
}
