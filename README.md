# メインネット電卓
使ってみよう！Ethereumのメインネット！ ★お金が減ります  

## what is this?
これは、シンプルな電卓。  
Ethereumのガス代の仕組みを学ぶ、学習用教材です。  
<a href="https://nandemotoken.github.io/MainnetCalc">ここから体験できます！</a>	

## ガス代の記録
- 2020年5月31日 コントラクトのデプロイ 56円 (Gas Price 22Gwei)
- 2020年5月31日 数値に3を足した 24円 (Gas Price 21.56Gwei)
- 2020年5月31日 数値に6を足した 24円 (Gas Price 21.56Gwei)

### 体験ページ(初級編)　～スマートコントラクトにデータを送り、お金を減らす～
- GoogleChromeにMetamaskをインストールする。
- MetaMaskに100円分ぐらいのEthereumを送る。
- https://nandemotoken.github.io/MainnetCalc にアクセスする。
- 『1～255までの数字を入力』に、好きな数字を入れる。
- 『トランザクション送信』ボタンを押す
- Confirmボタンを押す。★ここでお金が減ります。
- しばらく待つ　※カップラーメンが出来るぐらいの時間。
- MetaMaskがConfirmedと言ってくる。
- しばらく待ってから　https://nandemotoken.github.io/MainnetCalc のページを更新する。

### 体験ページ(中級編)　～自分で作るスマートコントラクトで、お金を減らす～
- GoogleChromeにMetamaskをインストールする。
- MetaMaskに200円分ぐらいのEthereumを入れる。
- https://remix.ethereum.org/ にアクセスする。
- create new fileボタンをクリックする。
- mainnetCalc.solと名前をつける。
- 次のファイルをコピー&ペーストする。https://raw.githubusercontent.com/nandemotoken/MainnetCalc/gh-pages/mainnetCalc.sol
- Solidity Compilerのボタンを押す。
- Compileボタン…青くて大きいやつ　を押す。
- 緑色のチェックマークが出る。
- Deploy & run transactionのボタンを押す。
- EnvironmentをInjected web3に変更。　←これがMetaMaskのこと
- Deployボタンを押す。
- Confirmボタンを押す。★ここでお金が減ります。
- しばらく待つ　※カップラーメンが出来るぐらいの時間。
- MetaMaskがConfirmedと言ってくる。
- 左下にMAINNETCALC AT 0x1234...89のような表記が出る。
- これが、あなたの構築したスマートコントラクトです。
- 「>」をクリックして開く。
- getNumberを押す。0が表示される。
- Plusの横に好きな数字(1～255まで)を入れて、Plusを押す。
- Confirmボタンを押す。★ここでお金が減ります。
- しばらく待つ　※カップラーメンが出来るぐらいの時間。
- MetaMaskがConfirmedと言ってくる
- getNumberを押す。さきほど入れた数字が表示される。

### 体験ページ(上級編)
- オンラインハッカソンの開催を検討中…
- githubのアカウントを登録しておいてください。 





