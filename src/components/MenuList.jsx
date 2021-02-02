import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert, FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  shape, string, instanceOf, arrayOf,
} from 'prop-types';
import firebase from 'firebase';

import { dateToString } from '../utils';

export default function MenuList(props) {
  const { menus } = props;
  const navigation = useNavigation();

  function deleteMenu(id) {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/menus`).doc(id);
      Alert.alert('メニューを削除します。', 'よろしいですか？', [
        {
          text: 'キャンセル',
          onPress: () => {},
        },
        {
          text: '削除する。',
          onPress: () => {
            ref.delete().catch(() => {
              Alert.alert('削除に失敗しました。');
            });
          },
        },
      ]);
    }
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.menuListItem}
        onPress={() => { navigation.navigate('MenuDetail', { id: item.id }); }}
        activeOpacity={0.9}
      >
        <View style={styles.menuInner}>
          <Text style={styles.menuListItemTitle} numberOfLines={1}>{item.bodyText}</Text>
          <Text style={styles.menuListItemDate}>{dateToString(item.updatedAt)}</Text>
        </View>
        <TouchableOpacity
          onPress={() => { deleteMenu(item.id); }}
          style={styles.menuDelete}
        >
          <Feather name="x" size={24} color="#808080" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (

    <View style={styles.container}>
      <FlatList
        data={menus}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>

  );
}

MenuList.propTypes = {
  menus: arrayOf(shape({
    id: string,
    bodyText: string,
    updatedAt: instanceOf(Date),
  })).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  menuInner: {
    flex: 1,
  },
  menuListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  menuListItemDate: {
    fontSize: 12,
    lineHeight: 32,
    color: '#848484',
  },
  menuDelete: {
    padding: 8,
  },
});
