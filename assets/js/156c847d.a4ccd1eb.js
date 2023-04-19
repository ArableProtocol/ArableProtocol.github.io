"use strict";(self.webpackChunkarabledocs=self.webpackChunkarabledocs||[]).push([[2319],{4137:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=s(a),c=r,u=k["".concat(p,".").concat(c)]||k[c]||d[c]||l;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3871:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(4137));const l={id:"setting-up-metamask"},i="Setting Up MetaMask",o={unversionedId:"wallet-guides/setting-up-metamask",id:"wallet-guides/setting-up-metamask",title:"Setting Up MetaMask",description:"Introduction",source:"@site/docs/wallet-guides/setting-up-metamask.md",sourceDirName:"wallet-guides",slug:"/wallet-guides/setting-up-metamask",permalink:"/wallet-guides/setting-up-metamask",draft:!1,tags:[],version:"current",frontMatter:{id:"setting-up-metamask"},sidebar:"docs",previous:{title:"Guides: Wallets",permalink:"/category/guides-wallets"},next:{title:"Connect Keplr Wallet to Acrechain",permalink:"/wallet-guides/connect-to-acrechain"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Add the Avalanche Network",id:"add-the-avalanche-network",level:2},{value:"Add the Evmos Network",id:"add-the-evmos-network",level:2},{value:"Add the Arbitrum Network",id:"add-the-arbitrum-network",level:2},{value:"Add Support for the ACRE Token",id:"add-support-for-the-acre-token",level:2}],m={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-metamask"},"Setting Up MetaMask"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The Arable products are currently available on the following chains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Avalanche"),(0,r.kt)("li",{parentName:"ul"},"Evmos"),(0,r.kt)("li",{parentName:"ul"},"Arbitrum")),(0,r.kt)("p",null,"We will add more EVM-compatible chains in the future. To use Arable on EVM chains we recommend the ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," wallet software."),(0,r.kt)("p",null,"Below will show the step-by-step procedure on how to add those chains on Metamask and followed by how to add the ACRE token for it to be visible in the assets overview."),(0,r.kt)("p",null,"If you do not have MetaMask installed yet, you can download it from ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"https://metamask.io/"),"."),(0,r.kt)("h2",{id:"add-the-avalanche-network"},"Add the Avalanche Network"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the network drop-down button in the top right. As default, the Ethereum Mainnet network is selected."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://about.arable.finance/assets/images/choose_network-r-90cb58e1ae18bc0555e52fb92bba1ac3.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Network"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://about.arable.finance/assets/images/add_network-r-d9a292225eb170f33163209fa8af7acc.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Add a network manually")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://about.arable.finance/assets/images/add_network_manually-5ea15f0cefda09827af787bf29d2d55a.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following settings and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Save"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Network Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"Avalanche Network")),(0,r.kt)("li",{parentName:"ul"},"New RPC URL: ",(0,r.kt)("a",{parentName:"li",href:"https://api.avax.network/ext/bc/C/rpc"},(0,r.kt)("inlineCode",{parentName:"a"},"https://api.avax.network/ext/bc/C/rpc"))),(0,r.kt)("li",{parentName:"ul"},"ChainID: ",(0,r.kt)("inlineCode",{parentName:"li"},"43114")),(0,r.kt)("li",{parentName:"ul"},"Symbol: ",(0,r.kt)("inlineCode",{parentName:"li"},"AVAX")),(0,r.kt)("li",{parentName:"ul"},"Explorer: ",(0,r.kt)("a",{parentName:"li",href:"https://snowtrace.io/"},(0,r.kt)("inlineCode",{parentName:"a"},"https://snowtrace.io/")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://about.arable.finance/assets/images/1_add_avalanche-a7fcd4f9dcee2bb995b96bcb3ae4ae61.png",alt:null})))),(0,r.kt)("h2",{id:"add-the-evmos-network"},"Add the Evmos Network"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To add the Evmos network, repeat the previous steps, but during the last step (#4) enter the following information instead:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Network Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"Evmos Network")),(0,r.kt)("li",{parentName:"ul"},"New RPC URL: ",(0,r.kt)("a",{parentName:"li",href:"https://rpc2-acre.synergynodes.com/"},(0,r.kt)("inlineCode",{parentName:"a"},"https://rpc2-acre.synergynodes.com/"))),(0,r.kt)("li",{parentName:"ul"},"ChainID: ",(0,r.kt)("inlineCode",{parentName:"li"},"9052")),(0,r.kt)("li",{parentName:"ul"},"Symbol: ",(0,r.kt)("inlineCode",{parentName:"li"},"ACRE")),(0,r.kt)("li",{parentName:"ul"},"Explorer: ",(0,r.kt)("a",{parentName:"li",href:"https://evm.acrescan.com/"},(0,r.kt)("inlineCode",{parentName:"a"},"https://evm.acrescan.com/")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://about.arable.finance/assets/images/2_add_evmos-5c791c72364110f38c3b9e6e7b8d20e5.png",alt:null})))),(0,r.kt)("h2",{id:"add-the-arbitrum-network"},"Add the Arbitrum Network"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To add the Arbtrum network, repeat the previous steps, but during the last step (#4) enter the following information instead:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Network Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"Arbitrum")),(0,r.kt)("li",{parentName:"ul"},"New RPC URL: ",(0,r.kt)("a",{parentName:"li",href:"https://arb1.arbitrum.io/rpcChain"},(0,r.kt)("inlineCode",{parentName:"a"},"https://arb1.arbitrum.io/rpcChain"))),(0,r.kt)("li",{parentName:"ul"},"ChainID: ",(0,r.kt)("inlineCode",{parentName:"li"},"42161")),(0,r.kt)("li",{parentName:"ul"},"Symbol: ",(0,r.kt)("inlineCode",{parentName:"li"},"ETH")),(0,r.kt)("li",{parentName:"ul"},"Explorer: ",(0,r.kt)("a",{parentName:"li",href:"https://arbiscan.io//"},(0,r.kt)("inlineCode",{parentName:"a"},"https://arbiscan.io//")))))),(0,r.kt)("h2",{id:"add-support-for-the-acre-token"},"Add Support for the ACRE Token"),(0,r.kt)("p",null,"To be able to view ACRE tokens in your MetaMask wallet we have to add the token address."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We import ACRE to MetaMask by adding its contract address. Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Import tokens"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To add the ACRE token, follow these steps:"),(0,r.kt)("p",{parentName:"li"},"\u2460 Add the ACRE contract address to the input field:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"0x00EE200Df31b869a321B10400Da10b561F3ee60d")),(0,r.kt)("p",{parentName:"li"},"The ACRE ",(0,r.kt)("a",{parentName:"p",href:"https://snowtrace.io/address/0x00ee200df31b869a321b10400da10b561f3ee60ds"},"contract address")," is the same for both Avalanche and Evmos."),(0,r.kt)("p",{parentName:"li"},"\u2461 Select Arable Protocol (ACRE) from the dropdown menu",(0,r.kt)("br",{parentName:"p"}),"\n","\u2462 Click Next"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://about.arable.finance/assets/images/mm_choose_acre-3876d35b8f3ff5bbf285802da9e21e41.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To confirm the import, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Import tokens"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://about.arable.finance/assets/images/4_ent_address_r-822d1c86dd74b5b5e9609bb3dbb7f0b8.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"<")," arrow on the top left."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://about.arable.finance/assets/images/6_click_arrow_r-02f78824d68f33868c847c9251093225.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now you should be able to see the ACRE token entry."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://about.arable.finance/assets/images/3_import_tokens-9d64c91059600d9626dd75f7bb9da6f2.png",alt:null})))))}d.isMDXComponent=!0}}]);