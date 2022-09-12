require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net prosper harvest brave flat team'; 
let testAccounts = [
"0x50a74df038d178d1e17859ee963ee323522f950dd404410cb91acb767a3dc584",
"0x0a0207ee2a068e00d73b35c370219bfc7519244d9d0ebe3931ff6683da9ab8c2",
"0x8cb53e3cc2f963b6854a2ddde173f53cba1d254c9fd67e7cbb1bb5f9b17af13f",
"0xa049ade220920f04d6c6e1759b6c680c46d37126bd0ea4c6edf664bd6315d357",
"0x55ae1e116fb045ae6d2bdd150354cc72fb02d4b7f0fba7ea449299d6319480c8",
"0x396ec3a2628417ead5ee58f2eb180ac1cde04f3263f86a91b981d976b425c678",
"0xe9c61a978d7f49fa45c072f3ba26335e07f8859515a5ae2da0433d8505f116bd",
"0x63ca7762bc912a904a3eb1abb4505b79db9a8182e40da463f6e5e05510d0e9bc",
"0x0c144a78ae8934751df5d6f2c56cd1fdafb2e30145fe8bb6a3291ba07627532f",
"0x9af2c9daa9a7a95889a17bb92878f92caaaea5f2d6f60b48f7ae7cfa9472f3ba"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


