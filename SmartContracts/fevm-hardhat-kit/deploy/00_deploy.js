require("hardhat-deploy")
require("hardhat-deploy-ethers")

const { networkConfig } = require("../helper-hardhat-config")


const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

module.exports = async ({ deployments }) => {
    console.log("Wallet Ethereum Address:", wallet.address)
    const chainId = network.config.chainId
   

    //deploy NTT Cert
    const mdCert = await ethers.getContractFactory('MDCert', wallet);
    console.log('Deploying NTT Cert...');
    const mdcert = await mdCert.deploy();
    await mdcert.deployed()
    console.log('NTT Cert deployed to:', mdcert.address);
    
}