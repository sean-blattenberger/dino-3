import React from "react";

class Preview extends React.Component {
  showPreview(event) {
    const preview = document.querySelector("#application-preview");
    preview.classList.toggle("hidden");
  }
  render() {
    return (
      <div className="prev">
        <button onClick={this.showPreview} id="preview-toggle">
          Show Preview
        </button>
        <section id="application-preview" className="hidden">
          {this.props.preview}
        </section>
      </div>
    );
  }
}

export default Preview;
