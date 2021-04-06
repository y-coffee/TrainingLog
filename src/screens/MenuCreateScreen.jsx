import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput, KeyboardAvoidingView, Alert, ScrollView,
} from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import { translateErrors } from '../utils';
import Calculator from '../components/Calculator';

export default function MenuCreateScreen(props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');

  function handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/menus`);
    ref.add({
      bodyText,
      updatedAt: new Date(),
    })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      });
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="absolute">
      <View style={styles.bgmBox}>
        <Calculator />
      </View>
      <View style={styles.inputContainer}>
        <ScrollView>
          <TextInput
            value={bodyText}
            multiline
            style={styles.input}
            onChangeText={(text) => { setBodyText(text); }}
            autoFocus
          />
        </ScrollView>
      </View>
      <CircleButton
        name="check"
        onPress={handlePress}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    // paddingVertical: 32,
    // paddingHorizontal: 27,
    flex: 1.9,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 27,
  },
  bgmBox: {
    flex: 1.1,
    position: 'relative',
    marginTop: 0,
    // backgroundColor: 'blue',
    backgroundColor: '#202020',
    // paddingBottom: 20,
  },
});
