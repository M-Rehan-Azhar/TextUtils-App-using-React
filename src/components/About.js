import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
let myStyle={
  color: props.mode==='dark'?'white':'black',
  backgroundColor: props.mode==='dark'?'#13466e':'white'
}

  return (
    <div className="container" style={myStyle}>
      <h2 className="my-2">About TextUtils</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Features
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            style={myStyle}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils</strong> offers a wide array of text manipulation features that simplify your workflow and enhance productivity. Whether you need to change the case of text, remove unnecessary spaces, count words, or transform your text for specific requirements, TextUtils is your go-to solution.
              <ul>
                <li>Convert text to uppercase, lowercase, or capitalize each word.</li>
                <li>Remove extra spaces to tidy up messy text input.</li>
                <li>Instant word and character count for your content.</li>
                <li>Copy text directly from the app to your clipboard.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Purpose
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              <strong>TextUtils</strong> is designed to provide a quick and easy way to manipulate text for various needs. Whether you're writing an article, preparing a report, or simply editing text for personal projects, TextUtils ensures that your text is precisely how you want it.
              <p>
                Our application caters to writers, students, professionals, and developers alike. With a straightforward interface and powerful features, TextUtils empowers users to efficiently manage and edit text without the need for complex software.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Benefits
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Using TextUtils</strong> brings numerous advantages:
              <ul>
                <li><strong>Time-Saving:</strong> Quickly format and edit text without manual effort.</li>
                <li><strong>User-Friendly:</strong> Intuitive design makes it accessible to users of all skill levels.</li>
                <li><strong>Versatile:</strong> Suitable for a wide range of text processing tasks.</li>
                <li><strong>Efficiency:</strong> Streamlined text operations improve overall productivity.</li>
              </ul>
              <p>
                By utilizing TextUtils, you can ensure that your text is clean, accurate, and ready for whatever task lies ahead. Enhance your text editing experience with our feature-rich and convenient application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
