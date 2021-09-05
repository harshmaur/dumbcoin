import { task } from 'hardhat/config'
import '@typechain/hardhat'
import '@nomiclabs/hardhat-waffle'
import { HardhatUserConfig } from 'hardhat/types'

// Currently we do not have waffle. We might need it later for better testing support

task('accounts', 'Prints the list of accounts', async (args, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(await account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const mnemonic = process.env.WALLET_MNEMONIC
const RINKEBY_PROJECT_URI = process.env.RINKEBY_PROJECT_URI
const config: HardhatUserConfig = {
  // @ts-ignore - because its an external property
  typechain: {
    outDir: 'src/types',
  },
  paths: {
    sources: './src/contracts',
    tests: './src/test',
    cache: './src/cache',
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {},
    rinkeby: {
      accounts: {
        mnemonic,
      },
      url: RINKEBY_PROJECT_URI,
    },
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}
export default config
