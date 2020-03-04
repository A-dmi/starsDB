import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";

let FilmDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="name" label="Name:" />
      <Record field="date" label="Date Created:" />
      <Record field="producer" label="Producer" />
      <Record field="crawl" label="Opening Crawl:" />
    </ItemDetails>
  );
};

let PlanetDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

let StarshipDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodToFilm = swapiService => {
  return {
    getData: swapiService.getFilm,
    getImage: swapiService.getFilmImage
  };
};

const mapMethodToStarship = swapiService => {
  return {
    getData: swapiService.getStarship,
    getImage: swapiService.getStarshipImage
  };
};

const mapMethodToPlanet = swapiService => {
  return {
    getData: swapiService.getPlanet,
    getImage: swapiService.getPlanetImage
  };
};

PlanetDetails = withSwapiService(PlanetDetails, mapMethodToPlanet);
StarshipDetails = withSwapiService(StarshipDetails, mapMethodToStarship);
FilmDetails = withSwapiService(FilmDetails, mapMethodToFilm);

export { PlanetDetails, StarshipDetails, FilmDetails };
