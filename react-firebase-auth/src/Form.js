import React, { useState, useEffect } from "react";
import { auth, db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, text } = event.target.elements;
    console.log(name.value, email.value);
    const usersCollectionRef = collection(db, "users");
    const documentRef = await addDoc(usersCollectionRef, {
      name: name.value,
      email: email.value,
      text: text.value,
    });

    //userIDに沿ってユニークなURLに飛ぶ
    navigate(`/chat/${documentRef.id}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>名前</label>
          <input name="name" type="text" placeholder="名前" />
        </div>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="メールアドレス" />
        </div>
        <div>
          <label>お問い合わせ内容</label>
          <input name="text" type="text" placeholder="お問い合わせ内容" />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </>
  );
};

export default Form;
