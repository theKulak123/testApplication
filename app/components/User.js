import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from '../styles/user';

export default class User extends Component {
  render() {
    return(
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Users', { login: this.props.login })}
        style={styles.userWrapper}
      >
        <Image source={{uri: this.props.img}} style={styles.image} />
        <View style={styles.textWrapper}>
          <Text style={styles.login}>{this.props.login}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(this.props.profileUrl)}>
            <Text style={styles.profileUrl}>{this.props.profileUrl}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }
}
