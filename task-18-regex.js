let password = "BwwTravel2026@";

// Check the five requirements
let hasMinimumLength = password.length >= 8;
let hasUppercase = /[A-Z]/.test(password);
let hasLowercase = /[a-z]/.test(password);
let hasNumber = /\d/.test(password);
let hasSpecialCharacter = /[~!@#$%^&*()_+='";;:-]/.test(password); 

// Combine all requirements
let isPasswordValid = 
hasMinimumLength &&
hasUppercase &&
hasLowercase &&
hasNumber &&
hasSpecialCharacter

if (isPasswordValid) {
    console.log("Password accepted!");
} else {
    console.log("Password does not meet requirements.");
}

// node task-18-regex.js