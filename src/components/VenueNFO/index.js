import React from "react";
import Zoom from "react-reveal/Zoom";
import icon_calander from "../../assets/img/icons/calendar.png";
import location from "../../assets/img/icons/location.png";
const VenueNFO = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_primaryGreen" />
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_calander})`
                    }}
                  />
                  <div className="vn_title">New Beat Date & Time</div>
                  <div className="vn_desc">October 1st, 2018 @ 10:00PM</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_primaryGreen" />
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${location})`
                    }}
                  />
                  <div className="vn_title">Location</div>
                  <div className="vn_desc">
                    12408 W Saltair Dr, Magna, UT 84044
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueNFO;
