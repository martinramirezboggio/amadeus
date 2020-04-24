import React, {Component} from "react";
import classes from './Auth.module.css';
import {authControls, updateObject} from "./AuthUtils";
import Card from "../../components/UI/Card";

class Auth extends Component {
  state = {
    controls: authControls,
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(this.state.controls, {
      [controlName]: updateObject(this.state.controls[controlName], {
        value: event.target.value,
      })
    });

    this.setState({controls: updatedControls});
  };

  login = () => {
    this.props.history.push('/manager')
  }

  render() {
    const formElementsArray = [];

    for (let key in this.state.controls){
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    let form = formElementsArray.map(formElement => (
      <input key={formElement.id}
             className={classes.Input}
             placeholder={formElement.config.elementConfig.placeholder}
             type={formElement.config.elementType}
             value={formElement.config.value}
             onChange={(event) => this.inputChangedHandler(event,formElement.id)}
             autoComplete="off"
        />
    ));

    return(
      <div className={classes.Auth}>
          <Card>
            <form className={classes.FormInputs}>
              {form}
              <button className={classes.SubmitButton} onClick={()=>this.login()}>Submit</button>
            </form>
          </Card>
      </div>
    )
  }
}

export default Auth
