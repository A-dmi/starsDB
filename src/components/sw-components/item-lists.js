import React from "react";
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const { getAllStarships, getAllPlanets, getAllFilms } = swapiService;

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => (
  <span>
    {name} ({model})
  </span>
);

const FilmList = ({ onFilmSelected }) => {
  return (
    <ItemList
      onItemSelected={onFilmSelected}
      getData={getAllFilms}
      renderItem={renderName}
    />
  );
};

const StarshipList = ({ onShipSelected }) => {
  return (
    <ItemList
      onItemSelected={onShipSelected}
      getData={getAllStarships}
      renderItem={renderModelAndName}
    />
  );
};

const PlanetList = ({ onPlanetSelected }) => {
  return (
    <ItemList
      onItemSelected={onPlanetSelected}
      getData={getAllPlanets}
      renderItem={renderName}
    />
  );
};

export { PlanetList, StarshipList, FilmList };
