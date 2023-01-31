import { useReducer } from "react";

const reducer = (state, action) => {
  if(action.type === "Plus") return {money: state.money + 10};
  if(action.type === "Minus") return {money: state.money - 10};
  if(action.type === "Tip") return {money: state.money + 5};
  return state;
};

const Menu = () => {
  const initialState = {money: 300};
  const [state, dispatch] = useReducer(reducer, initialState);
    return(
      <div className="text-center page-height">
        <h1>Menu Page</h1>
      </div>
    )
  };
  export default Menu;