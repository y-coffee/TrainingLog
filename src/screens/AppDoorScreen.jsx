import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';

import Button from '../components/Button';

const IconImage = require('../../assets/Icon_adaprive_foreground.png');

export default function AppDoorScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={IconImage} style={styles.image} />
        <Text style={styles.appName}>今日のトレメニュー</Text>
      </View>
      <View style={styles.greetingBox}>
        <Text style={styles.greeting}>ウォームアップはしましたか？</Text>
      </View>
      <Button
        label="チュートリアル"
        style={styles.button0}
        onPress={
          () => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Wellcome' }],
            });
          }
        }
      />
      <Button
        label="ログイン / 利用登録"
        style={styles.button1}
        onPress={
          () => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'LogIn' }],
            });
          }
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0AC19',
  },
  imageBox: {
    flex: 1,
    width: 300,
    height: 300,
    marginTop: 30,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  appName: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  greetingBox: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginBottom: 180,
  },
  greeting: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  button0: {
    backgroundColor: '#4B4B4B',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 160,
    zIndex: 10,
    width: 210,
    alignItems: 'center',

  },
  button1: {
    backgroundColor: '#4B4B4B',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 60,
    zIndex: 10,
    width: 210,
    alignItems: 'center',
  },
});
