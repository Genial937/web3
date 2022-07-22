// https://eth-goerli.g.alchemy.com/v2/TZPlTFjG_h6yI65SmncEfmMKqXyoqZgr

require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkedby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/w8hl5zmAxtWxHFye8-MbHtv0kq-cYAUN',
      accounts: ['4ca6f35f612197c587a3cbfe7cd95b912a60d5d0bfacf2cf0e5d93b378ace989']
    }
  }
};
