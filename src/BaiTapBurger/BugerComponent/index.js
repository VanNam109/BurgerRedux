import React, { Component } from "react";
import BaiTapBurgerStyle from "../style/BaiTapBurgerStyle.css";

import { connect } from "react-redux";

class BurgerComponent extends Component {
  renderBurger = () => {
    let { burger } = this.props;
    let content = [];
    for (let propBurger in burger) {
      let mangBurger = [];
      for (let i = 0; i < burger[propBurger]; i++) {
        mangBurger.push(<div key={i} className={propBurger}></div>);
      }
      content.push(mangBurger);
    }
    return content;
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Cửa hàng buger CyberSoft</h2>

        
        <div className="breadTop"></div>
        <div className="text-center">
          <button className="btn btn-light">Chọn Thức Ăn</button>
        </div>
        {this.renderBurger()}
        <div className="breadBottom"></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
  };
};

export default connect(mapStateToProps, null)(BurgerComponent);
