const INTIAL_STATE = {
  data: [],
  loading: false,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return { ...state, data: action.payload, loading: true };
    default:
      return state;
  }
};
