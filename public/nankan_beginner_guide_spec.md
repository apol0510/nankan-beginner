# 南関競馬入門ガイドサイト 仕様書

## 1. サイト概要

### サイト名
「南関競馬入門ナビ」（仮）
URL例：nankan-beginner.keiba.link

### 目的
- 南関競馬初心者への教育コンテンツ提供
- 有料情報サービスへの導線強化
- 南関競馬ファンの裾野拡大

### ターゲット
- 競馬初心者（特に地方競馬未経験者）
- 中央競馬は知っているが南関競馬は未経験の人
- 南関競馬に興味を持ち始めた人

## 2. サイト構成

### トップページ
- キャッチコピー：「南関競馬をゼロから始める完全ガイド」
- 南関競馬の魅力を3つのポイントで紹介
- 初心者向けコンテンツへの導線
- 有料情報への軽い誘導（「もっと詳しく知りたい方へ」）

### メインコンテンツ

#### 2-1. 南関競馬とは
- 南関競馬の基本説明
- 中央競馬との違い
- 4つの競馬場紹介（大井、川崎、船橋、浦和）
- 開催スケジュール

#### 2-2. 馬券の買い方
- 馬券の種類と説明
- 買い方の手順（ネット投票中心）
- 初心者におすすめの馬券
- 予算の決め方

#### 2-3. 予想の基本
- 出馬表の見方
- 注目すべきポイント5選
- 初心者向け予想手順
- よくある失敗パターン

#### 2-4. 南関競馬の楽しみ方
- ナイター競馬の魅力
- 各競馬場の特色
- イベント情報
- ファン同士の交流

#### 2-5. 用語集
- 南関競馬でよく使われる専門用語
- 50音順で検索しやすく整理

## 3. 導線設計（メルマガ登録最優先）

### メルマガ登録への誘導ポイント
1. **ファーストビュー**：「南関競馬攻略の無料情報をお届け」大きなCTA
2. **記事途中**：「続きはメルマガで詳しく解説」
3. **記事終了後**：「次のステップを学びたい方はメルマガ登録」
4. **サイドバー固定**：「今週の注目情報」メルマガ登録フォーム
5. **Exit Intent**：離脱しようとした時のポップアップ
6. **フッター**：「競馬予想の基礎から応用まで無料配信」

### メルマガ登録特典
- 「南関競馬予想チェックシート（PDF）」
- 「初心者が避けるべき5つの失敗パターン」
- 「有料予想の一部を無料配信」

### 段階的育成フロー
1. **登録直後**：ウェルカムメール + 特典配布
2. **1週目**：基礎知識メール（3通）
3. **2週目**：実践的なコツメール（2通）
4. **3週目以降**：定期配信 + 有料版への案内

### 有料情報への誘導（メルマガ経由）
- メルマガ読者限定の特別価格
- 無料お試し期間（メルマガ読者のみ）
- 「メルマガでは語れない深い分析情報」という位置づけ

## 4. 技術仕様

### 開発環境
- VSCode + Claude Code
- GitHub（ソース管理）
- Netlify（ホスティング・自動デプロイ）

### 推奨技術スタック
- **静的サイトジェネレーター**: Astro または Next.js（静的エクスポート）
- **フロントエンド**: HTML5, CSS3, JavaScript
- **スタイリング**: Tailwind CSS
- **メール配信**: Netlify Forms + Zapier/Make.com連携
- **分析**: Google Analytics 4

### 必要な機能
- レスポンシブデザイン（スマホ対応必須）
- SEO対策（meta tags、sitemap、OGP等）
- メール登録フォーム（複数箇所に設置）
- 段階的なメルマガ誘導システム
- お問い合わせフォーム

### デザイン方針
- 初心者にも親しみやすい明るい色調
- 文字は大きめで読みやすく
- 図解やイラストを多用
- ナビゲーションはシンプルに

## 5. コンテンツ作成指針

### 記事の書き方
- 1記事1,500〜2,500文字程度
- 専門用語は必ず解説を併記
- 実例を多く使用
- 段階的に理解できる構成

### 更新頻度
- 月2〜3回の新規記事追加
- 既存記事の定期的な見直し
- 季節やイベントに合わせた特集記事

## 6. 成果指標

### 定量指標
- 月間PV数：初月1,000PV、3ヶ月後5,000PV目標
- **メルマガ登録率：5%以上（最重要指標）**
- **メルマガ開封率：30%以上**
- **メルマガからの有料版転換率：10%以上**
- 滞在時間：平均3分以上

### 定性指標
- 初心者からの問い合わせ増加
- 有料サービス登録時のアンケートで「入門サイト経由」の回答
- 南関競馬への理解度向上

## 7. 運営体制

### 必要なリソース
- **コンテンツ作成**：月15時間程度
- **メルマガ作成・配信**：月10時間程度
- **サイト管理・更新**：月5時間程度
- **効果測定・改善**：月5時間程度

### 開発・運用フロー
1. **初期開発**：VSCode + Claude Codeでサイト構築
2. **GitHub管理**：ソースコード管理とバージョン管理
3. **Netlify自動デプロイ**：push時の自動反映
4. **継続改善**：データ分析に基づく最適化

## 8. 今後の展開

### 拡張予定機能
- 動画コンテンツの追加
- 初心者向けオンライン勉強会
- Q&Aコーナーの設置
- 他の導線サイトとの連携強化

この仕様書をベースに、段階的にサイトを構築していくことをお勧めします。まずは核となるコンテンツから始めて、効果を見ながら機能を追加していく方針が良いでしょう。