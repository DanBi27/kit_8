import React from "react";
import { connect } from "react-redux";
import UsersList from "./UsersList";

class Apps extends React.Component {
  state = { user: undefined };

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  async gettusers() {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const resultsJSON = await response.json();

    this.setState({ user: resultsJSON.results });
  }

  componentDidMount() {
    this.gettusers();
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <div>
          <UsersList user={user} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state
  };
}

export default connect(mapStateToProps)(Apps);
