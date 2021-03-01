import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput, KeyboardAvoidingView, Alert, ScrollView,
} from 'react-native';
import { shape, string } from 'prop-types';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import { translateErrors } from '../utils';
import Calculator from '../components/Calculator';

export default function MenuEditScreen(props) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [body, setBody] = useState(bodyText);

  function handlePress() {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/menus`).doc(id);
      ref.set({
        bodyText: body,
        updatedAt: new Date(),
      }, { merge: true })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          const errorMsg = translateErrors(error.code);
          Alert.alert(errorMsg.title, errorMsg.description);
        });
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="absolute">
      <View style={styles.bgmBox}>
        <Calculator />
      </View>
      <View style={styles.inputContainer}>
        <ScrollView>
          <TextInput
            value={body}
            multiline
            style={styles.input}
            onChangeText={(text) => { setBody(text); }}
          />
        </ScrollView>
      </View>
      <CircleButton
        name="check"
        onPress={handlePress}
        style={{ bottom: 30 }}
      />
    </KeyboardAvoidingView>
  );
}

MenuEditScreen.propTypes = {
  route: shape({
    params: shape({ id: string, bodyText: string }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',

  },
  inputContainer: {
    flex: 1.9,
    // backgroundColor: 'red',
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
