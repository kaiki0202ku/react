import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, query, onSnapshot, querySnapshot } from "firebase/firestore";
import { useLocation, useParams } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  const id = useParams();

  console.log(id);

  const usersCollectionRef = collection(db, "users");
  const q = query(usersCollectionRef);
  const unsub = onSnapshot(q, (querySnapshot) => {
    setUsers(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  });

  return (
    <>
      {/* {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}aaa</p>
        </div>
      ))} */}
    </>
  );
}

export default App;
