export const initialState = {
  basket: [
    {
      id: "123434",
      title: "This is the title",
      price: 11.78,
      rating: 5,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_DB_QC_186x116_1._SY116_CB433700928_.jpg",
    },
    {
      id: "123434",
      title: "This is the title",
      price: 11.78,
      rating: 5,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_DB_QC_186x116_1._SY116_CB433700928_.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // we clone the basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // item exists in basket remove it.....
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket.`
        );
      }

      // Logic for removing item from basket
      return { ...state, basket: newBasket };

    default:
      return state;
  }
}

export default reducer;
