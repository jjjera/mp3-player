import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Sound from 'react-native-sound';
// import {audioconcat} from 'audioconcat';

export default class App extends Component {

   sound = new Sound('everything_changed.mp3');

   playSong = () => {
     this.sound.play();
   }
   pauseSong = () => {
     this.sound.pause();
   }

   // componentDidMount(){
   //   this.hello = new Sound('whoosh.mp3', Sound.MAIN_BUNDLE, (error) => {
   //     if (error) {
   //       console.log('failed to load the sound', error);
   //       return;
   //     }
   //   });
   // }
   //
   //
   // handlePress() {
   //   this.hello.play((success) => {
   //     if (!success) {
   //       console.log('Sound did not play')
   //     }
   //   })
   // }
  render() {
    return (
      // <TouchableOpacity onPress={this.playSong} style={styles.container}>
          <View style={styles.container}>
              <Button onPress={this.playSong} title='Start' />
              <Button onPress={this.pauseSong} title='Pause' />
          </View>
      // </TouchableOpacity>
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
