import React from "react";
import PropTypes from 'prop-types'

class Article extends React.Component {
    state = {
      visible: false
    };

    render() {
      const { author, text, bigText } = this.props.data;
      const { visible } = this.state;
      return (
        <div className="article">
          <p className="news__author">{author}:</p>
          <p className="news__text">{text}</p>
          {!visible && (
            <a
              onClick={this.handleReadMoreClck}
              href="#ggggg"
              className="news__readmore"
            >
              Подробнее
            </a>
          )}
          {visible && <p className="news__big-text">{bigText}</p>}
        </div>
      );
    }
  }



  export { Article };