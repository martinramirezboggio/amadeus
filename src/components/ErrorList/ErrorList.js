import React from "react";
import Errors from './Errors/Errors';
import classes from './ErrorList.module.css';
import Card from "../UI/Card";

const errorList = props => {

  const errorList = props.errorList;

  const openErrorDetail = id => {
    const errorDetailList = document.getElementById(id);
    const errorDetailDisplay = errorDetailList.style.display;
    errorDetailDisplay === 'none' ? errorDetailList.style.display = 'block' : errorDetailList.style.display = 'none';
  }

  return (
    <div className={classes.ErrorsWrapper}>
        {errorList && errorList.map( error =>
          error.errors.length >= 1  &&
          <Card key={error.errorType}>
            <div className={classes.ErrorContent}>
              <header onClick={() => openErrorDetail(error.errorType)} className={classes.Header}>
                <div className={classes.ErrorTitle}>
                  <h1>{error.errorType}</h1>
                  <p className={classes.ErrorMessage}>This can be an error description.</p>
                </div>
                <span className={classes.Separator}/>
                <div className={classes.ErrorCount}>
                  <span className={classes.ErrorNumber}>{error.errors.length}</span>
                </div>
              </header>
              <Errors id={error.errorType} errors={error.errors} errorDisplay={'none'} deleteError={props.deleteError}/>
            </div>
          </Card>
        )}
    </div>
  )
}

export default errorList;
