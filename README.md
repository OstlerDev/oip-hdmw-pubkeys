# oip-hdmw-pubkeys
Demo code to take a Mnemonic, derive an xPub, reload the xPub into a fresh `oip-hdmw` and generate new public addresses from it.

## How it Works

## Design Decisions

### What level should the xPub be grabbed from?
In order to decide what level the xPub should be grabbed from, you should consider the following use cases to understand the pro's and con's of each. You should then choose the one that is closest in aproximation.

In almost all cases, I suggest that you share the xPub for the external chain of the `account` you want to generate new public keys for (`m/44'/coin_type'/account_number'/0`)

#### Types of xPubs
1. `master` xPub (`m/44'/coin_type'/*`) https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#audits-nm
  - Pros
    + Using this xPub will allow the auditor (with the xPub) to see all transactions from and to the wallet for a single coin, in all accounts, but not a single secret key.
  - Cons
    + Does not allow for sharing only one part of a wallet, you are forced to share all public addresses that could be generated using that coin & mnemonic
2. `account` xPub (`m/44'/coin_type'/account_number'/*`) https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#recurrent-business-to-business-transactions-nmih0
  - Pros
    + One can use this extended public key (xPub) for the both the internal and external chain of a specific account (`m/44'/coin_type'/account_number'/*`) as a sort of "super address", allowing the individual to frequently generate new public addresses to send funds to, without sharing a single private key, or sharing any other public keys from other accounts. (i.e. if you were an artist and wanted to use one account to accept payments, and a different account for sending payments for content they view)
  - Cons
    + Does not allow for sharing only of the full wallet, so it is less useful from an "auditor" standpoint, but more useful for most applications.