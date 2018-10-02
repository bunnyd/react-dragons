import React, { Component } from "react";

class Home extends Component {
  render() {
    // Note how style attributes are now passed as object instead of a string!!!
    return (
      <div
        style={{
          float: "left",
          width: "40%",
          padding: "5%",
          backgroundColor: "#00ffd8"
        }}
      >
        <input
          name="search"
          onChange={event => this.props.handleSearchDragon(event.target.value)}
        />
        <h1>Home</h1>
        {this.props.dragons.map(dragon => (
          <div>
            <h4>{dragon.name}</h4>
            <img
              src={dragon.image}
              width="300"
              onClick={event => this.props.handleToggleDragon(dragon)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
