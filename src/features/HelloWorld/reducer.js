const initState = {
  count: 0,
};


const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCRESMENT':
      console.log('Incressment action !!');
      return {
        ...state,
        count: state.count + 1,
      };

    case 'DECRESMENT':
      console.log('Decressment action !!');
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default reducer;