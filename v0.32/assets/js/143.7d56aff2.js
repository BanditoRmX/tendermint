(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{718:function(e,t,n){"use strict";n.r(t);var o=n(1),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"peer-discovery"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#peer-discovery"}},[e._v("#")]),e._v(" Peer Discovery")]),e._v(" "),n("p",[e._v("A Tendermint P2P network has different kinds of nodes with different requirements for connectivity to one another.\nThis document describes what kind of nodes Tendermint should enable and how they should work.")]),e._v(" "),n("h2",{attrs:{id:"seeds"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#seeds"}},[e._v("#")]),e._v(" Seeds")]),e._v(" "),n("p",[e._v("Seeds are the first point of contact for a new node.\nThey return a list of known active peers and then disconnect.")]),e._v(" "),n("p",[e._v('Seeds should operate full nodes with the PEX reactor in a "crawler" mode\nthat continuously explores to validate the availability of peers.')]),e._v(" "),n("p",[e._v("Seeds should only respond with some top percentile of the best peers it knows about.\nSee "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/docs/spec/reactors/pex/pex.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("the peer-exchange docs"),n("OutboundLink")],1),e._v("for details on peer quality.")]),e._v(" "),n("h2",{attrs:{id:"new-full-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#new-full-node"}},[e._v("#")]),e._v(" New Full Node")]),e._v(" "),n("p",[e._v("A new node needs a few things to connect to the network:")]),e._v(" "),n("ul",[n("li",[e._v("a list of seeds, which can be provided to Tendermint via config file or flags,\nor hardcoded into the software by in-process apps")]),e._v(" "),n("li",[e._v("a "),n("code",[e._v("ChainID")]),e._v(", also called "),n("code",[e._v("Network")]),e._v(" at the p2p layer")]),e._v(" "),n("li",[e._v("a recent block height, H, and hash, HASH for the blockchain.")])]),e._v(" "),n("p",[e._v("The values "),n("code",[e._v("H")]),e._v(" and "),n("code",[e._v("HASH")]),e._v(" must be received and corroborated by means external to Tendermint, and specific to the user - ie. via the user's trusted social consensus.\nThis requirement to validate "),n("code",[e._v("H")]),e._v(" and "),n("code",[e._v("HASH")]),e._v(" out-of-band and via social consensus\nis the essential difference in security models between Proof-of-Work and Proof-of-Stake blockchains.")]),e._v(" "),n("p",[e._v("With the above, the node then queries some seeds for peers for its chain,\ndials those peers, and runs the Tendermint protocols with those it successfully connects to.")]),e._v(" "),n("p",[e._v("When the peer catches up to height H, it ensures the block hash matches HASH.\nIf not, Tendermint will exit, and the user must try again - either they are connected\nto bad peers or their social consensus is invalid.")]),e._v(" "),n("h2",{attrs:{id:"restarted-full-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#restarted-full-node"}},[e._v("#")]),e._v(" Restarted Full Node")]),e._v(" "),n("p",[e._v("A node checks its address book on startup and attempts to connect to peers from there.\nIf it can't connect to any peers after some time, it falls back to the seeds to find more.")]),e._v(" "),n("p",[e._v("Restarted full nodes can run the "),n("code",[e._v("blockchain")]),e._v(" or "),n("code",[e._v("consensus")]),e._v(" reactor protocols to sync up\nto the latest state of the blockchain from wherever they were last.\nIn a Proof-of-Stake context, if they are sufficiently far behind (greater than the length\nof the unbonding period), they will need to validate a recent "),n("code",[e._v("H")]),e._v(" and "),n("code",[e._v("HASH")]),e._v(" out-of-band again\nso they know they have synced the correct chain.")]),e._v(" "),n("h2",{attrs:{id:"validator-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#validator-node"}},[e._v("#")]),e._v(" Validator Node")]),e._v(" "),n("p",[e._v('A validator node is a node that interfaces with a validator signing key.\nThese nodes require the highest security, and should not accept incoming connections.\nThey should maintain outgoing connections to a controlled set of "Sentry Nodes" that serve\nas their proxy shield to the rest of the network.')]),e._v(" "),n("p",[e._v("Validators that know and trust each other can accept incoming connections from one another and maintain direct private connectivity via VPN.")]),e._v(" "),n("h2",{attrs:{id:"sentry-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sentry-node"}},[e._v("#")]),e._v(" Sentry Node")]),e._v(" "),n("p",[e._v("Sentry nodes are guardians of a validator node and provide it access to the rest of the network.\nThey should be well connected to other full nodes on the network.\nSentry nodes may be dynamic, but should maintain persistent connections to some evolving random subset of each other.\nThey should always expect to have direct incoming connections from the validator node and its backup(s).\nThey do not report the validator node's address in the PEX and\nthey may be more strict about the quality of peers they keep.")]),e._v(" "),n("p",[e._v("Sentry nodes belonging to validators that trust each other may wish to maintain persistent connections via VPN with one another, but only report each other sparingly in the PEX.")])])}),[],!1,null,null,null);t.default=a.exports}}]);