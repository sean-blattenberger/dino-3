import React, { Component } from "react";
import "../App.css";
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
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <section id="job-details">
            <h2>Job Details</h2>
          </section>
          <form id="application-input">
            <label>Apply Here: </label>
            <textarea id="application-text" rows="8" cols="100" />
            <input id="submit" type="submit" value="Submit" />
          </form>
          <p id="message">&nbsp;</p>
          <button id="preview-toggle">Show Preview</button>
          <section id="application-preview" class="hidden" />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
