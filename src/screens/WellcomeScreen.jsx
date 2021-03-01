/* eslint-disable max-len */
import React from 'react';
import {
  Text, View, StyleSheet, Image,
} from 'react-native';
import Swiper from 'react-native-swiper';

import Button from '../components/Button';

const StartImage = require('../../assets/LogIn_slider.png');
const EditImage = require('../../assets/EditMenu_slider.png');
const CreateImage = require('../../assets/CreateMenu_slider.png');
const ReadImage = require('../../assets/MenuDetail_slider.png');
const EasyUseImage = require('../../assets/MenuList_slider.png');

export default function WellcomScreen(props) {
  const { navigation } = props;
  return (
    <Swiper
      showsButtons={false}
      loop={false}
      dotColor="#ffffff"
      dotStyle={{
        width: 28, height: 28, borderRadius: 14, marginBottom: 15,
      }}
      activeDotStyle={{
        width: 28, height: 28, borderRadius: 14, marginBottom: 15,
      }}
      activeDotColor="#4B4B4B"
    >
      <View style={styles.container}>
        <View style={styles.stepTitleBox}>
          <Text style={styles.stepTitle}>STEP1 利用登録 / ログイン</Text>
        </View>
        <View style={styles.imageBox}>
          <Image source={StartImage} style={styles.image} />
        </View>
        <View style={styles.stepDescriptionBox}>
          <Text style={styles.stepDescription}>初回利用時にメールアドレスとパスワードを用いて利用登録をします。</Text>
          <Text style={styles.stepDescription}>これらがユーザー情報となることで、あなたのトレーニングメニューは他のユーザーからは見ることも編集することもできないものになります。</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.stepTitleBox}>
          <Text style={styles.stepTitle}>STEP2 メニューの作成</Text>
        </View>
        <View style={styles.imageBox}>
          <Image source={CreateImage} style={styles.image} />
        </View>
        <View style={styles.stepDescriptionBox}>
          <Text style={styles.stepDescription}>利用登録を済ませログインをすると、トレーニングメニューの作成・編集・閲覧をすることができるようになります。</Text>
          <Text style={styles.stepDescription}>メニューの一覧画面に設置されている追加ボタンを押すことで、まずは作成画面へ移動してください。</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.stepTitleBox}>
          <Text style={styles.stepTitle}>STEP3 メニューの詳細</Text>
        </View>
        <View style={styles.imageBox}>
          <Image source={ReadImage} style={styles.image} />
        </View>
        <View style={styles.stepDescriptionBox}>
          <Text style={styles.stepDescription}>メニュー詳細画面は個別に用意されています。</Text>
          <Text style={styles.stepDescription}>一覧画面内にリストアップされたメニューの中から希望のメニューをタップすると、詳細画面に移動することができます。メニューの確認にはこの詳細画面を用います。</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.stepTitleBox}>
          <Text style={styles.stepTitle}>STEP4 メニューの編集と計算</Text>
        </View>
        <View style={styles.imageBox}>
          <Image source={EditImage} style={styles.image} />
        </View>
        <View style={styles.stepDescriptionBox}>
          <Text style={styles.stepDescription}>トレーニングメニューの閲覧と編集にペンやノートなどの筆記用具は一切必要ありません。</Text>
          <Text style={styles.stepDescription}>また、メニュー編集画面には電卓が用意されており、重量などの調節が簡単に行えるようになっています。</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.stepTitleBox}>
          <Text style={styles.stepTitle}>STEP5 シンプルな管理</Text>
        </View>
        <View style={styles.imageBox}>
          <Image source={EasyUseImage} style={styles.image} />
        </View>
        <View style={styles.stepDescriptionBox}>
          <Text style={styles.stepDescription}>作成した全てのトレーニングメニューはリストアップされており、一覧性があります。メニューの削除・作成・閲覧・編集が一覧画面からワンタッチで行うことができます。</Text>
        </View>
        <Button
          label="アプリを使う"
          style={styles.button}
          onPress={
            () => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'SignUp' }],
              });
            }
          }
        />
      </View>

    </Swiper>

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
    width: 250,
    height: 250,
  },
  image: {
    width: 250,
    height: 250,
  },
  stepTitleBox: {
    marginTop: 100,
  },
  stepTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 25,
  },
  stepDescriptionBox: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 0,
    paddingBottom: 50,
  },
  stepDescription: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 30,
  },
  button: {
    backgroundColor: '#4B4B4B',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 70,
    zIndex: 10,
  },
  buttonBox: {
    flex: 1,
    position: 'absolute',
    top: 150,
  },
  greetingBox: {
    flex: 1,
  },
  greeting: {
    color: '#ffffff',
  },

});
