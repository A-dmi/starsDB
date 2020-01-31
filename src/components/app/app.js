import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import ItemDetails from "../person-details";

import "./app.css";
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";
import { Record } from "../person-details/item-details";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    selectedShip: null,
    selectedPlanet: null
  };

  onPersonSelected = id => {
    console.log(id);
    this.setState({
      selectedPerson: id
    });
  };

  onShipSelected = id => {
    console.log(id);
    this.setState({
      selectedShip: id
    });
  };

  onPlanetSelected = id => {
    console.log(id);
    this.setState({
      selectedPlanet: id
    });
  };

  render() {
    const {
      getAllStarships,
      getStarship,
      getStarshipImage,
      getAllPlanets,
      getPlanet,
      getPlanetImage
    } = this.swapiService;

    return (
      <div>
        <Header />
        <RandomPlanet />

        <PeoplePage />

        <Row
          left={
            <ItemList
              onItemSelected={this.onShipSelected}
              getData={getAllStarships}
              renderItem={({ name }) => `${name}`}
            />
          }
          right={
            <ItemDetails
              itemId={this.state.selectedShip}
              getData={getStarship}
              getImage={getStarshipImage}
            >
              <Record field="model" label="Model:" />
              <Record field="length" label="Length:" />
              <Record field="costInCredits" label="Cost:" />
            </ItemDetails>
          }
        />

        <Row
          left={
            <ItemList
              onItemSelected={this.onPlanetSelected}
              getData={getAllPlanets}
              renderItem={({ name }) => `${name}`}
            />
          }
          right={
            <ItemDetails
              itemId={this.state.selectedPlanet}
              getData={getPlanet}
              getImage={getPlanetImage}
            >
              <Record field="gender" label="Gender:" />
              <Record field="birthYear" label="Birth Year:" />
              <Record field="eyeColo" label="Eye Color:" />
            </ItemDetails>
          }
        />
      </div>
    );
  }
}
