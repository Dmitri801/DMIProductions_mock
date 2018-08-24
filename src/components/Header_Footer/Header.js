import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SideDrawer from "./SideDrawer";
class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: false
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  toggleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  };

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true
      });
    } else {
      this.setState({
        headerShow: false
      });
    }
  };

  render() {
    const { headerShow } = this.state;
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: headerShow ? "#222629" : "transparent",
          boxShadow: !headerShow ? "none" : "",
          padding: "10px 0px"
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">
              DMI Productions
            </div>
            <div className="header_logo_title">Hip Hop Beats</div>
          </div>

          <IconButton>
            <MenuIcon
              aria-label="Menu"
              color="white"
              onClick={() => this.toggleDrawer(true)}
              style={{ color: "#86c232" }}
            />
          </IconButton>
          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
