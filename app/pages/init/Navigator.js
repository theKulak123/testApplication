import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Users from '../Users';

export default StackNavigator({
  Users: { screen: Users },
}, {
  headerMode: 'screen',
});