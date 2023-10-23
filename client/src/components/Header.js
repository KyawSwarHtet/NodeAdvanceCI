import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
   
      case null:
        // return;
        return (
          <li>
            {   console.log("this .props.auth from null",this.props.auth)}
            <a href={"/auth/google"}>Login With Google</a>
          </li>
        );
      case false:
        return (
          <li>
            {   console.log("this .props.auth from false",this.props.auth)}
            <a href={"/auth/google"}>Login With Google</a>
          </li>
        );
      default:
        return [
            
          <li key="3" style={{ margin: "0 10px" }}>
            {   console.log("this .props.auth from true",this.props.auth)}
            <Link to="/blogs">My Blogs</Link>
          </li>,
          <li key="2">
            <a href={"/auth/logout"}>Logout</a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <nav className="indigo">
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/blogs" : "/"}
            className="left brand-logo"
            style={{ marginLeft: "10px" }}
          >
            Blogster
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
