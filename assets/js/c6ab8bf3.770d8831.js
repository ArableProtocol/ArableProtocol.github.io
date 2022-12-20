"use strict";(self.webpackChunkarabledocs=self.webpackChunkarabledocs||[]).push([[3056],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=p(n),u=r,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return n?a.createElement(m,c(c({ref:t},s),{},{components:n})):a.createElement(m,c({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(4137));const i={id:"connect-to-acrechain"},c="Connect Keplr Wallet to Acrechain",o={unversionedId:"wallet-guides/connect-to-acrechain",id:"wallet-guides/connect-to-acrechain",title:"Connect Keplr Wallet to Acrechain",description:"Introduction",source:"@site/docs/wallet-guides/connect-to-acrechain.md",sourceDirName:"wallet-guides",slug:"/wallet-guides/connect-to-acrechain",permalink:"/wallet-guides/connect-to-acrechain",draft:!1,tags:[],version:"current",frontMatter:{id:"connect-to-acrechain"},sidebar:"docs",previous:{title:"Adding ACRE to MetaMask",permalink:"/wallet-guides/adding-acre-to-metamask"},next:{title:"Undelegate/Unstake and Unbond on Avalanche",permalink:"/wallet-guides/undelegate-on-avalanche"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Connecting Keplr with Acrechain using the ACRE bridge page",id:"connecting-keplr-with-acrechain-using-the-acre-bridge-page",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],s={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connect-keplr-wallet-to-acrechain"},"Connect Keplr Wallet to Acrechain"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Acrechain is a blockchain based on the Cosmos SDK and you can connect to Acrechain using the Keplr wallet. Keplr is a software wallet that supports multiple blockchains including Acrechain."),(0,r.kt)("p",null,"First, install the Keplr app on your device from ",(0,r.kt)("a",{parentName:"p",href:"https://www.keplr.app"},"https://www.keplr.app"),"."),(0,r.kt)("h2",{id:"connecting-keplr-with-acrechain-using-the-acre-bridge-page"},"Connecting Keplr with Acrechain using the ACRE bridge page"),(0,r.kt)("p",null,"The easiest way to connect Keplr with Acrechain is by using the ",(0,r.kt)("a",{parentName:"p",href:"https://bridge.arable.finance/"},"Acrebridge"),". It will automatically add Acrechain chain in your Keplr wallet. In this step, you will not need to bridge any ACRE tokens to connect Keplr with Acrechain, we only use the connect feature."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure you have ",(0,r.kt)("a",{parentName:"p",href:"https://www.keplr.app"},"installed Keplr")," on your device. It will ask you to create a new wallet or import an existing wallet."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you create a new wallet, make sure to back up your wallet seed phrase. You need the keep the seed phrase safe and secure. If you lose it you will not be able to access your wallet."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After you have successfully installed Keplr you can connect with Acrechain by going to ",(0,r.kt)("a",{parentName:"p",href:"https://bridge.arable.finance/"},"https://bridge.arable.finance/")," and clicking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect to Keplr")," button."),(0,r.kt)("div",{className:"img-center"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(2121).Z,width:"1022",height:"734"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After you have clicked the ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect to Keplr")," button you will be asked to confirm the connection with Keplr."),(0,r.kt)("div",{className:"img-center"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(9532).Z,width:"350",height:"559"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After you have confirmed the connection with Keplr you need to select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Acrechain Mainnet")," network in Keplr. Open the Keplr wallet and click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"\u02c5")," button at the top."),(0,r.kt)("div",{className:"img-center"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(426).Z,width:"339",height:"517"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll down and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Acrechain Mainnet")," network."),(0,r.kt)("div",{className:"img-center"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(8883).Z,width:"348",height:"517"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Acrechain Mainnet")," network."),(0,r.kt)("div",{className:"img-center"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(5770).Z,width:"345",height:"520"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"That's it! You have successfully connected Keplr with Acrechain."),(0,r.kt)("div",{className:"img-center"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(8043).Z,width:"344",height:"448"}))))),(0,r.kt)("h2",{id:"whats-next"},"What's next?"),(0,r.kt)("p",null,"Now that you have connected Keplr with Acrechain you can start using the Acrechain blockchain. You can start by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet-guides/buying-acre-on-osmosis"},"Purchasing ACRE tokens")," to start using the Acrechain blockchain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wallet-guides/delegate-acre"},"Staking your ACRE tokens")," to earn rewards."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/liquidity-mining-guides/providing-liquidity-on-osmosis"},"Start liquidity mining")," by providing liquidity to the ",(0,r.kt)("a",{parentName:"li",href:"https://frontier.osmosis.zone/pool/875"},"ACRE/USDC")," or ",(0,r.kt)("a",{parentName:"li",href:"https://frontier.osmosis.zone/pool/858"},"ACRE/OSMO")," liquidity pool on ",(0,r.kt)("a",{parentName:"li",href:"https://frontier.osmosis.zone/"},"Osmosis"),".")))}d.isMDXComponent=!0},2121:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/acrebridge_connect_keplr-d7e8c04bfad35448ffe3d884b88211f4.png"},9532:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/acrechain_bridge_confirm_keplr-92fb6499c0c1162e0a895cb4cebd842f.png"},8043:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/acrechain_bridge_connected_keplr-48710fa331b64323ed0cadf88134e286.png"},8883:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/acrechain_bridge_select_acrechain-f0447643f84b73329f81d71312a5482e.png"},426:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/acrechain_bridge_select_network-30d68959fdd31aec2579800439bcb598.png"},5770:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/acrechain_select_acrechain_from_list-ef02bde2009408955288fd468f8cc4df.png"}}]);