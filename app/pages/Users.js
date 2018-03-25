import React, { Component } from 'react';
import getUsers from '../actions/getUsers';
import { connect } from 'react-redux';
import { FlatList, View, ActivityIndicator } from 'react-native';
import styles from '../styles/user';
import User from '../components/User';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.login = (this.props.navigation.state.params && this.props.navigation.state.params.login) ?
      this.props.navigation.state.params.login : null;
    this.state = {
      loading: false,
    };
  }
  static navigationOptions = ({navigation}) => ({
    title: (navigation.state.params && navigation.state.params.login) ?
      `${navigation.state.params.login}'s followers` : 'All users',
 })
  renderFooter = () => {
    if(!this.state.loading) return null;
    return (
      <View style={styles.loader} >
        <ActivityIndicator size="large" />
      </View>
    );
  };
  addNew = () => {
    if(!this.state.loading) {
      this.setState({loading: true});
      const users = this.props.usersLists[this.login] || [];
      this.props.getUsers(this.login, users.length).then(
        () => this.setState({loading: false})
      ).catch(
        () => this.setState({loading: false})
      );
    }
  }

  render() {
    const users = this.props.usersLists[this.login] || [];
    return(
      <FlatList
        style={styles.listWrapper}
        data={users}
        keyExtractor={(item, index) => index+''}
        renderItem={({item}) =>
          <User
            login={item.login}
            img={item.avatar_url}
            followersUrl={item.followers_url}
            profileUrl={item.url}
            navigation={this.props.navigation}
          />}
        ListFooterComponent={this.renderFooter}
        onEndReached={this.addNew}
      />

    );
  }
}

function mapStateToProps(state) {
  return {
    usersLists : state.users.usersLists,
  }
}

export default connect(mapStateToProps, { getUsers })(UsersList);
