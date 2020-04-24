import React from "react";
import classes from './Error.module.css';

const error = props => (
  <div className={classes.Error}>
    <div>
      <h4>{props.server}</h4>
      <p>{props.errorMessage}</p>
    </div>
    <div className={classes.deleteButton} onClick={() => props.deleteError(props.server)}>
      <i className="fa fa-trash"/>
    </div>
  </div>
);

export default error;
