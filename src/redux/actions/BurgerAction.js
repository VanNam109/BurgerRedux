import * as BurgerConstants from "../constants/BurgerConstants";

export function tangGiamActions(propsBurger, tangGiam) {
  return {
    type: BurgerConstants.TANG_GIAM,
    propsBurger,
    tangGiam: tangGiam,
  };
}
