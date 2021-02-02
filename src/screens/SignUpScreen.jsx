import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Alert,
} from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';
import Loading from '../components/Loading';
import { translateErrors } from '../utils';

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  function handlePress() {
    setLoading(true);
    firebase.auth().createUserWithEmailAndPassword(email, password)
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
      <KeyboardAvoidingView style={styles.inner}>
        <Text style={styles.title}>サインアップ</Text>
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
          label="利用規約に同意して登録"
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>既に登録済みですか?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'LogIn' }],
              });
            }}
          >
            <Text style={styles.footerLink}>≫ログイン</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.policyBox} onPress={() => { navigation.navigate('Policy'); }}>
          <Text style={styles.policy}>利用規約・プライバシーポリシー</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f0f4f8',
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
