import React from "react";
import PropTypes from "prop-types";
import { Article } from "./Article";

class News extends React.Component {
  state = {
    filteredNews: this.props.data
  };

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    console.log(state);
    let nextFilteredNews = [...props.data]; // было nextProps - переименовали
    nextFilteredNews.forEach((item, index) => {
      if (item.bigText.toLowerCase().indexOf("pubg") !== -1) {
        item.bigText = "СПАМ";
      }
    });
 
  }

  // componentWillReceiveProps(nextProps) {
  //   // console.log({ nextProps })
  //   // console.log({ oldProps: this.props })
  //   let nextFilteredNews = [...nextProps.data];

  //   nextFilteredNews.forEach((item, index) => {
  //     if (item.bigText.toLowerCase().indexOf("pubg") !== -1) {
  //       item.bigText = "СПАМ";
  //     }
  //   });

  //   this.setState({ filteredNews: nextFilteredNews });
  // }


  render() {
    const { filteredNews } = this.state;
    return (

    );
  }
}

