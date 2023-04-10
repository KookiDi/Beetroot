import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Info from "./components/Info/Info";

class App extends React.Component {
  render() {
    return (
        <>
            <Header></Header>
            <div className="holder">
                <Aside></Aside>
                <main>
                    <Info></Info>
                </main>
            </div>
        </>
    );
  }
}




export default App;
