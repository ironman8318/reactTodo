import React from 'react';
import logo from './logo.svg';
import Home from "./Containers/Home/Home";
import Form from "./Containers/Form/Form";
import Layout from "./Containers/Layout/Layout"
import {Route,Switch} from "react-router-dom";
import './App.css';

function App() {    
    const themeColor = localStorage.getItem("themeColor");
    if(themeColor){
        document.documentElement.style.setProperty("--theme-color",themeColor);
    }

  return (
    <div className="App">
      <Layout>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/add" exact component={Form} />
              <Route path="/edit" exact component={Form} />
          </Switch>
      </Layout>
    </div>
  );
}

export default App;
