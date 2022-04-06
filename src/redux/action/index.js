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

// case "ADDITEM":
//       //check if product already exists
//       const exist = state.find((x) => x.id === product.id);
//       if (exist) {
//         // increasing the quantity
//         return state.map((x) =>
//           x.id === product.id ? { ...x, qty: x.qty+1 } : x
//         );
//       } else {
//         const product = action.payload;
//         return [
//           ...state,
//           {
//             ...product,
//             gty: 1,
//           },
//         ];
//       }
//       break;

//     case "DELITEM":
//       const exist1 = state.find((x) => x.id === product.id);
//       if (exist1.qty === 1) {
//         return state.filter((x) => x.id !== exist1.id);
//       } else {
//         return state.map((x) =>
//           x.id === product.id ? { ...x, qty: x.qty-1 } : x
//         );
//       }
//       break;