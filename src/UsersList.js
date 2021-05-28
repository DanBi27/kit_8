import React from "react";
import UsersCard from "/src/UserCard";

class UsersList extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            {user && user.map((u, key) => <UsersCard key={key} nom={u} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default UsersList;
