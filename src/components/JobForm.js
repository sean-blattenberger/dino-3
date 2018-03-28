import React from "react";

class JobForm extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.refs);
    this.props.submitForm();
    this.refs.form.reset();
  }
  livePreview = (event) => {
    this.props.updatePreview(event.target.value);
  }
  render() {
    return (
      <form ref="form" id="application-input" onSubmit={this.onSubmit}>
        <label htmlFor="apply-here">Apply Here: </label>
        <textarea onKeyUp={this.livePreview} name="application" id="application-text" rows="8" cols="100" />
        <input id="submit" type="submit" value="Submit" />
      </form>
    );
  }
}
export default JobForm;