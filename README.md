# MainnetCalc
Let's pay gas fee!

## ガス代の記録
- 2020年5月31日 コントラクトのデプロイ 56円 (Gas Price 22Gwei)
- 2020年5月31日 numberに3を足した 24円 (Gas Price 21.56Gwei)

### あそびかた(初級編)
- GoogleChromeにMetamaskをインストールする。
- MetaMaskに100円分ぐらいのEthereumを送る。



### あそびかた(中級編)
- GoogleChromeにMetamaskをインストールする。
- MetaMaskに1000円分ぐらいのEthereumを入れる。
- https://remix.ethereum.org/ にアクセスする。
- create new fileボタンをクリックする。
- mainnetCalc.solと名前をつける。
- のファイルをコピー&ペーストする。
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

###あそびかた(上級編)






