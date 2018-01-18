This project relies on MetaMask as the layer between the user and the Ethereum blockchain. 

https://metamask.io/

Install Dependencies: 

  npm install

This project uses the Infura API to deploy contracts to the Rinkeby test network. In order to deploy a contract, you must unlock your account. Add your 12 word mneumonic phrase from metamask to the ethereum/deploy.js file to unlock your account and interact with Infura.

Compile and Deploy Contracts:

Inside the ethereum directory, run 

  node compile.js

  node deploy.js

After running node deploy.js, the address of the newly deployed contract will return in the console. To get an instance of the contract inside the project, copy the address of the newly deployed contract and paste it into the factory.js file. 

Start the Server: 

 npm run dev

server will run on localhost:3000





