require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile quantum gesture help fresh thank'; 
let testAccounts = [
"0x475541ea9abb2fd447008f0f8d6c5910c0b09cfb7003fb9bfd214b22e6b6ad22",
"0x010552c8b44a1529d7c03ac5c9125367a0c8768ea18c0c3b616850fc49ac90dc",
"0xa90527c285758c1df7ed14132b514a86e11cb2431bb4c9ba7ce09221c677fc0b",
"0x73307adcd625b676140af0e6d0c553f9fe32df216e50891369d42cc7ad8548ae",
"0x2b22997465130c620eaf5076b77305d67d001a2551632569e028af16b89557f9",
"0x46e1d6b98692ef0ebe6850eb5c61fe262af8b7ac0d5da0d79486f7ddde6f83b9",
"0x6bc882b8e241fe9bab68f964d8aaaabf36761023d51b3921308ebeaa00b9461a",
"0xca4b554537c4b22b3aeb50a38deb09fe7448254b9575ac4ce20cdcacce21375e",
"0x0a8d44def5cd6b232abe1ce95de44acfa5b113387fa3ab0bfc78f457d7c22e1f",
"0xedc8a662965d1365c960a012be3cb1e6287e08fd81646cbd42ea17322c616d2a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

