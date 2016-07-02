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
  View
} from 'react-native';

class gitbookTestUI extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: '#FFAAAA', flex: 1}}>
          <View style={{position: 'absolute', backgroundColor: '#FFFFFF', right: 30, bottom: 30, height: 30, width: 30}}></View>
        </View>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={{backgroundColor: '#FFAA00', flex: 1}}>
            <View style={{position: 'absolute', backgroundColor: '#FFFFFF', right: 30, bottom: 30, height: 30, width: 30}}></View>
          </View>
          <View style={{backgroundColor: '#00AAAA', flex: 1}}></View>
        </View>
        <View style={{backgroundColor: '#FF00AA', flex: 1}}>
          <View style={{position: 'absolute', backgroundColor: '#FFFFFF', right: 30, bottom: 30, height: 30, width: 30}}></View>
        </View>
        <View style={{position: 'absolute', backgroundColor: '#AAAAAA', right: 40, bottom: 40, height: 30, width: 30}}></View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('gitbookTestUI', () => gitbookTestUI);
