import React, { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';
import {
  View, Text, ScrollView, StyleSheet,
} from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import { dateToString } from '../utils';

export default function MenuDetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/menus`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        const data = doc.data();
        setMenu({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    } return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.menuHeader}>
        <Text style={styles.menuTitle} numberOfLines={1}>{menu && menu.bodyText}</Text>
        <Text style={styles.menuDate}>{menu && dateToString(menu.updatedAt)}</Text>
      </View>
      <ScrollView style={styles.menuBody}>
        <View style={styles.menuBodyInner}>
          <Text style={styles.menuText}>
            {menu && menu.bodyText}
          </Text>
        </View>
      </ScrollView>
      <CircleButton
        style={{ top: 60, buttom: 'auto' }}
        name="edit"
        onPress={() => { navigation.navigate('MenuEdit', { id: menu.id, bodyText: menu.bodyText }); }}
      />
    </View>
  );
}

MenuDetailScreen.propTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  menuHeader: {
    backgroundColor: '#F0AC19',
    height: 90,
    // height: 70,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  menuTitle: {
    color: '#ffffff',
    fontSize: 20,
    // fontSize: 15,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  menuDate: {
    color: '#ffffff',
    fontSize: 13,
    lineHeight: 16,
  },
  menuBody: {
    height: 150,
  },
  menuBodyInner: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 27,
  },
  menuText: {
    fontSize: 16,
    lineHeight: 24,
  },
  bgmBox: {
    flex: 1,
    position: 'relative',
    paddingTop: 3,
  },
});
