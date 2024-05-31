import React from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";

const Checkbox = ({ input, meta: { touched, error } }) => (
  <div style={{ border: touched && error ? "1px solid red" : "none" }}>
    <input type="checkbox" {...input} />
    <label>Terms and conditions</label>
  </div>
)

const AgreementForm = ({ handleSubmit, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Field
      name="termsAndConditions"
      component={Checkbox}
    />
    <div>
      <button type="submit">Submit</button>
    </div>

    <div id="message"></div>
  </form>
)

const onSubmit = values => {
  if (!values.termsAndConditions) {
    throw new SubmissionError({ 
      termsAndConditions: 'Field required' 
    })
  }

  console.log('Form submitted')

  const messageElement = document.getElementById('message');
  messageElement.innerText = 'Form submitted!!!! reload 1s...'; 

  setTimeout(() => {
    location.reload();
  }, 1000);
}

export default reduxForm({
  form: "simple",
  onSubmit
})(AgreementForm);
