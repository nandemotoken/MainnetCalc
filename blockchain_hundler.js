//web3.jsをこの変数で使っていく。
let web3js;

//スマートコントラクトのアドレスです。MetaMaskで確認できます。
const CalcAddress = "0xE57195d40EB77017f25F3C8dE8f2bA5962AdC60E";

//ブロックチェーン呼び出しのためのルールを記したABIというものです。Remixから拾います。
const ABI = [
{
    "constant": false,
    "inputs": [
        {
            "internalType": "uint8",
            "name": "number_arg",
            "type": "uint8"
        }
    ],
    "name": "plus",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "getNumber",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}
]


//--------------ここからメイン処理---------------

//------web3.jsの読み込み待ちのため、window.onloadにメイン処理を入れる--------
window.onload = async function () {

    //metamask利用許可ダイアログを出す
    await ethereum.enable();

    //metamaskの準備
    web3js = new Web3(web3.currentProvider);
    //スマートコントラクト読み込み
    mycontract = new web3js.eth.Contract(ABI, CalcAddress);
  
    //1.2.7と表示されるのが正しい
    console.log("reader.js_is_checking_web3.js_version..." + Web3.version);
  
    //ブロックチェーンから数字を読み込みます。
    let numberFromBlockchain = await mycontract.methods.getNumber().call()
    //読み込んだ値を反映させます。
    document.getElementById("number").innerHTML = numberFromBlockchain;
  }

// 基本的に関数にはasyncをつけましょう。
async function myButtonClicked() {
    //MetaMask利用者のアドレスを取得します。
    const myAddress = await web3js.eth.getAccounts();
    //送信ボタンを押した時にコントラクトのplus関数を呼び出します。
    mycontract.methods.plus(document.getElementById('mynum').value).send({ from: myAddress[0] });    
}
