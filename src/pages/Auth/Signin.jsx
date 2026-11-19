import React, { useState, useContext } from "react";
import logo from "../../assets/logo.ico";
import styles from "./styles.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { auth } from "../../utility/Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/dataProvider/DataProvider";
import { Type } from "../../utility/ActionTypes";
import { ClipLoader } from "react-spinners";

function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  const navigate = useNavigate();
  const navSttateData = useLocation();

  // Firebase Authentication Handler
  const Authhandler = async (e) => {
    e.preventDefault();

    // Identify which button submitted the form
    const action = e.nativeEvent.submitter?.name;

    setError("");

    try {
      if (action === "signIn") {
        setLoading({ signIn: true, signUp: false });
        navigate(navSttateData.state?.redirect || "/");
        const userInfo = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );

        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
      } else if (action === "signUp") {
        setLoading({ signIn: false, signUp: true });
        //navigate to home
        navigate(navSttateData.state?.redirect || "/");
        const userInfo = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );

        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading({
        signIn: false,
        signUp: false,
      });
    }
  };

  return (
    <main className={styles.container}>
      {/* Logo */}
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Habesha Restaurant Logo" />
      </Link>

      {/* Sign In Card */}
      <section className={styles.card}>
        <div className={styles.heading}>
          <h1>Welcome Back!</h1>
          {navSttateData.state?.msg && (
            <small style={{ color: "red", fontSize: "0.9rem" }}>
              {navSttateData.state.msg}
            </small>
          )}
        </div>

        <form onSubmit={Authhandler}>
          {/* Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Password */}
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          {/* Forgot Password */}
          <div className={styles.forgotPassword}>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          {/* Sign In Button */}
          <button
            name="signIn"
            type="submit"
            disabled={loading.signIn || loading.signUp}
            className={styles.signinBtn}
          >
            {loading.signIn ? (
              <ClipLoader color="#ffffff" size={20} />
            ) : (
              "Sign In"
            )}
          </button>

          {/* Privacy Policy */}
          <p className={styles.policy}>
            By signing in, you agree to our{" "}
            <Link to="/privacy-policy">Privacy Policy</Link>.
          </p>

          {/* Divider */}
          <div className={styles.divider}>
            <span>OR</span>
          </div>

          {/* Create Account */}
          <p className={styles.registerText}>Don't have an account?</p>

          <button
            name="signUp"
            type="submit"
            disabled={loading.signIn || loading.signUp}
            className={styles.registerBtn}
          >
            {loading.signUp ? (
              <ClipLoader color="#ffffff" size={20} />
            ) : (
              "Create Account"
            )}
          </button>

          {/* Error Message */}
          {error && <small className={styles.error}>{error}</small>}
        </form>
      </section>
    </main>
  );
}

export default Signin;
