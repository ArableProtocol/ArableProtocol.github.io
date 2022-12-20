"use strict";(self.webpackChunkarabledocs=self.webpackChunkarabledocs||[]).push([[7553],{4137:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(h,o(o({ref:t},s),{},{components:a})):n.createElement(h,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(4137));const i={id:"bridge-acre-to-acrechain"},o="Bridge ACRE to Acrechain",l={unversionedId:"wallet-guides/bridge-acre-to-acrechain",id:"wallet-guides/bridge-acre-to-acrechain",title:"Bridge ACRE to Acrechain",description:"Introduction",source:"@site/docs/wallet-guides/bridge-acre-to-acrechain.md",sourceDirName:"wallet-guides",slug:"/wallet-guides/bridge-acre-to-acrechain",permalink:"/wallet-guides/bridge-acre-to-acrechain",draft:!1,tags:[],version:"current",frontMatter:{id:"bridge-acre-to-acrechain"},sidebar:"docs",previous:{title:"Undelegate/Unstake and Unbond on Avalanche",permalink:"/wallet-guides/undelegate-on-avalanche"},next:{title:"Buying ACRE on Avalanche",permalink:"/wallet-guides/buying-acre-on-avalanche"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements",id:"requirements",level:2},{value:"How to Bridge ACRE",id:"how-to-bridge-acre",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],s={toc:d};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bridge-acre-to-acrechain"},"Bridge ACRE to Acrechain"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"If you want to use ACRE in Acrechain, you need to bridge it from EVM-compatible networks like Avalanche to Acrechain. This guide will show you how to do that."),(0,r.kt)("span",{className:"badge badge--danger"},"NOTE")," At the moment you can only bridge ACRE in one direction, from Avalanche to Acrechain. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"We are working on adding the ability to bridge ACRE in the other direction, but do not have an estimated date for when that will be available."),(0,r.kt)("p",null,"The Arable app is only available on Avalanche and Evmos at the moment, and the main reason to bridge ACRE to Acrechain is to use it to delegate to a validator."),(0,r.kt)("p",null,"We are working on bringing the Arable app to Acrechain, and have all features like derivates, lending, and borrowing available on Acrechain. We will update this guide when the Arable app is available on Acrechain."),(0,r.kt)("p",null,"We well stay on Avalanche however and continue to offer our app on even more chains in the future."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"This guide will assume that you are using MetaMask as your EVM-compatible wallet and Keplr as your Acrechain wallet. If you do not have a MetaMask or Keplr wallet you can follow these guides to ",(0,r.kt)("a",{parentName:"p",href:"/wallet-guides/adding-acre-to-metamask"},"Connect MetaMask to Avalanche")," and ",(0,r.kt)("a",{parentName:"p",href:"/wallet-guides/connect-to-acrechain"},"Connect Keplr to Acrechain"),"."),(0,r.kt)("h2",{id:"how-to-bridge-acre"},"How to Bridge ACRE"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("a",{parentName:"p",href:"https://bridge.arable.finance/"},"Acrebridge"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect EVM Wallet")," button to connect to your MetaMask wallet."),(0,r.kt)("div",{className:"img-center"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(2352).Z,width:"1012",height:"711"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose MetaMask as your wallet provider."),(0,r.kt)("div",{className:"img-center"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5395).Z,width:"365",height:"243"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm the connection request in your MetaMask wallet.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect to Keplr")," button to connect to your Keplr wallet."),(0,r.kt)("div",{className:"img-center"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(2121).Z,width:"1022",height:"734"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm the connection request in your Keplr wallet.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure you are connected to the Avalanche network in your MetaMask wallet. If you are not connected to the Avalanche network, follow ",(0,r.kt)("a",{parentName:"p",href:"/wallet-guides/connect-to-acrechain"},"this guide")," to add Acrechain to Keplr."),(0,r.kt)("div",{className:"img-center"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(9996).Z,width:"344",height:"441"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the amount and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Swap"),"."),(0,r.kt)("span",{className:"c-n"}," \u2460")," Enter the amount of ACRE you want to bridge. ",(0,r.kt)("br",null),(0,r.kt)("span",{className:"c-n"}," \u2461")," Click on ",(0,r.kt)("span",{className:"code"},"Swap"),(0,r.kt)("div",{className:"img-center"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1043).Z,width:"999",height:"762"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm the transaction in your MetaMask wallet.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait for the transaction to be completed. This can take anywhere up to 5 minutes but is usually much faster."),(0,r.kt)("div",{className:"img-center"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6839).Z,width:"1001",height:"770"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can now see your ACRE in your Keplr wallet."),(0,r.kt)("div",{className:"img-center"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(9391).Z,width:"339",height:"444"}))))),(0,r.kt)("h2",{id:"whats-next"},"What's next?"),(0,r.kt)("p",null,"Now that you have bridged your ACRE to Acrechain, you can delegate it to a validator. You can find a guide on how to do that ",(0,r.kt)("a",{parentName:"p",href:"/wallet-guides/delegate-acre"},"here"),"."))}p.isMDXComponent=!0},6839:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/acrebridge_acre_bridged-d8522ed774f4a04b2d7cad145c425a7d.png"},9391:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/acrebridge_acre_in_keplr-6b255d5b2782fd3c7c35e4e5387105fc.png"},1043:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/acrebridge_bridge_acre-760a1a6dd33af7ced8ffbf915d751d65.png"},5395:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/acrebridge_choose_mm-ab4437c55d780f2751e5708cdfe33d5f.png"},2121:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/acrebridge_connect_keplr-d7e8c04bfad35448ffe3d884b88211f4.png"},2352:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/acrebridge_connect_mm-2dfff6df48c8709bb50b049d12f22bb0.png"},9996:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/acrechain_keplr_connected-8077e058f06170672cabcbb0e4a993bf.png"}}]);