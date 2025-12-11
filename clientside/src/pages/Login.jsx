import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { backendUrl, token, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else toast.error(data.message);
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) navigate("/");
  }, [token]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-[80vh] flex items-center justify-center 
      bg-gradient-to-br from-blue-50 to-purple-100 p-4"
    >
      <div
        className="flex flex-col gap-4 p-8 w-full max-w-sm 
        bg-white/70 backdrop-blur-md 
        border border-white/40
        rounded-2xl shadow-xl 
        text-zinc-700 transition-all"
      >
        <p className="text-3xl font-bold text-zinc-800">
          {state === "Sign Up" ? "Create Account" : "Welcome Back"}
        </p>

        <p className="text-sm text-zinc-500 mb-2">
          {state === "Sign Up"
            ? "Please sign up to book appointments"
            : "Log in to continue"}
        </p>

        {state === "Sign Up" && (
          <div className="w-full">
            <p className="font-medium">Full Name</p>
            <input
              className="border border-zinc-300 rounded-lg w-full p-2 mt-1 
              focus:ring-2 focus:ring-primary focus:outline-none transition"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p className="font-medium">Email</p>
          <input
            className="border border-zinc-300 rounded-lg w-full p-2 mt-1 
            focus:ring-2 focus:ring-primary focus:outline-none transition"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="w-full">
          <p className="font-medium">Password</p>
          <input
            className="border border-zinc-300 rounded-lg w-full p-2 mt-1 
            focus:ring-2 focus:ring-primary focus:outline-none transition"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-lg text-base 
          font-medium mt-3 hover:opacity-90 transition-all shadow-md"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p className="text-sm mt-2">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary font-medium cursor-pointer hover:underline transition"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-sm mt-2">
            Create a new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary font-medium cursor-pointer hover:underline transition"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
