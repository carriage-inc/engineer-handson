import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Heading from "@theme/Heading";
import styles from "./login.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";

const Login: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Heading as="h1">
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
        <div>{error && <p className={styles.error}>{error}</p>}</div>
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? "ログイン中..." : "ログイン"}
        </button>
      </form>

      <Link to="/engineer-handson" className={styles.goback}>
        ← ホームに戻る
      </Link>
    </div>
  );
};

export default Login;
