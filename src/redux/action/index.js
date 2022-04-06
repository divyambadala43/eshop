// ADD ITEM TO CART
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// DELETE ITEM FROM CART
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

