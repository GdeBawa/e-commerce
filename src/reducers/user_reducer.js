const user_reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return { ...state, loading: false };
    case "USER_LOGIN_SUCCESS":
      const newState = {
        ...state,
        userId: action.payload.userId,
        token: action.payload.jwtToken,
        loading: false,
        error: "",
      };

      localStorage.setItem("userInfo", JSON.stringify(newState));

      return newState;
    case "USER_LOGIN_FAIL":
      return { ...state, loading: false, error: action.payload };

    case "USER_LOGOUT":
      // hapus userInfo dari local storage dan reset kondisinya
      localStorage.removeItem("userInfo");
      return { ...state, userId: null, token: null };

    case "USER_REGISTER_REQUEST":
      return { ...state, loading: true };
    case "USER_REGISTER_SUCCESS":
      // handle registration success apabila diperlukan
      return { ...state, loading: false };

    case "USER_REGISTER_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default user_reducer;
