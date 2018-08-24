import React, { Component } from "react";
import AButton from "../UI/AButton";
import Zoom from "react-reveal/Zoom";
class Pricing extends Component {
  state = {
    prices: [100, 150, 280],
    position: ["Balcony", "Medium", "Star"],
    description: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque delectus neque laudantium asperiores culpa. Incidunt quis itaque accusamus ea tempora!",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa corporis numquam id consequuntur nam odit voluptatem laudantium minima, illum sit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vel harum iusto adipisci cum non, laudantium voluptas amet quam delectus."
    ],
    linkTo: [
      "https://facebook.com",
      "https://github.com",
      "https://linkedin.com"
    ],
    delay: [500, 0, 500]
  };

  showBoxes = () => {
    return this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.position[i]}</span>
            </div>
            <div className="pricing_description">{this.state.description}</div>
            <div className="pricing_buttons">
              <AButton
                text="Purchase"
                bck="#61892f"
                href={this.state.linkTo[i]}
                color="#fff"
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  };
  render() {
    return (
      <div className="bck_black ">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
