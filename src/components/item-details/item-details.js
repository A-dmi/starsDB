import React, { Component } from "react";

import "./person-details.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import { render } from "@testing-library/react";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    image: null,
    loadedPerson: null
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loadedPerson: true });
      this.updatePerson();
    }
  }

  updatePerson() {
    const { itemId, getData, getImage } = this.props;
    if (!itemId) {
      return;
    }
    this.setState({ loadedPerson: true });

    getData(itemId).then(item => {
      this.setState({
        person: item,
        image: getImage(item),
        loadedPerson: false
      });
    });
  }

  render() {
    if (!this.state.person) {
      return <span>select person</span>;
    }

    const { person, loadedPerson, image } = this.state;
    const { id, name, gender, birthYear, eyeColor } = person;
    const item = person;

    if (loadedPerson) {
      return <Spinner />;
    }

    return (
      <div className="person-details card">
        <img className="person-image" src={image} alt="no img" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    );
  }
}
