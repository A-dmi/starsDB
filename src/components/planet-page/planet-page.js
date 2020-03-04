import React from "react";
import Row from "../row/row";
import { PlanetDetails, PlanetList } from "../sw-components";
import { withRouter } from "react-router-dom";

const PlanetPage = ({ history, match }) => {
  const { id } = match.params;

  return (
    <Row
      left={
        <PlanetList onPlanetSelected={id => history.push(`planets/${id}`)} />
      }
      right={<PlanetDetails itemId={id} />}
    />
  );
};

export default withRouter(PlanetPage);
