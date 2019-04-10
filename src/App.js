import React from "react";
import { Add } from "./components/Add";
import { News } from "./components/News";
// import newsData from "./data/newsData";
import "./App.css";

class App extends React.Component {
  state = {
    news: null,
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("http://localhost:3000/data/newsData.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(this)
        // console.log('приехали данные ', data)
        setTimeout(() => {
          // добавили задержку
          this.setState({ isLoading: false, news: data });
        }, 3000);
      });
  }


  
}

export default App;
