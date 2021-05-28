export const addFriends = user => {
  return {
    type: "ADD_FRIENDS",
    name: user.name.first + " " + user.name.last
  };
};
export const delFriend = friend => {
  return {
    type: "DELETE_FRIENDS",
    name: friend
  };
};
