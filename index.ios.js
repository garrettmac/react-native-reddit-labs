/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,NativeModules
} from 'react-native';
import Share, {ShareSheet, Button} from 'react-native-share';

let shareOptions = {
   title: "React Native",
   message: "Hola mundo",
   url: "http://facebook.github.io/react-native/",
  //  social:"twitter",
  //  social:"generic",
   social:"redditlabs",
   subject: "Share Link" //  for email
 };
 // console.log(" NativeModules: ",NativeModules.RNShare.shareSingle(shareOptions));
 // NativeModules.RNShare.open(shareOptions,(e) => {
  //  console.log(" e: ",e);
  console.log(" Share: ",NativeModules.RNShare);
// Share.open(shareOptions).catch((err) => { err && console.log(err); })
Share.shareSingle(shareOptions)
               .catch((err) => { err && console.log(err); })
              //  });
export default class RedditLabs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RedditLabs', () => RedditLabs);
