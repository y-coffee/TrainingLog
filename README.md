Name
====

今日のトレメニュー

## Description

![app-firstview](https://user-images.githubusercontent.com/68333078/111040671-7abb4500-8477-11eb-9699-f65c6b858037.png)

Android対応のCRUDネイティブアプリです。React Nativeで制作しました。

自身の趣味の1つにトレーニングがあり、その際に感じていた不便を解決する目的からコンセプトを考えました。コンセプトは「少ない荷物でジムに向かい筋トレができる」です。

このアプリでは、トレーニングメニューを作成・編集・閲覧・削除することができるためノートや筆記用具を持参する必要がなくなります。加えて、トレーニング中にバーベルやダンベルの挙上重量の計算が必要になった場合に便利は電卓機能がメニュー編集画面に実装されています。

ユーザー認証機能やデータの保存を行うためのバックエンドはFirebaseで、それぞれAuthenticationとFirestoreを利用しています。ユーザは他のユーザーのデータを編集することも削除することもできません。

状態管理にはReact HooksのuseStateとuseEffectを活用しています。

制作中のクライアントサイドでのチェックにはExpo、PC上でのエミュレーターを使ったチェックにはAndroid Studioを役立てました。デザインカンプはFigmaで行っています。

■ 使用言語・ツール：React Native/Expo/Android Studio/Firebase/Figma

■ アプリが掲載されているGoogle Playはこちらからどうぞ：[リンク(外部)](https://play.google.com/store/apps/details?id=jp.AppCreate.TrainingLog)
