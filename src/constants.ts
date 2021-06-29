export const labels = {
  FIRST: '先頭',
  LAST: '最終',
  NEXT: '次へ',
  PREVIOUS: '前へ',
};

export const messageTypes = {
  error: 'error',
  info: 'info',
  success: 'success',
};

export const titleMessageError = {
  NOT_FOUND: 'TITLE NOT FOUND',
  INTERNAL_SERVER_ERROR: 'ページエラー',
  FORBIDDEN: '権限エラー',
};

export interface IMessage {
  // tslint:disable-next-line:no-reserved-keywords
  type: string;
  content: string;
}

export const valueLst = {
  // 無効化フラグ
  disableFlgs: {
    0: '有効',
    1: '無効',
  },
};

export const messages = {
  CSVDefault:'フォーマットのヘッダーに不必要なデータもしくは項目名の書き換えがございますとエラーになりますのでご注意ください。',
  ECL001: (column: string) => `${column}は必須項目です。`,
  ECL002: (column: string, params1: string | number, params2: string | number) => 
 `${column}は「${params1}」文字以下で入力してください。（現在「${params2}」文字）`,
  ECL003: (column: string, params1: string | number, params2: string | number) => 
  `${column}は「${params1}」文字以上で入力してください。（現在「${params2}」文字）`,
  ECL004: (column: string) => `${column}は半角数字で入力してください。`,
  ECL005: (column: string) => `${column}は半角英字で入力してください。`,
  ECL006: (column: string) => `${column}は半角英数で入力してください。`,
  ECL007: 'メールアドレスを正しく入力してください。',
  ECL008: (column: string) => `${column}は全角で入力してください。`,
  ECL009: (column: string) => `${column}は全角カナで入力してください。`,
  ECL010: (column: string) => `${column}は日付を正しく入力してください。`,
  ECL011: (column: string) => `${column}は郵便番号を正しく入力してください。`,
  ECL012: (column: string) => `${column}はURLを正しく入力してください。`,
  ECL013: (column: string) => `${column}は電話番号を正しく入力してください。`,
  ECL014: (column: string) => `${column}は日時を正しく入力してください。`,
  ICL015: '検索結果は0件です。',
  ESV016: (params: string) => `${params}が取得できませんでした。`,
  ISV017: '指定された条件に該当するデータが存在しません。抽出条件を確認してください。',
  ISV018: (params: string) => `CSV出力件数は${params}件です。`,
  ESV019: `入力した情報のいずれかの情報が間違っています。<br/>
  確認してから再度試してください。`,
  ECL020: ( params1: string | number, params2: string | number, params3: string | number) => 
  `${params1}は「${params2}」文字で入力してください。（現在「${params3}」文字）
  `,
  ESV021: (file: string) => `ファイル形式が誤っています。${file}を選択してください。`,
  ESV022:'ファイルフォーマットが正しくありませんヘッダー情報を確認してください。',
  ESV023: (size: string) => `ファイルのサイズ制限${size}を超えています。`,
  ECL028: (column: string) => `${column}では半角英字および以下の文字以外はご使用いただけません。(「@], [!], ["], [#], [$], [%], [&], ['], [(], [)], [*], [+], [,], [-], [.], [/], [:], [;], [<], [>], [=], [?], [[], []], [\], [^], [_], [{], [}], [|], [~」)`,
  ESV032:'入力されたIDは既に使用されているため、ほかのIDを設定してください。',
  ESV038:(row: number, column: string) => `インポート処理に失敗しました。${row}行目の${column}をご確認ください。`,
  ESV039: 'インポート処理が完了しました。',
  ESV040: '加盟店番号とアカウントIDは変更できません。',
  ISV046: 'ご登録メールアドレス宛にパスワード再設定フォームのURLを送信しました。',
  ESV047: 'パスワードの変更に失敗しました。',
  ISV048: 'パスワードの変更に成功しました。',
  ESV052: '該当する加盟店番号が存在しません。',
  ESV053: 'アカウントIDが重複しています。',
  ISV036: (param0: string) => 
  `${param0}処理が完了しました。`,
  ISV037: (param0: string) => `${param0}処理が完了しました。`,
  FORBIDDEN: `アクセス権限がありません。<br/> 大変お手数ですが、システム管理者までご連絡ください。`,
  INTERNAL_SERVER_ERROR: `申し訳ございません。<br/> お客様がアクセスしようとしたページが見つかりませんでした。<br/>
  サイト更新などによってURLが変更になったか、URLが正しく入力されていない可能性があります。<br/>
  ブラウザの再読込を行ってもこのページが表示される場合は、システム管理者にご連絡ください。`,
  ECL034: (param: string) => `${param}に不正な値が入力または選択されています。`,
  API_SELECT_ERROR: (code: string) => `該当の情報が存在しません。(APIレスポンス：<${code}>)`,
  API_UPDATE_ERROR: (code: string) => `サーバーエラーが発生しました。データをご確認の上、再度登録をお願いいたします。(APIレスポンス：<${code}>)`,
  ECL054: 'CSV作成処理の呼び出しに失敗しました。',
  NOT_FOUND: 'NOT FOUND',
  BAD_REQUEST: 'BAD REQUEST',
  ECL056: 'セッションにデータが存在しません。',
  ECL057: 'データの登録に失敗しました。',
};

