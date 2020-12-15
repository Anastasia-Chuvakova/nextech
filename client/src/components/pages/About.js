import React, { Component } from "react";
import ar from "../../assets/images/ar.png";

class About extends Component {
  render() {
    return (
      <div>
        <h2>Virtual Experience Platform (VXP)</h2>
        <p>
          The NexTech AR Virtual Experience Platform (VXP) portfolio meets
          diversity of customers' needs from low touch/ self-service to
          high touch/customizable virtual and hybrid experiences. 
        </p>

        <p>
          VXP Solution in this presentation provides customers with highly
          customizable, white-glove virtual experiences, like virtual events,
          virtual tradeshows, virtual education, and many others.  .
        </p>
        <p>
          NexTech is the only company that can provide a true end-to-end
          solution with Augmented Reality and a Virtual Experience Platform from
          one vendor.
        </p>
        <a className="navbar-logo w-5 p-3" href="#">
          <img src={ar} alt="image" />
        </a>
      </div>
    );
  }
}

export default About;
