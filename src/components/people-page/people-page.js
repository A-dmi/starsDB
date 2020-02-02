import React, { Component } from "react";

import ItemList from "../item-list/item-list";

import "./people-page.css";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";
import ItemDetails from "../item-details";
import { Record } from "../item-details/item-details";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }

  onPersonSelected = selectedPerson => {
    this.setState({ selectedPerson });
  };

  render() {
    if (this.state.hasError) {
      alert("oy shit");
    }

    const list = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        }
      />
    );

    const personDetails = (
      <ItemDetails
        itemId={this.state.selectedPerson}
        getData={this.swapiService.getPerson}
        getImage={this.swapiService.getPersonImage}
      >
        <Record field="gender" label="Gender:" />
        <Record field="birthYear" label="Birth Year:" />
        <Record field="eyeColor" label="Eye Color:" />
      </ItemDetails>
    );

    return <Row left={list} right={personDetails} />;
  }
}
