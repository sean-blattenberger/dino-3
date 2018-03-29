import React, { Component } from "react";
import "../App.css";
import JobDetails from "./JobDetails";
import JobForm from "./JobForm";
import Preview from "./Preview";

const Header = () => {
  return (
    <header>
      <img src="./assets/g-dino.png" alt="Dinosaur Logo" />
    </header>
  );
};
const Footer = () => {
  return (
    <footer>
      <small>&copy; 2018</small>
    </footer>
  );
};
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
