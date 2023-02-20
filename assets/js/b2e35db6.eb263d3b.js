"use strict";(self.webpackChunkarabledocs=self.webpackChunkarabledocs||[]).push([[539],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(a),h=o,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||r;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3313:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(7462),o=(a(7294),a(4137));const r={id:"undelegate-on-avalanche"},l="Undelegate/Unstake and Unbond on Avalanche",i={unversionedId:"wallet-guides/undelegate-on-avalanche",id:"wallet-guides/undelegate-on-avalanche",title:"Undelegate/Unstake and Unbond on Avalanche",description:"Introduction",source:"@site/docs/wallet-guides/undelegate-on-avalanche.md",sourceDirName:"wallet-guides",slug:"/wallet-guides/undelegate-on-avalanche",permalink:"/wallet-guides/undelegate-on-avalanche",draft:!1,tags:[],version:"current",frontMatter:{id:"undelegate-on-avalanche"},sidebar:"docs",previous:{title:"Connect Keplr Wallet to Acrechain",permalink:"/wallet-guides/connect-to-acrechain"},next:{title:"Bridge ACRE to Acrechain",permalink:"/wallet-guides/bridge-acre-to-acrechain"}},d={},s=[{value:"Introduction",id:"introduction",level:2},{value:"How to undelegate ACRE from a validator",id:"how-to-undelegate-acre-from-a-validator",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"undelegateunstake-and-unbond-on-avalanche"},"Undelegate/Unstake and Unbond on Avalanche"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"All staking infrastructure has been moved to Acresschain. This means that you can no longer recieve staking rewards on Avalanche. It is recommended that you undelegate/unstake any delegated ACRE, unbond them and move them to Acrechain using the ",(0,o.kt)("a",{parentName:"p",href:"https://bridge.arable.finance/#/"},"ACRE bridge")," and delegate them to a validator there. Most validators have already moved to Acrechain, and you can find the validators on Acrechain ",(0,o.kt)("a",{parentName:"p",href:"https://cosmosrun.info/acre-mainnet/staking"},"here"),"."),(0,o.kt)("p",null,"The unbonding period for delegated ACRE has been suspended, so you will be able to withdraw your ACRE tokens immediately."),(0,o.kt)("p",null,"To move your ACRE delegation from Avalanche to Acrechain, please follow these guides:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The guide you are reading right now will show you how to undelegate/unstake and unbond your ACRE tokens on Avalanche and transfer them to your wallet.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"wallet-guides/bridge-acre-to-acrechain"},"This guide")," will show you how to use the bridge your ACRE tokens to Acrechain.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"And finally ",(0,o.kt)("a",{parentName:"p",href:"wallet-guides/delegate-acre"},"this guide")," will show you how to delegate on Acrechain."))),(0,o.kt)("p",null,"Optionally, you can also use the ",(0,o.kt)("a",{parentName:"p",href:"validator-guides/restake-for-delegators"},"REStake guide")," to let your delegation automatically compound and earn more rewards. This is a feature this was not possible to implement on Avalanche, but is possible on Acrechain, because it is a chain based on the Cosmos SDK."),(0,o.kt)("h2",{id:"how-to-undelegate-acre-from-a-validator"},"How to undelegate ACRE from a validator"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the validators page on Avalanche and click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Delegate/Undelegate")," button of the validator you would like to undelegate from."),(0,o.kt)("div",{className:"img-center"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(6741).Z,width:"1945",height:"699"})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Undelegate")," button."),(0,o.kt)("div",{className:"img-center"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(8420).Z,width:"477",height:"273"})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Undeleagte your ACRE tokens."),(0,o.kt)("span",{className:"c-n"}," \u2460")," Click on ",(0,o.kt)("span",{className:"code"},"MAX")," to undelegate all your ACRE tokens. ",(0,o.kt)("br",null),(0,o.kt)("span",{className:"c-n"}," \u2461")," Click on ",(0,o.kt)("span",{className:"code"},"Undelegate")," to confirm the undelegation.",(0,o.kt)("div",{className:"img-center"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(6142).Z,width:"486",height:"308"})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Confirm the transaction in your MetaMask.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://app.arable.finance/#/unbondings"},"Unbondings page")," to see your unbonding ACRE tokens. The unbonding period has been suspended, so you will be able to withdraw your ACRE tokens immediately. Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Release")," to withdraw your ACRE tokens into your wallet."),(0,o.kt)("div",{className:"img-center"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(7197).Z,width:"1244",height:"543"})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Confirm the transaction in your MetaMask."))),(0,o.kt)("p",null,"You have successfully undelegated and unbonded your ACRE tokens from Avalanche. You can now use the ",(0,o.kt)("a",{parentName:"p",href:"https://bridge.arable.finance/#/"},"ACRE bridge")," to transfer your ACRE tokens to Acrechain. Use ",(0,o.kt)("a",{parentName:"p",href:"wallet-guides/bridge-acre-to-acrechain"},"this guide")," to learn how to do that."))}u.isMDXComponent=!0},7197:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/avalanche_unbond-c53e1cde3df76da53fe9a9828d9606b9.png"},6741:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/avalanche_undelegate-f60493fc9037dc001d588dc16b9b4fa0.png"},8420:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/avalanche_undelegate_2-5bb454b74d5f3a96d43885a407171ea0.png"},6142:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/avalanche_undelegate_3-e951d853d0f338a7874d4a407e58612f.png"}}]);