import { useState } from "react";
import { loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const token = await loginUser({ email, password });

        console.log("TOKEN:", token);

      // ✅ store token
        localStorage.setItem("token", token);

        alert("Login successful!");

      // ✅ redirect
        navigate("/dashboard");
    } catch (error) {
        console.error(error);
        alert("Login failed");
    }
    };

    return (
    <div>
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button type="submit">Login</button>
        </form>
    </div>
    );
}

export default Login;