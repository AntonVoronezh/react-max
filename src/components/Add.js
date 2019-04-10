import React from "react";
import PropTypes from 'prop-types'

class Add extends React.Component {
    state = {
      name: "",
      text: "",
      bigText: "",
      agree: false
    };
    onBtnClickHandler = e => {
      e.preventDefault();
      const { name, text, bigText } = this.state;
      this.props.onAddNews({
        id: +new Date(),
        author: name,
        text,
        bigText
      });
    };
    handleChange = e => {
      const { id, value } = e.currentTarget;
      this.setState({ [id]: value });
    };
    handleCheckboxChange = e => {
      this.setState({ agree: e.currentTarget.checked });
    };
    validate = () => {
      const { name, text, agree } = this.state;
      if (name.trim() && text.trim() && agree) {
        return true;
      }
      return false;
    };

  }
  


export { Add };