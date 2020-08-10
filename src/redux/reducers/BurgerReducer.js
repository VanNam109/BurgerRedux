import * as BurgerConstants from "../constants/BurgerConstants";
const burgerState = {
  burger: { salad: 1, cheese: 1, beef: 1 },
  menu: { salad: 10, cheese: 10, beef: 10 },
  total: 30,
};
export const BurgerReducer = (state = burgerState, action) => {
  console.log("action", action);
  switch (action.type) {
    case BurgerConstants.TANG_GIAM: {
      let { propsBurger, tangGiam } = action;
      //Thay doi so luong
      if (tangGiam === -1 && state.burger[propsBurger] < 1) {
        return { ...state };
      }
      let burgerUpdate = { ...state.burger };
      burgerUpdate[propsBurger] += tangGiam;
      state.burger = burgerUpdate;
      //Tinh tong tien
      state.total += tangGiam * state.menu[propsBurger];
      return { ...state };
    }
  }
  return { ...state };
};
