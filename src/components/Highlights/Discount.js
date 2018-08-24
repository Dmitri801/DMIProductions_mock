import React, { Component } from "react";
import AButton from "../UI/AButton";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    const { discountStart, discountEnd } = this.state;
    if (discountStart < discountEnd) {
      this.setState(prevState => ({
        discountStart: prevState.discountStart + 1
      }));
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    const { discountStart } = this.state;
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_porcentage">
              <span>{discountStart}%</span>
              <span>Off</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase Tickets For the Beat Drop Before September 5th</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                corrupti, consequatur reprehenderit facilis quo delectus? A
                reprehenderit maiores porro dolores?
              </p>
              <AButton
                text="Purchase Tickets"
                bck="#61892f"
                href="https://facebook.com"
                color="#fff"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
