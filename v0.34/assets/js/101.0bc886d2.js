(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{764:function(t,e,a){"use strict";a.r(e);var n=a(1),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"adr-034-privvalidator-file-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-034-privvalidator-file-structure"}},[t._v("#")]),t._v(" ADR 034: PrivValidator file structure")]),t._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[t._v("#")]),t._v(" Changelog")]),t._v(" "),a("p",[t._v("03-11-2018: Initial Draft")]),t._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),a("p",[t._v("For now, the PrivValidator file "),a("code",[t._v("priv_validator.json")]),t._v(" contains mutable and immutable parts.\nEven in an insecure mode which does not encrypt private key on disk, it is reasonable to separate\nthe mutable part and immutable part.")]),t._v(" "),a("p",[t._v("References:\n"),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1181",target:"_blank",rel:"noopener noreferrer"}},[t._v("#1181"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2657",target:"_blank",rel:"noopener noreferrer"}},[t._v("#2657"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2313",target:"_blank",rel:"noopener noreferrer"}},[t._v("#2313"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"proposed-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposed-solution"}},[t._v("#")]),t._v(" Proposed Solution")]),t._v(" "),a("p",[t._v("We can split mutable and immutable parts with two structs:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRmlsZVBWS2V5IHN0b3JlcyB0aGUgaW1tdXRhYmxlIHBhcnQgb2YgUHJpdlZhbGlkYXRvcgp0eXBlIEZpbGVQVktleSBzdHJ1Y3QgewoJQWRkcmVzcyB0eXBlcy5BZGRyZXNzICBganNvbjomcXVvdDthZGRyZXNzJnF1b3Q7YAoJUHViS2V5ICBjcnlwdG8uUHViS2V5ICBganNvbjomcXVvdDtwdWJfa2V5JnF1b3Q7YAoJUHJpdktleSBjcnlwdG8uUHJpdktleSBganNvbjomcXVvdDtwcml2X2tleSZxdW90O2AKCglmaWxlUGF0aCBzdHJpbmcKfQoKLy8gRmlsZVBWU3RhdGUgc3RvcmVzIHRoZSBtdXRhYmxlIHBhcnQgb2YgUHJpdlZhbGlkYXRvcgp0eXBlIEZpbGVQVkxhc3RTaWduU3RhdGUgc3RydWN0IHsKCUhlaWdodCAgICBpbnQ2NCAgICAgICAgYGpzb246JnF1b3Q7aGVpZ2h0JnF1b3Q7YAoJUm91bmQgICAgIGludCAgICAgICAgICBganNvbjomcXVvdDtyb3VuZCZxdW90O2AKCVN0ZXAgICAgICBpbnQ4ICAgICAgICAgYGpzb246JnF1b3Q7c3RlcCZxdW90O2AKCVNpZ25hdHVyZSBbXWJ5dGUgICAgICAgYGpzb246JnF1b3Q7c2lnbmF0dXJlLG9taXRlbXB0eSZxdW90O2AKCVNpZ25CeXRlcyBjbW4uSGV4Qnl0ZXMgYGpzb246JnF1b3Q7c2lnbmJ5dGVzLG9taXRlbXB0eSZxdW90O2AKCglmaWxlUGF0aCBzdHJpbmcKCW10eCAgICAgIHN5bmMuTXV0ZXgKfQo="}}),t._v(" "),a("p",[t._v("Then we can combine "),a("code",[t._v("FilePVKey")]),t._v(" with "),a("code",[t._v("FilePVLastSignState")]),t._v(" and will get the original "),a("code",[t._v("FilePV")]),t._v(".")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBGaWxlUFYgc3RydWN0IHsKCUtleSAgICAgICAgICAgRmlsZVBWS2V5CglMYXN0U2lnblN0YXRlIEZpbGVQVkxhc3RTaWduU3RhdGUKfQo="}}),t._v(" "),a("p",[t._v("As discussed, "),a("code",[t._v("FilePV")]),t._v(" should be located in "),a("code",[t._v("config")]),t._v(", and "),a("code",[t._v("FilePVLastSignState")]),t._v(" should be stored in "),a("code",[t._v("data")]),t._v(". The\nstore path of each file should be specified in "),a("code",[t._v("config.yml")]),t._v(".")]),t._v(" "),a("p",[t._v("What we need to do next is changing the methods of "),a("code",[t._v("FilePV")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[t._v("#")]),t._v(" Status")]),t._v(" "),a("p",[t._v("Draft.")]),t._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[t._v("#")]),t._v(" Consequences")]),t._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[t._v("#")]),t._v(" Positive")]),t._v(" "),a("ul",[a("li",[t._v("separate the mutable and immutable of PrivValidator")])]),t._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[t._v("#")]),t._v(" Negative")]),t._v(" "),a("ul",[a("li",[t._v("need to add more config for file path")])]),t._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[t._v("#")]),t._v(" Neutral")])],1)}),[],!1,null,null,null);e.default=s.exports}}]);