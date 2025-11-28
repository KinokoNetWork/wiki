---
title: LWCについて
description: LWCは、チェストやドアに保護をつけることができ、自分のみ開くことができるなどの保護機能を持つPluginです。
sidebar: true
---
# LWCについて
LWCは、チェストやドアに保護をつけることができ、自分のみ開くことができるなどの保護機能を持つPluginです。<br>
それ以外でも、動作する系のブロックに保護をつけることができます。

## チェスト保護の仕方
- チェストを置く
![](https://image02.seesaawiki.jp/k/2/kinokoserver2/T5Io71H1U9.png)

## 個人保護から共通保護にする方法
`/cmodify public`を打った後に、対象チェストを左クリックする。

## コマンド一覧
| コマンド | 概要 |
| ------- | ---- |
| `/cprivate` | 個人保護にします。 |
| `/cpublic` | 共有保護にします。 |
| `/cdonation` | 寄付保護にします。 |
| `/csupply` | 提供保護にします。 |
| `/cpassword [password]` | パスワード保護にします。 |
| `/cmodify [private/public/donation/supply..]` | 個人保護から別の設定に変更します。 |
| `/cunlock [password]` | パスワード保護を解除します。 |
| `/climits` | 自分が保護できるチェスト数を表示します。 |
| `/cinfo` | 保護の情報を表示します。 |
| `/cremove` | 保護を削除します。 |

## 不具合
エンドワールドで、チェスト保護がかからないバグを発見しております。