import * as t from "@store/constants/auth";

const AuthReducer = (
  state = {
    isLoggined: false,
  },
  action
) => {
  switch (action.type) {
    case t.AUTH_STATE:
      return {
        ...state,
        isLoggined: action.payload,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
