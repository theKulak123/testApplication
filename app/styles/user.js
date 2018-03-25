import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loader: {
    paddingVertical: 20,
  },
  listWrapper: {
    flex: 1,
    padding: 15,
  },
  userWrapper: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
    marginRight: 15,
  },
  login: {
    fontWeight: '600',
    fontSize: 22,
  },
  profileUrl: {
    fontSize: 18,
    textDecorationLine: 'underline',
    color: 'blue',
  },
  textWrapper: {
    flex: 1,
  }
});