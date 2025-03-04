---
title: KinokoManagerについて
description: KinokoManagerは、サーバー内に導入されているPluginです。
sidebar: true
---
# KinokoManagerについて
KinokoNetWork内で開発された、Pluginのことを指します。<br>
それぞれのサーバーに存在しており、それぞれサーバー名が、Pluginについています。

## 機能について
サーバーによって、Pluginの機能は違います。開発者は一緒ですけどね。<br>
ここでは、そのサーバーにしかなく、他サーバーには梱包されていない、特徴的な機能のみを紹介します。
* **KinokoManager**
  * Discordに、サーバー参加メッセージを送信
* **LobbyManager**
  * `/slot`コマンドの追加
  * `/menu`コマンドの追加
* **LifeManager**
  * お金の管理
  * ユーザデータの保存
* **Survivalmanager**
  * `/tt`コマンドの追加
  * `/sidebar [on/off]`コマンドの追加
  * 運営補助コマンドの追加

## 機能・コマンド
| コマンド | 概要 | サーバー |
| --- | --- | --- |
| `/rule` | ルールを表示する。 | All |
| `/wiki` | WikiURLを表示する。 | All |
| `/web` | サイトを表示する。 | All |
| `/discord` | Discord招待リンクを表示する。 | All |
| `/menu` | メニューを開く。しかし、Life鯖は公開されていないので、入れない。 | ロビー鯖のみ |
| `/<servername>` | サーバーに参加することができる。 | All |
| `/tt <x> <y> <z> <title>` | TT作成したのちに、このコマンドを実行することで、DiscordにTT作成通知が送信される。 | サバイバル鯖のみ |
| `/sidebar [on/off]` | サイドバー（スコアボード）を表示・非表示にできる。 | サバイバル鯖のみ |