import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Popup from "./components/PopUp/Popup.jsx";
import App from "../App.jsx";
import UseEffect from "./components/UseEffect/UseEffect.jsx";
import UseState from "./components/UseState/UseState.jsx";
import UseCallback from "./components/Callback/UseCallback.jsx";
import Use_Memo from "./components/Memo/Use_Memo.jsx";
import Use_Reducer from "./components/Reducer/Use_Reducer.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/popup" element={<Popup/>} />
        <Route path="/useeffect" element={<UseEffect/>} />
        <Route path="/usestate" element={ <UseState/>} />
        <Route path="/usecallback" element={ <UseCallback/>} />
        <Route path="/usememo" element={ <Use_Memo/>} />
        <Route path="/usereducer" element={<Use_Reducer/> } />

        

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
