import React, { Component } from "react";
import { connect } from "react-redux";
import BestFriendsList from "/src/jss/BestFriendsList";

class flist extends Component {
  render() {
    return (
      <div>
        <BestFriendsList friends={this.props.friends} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friends
  };
}

export default connect(mapStateToProps)(flist);
