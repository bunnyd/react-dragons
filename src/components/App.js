import React, { Component } from "react";
import War from "./War";
import Home from "./Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dragons: [],
      loading: true,
      warDragons: []
    };
  }
  fetchData = () => {
    fetch("http://localhost:3001/dragons")
      .then(response => response.json())
      .then(data =>
        this.setState({
          dragons: data,
          loading: false
        })
      );
  };

  componentDidMount() {
    this.fetchData();
  }

  handleToggleDragon = dragon => {
    let dragonIsAlreadyAtWar = this.state.warDragons.includes(dragon);
    if (dragonIsAlreadyAtWar) {
      this.setState(state => {
        state.dragons.push(dragon);
        state.warDragons = this.state.warDragons.filter(
          warDragon => dragon !== warDragon
        );
        return state;
      });
    } else {
      this.setState(state => {
        state.warDragons.push(dragon);
        state.dragons = this.state.dragons.filter(
          homeDragon => dragon !== homeDragon
        );
        return state;
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <Home
              dragons={this.state.dragons}
              handleToggleDragon={this.handleToggleDragon}
            />
            <War
              warDragons={this.state.warDragons}
              handleToggleDragon={this.handleToggleDragon}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
