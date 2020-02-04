import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";

import "./app.css";
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";
import { SwapiServiceProvider } from "../swapi-service-context";
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from "../sw-components";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    selectedShip: null,
    selectedPlanet: null
  };

  onShipSelected = id => {
    this.setState({
      selectedShip: id
    });
  };

  onPlanetSelected = id => {
    this.setState({
      selectedPlanet: id
    });
  };

  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />

        <PeoplePage />
        <SwapiServiceProvider value={this.swapiService}>
          <Row
            left={<StarshipList onShipSelected={this.onShipSelected} />}
            right={<PlanetDetails itemId={this.state.selectedShip} />}
          />

          <Row
            left={<PlanetList onPlanetSelected={this.onPlanetSelected} />}
            right={<PlanetDetails itemId={this.state.selectedPlanet} />}
          />
        </SwapiServiceProvider>
      </div>
    );
  }
}
