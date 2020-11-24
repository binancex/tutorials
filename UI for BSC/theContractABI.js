const theContractABI=[
  {
    "constant": false,
    "inputs": [
      {
        "name": "_message",
        "type": "string"
      }
    ],
    "name": "writeMessage",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getMessage",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_text",
        "type": "string"
      }
    ],
    "name": "messageWrite",
    "type": "event"
  }
];