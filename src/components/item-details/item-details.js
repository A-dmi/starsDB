import React, { useState, useEffect } from "react";

import "./person-details.css";
import Spinner from "../spinner";

const Record = ({ itemData, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{itemData[field]}</span>
    </li>
  );
};

export { Record };

const ItemDetails = props => {
  const { itemId, getData, getImage } = props;
  const [item, setItem] = useState({
    itemData: null,
    image: null
  });
  const [loadedItem, setLoadedItem] = useState(null);

  useEffect(() => {
    if (itemId) {
      updatePerson();
    }
  }, [itemId]);

  const updatePerson = () => {
    if (!itemId) {
      return;
    }

    setLoadedItem(true);

    getData(itemId).then(item => {
      setItem({
        itemData: item,
        image: getImage(item)
      });
      setLoadedItem(false);
    });
  };

  const { itemData } = item;

  if (loadedItem) {
    return <Spinner />;
  }

  if (!itemData) {
    return <span>select item</span>;
  }

  const { name } = itemData;

  return (
    <div className="person-details card">
      <img className="person-image" src={item.image} alt="no img" />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {/* <li>ihihih</li> */}
          {React.Children.map(props.children, child => {
            return React.cloneElement(child, { itemData });
          })}
        </ul>
      </div>
    </div>
  );
};

export default ItemDetails;
