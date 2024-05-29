import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, query, onSnapshot, querySnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";

function List() {
  const { id } = useParams();
  console.log(id);

  return <></>;
}

export default List;
