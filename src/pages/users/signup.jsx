import React, { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff, Person, Email, Lock } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const handleSignup = () => {
    if (email && password && confirmPassword && name) {
      if (password === confirmPassword) {
        alert("Signup successful!");
        // Implement actual signup API call here.
          // Save data to localStorage
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password); // Avoid storing sensitive data like password in localStorage
      // console.log("name", name);
      // console.log("email", email);
      //   console.log("name",name)
      //   console.log("email",email)
      } else {
        alert("Passwords do not match.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex overflow-hidden w-full md:w-2/3 lg:w-1/2">
        {/* Left Section */}
        <div className="hidden md:flex flex-col items-center justify-center bg-green-700 text-white w-1/2 p-8">
          <Typography variant="h4" className="font-bold">
            Welcome Back!
          </Typography>
          <Typography variant="body1" className="text-center mt-4">
            Already have an account? Log in to access your account.
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            className="mt-6"
            onClick={() => navigate("/loginPage")}
          >
            Log In
          </Button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-6">
          <Typography variant="h4" className="font-bold text-center mb-4">
            Sign Up
          </Typography>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handlePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handlePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="mt-6"
            onClick={handleSignup}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
