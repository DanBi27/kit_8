import React from "react";
import BestFriendCard from "/src/jss/BestFriendCard";

class BestFriendsList extends React.Component {
  render() {
    return (
      <div>
        <table className="table">
          <tbody>
            {this.props.friends.map((user, key) => (
              <BestFriendCard key={key} friend={user} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BestFriendsList;
