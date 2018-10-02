import React, { Component } from "react";

class War extends Component {
  render() {
    // Note how style attributes are now passed as object instead of a string!!!
    return (
      <div
        style={{
          float: "left",
          width: "40%",
          padding: "5%",
          backgroundColor: "#f98181"
        }}
      >
        <h1>War</h1>
        {this.props.warDragons.map(dragon => (
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

export default War;
