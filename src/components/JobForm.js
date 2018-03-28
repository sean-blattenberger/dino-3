import React from "react";

class JobForm extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.refs);
    this.props.submitForm();
    this.refs.form.reset();
  }
  render() {
    return (
      <form ref="form" id="application-input" onSubmit={this.onSubmit}>
        <label htmlFor="apply-here">Apply Here: </label>
        <textarea name="application" id="application-text" rows="8" cols="100" />
        <input id="submit" type="submit" value="Submit" />
      </form>
    );
  }
}
export default JobForm;
