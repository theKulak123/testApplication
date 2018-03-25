import axios from 'axios';
import {Alert} from 'react-native';
import { ADD_USERS } from '../constants/actionTypes';
import { ALL_USERS_URL, FOLLOWERS_URL, USERS_COUNT } from '../constants/constants';

export default (login, since) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const url = login ? FOLLOWERS_URL.replace('login', login) : ALL_USERS_URL;
      axios.get(url, {params: {since, per_page: USERS_COUNT}})
        .then(response => {
          resolve();
          dispatch({
            type: ADD_USERS,
            payload: {
              login,
              data: response.data,
            }
          });
        })
        .catch((error) => {
          reject();
          Alert.alert(`Can't upload users`);
        });

    });
  };
};
