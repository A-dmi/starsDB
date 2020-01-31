import React, { Component } from "react";

import "./item-list.css";
import Spinner from "../spinner";

export default class ItemList extends Component {
  state = {
    list: null
  };

  componentDidMount() {
    const { getData } = this.props;
    console.log(getData);
    

    getData().then(peopleList => {
      this.setState({
        list: peopleList
      });
    });
  }

  renderItems(arr) {
    return arr.map((item) => {

      const {id} = item;

      const label = this.props.renderItem(item);

      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { list } = this.state;

    if (!list) {
      return (
        <ul className="item-list list-group">
          <Spinner />
        </ul>
      );
    }

    const items = this.renderItems(list);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
