/**
 * 说明：
 * 1. 在日语中请为片假名中的外来语单词之间增添空格。
 * 2. 在对按钮等标签的引用，需要在外面用方括号括起来。例如：[OK] ボタンをクリックして続行します。
 * 3. 请在新添加的键之后标注注释，方便定位未翻译内容的位置。
 * 4. 部分因为长度过长会出现无法显示完全的情况（如忘记密码），需要考虑对策。
 */

import { LocaleIdentifiers } from "./types";

const Japanese: LocaleIdentifiers = {
	colon: "：",
	semicolon: "；",
	caesura: "・",
	welcome: "ようこそ",
	home: "ホーム",
	category: {
		_: "カテゴリ",
		anime: "アニメ",
		music: "音楽",
		otomad: "音MAD",
		tech: "技術",
		design: "デザイン",
		game: "ゲーム",
		other: "総合",
	},
	content: "コンテンツ",
	search: "検索",
	button: "ボタン",
	button_disabled: "無効化されたボタン",
	button_clicked: "私はクリックされました ううっ~",
	confetti: "紙吹雪",
	send: "送信",
	query: "検索",
	show_alert: "アラートを表示",
	toggle_switch: "トグルスイッチ",
	on: "オン",
	off: "オフ",
	disabled: "無効化されたスイッチ",
	background: "背景",
	animated_background: "動く背景",
	custom_background: "カスタム背景",
	light: "ライト テーマ",
	dark: "ダーク テーマ",
	system: "システムのテーマ設定を使用する",
	pink: "カワイイ ピンク",
	sky: "空色",
	blue: "チノ 青",
	green: "千夜 緑",
	orange: "ココア オレンジ",
	purple: "リゼ 紫",
	custom: "カスタム",
	checkbox: "チェックボックス",
	search_settings: "設定を検索",
	appearance: "外観",
	scheme: "スキーム",
	palette: "色",
	language: "言語",
	tag: "タグ",
	all: "すべて",
	video: "動画",
	image: "画像",
	logo_hidden: "LOGO非表示",
	logo_half: "LOGO部分表示",
	logo_show: "LOGO全表示",
	comments: "コメント",
	uploaders_lovin_it: "うP主がいいねしました",
	finish: "操作は正常に完了しました",
	you_know_too_much: "あなたは知りすぎた。",
	dashboard: "ダッシュボード",
	account: "アカウント",
	profile: "プロフィール",
	traces: "閲覧履歴",
	privacy: "プライバシー",
	security: "セキュリティ",
	login_options: "ログイン オプション",
	password: {
		_: "パスワード",
		forgot: "パスワードをお忘れの場合",
		retype: "パスワードを確認",
		change: "パスワードの変更",
		current: "現在のパスワード",
		new_retype: "新しいパスワードの確認",
		new: "新しいパスワード",
	},
	account_linking: "SNSリンク",
	blocklist: "ブロックリスト",
	player: "プレーヤー",
	danmaku: "弾幕",
	send_danmaku: "弾幕を送信",
	preference: "プリファレンス",
	accessibility: "アクセシビリティ",
	about: "KIRAKIRAについて",
	experimental: "実験",
	user_settings: "個人設定",
	app_settings: "アプリの設定",
	male: "男",
	female: "女",
	birthday: "生年月日",
	email: "メール",
	email_address: "メールアドレス",
	authenticator: "オーセンティケーター",
	current_email: "現在のメールアドレス",
	modification_date: "変更日",
	addition_date: "追加日",
	modify: "変更",
	save: "保存",
	add: "追加",
	apply: "適用",
	reset: "リセット",
	history: "履歴",
	favorite: "お気に入り",
	favorites: "お気に入り",
	favorite_verb: "お気に入りに追加",
	feed: "フィード",
	upload: "投稿",
	messages: "メッセージ",
	login: "ログイン",
	logout: "ログアウト",
	register: "新規登録",
	verification_code: "確認コード",
	signature: "自己紹介",
	close: "閉じる",
	current_page_label: "{0}/{1}ページ",
	switch_page_label: "{0}ページに切り替える",
	selected_item_label: "選択しているアイテムは：",
	happy: "嬉しい",
	greet: "挨拶",
	awa: "萌え",
	sad: "悲しみ",
	embarrassed: "困惑",
	upvote: "高評価",
	downvote: "低評価",
	share: "共有",
	danmaku_history: "弾幕履歴",
	play: "再生",
	pause: "一時停止",
	rating: "評価",
	bold: "太字",
	italic: "斜体",
	underline: "下線",
	strikethrough: "取り消し線",
	at_person: "メンション",
	kaomoji: "顔文字",
	associate_existing: "関連コンテンツ登録",
	reply: "返信",
	more: "詳細",
	delete: "削除",
	pin: "固定",
	unpin: "固定解除",
	report: "通報",
	original: "自作",
	repost: "転載",
	authorized_repost: "許可を得た転載",
	ensure_original: "この作品は自作であることを声明します",
	original_author: "原作者",
	original_link: "転載元リンク",
	title: "タイトル",
	tags: "タグ",
	press_enter_to_add: "Enterキーで追加",
	description_of_creation: "説明文",
	push_to_feed: "タイムラインにも投稿",
	cover: "サムネイル",
	select_cover: "サムネイル選択",
	series: "シリーズ",
	audio: "音声",
	photo: "画像",
	album: "アルバム",
	follow: "フォロー",
	following: "フォロワー",
	fans: "ファン",
	views_video: "再生数",
	join_time: "アカウントの登録日",
	user_info: "ユーザー情報",
	acknowledgement: "スペシャルサンクス",
	friendly_links: "相互リンク",
	latest: "新着",
	test: "テスト",
	error_pages: "エラーページ",
	upload_date: "投稿日時",
	sort: {
		by: "並べ替え",
		view: "再生数",
		danmaku: "弾幕数",
		comment: "コメント数",
		favorite: "お気に入り登録数",
	},
	view: {
		_: "表示形式",
		list: "リスト",
		grid: "グリッド",
		tile: "タイル",
	},
	duration: "長さ",
	viewers: "視聴者",
	are_watching: "人が視聴中",
	step: {
		next: "次へ",
		previous: "戻る",
		ok: "完了",
		cancel: "キャンセル",
	},
	loginwindow: {
		login_welcome: "ようこそ",
		login_to_forgot: "パスワードをお忘れの場合",
		login_to_register: "新規登録",
		register_to_login: "すでにアカウントをお持ちですか？",
		forgot_to_login: "パスワードを思い出した",
		register_email_sent_info: "確認コードを送信しました。受け取ったコードを入力してください。\n届いてない場合、コードを再送信することができます。",
		forgot_info: "アカウントのメールアドレスを入力してください。\nこのアドレス宛にメールを送ります。メールの中のリンクをクリックしてパスワード再設定の手続を続行します。",
		reset_successful_info: "本人確認ができました！\n新しいパスワードを設定してください。そして忘れないようにしてください。",
	},
	settings_unselected: "設定項目を選択してください。",
	combobox_unselected: "選択してください。",
	settings: {
		_: "設定",
		profile: {
			edit_banner: "バナー画像の変更",
			edit_avatar: "プロフィールアイコンの変更",
		},
		about: {
			repositories: "リポジトリ",
			creative_team: "開発チーム",
			staff: {
				webmistress: "WEBミストレス",
				designer: "デザイナー",
				frontend: "フロントエンド",
				backend: "バックエンド",
				translator: "翻訳者",
			},
			technologies_used: "使用されている技術",
		},
	},
	user: {
		name: "ニックネーム",
		name_requirements: "1~20文字、大小英数字、ひらがな/カタカナ、漢字、特殊記号の｢-｣と｢_｣のみ使用できます。",
		bio: "自己紹介",
		gender: "性別",
	},
	zh: "簡体字中国語",
	en: "英語",
	ja: "日本語",
	development_test_page: "デベロップメント テストページ",
	components_test_page: "コンポーネンツ テストページ",
	view_cover: "サムネイルの確認",
	watch_later: "後で見る",
	download_video: "ダウンロード",
	report_creation: "通報",
	password_hint: "パスワードのヒント",
	forgot_password: "パスワードをお忘れの場合",
	reset_password: "パスワードの再設定",
};

export default Japanese;

/*
 * 备注区
 * loginwindow_register_to_login
 * 	原译作“すでにアカウントをお持ちですか？ログイン”,因文字列过长影响页面展示，故割爱
 * 关于“弹幕 danmaku”与“评论 comment”
 * 	日语语境中“弾幕”指同屏评论（コメント）数量如弹幕游戏一般多到盖住画面的现象
 * 	而中文里指在视频画面上滚动的评论本身而不是现象
 * 	此处暂且将视频中的评论译为“弾幕”，页面下方的评论作“コメント”
 * forgot_password (230819)
 *  作为登录组件忘记密码时的标题，目前存在长度过长影响展示的情况
 */
