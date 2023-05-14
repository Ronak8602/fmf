import React from 'react';
import logo from './logo.png';
import './App.css';
import { useParams } from "react-router";

export function Premium() {

  const params = useParams();

  React.useEffect(() => {
    console.log(params);
  }, [params]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Adding subscription into your account... 
        </p>
      </header>
    </div>
  );
}
