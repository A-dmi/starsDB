import React from "react";
import { withRouter } from "react-router-dom";
import Row from "../row/row";
import { StarshipDetails, StarshipList } from "../sw-components";

const ShipPage = ({ history, match }) => {
  const { id } = match.params;

  return (
    <Row
      left={
        <StarshipList onShipSelected={id => history.push(`/starships/${id}`)} />
      }
      right={<StarshipDetails itemId={id} />}
    />
  );
};

export default withRouter(ShipPage);
