const INTIAL_STATE = {
  deleteUser: [],
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return { ...state, deleteUser: action.payload };
    default:
      return state;
  }
};
