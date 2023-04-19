package br.com.bruno.backend.services;

import br.com.bruno.backend.controllers.requests.AuthRequest;
import br.com.bruno.backend.controllers.requests.RegisterRequest;
import br.com.bruno.backend.controllers.responses.AuthResponse;
import br.com.bruno.backend.controllers.responses.ResetPasswordResponse;
import br.com.bruno.backend.entities.User;
import br.com.bruno.backend.repositories.RoleRepository;
import br.com.bruno.backend.repositories.UserRepository;
import br.com.bruno.backend.services.exceptions.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(RegisterRequest registerRequest) {
        User user = registerRequest.toUser();
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRoles(Set.of(roleRepository.findByAuthority("ROLE_USER")));
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return new AuthResponse(jwtToken);
    }

    public AuthResponse authenticate(AuthRequest authenticationRequest) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                authenticationRequest.getEmail(),
                authenticationRequest.getPassword()
            )
        );
        User user = userRepository.findByEmail(authenticationRequest.getEmail())
                .orElseThrow(() -> new EntityNotFoundException("User not found: " + authenticationRequest.getEmail()));
        var jwtToken = jwtService.generateToken(user);
        return new AuthResponse(jwtToken);
    }


    public void updateResetPasswordToken(String token, String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException("User not found: " + email));
        user.setResetPasswordToken(token);
        userRepository.save(user);
    }

    public ResetPasswordResponse resetPassword(String token, String newPassword) {
        User user = getByResetPasswordToken(token);
        user.setPassword(passwordEncoder.encode(newPassword));
        user.setResetPasswordToken(null);
        userRepository.save(user);
        return new ResetPasswordResponse("Password updated");
    }

    private User getByResetPasswordToken(String token) {
        return userRepository.findByResetPasswordToken(token)
                .orElseThrow(() -> new EntityNotFoundException("User not found: " + token));
    }
}
