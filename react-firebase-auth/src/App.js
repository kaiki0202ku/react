import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./login/Register";
import Login from "./login/Login";
import Mypage from "./login/Mypage";
import Form from "./Form";
import Lists from "./Lists";
import List from "./List";
import Chat from "./Chat";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/Form/`} element={<Form />} />
          <Route path={`/Lists/`} element={<Lists />} />
          <Route path={`/List/`} element={<List />} />
          {/* /idをつけることでForm.jsの22行目のidをURLに設定できる */}
          <Route path={`/Chat/:id`} element={<Chat />} />
          <Route path={`/`} element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
