import React from "react";

class Avatar extends React.Component {
  render() {
    const { src } = this.props;

    return <img src={src} width="200px" alt="Avat" />;
  }
}

export default Avatar;
