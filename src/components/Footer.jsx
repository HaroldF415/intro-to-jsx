import React from "react";

const fullName = "Harold Fachin";
const date = new Date();

function Footer() {
  return (
    <div>
      <p>Created by {fullName}</p>
      <p>Copyright {date.getFullYear()}</p>
    </div>
  );
}

export default Footer;
