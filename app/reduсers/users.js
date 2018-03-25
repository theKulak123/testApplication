import { ADD_USERS } from '../constants/actionTypes';

const initialState = { usersLists: {} };

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USERS: {
      let newUsersLists = {...state.usersLists};
      const login = action.payload.login;
      if(!newUsersLists[login]) {
        newUsersLists[login] = [ ...action.payload.data ];
      } else {
        newUsersLists[login] = [ ...newUsersLists[login], ...action.payload.data ];
      }
      return { usersLists: newUsersLists };
    }
    default:
      return state;
  }
}
