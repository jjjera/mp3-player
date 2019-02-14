import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Sound from 'react-native-sound';

export default class App extends Component {
   sound = new Sound('everything_changed.mp3');

   playSong = () => {
     this.sound.play();
   }
  render() {
    return (
      <TouchableOpacity onPress={this.playSong} style={styles.container}>
          <View>
              <Text>Start</Text>
          </View>
      </TouchableOpacity>
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
  }
});
