/* eslint-disable max-len */
import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, Linking,
} from 'react-native';

export default function Policy() {
  return (
    <View style={styles.container}>
      <Text style={styles.policyTitle}>利用規約・プライバシーポリシー</Text>
      <ScrollView style={styles.bodyContainer}>
        <View style={styles.body}>
          <View style={styles.sectionBox}>
            <Text style={styles.sectionTitle}>1 はじめに</Text>
            <Text style={styles.article}>Android用アプリケーション「今日のトレメニュー」(以下「アプリ」)の各種サービスにおいて取り扱われるアプリ利用者(以下「利用者」)の個人情報もしくはそれに準ずる情報について、アプリが遵守する方針を以下に示します。また、本アプリのご利用によって、利用者は本規約に同意したものとみなされます。</Text>
          </View>
          <View style={styles.sectionBox}>
            <Text style={styles.sectionTitle}>2 収集する情報</Text>
            <View>
              <Text style={styles.article}>アプリのご利用に際して、以下の利用情報を取得致します。なお、将来見込まれるアップデートによって必要となる事についても併せて記載されています。</Text>
              <Text style={styles.subsectionTitle}>2.1 アプリケーションの利用状況の収集</Text>
              <Text style={styles.article}>当方が配信するアプリでは、広告配信のためにGoogle AdMobなど、利用状況の解析のためにGoogle Firebase Analyticsなどを使用する場合がございます。</Text>
              <Text style={styles.article}>広告配信のために広告IDは取得されますが、個人を特定するためなどには使用されません。</Text>
              <Text style={styles.article}>取得する情報、利用目的、第三者への提供などの詳細については、以下のプライバシーポリシーのリンクよりご確認ください。</Text>
              <Text style={styles.articleURL} onPress={() => Linking.openURL('https://policies.google.com/technologies/ads?hl=ja')}>・AdMob(Google Inc.)</Text>
              <Text style={styles.articleURL2} onPress={() => Linking.openURL('https://policies.google.com/privacy?hl=ja%EF%BB%BF')}>・Firebase Analytics(Google Inc.)</Text>
              <Text style={styles.articleURL2} onPress={() => Linking.openURL('https://policies.google.com/privacy?hl=ja%EF%BB%BF')}>・Google Analytics(Google Inc.)</Text>
              <Text style={styles.subsectionTitle}>2.2 アプリケーションに登録された連絡先やトレーニングメニューの内容</Text>
              <Text style={styles.article}>本アプリは利用者が設定するパスワードを用いたサインアップとログイン機能を持っています。これはアプリを利用するにあたって必要な情報です。また、アプリ内に保存された情報(データベース含む)は利用者に紐付けられます。ただし、アプリ内で削除した場合にはデータベースにもその内容は残りません。</Text>
              <Text style={styles.subsectionTitle}>2.3 お問い合わせやご意見を頂く際の個人情報の収集</Text>
              <Text style={styles.subsectionTitle2}>2.3.1 送信元のメールアドレス、端末を識別する情報。</Text>
              <Text style={styles.subsectionTitle2}>2.3.2 お問い合わせ内容。</Text>
            </View>
          </View>
          <View style={styles.sectionBox}>
            <Text style={styles.sectionTitle}>3 利用目的</Text>
            <Text style={styles.article}>当方は、2.2において収集した情報を、お問い合わせに対する返信のために利用致します。また、2.2において収集された情報は本アプリの品質向上のためにも利用されます。</Text>
          </View>
          <View style={styles.sectionBox}>
            <Text style={styles.sectionTitle}>4 個人情報の管理</Text>
            <Text style={styles.article}>当方は、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、安全対策を実施し個人情報の厳重な管理を行います。</Text>
          </View>
          <View style={styles.sectionBox}>
            <Text style={styles.sectionTitle}>5 個人情報の第三者への開示・提供の禁止</Text>
            <Text style={styles.article}>当方は、利用者の皆様からお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示致しません。</Text>
            <Text style={styles.article2}>・お客様の同意がある場合</Text>
            <Text style={styles.article3}>・法令に基づき開示することが必要である場合</Text>
          </View>
          <View style={styles.sectionBox}>
            <Text style={styles.sectionTitle}>6 法令、規範の遵守と見直し</Text>
            <Text style={styles.article}>当方は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。</Text>
          </View>
          <View style={styles.sectionBox}>
            <Text style={styles.sectionTitle}>7 免責事項</Text>
            <Text style={styles.article}>本アプリがユーザーの特定の目的に適合すること、期待する機能・商品的価値・正確性・有用性を有すること、および不具合が生じないことについて、何ら保障するものではありません。</Text>
            <Text style={styles.article}>当方の都合によりアプリの仕様を変更できます。当方は、本アプリの提供の終了、変更、また利用不能、本アプリの利用によるデータの紛失または機械の故障もしくは損傷、その他本アプリに関してユーザーが被った損害につき、賠償する責任を一切負わないものと致します。</Text>
          </View>
          <View style={styles.sectionBox}>
            <Text style={styles.sectionTitle}>8 著作権・知的財産権等</Text>
            <Text style={styles.article}>著作権その他一切の権利は、当方又は権利を有する第三者に帰属します。</Text>
          </View>
          <View style={styles.sectionBox}>
            <Text style={styles.sectionTitle}>9 お問い合わせ先</Text>
            <Text style={styles.article}>tremenu.today@gmail.com</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  policyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#F0AC19',
    color: '#ffffff',
  },
  bodyContainer: {
    flex: 1,
  },
  body: {
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    borderBottomWidth: 5,
    borderColor: '#F0AC19',
    lineHeight: 30,
  },
  sectionBox: {
    marginBottom: 30,
  },
  article: {
    fontSize: 15,
  },
  articleURL: {
    fontSize: 15,
    color: 'blue',
    marginTop: 15,
    marginBottom: 5,
  },
  articleURL2: {
    fontSize: 15,
    color: 'blue',
    marginTop: 8,
    marginBottom: 5,
  },
  article2: {
    fontSize: 15,
    marginTop: 15,
    marginBottom: 5,
  },
  article3: {
    fontSize: 15,
    marginTop: 8,
    marginBottom: 5,
  },
  subsectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  subsectionTitle2: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,

  },
});
