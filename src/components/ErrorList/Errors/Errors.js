import React from "react";
import Error from './Error/Error';
import classes from './Errors.module.css';

const errors = props => {
  const {errors,errorDisplay, id} = props;

  return (
    <div id={id} style={{display:`${errorDisplay}`} } className={classes.Errors}>
      {
        errors.map(error =>
          <Error key={error.server} server={error.server} errorMessage={error.errorMessage} deleteError={props.deleteError}/>
        )
      }
    </div>
  )
};

export default errors;
