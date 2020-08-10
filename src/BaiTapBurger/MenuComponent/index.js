import React, { Component } from "react";
import { connect } from "react-redux";
import * as BurgerAction from "../../redux/actions/BurgerAction";
class MenuComponent extends Component {
  renderMenu = () => {
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([list, price], index) => {
      return (
        <tr key={index}>
          <td>{list}</td>
          <td>
            <button
              className="btn btn-danger mr-2"
              onClick={() => {
                {
                  this.props.tangGiam(list, -1);
                }
              }}
            >
              -
            </button>
            {burger[list]}
            <button
              className="btn btn-success"
              onClick={() => {
                {
                  this.props.tangGiam(list, 1);
                }
              }}
            >
              +
            </button>
          </td>
          <td className="text-right">{price}</td>
          <td className="text-right">{burger[list] * price}</td>
        </tr>
      );
    });
  };
  render() {
    let { total } = this.props;
    return (
      <div>
        <h2>Chọn Thức Ăn</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Thức Ăn</th>
              <th></th>
              <th className="text-right">Giá</th>
              <th className="text-right">Tổng</th>
            </tr>
            {this.renderMenu()}
          </thead>
          <tbody>
            <tr className="text-right">
              <td></td>
              <td></td>
              <td>
                <b>Tổng Tiền : {total}</b> <br></br>
                <button className="btn btn-primary">Thanh Toán</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    tangGiam: (propsBurger, tangGiam) => {
      dispatch(BurgerAction.tangGiamActions(propsBurger, tangGiam));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
