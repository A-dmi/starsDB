import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page/people-page";
import PlanetPage from "../planet-page/index";
import ShipPage from "../ship-page/index";

import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";

import "./app.css";

import { BrowserRouter, Route } from "react-router-dom";
import { FilmDetails } from "../sw-components";
import FilmPage from "../films-page/film-page";
export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <RandomPlanet interval={3500} />
          <SwapiServiceProvider value={this.swapiService}>
            <Route
              path="/"
              exact
              render={() => (
                <div>
                  <h2>Welcom To StarDB</h2>
                  <h3>Films:</h3>
                  <FilmPage />
                </div>
              )}
            />
            <Route
              path="/film/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <FilmDetails itemId={id} />;
              }}
            />
            <Route path="/people/:id?" component={PeoplePage} />

            <Route path="/planets/:id?" component={PlanetPage} />

            <Route path="/starships/:id?" exact component={ShipPage} />
          </SwapiServiceProvider>
        </BrowserRouter>
      </div>
    );
  }
}
