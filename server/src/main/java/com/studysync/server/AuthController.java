package com.studysync.server;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody LoginRequest request) {
        Map<String, Object> response = new HashMap<>();
        Optional<User> userOptional = userRepository.findByEmail(request.getEmail());

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.getPassword().equals(request.getPassword())) {
                response.put("success", true);
                response.put("message", "Login successful!");
                response.put("user", user.getEmail());  // optional
            } else {
                response.put("success", false);
                response.put("message", "Invalid password");
            }
        } else {
            response.put("success", false);
            response.put("message", "User not found");
        }

        return response;
    }

    @PostMapping("/signup")
    public Map<String, Object> signup(@RequestBody User newUser) {
        Map<String, Object> response = new HashMap<>();
        Optional<User> existingUser = userRepository.findByEmail(newUser.getEmail());

        if (existingUser.isPresent()) {
            response.put("success", false);
            response.put("message", "Email already in use");
        } else {
            userRepository.save(newUser);
            response.put("success", true);
            response.put("message", "Signup successful!");
        }

        return response;
    }
}
