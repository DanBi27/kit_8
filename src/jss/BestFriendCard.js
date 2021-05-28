import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { delFriend } from "/src/jss/Actions";
class BestFriendCard extends React.Component {
  render() {
    return (
      <div>
        <tr>
          <th scope="row" />
          <td>{this.props.friend}</td>
          <td>
            {" "}
            <button
              type="button"
              label="Remove from friends"
              onClick={() => this.props.delFriend(this.props.friend)}
            >
              Delete
            </button>
          </td>
        </tr>
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
  return bindActionCreators({ delFriend }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BestFriendCard);
