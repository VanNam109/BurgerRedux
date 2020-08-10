import React, { Component } from "react";
import BugerComponent from "./BugerComponent";
import MenuComponent from "./MenuComponent";

export default class BaiTapBuger extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-7">
            <BugerComponent />
          </div>
          <div className="col-5">
            <MenuComponent />
          </div>
        </div>
      </div>
    );
  }
}
