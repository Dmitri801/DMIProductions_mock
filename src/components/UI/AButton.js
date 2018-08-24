import React from "react";
import Button from "@material-ui/core/Button";
import ticketIcon from "../../assets/img/icons/ticket.png";
const AButton = ({ bck, text, href, color }) => {
  return (
    <Button
      href={href}
      variant="contained"
      size="small"
      style={{
        background: bck,
        color: color
      }}
    >
      <img src={ticketIcon} className="iconImage" alt="iconBtn" />
      {text}
    </Button>
  );
};

export default AButton;
