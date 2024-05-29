import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, query, onSnapshot, querySnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";

function Lists() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersCollectionRef = collection(db, "users");
    const q = query(usersCollectionRef);

    const unsub = onSnapshot(q, (querySnapshot) => {
      setUsers(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    // クリーンアップ関数
    return () => unsub();
  }, []);

  return (
    <>
      {users.map((user) => (
        <div className="p-lists" key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.text}</p>
          {console.log(user.id)}
          <Link to={`/list/${user.id}`}>詳細を見る</Link>
        </div>
      ))}
    </>
  );
}

export default Lists;
