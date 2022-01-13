(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{595:function(e,t,o){"use strict";o.r(t);var r=o(56),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"built-in-contract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#built-in-contract"}},[e._v("#")]),e._v(" Built-in Contract")]),e._v(" "),o("p",[e._v("Examples of how to use the built-in contracts can be found "),o("a",{attrs:{href:"https://github.com/vechain/thor-builtins",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Addresses of contracts on testnet/mainnet can be found "),o("RouterLink",{attrs:{to:"/pt/others/miscellaneous.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"authority-sol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#authority-sol"}},[e._v("#")]),e._v(" authority.sol")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/vechain/thor/blob/master/builtin/gen/authority.sol",target:"_blank",rel:"noopener noreferrer"}},[e._v("authority.sol"),o("OutboundLink")],1),e._v(" is related to the POA(proof of authority) consensus mechanism. The Authority contract manages a list of candidates proposers who is responsible for packing transactions into a block. The proposers are authorized by a voting committee, but only the first 101 proposers in the candidates list can pack block. A candidates proposer include signer address, endorsor address and identity. Signer address is related to sign a block, endorsor address is used for charging miner's fee and identity is used for identifying the proposer.")]),e._v(" "),o("h2",{attrs:{id:"energy-sol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#energy-sol"}},[e._v("#")]),e._v(" energy.sol")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/vechain/thor/blob/master/builtin/gen/energy.sol",target:"_blank",rel:"noopener noreferrer"}},[e._v("energy.sol"),o("OutboundLink")],1),e._v(' represents the sub-token in VeChainThor which conforms VIP180(ERC20) standard. The name of token is "VeThor" and 1 VeThor equals to 1e18 wei. The main function of VeThor is to pay for the transaction fee. VeThor is generated from VET, so the initial supply of VeThor is zero in the genesis block. The growth rate of VeThor is 5000000000 wei per token(VET) per second, that is to say 1 VET will produce about 0.000432 VeThor per day. The miner will charge 30 percent of transaction fee and 70 percent will be burned. So the total supply of VeThor is dynamic.')]),e._v(" "),o("h2",{attrs:{id:"executor-sol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#executor-sol"}},[e._v("#")]),e._v(" executor.sol")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/vechain/thor/blob/master/builtin/gen/executor.sol",target:"_blank",rel:"noopener noreferrer"}},[e._v("executor.sol"),o("OutboundLink")],1),e._v(" represents the core code for the on-chain governance. The contract enables a proposal to be executed automatically on VeChainThor if it is approved by at least two-third of the steering committee members. A proposal can be registered either by an approver (a steering committee member) or by an authorized voting contract.")]),e._v(" "),o("h2",{attrs:{id:"extension-v2-sol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#extension-v2-sol"}},[e._v("#")]),e._v(" extension-v2.sol")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/vechain/thor/blob/master/builtin/gen/extension-v2.sol",target:"_blank",rel:"noopener noreferrer"}},[e._v("extension-v2.sol"),o("OutboundLink")],1),e._v(" extends EVM functions. it gives an opportunity for the developer to get information of the current transaction and any history block within the range of genesis to best block. The information obtained based on block number includes blockID, blockTotalScore, blockTime and blockSigner . The developer can also get the current transaction information, including  txGasPayer, txProvedWork, txID, txBlockRef and txExpiration.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("Before implement the VIP-191 , "),o("a",{attrs:{href:"https://github.com/vechain/thor/blob/master/builtin/gen/extension.sol",target:"_blank",rel:"noopener noreferrer"}},[e._v("extension.sol"),o("OutboundLink")],1),e._v(" is the main contract")])]),e._v(" "),o("h2",{attrs:{id:"params-sol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#params-sol"}},[e._v("#")]),e._v(" params.sol")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/vechain/thor/blob/master/builtin/gen/params.sol",target:"_blank",rel:"noopener noreferrer"}},[e._v("params.sol"),o("OutboundLink")],1),e._v(' stores the governance params of VeChain thor. The params can be set by the executor, a contract that is authorized to modify governance params by a voting Committee. Anyone can get the params just by calling "get" function. The governance params is written in genesis block at launch time. You can find the list of the governance parameters in '),o("a",{attrs:{href:"https://github.com/vechain/thor/blob/master/thor/params.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("params.go"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"prototype-sol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prototype-sol"}},[e._v("#")]),e._v(" prototype.sol")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/vechain/thor/blob/master/builtin/gen/prototype.sol",target:"_blank",rel:"noopener noreferrer"}},[e._v("prototype.sol"),o("OutboundLink")],1),e._v(' is an account management model of VeChainThor. In the account management model every contract has a master account, which, by default, is the creator of a contract. The master account plays the role of a contract manager, which has some authorities including "setMaster", "setCreditPlan", "addUser", "removeUser" and "selectSponsor". Every contract keeps a list of users who can call the contract for free but limited by credit. The user of a specific contract can be either added or removed by the contract master. Although from a user\'s perspective the fee is free, it is paid by a sponsor of the contract. Anyone can be a sponsors of a contract, just by calling sponsor function, and also the sponsor identity can be cancelled by calling unsponsor function. A contract may have more than one sponsors, but only the current sponsor chosen by master need to pay the fee for the contract. If the current sponsor is out of energy, master can select sponsors from other sponsors candidates by calling selectSponsor function. The creditPlan can be set by the master which includes credit and recoveryRate. Every user have the same original credit. Every Transaction consumes some amount of credit which is equal to the fee of the Transaction, and the user can also pay the fee by itself if the gas payer is out of the credit. The credit can be recovered based on recoveryRate (per block).')])])}),[],!1,null,null,null);t.default=a.exports}}]);