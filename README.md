アプリ名
====

今日のトレメニュー

概要
===

![app-firstview](https://user-images.githubusercontent.com/68333078/111040671-7abb4500-8477-11eb-9699-f65c6b858037.png)

Androidに対応したログイン認証付きCRUDネイティブアプリです。

自身の趣味の1つにトレーニングがあり、その際に感じていた不便を解決する目的から「少ない荷物でジムに向かい筋トレができる」というコンセプトのもとReact Nativeで制作しました。ユーザは他のユーザーのデータを編集することも削除することもできません。

## テストユーザー情報

テストユーザーメールアドレス: tlog-tester@example.com

テストユーザーパスワード: tester8888

アプリURL
===

Google Playのアプリページはこちらから: [リンク](https://play.google.com/store/apps/details?id=jp.AppCreate.TrainingLog)

※ログインページでは、上記のテストユーザー情報を入力して下さい。

使用技術一覧(言語・ライブラリ・ツール)
===

・React Native 4.13.1

・React.js 16.13.1

・React Navigation 5.9.2

・Prop Types 15.7.2

・date-fns 2.16.1

・lodash 4.17.20

・Expo 40.0.0

・Android Studio 4.1.2

・Firebase 8.2.4

・Figma(デザインカンプ)

機能一覧
===

・ユーザー登録/ログイン認証機能(FirebaseのAuthenticationを利用)

・トレーニングメニュー管理機能(CRUD/SDKを活用した非同期処理/useStateを利用したデータ保持/useEffectを利用したデータ表示/FirebaseのFirestoreをデータベースに利用)

・計算機能(useStateを利用した数字や状態の管理)