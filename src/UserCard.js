import React from "react";
import Avatar from "./Avatar";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addFriends } from "../src/jss/Actions";

class UsersCard extends React.Component {
  render() {
    const { nom } = this.props;

    return (
      <div>
        <div class="col-2">
          <Avatar src={nom.picture.large} />
          <div>{`${nom.name.first} ${nom.name.last}`}</div>
          <button
            type="button"
            label="Add to friends"
            onClick={() => this.props.addFriends(nom)}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friends: this.state
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addFriends }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UsersCard);
