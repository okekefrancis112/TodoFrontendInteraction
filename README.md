# Todo Frontend Interaction

A vanilla JavaScript frontend that connects to a Solidity smart contract's ABI to interact with an on-chain todo list.

## Overview

A web3 frontend application that demonstrates how to interact with a deployed Solidity smart contract from a browser using ethers.js. The app connects to a Todo smart contract to create, read, and manage tasks on-chain.

## Features

- **Smart Contract Interaction** — Direct calls to deployed contract
- **ethers.js Integration** — Web3 provider and contract abstraction
- **MetaMask Support** — Wallet connection for transactions
- **ABI Integration** — Contract ABI for function calls

## Tech Stack

- **JavaScript** (Vanilla)
- **ethers.js** — Ethereum library
- **HTML/CSS** — Frontend
- **Solidity ABI** — Contract interface

## Getting Started

1. Deploy the Todo smart contract to a testnet
2. Update `constant.js` with your contract address
3. Open `index.html` in a browser with MetaMask installed

```bash
git clone https://github.com/okekefrancis112/TodoFrontendInteraction.git
cd TodoFrontendInteraction
# Open index.html in browser
```

## Project Structure

```
├── index.html           # Main page
├── app.js               # Application logic
├── abi.js               # Smart contract ABI
├── constant.js          # Contract address config
├── ethers.js            # ethers.js library
├── utils/
│   └── getContract.js   # Contract connection helper
└── index.css            # Styling
```

## License

MIT
