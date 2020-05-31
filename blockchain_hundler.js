const CalcAddress = "0xE57195d40EB77017f25F3C8dE8f2bA5962AdC60E";
//metamask利用許可ダイアログを出す
ethereum.enable();

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
