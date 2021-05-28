const State = {
  friends: []
};

export default function rootReducer(state = State, action) {
  if (action.type === "ADD_FRIENDS") {
    const i = state.friends.some(() => state.friends.indexOf(action.name) > -1);
    if (!i)
      return {
        ...state,
        friends: [...state.friends, action.name]
      };
  }
  if (action.type === "DELETE_FRIENDS") {
    return {
      ...state,
      friends: state.friends.filter(friends => friends !== action.name)
    };
  }
  return state;
}
