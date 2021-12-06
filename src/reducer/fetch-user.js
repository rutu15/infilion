const INTIAL_STATE = {
  data: [],
  loading: false,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return { ...state, loading: true };
    case "FETCH_USER_SUCESS":
      console.log("helllooo");
      return { ...state, data: action.payload, loading: false };
    case "FETCH_USER_FAILURE":
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
};
