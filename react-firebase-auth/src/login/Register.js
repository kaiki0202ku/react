/* Register.js */

import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    } catch (error) {
      alert("正しく入力してください");
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <>
      {/* ↓ログインしていればマイページを表示 */}
      {user ? (
        <Navigate to={`/`} />
      ) : (
        <>
          <h1>新規登録</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>メールアドレス</label>
              <input name="email" type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
            </div>
            <div>
              <label>パスワード</label>
              <input name="password" type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
            </div>
            <button>登録する</button>
          </form>
        </>
      )}
    </>
  );
};

export default Register;
