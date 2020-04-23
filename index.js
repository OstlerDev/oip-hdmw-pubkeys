// Import Dependencies
const { Wallet, Account, Networks } = require('oip-hdmw')
const bip32 = require('bip32')

// Create Wallet
const myWallet = new Wallet(undefined, { discover: false })
console.log(`My Mnemonic: '${myWallet.getMnemonic()}'`)

// Grab the Account xPub
const flo = myWallet.getCoin('flo')
const paymentRecieverAccount = flo.getAccount(0)
const paymentRecieverXPub = paymentRecieverAccount.getExtendedPublicKey()
console.log(`My Payment Reciever XPub: ${paymentRecieverXPub}`)

// Load Account from xPub
const paymentRecieverAddressGenerator = new Account(bip32.fromBase58(paymentRecieverXPub, Networks.flo.network), Networks.flo, false)

// Generate the first 25 addresses
const EXTERNAL_CHAIN = 0
for (let i = 0; i < 25; i++) {
  console.log(`${i}: ${paymentRecieverAddressGenerator.getAddress(EXTERNAL_CHAIN, i).getPublicAddress()}`)
}

// Shut down
process.exit(0)