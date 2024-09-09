import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NoName from "./NoName";

function App() {
  return (
    // React.Fragment 생략가능 -> <> 닫는 tag 반드시 있어야 함. </>
    <React.Fragment>  
      <NoName name='홍길동' />
      <NoName />
      <NoName />
      <NoName />
      <NoName />
      <NoName />
      <div>
        <h1>우헤헤헤헤</h1>
      </div>
    </React.Fragment>
  );
}

export default App;
