import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Heading from "@theme/Heading";
import styles from "./Login.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const Login: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/engineer-handson";
    } catch (error) {
      let errorMessage = "エラーが発生しました。";

      switch ((error as any).code) {
        case "auth/invalid-email":
        case "auth/wrong-password":
        case "auth/invalid-credential":
          errorMessage = "メールアドレスまたはパスワードが間違っています。";
          break;
        case "auth/user-disabled":
          errorMessage = "アカウントが無効になっています。";
          break;
        case "auth/user-not-found":
          errorMessage = "ユーザーが見つかりませんでした。";
          break;
        default:
          break;
      }

      setError(errorMessage);
    }
  };

  return (
    <div className={styles.container}>
      <Heading as="h1" className="hero__title">
        <img
          src={useBaseUrl("/img/logo-dark.png")}
          alt={siteConfig.title}
          width="200"
        />
      </Heading>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          ログイン
        </button>
      </form>
      <div style={{ height: "20px" }}>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
