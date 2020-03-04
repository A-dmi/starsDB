import React from "react";
import { SwapiServiceConsumer } from "../swapi-service-context";

const withSwapiService = (Wrapped, mapMethod) => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          const serviseProps = mapMethod(swapiService);
          return <Wrapped {...props} {...serviseProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
