import React, { Component } from 'react';
import { errorList } from "./ErrorManagerUtils";
import ErrorList from '../../components/ErrorList/ErrorList';
import classes from './ErrorManager.module.css';

class ErrorManager extends Component {
  state = {
    errorList: [],
    showErrorList:false
  }

  errorListToggle = () => {
    this.setState(prevState =>{
      return {
        showErrorList: !prevState.showErrorList,
        errorList: errorList
      }
    })
  }

  deleteError = (server) => {
    const newErrorsList = [...this.state.errorList];
      newErrorsList.map(errorList => {
      const newErrorList = [];
      errorList.errors.map(error => {
        if(error.server !== server){
          newErrorList.push(error)
        }
        return error
      })
      return errorList.errors = [...newErrorList]
    })
    this.setState({errorList: newErrorsList})
  }

  render() {
    const {showErrorList, errorList } = this.state;
    let content;
    if(showErrorList){
      content = <ErrorList errorList={errorList} deleteError={this.deleteError}/>
    }else{
      content = <p><b>Everything is OK!</b> Grab a beer and relax.</p>
    }

    return(
      <div className={classes.ErrorManager}>
        <button onClick={this.errorListToggle}>Show errors</button>
        {content}
      </div>
    );
  }
}

export default ErrorManager;
