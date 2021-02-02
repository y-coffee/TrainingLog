import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';
import Loading from '../components/Loading';
import { translateErrors } from '../utils';

export default function LogInScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MenuList' }],
        });
      } else {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  function handlePress() {
    setLoading(true);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MenuList' }],
        });
      })
      .catch((error) => {
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      })
      .then(() => {
        setLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      <Loading isLoading={isLoading} />
      <View style={styles.inner}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <Button
          label="トレーニングスタート"
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>登録していませんか？</Text>
          <TouchableOpacity
            onPress={
              () => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'SignUp' }],
                });
              }
            }
          >
            <Text style={styles.footerLink}>≫利用登録</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.policyBox} onPress={() => { navigation.navigate('Policy'); }}>
          <Text style={styles.policy}>利用規約・プライバシーポリシー</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#808080',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#ffffff',
    paddingTop: 30,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#dddddd',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
    paddingLeft: 5,
  },
  footerText: {
    fontSize: 16,
    lineHeight: 24,
    marginRight: 8,
    color: '#ffffff',
  },
  footerLink: {
    fontSize: 16,
    lineHeight: 24,
    color: '#F0AC19',
    fontWeight: 'bold',
  },
  policyBox: {
    marginTop: 20,
    paddingLeft: 5,
  },
  policy: {
    fontSize: 16,
  },

});
