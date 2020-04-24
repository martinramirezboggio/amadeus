export const authControls = {
    email: {
      elementType: 'email',
      elementConfig: {
        placeholder: 'Enter your email'
      },
      value: ''
    },
    password: {
      elementType: 'password',
      elementConfig: {
        placeholder: 'Enter your password'
      },
      value: ''
    },
}

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
};
