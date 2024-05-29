import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, query, onSnapshot, querySnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";

function Lists() {
  const [users, setUsers] = useState([]);

  useEffect(() => {}, []);

  return <></>;
}

export default Lists;
