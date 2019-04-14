import React from "react";
import PropTypes from 'prop-types'

class Article extends React.Component {


    render() {
      return (
        <div className="article">
          <p className="news__author">{author}:</p>
          <p className="news__text">{text}</p>
          {visible && <p className="news__big-text">{bigText}</p>}
        </div>
      );
    }
  }



  export { Article };