import React, { Component } from "react";
import "../App.css";
import JobDetails from "./JobDetails";
import JobForm from "./JobForm";
// let success;
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
    success: ''
  }
  componentDidMount() {
    this.fetchListings()
  }
  fetchListings() {
    return fetch('./listing.json').then(res => res.json()).then(data => {
      this.setState({ listing: data });
      return data;
    })
  }
  submitForm() {
    // let successMessage = 'Your application has been submitted';
    // const listings = { ...this.state.listing };
    // listings['success'] = successMessage;
    // this.setState({ listings })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <JobDetails listing={this.state.listing} />
          <JobForm submitForm={this.submitForm}/>
          <p id="message">{''}</p>
          <button id="preview-toggle">Show Preview</button>
          <section id="application-preview" className="hidden" />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
