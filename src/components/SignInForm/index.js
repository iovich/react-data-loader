import React, { Component } from "react";
import styles from "./SignInForm.module.css";
import classNames from "classnames";

const initialState = {
  email: '',
  password: '',
  emailIsValid: true,
  passwordIsValid: true
}

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState }
  }

  createInputClass = (name) => {
    return classNames(
      styles.input,
      { [styles.invalid]: !this.state[`${name}IsValid`] }
    )
  }

  lowerCase = () => {
    this.setState(
      {
        email: this.state.email.toLowerCase(),
        password: this.state.password.toLowerCase()
      }
    )
  }

  handlerInput = ({ target: { name, value } }) => {
    const isValid = !value.includes(' ')
    this.setState(
      {
        [name]: value,
        [`${name}IsValid`]: isValid
      }
    );
  }

  handlerForm = (event) => {
    event.preventDefault();
    // event.target.reset();
    this.setState({ ...initialState })
  }
  render() {
    return (
      <>
        <form className={styles.form} onSubmit={this.handlerForm}>
          <input
            className={this.createInputClass('email')}
            name="email"
            type="text"
            onChange={this.handlerInput}
            value={this.state.email}
          />
          <input
            className={this.createInputClass('password')}
            name="password"
            type="password"
            onChange={this.handlerInput}
            value={this.state.password}
          />
          <input
            className={styles.input}
            type="submit"
            value="send"
          />
          <button
            type="button"
            className={styles.input}
            onClick={this.lowerCase}
          >
            lower
          </button>


        </form>
      </>
    );
  }
}

export default SignInForm;
