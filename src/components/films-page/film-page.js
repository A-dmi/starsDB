import React from "react";
import { withRouter } from "react-router-dom";

import { FilmList } from "../sw-components";

const FilmPage = ({ history }) => {
  return (
    <FilmList
      onFilmSelected={id => {
        history.push(`/film/${id}`);
      }}
    />
  );
};

export default withRouter(FilmPage);
