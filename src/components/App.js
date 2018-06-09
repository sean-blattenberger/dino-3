import React, { Component } from "react";
import "../App.css";
import JobDetails from "./JobDetails";
import JobForm from "./JobForm";
import Preview from "./Preview";
import Header from "./Header"
import Footer from "./Footer"


class App extends Component {
  state = {
    listing: [],
    success: "",
    preview: ""
  };
  componentDidMount() {
    this.fetchListings();
  }
  fetchListings() {
    return fetch("./listing.json")
      .then(res => res.json())
      .then(data => {
        this.setState({ listing: data });
        return data;
      });
  }
  submitForm = () => {
    let successMessage = "Your application was submitted!";
    this.setState({success: successMessage, preview: ''})
  }

  updatePreview = (value) => {
    this.setState({ preview: value})
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <JobDetails listing={this.state.listing} />
          <JobForm updatePreview={this.updatePreview} submitForm={this.submitForm} />
          <p id="message">{this.state.success}</p>
          <Preview preview={this.state.preview} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
