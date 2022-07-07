import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      loading: false
    };
    this.getUserList = this.getUserList.bind(this);
  }

  getUserList() {
    this.setState({ loading: true });
    fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(res => {
        setTimeout(() => {
          this.setState({ loading: false, userList: res.data });
        }, 2000);
      });
  }

  render() {
    const { userList, loading } = this.state;

    return (
      <div className="container App">
        <h4 className="d-inline-block">Clue Mediator</h4>
        <button
          className="btn btn-info float-right"
          onClick={this.getUserList}
          disabled={loading}
        >
          {loading ? "Loading..." : "Get User List"}
        </button>
        <div className="clearfix" />

        <table className="table mt-3">
          <thead className="thead-dark">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </thead>
          <tbody>
            {userList.map(x => (
              <tr>
                <td>{x.first_name}</td>
                <td>{x.last_name}</td>
                <td>{x.email}</td>
                <td>
                  <img src={x.avatar} width="50" height="50" />
                </td>
              </tr>
            ))}
            {userList.length == 0 && (
              <tr>
                <td className="text-center" colSpan="4">
                  <b>No data found to display.</b>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <h4 style={{ textAlign: "center" }}>
          <a href="http://www.cluemediator.com" target="_blank">
            Checkout more article on ReactJS
          </a>
        </h4>
      </div>
    );
  }
}

export default App;
