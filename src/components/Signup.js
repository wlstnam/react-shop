import React, { useState } from "react";
import { auth } from "../firebaseConfig";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      props.closeModal();
      console.log("회원가입 성공");
    } catch (error) {
      console.error("Error signing up", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
