"use strict";(self.webpackChunkarabledocs=self.webpackChunkarabledocs||[]).push([[2651],{4137:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>h});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),h=i,g=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return t?n.createElement(g,o(o({ref:a},c),{},{components:t})):n.createElement(g,o({ref:a},c))}));function h(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3044:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=t(7462),i=(t(7294),t(4137));const r={id:"quickstart"},o="Quickstart",l={unversionedId:"quickstart",id:"quickstart",title:"Quickstart",description:"This guide will help you get started with Arable and Acrechain and all their possibilities.",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/quickstart",draft:!1,tags:[],version:"current",frontMatter:{id:"quickstart"}},s={},d=[{value:"ACRE - The native token of Arable",id:"acre---the-native-token-of-arable",level:2},{value:"Derivatives Trading",id:"derivatives-trading",level:2},{value:"Borrowing and Lending",id:"borrowing-and-lending",level:2},{value:"Farming",id:"farming",level:2},{value:"Staking",id:"staking",level:2},{value:"Liquidity Mining",id:"liquidity-mining",level:2},{value:"Delegated Staking",id:"delegated-staking",level:2},{value:"Stability Pool",id:"stability-pool",level:2},{value:"Governance",id:"governance",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],c={toc:d};function p(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"This guide will help you get started with Arable and Acrechain and all their possibilities."),(0,i.kt)("p",null,"Arable is a multi-chain DeFi service. This means that Arable is available on multiple blockchains. Currently, Arable is active on Avalanche, Evmos, and Acrechain. However not all features are available on all blockchains, this is something that we are working on."),(0,i.kt)("p",null,"Below we will go over what you can do on Arable and on which blockchains you can do it."),(0,i.kt)("h2",{id:"acre---the-native-token-of-arable"},"ACRE - The native token of Arable"),(0,i.kt)("p",null,"ACRE is the native token of Arable and is available on multiple chains, including Avalanche, Ethereum and Acrechain. With ACRE you can pay for gas fees on Acrechain, ",(0,i.kt)("a",{parentName:"p",href:"/quickstart#delegated-staking"},"stake (delegate)")," for validator rewards, and even shape the future of Acrechain by voting on proposals as a governance token."),(0,i.kt)("p",null,"Additionally, ACRE can be traded across multiple chains. To get the full list of all the chains that ACRE is available on, check out the ",(0,i.kt)("a",{parentName:"p",href:"/about/liquidity"},"Liquidity page"),"."),(0,i.kt)("h2",{id:"derivatives-trading"},"Derivatives Trading"),(0,i.kt)("p",null,"You can trade derivatives of many crypto coins on Arable. Derivatives are tokens that are pegged to the price of other cryptocurrencies. For example, atBTC is a derivative of Bitcoin and will be worth the same amount as Bitcoin. Derivatives are a great way to speculate on the price of other cryptocurrencies without having to buy them and hedge against price fluctuations. You can trade many coins on Arable from many blockchains, without actually having to own the coins on those blockchains. And you don't have to worry about high gas fees or using bridges to move your coins to the blockchain you want to trade on. And unlike on a CEX (centralized exchange), you keep full custody of your coins."),(0,i.kt)("p",null,"Right now trading is available on Avalanche and Evmos and soon Acrechain. To find out more about trading on Arable, read the ",(0,i.kt)("a",{parentName:"p",href:"/products/derivatives-v1"},"Derivative Trading")," page or start trading right away using our ",(0,i.kt)("a",{parentName:"p",href:"https://app.arable.finance/#/app/realtime-swap"},"real-time swap"),"."),(0,i.kt)("h2",{id:"borrowing-and-lending"},"Borrowing and Lending"),(0,i.kt)("p",null,"You can borrow and lend arUSD on Arable. arUSD is a stablecoin that is pegged to the US dollar. You can borrow, or 'mint', arUSD by depositing other cryptocurrencies as collateral. You can also lend, or 'burn', arUSD by withdrawing your collateral. arUSD is used by traders to purchase derivatives on Arable, it is the value that backs the derivatives. When you borrow arUSD you will earn from trading fees that are generated by traders trading derivatives at Arable, earn ACRE rewards, and profit from traders' losses. On the flip side, all arUSD borrowers will cover the profits traders make. To minimize lending risks it is recommended to hedge against traders' derivative positions."),(0,i.kt)("p",null,"You can borrow and lend arUSD on Avalanche, Evmos and soon Acrechain. Start borrowing and lending right away using our ",(0,i.kt)("a",{parentName:"p",href:"https://app.arable.finance/#/app/synth"},"arUSD Borrowing/Lending")," page."),(0,i.kt)("h2",{id:"farming"},"Farming"),(0,i.kt)("p",null,"You can farm derivatives at Arable. You can farm derivatives by depositing them into a farm and earning rewards in the form of that derivatives. For example, you can farm arETH (derivative of ETH) and earn arETH rewards."),(0,i.kt)("p",null,"Farming is available on Avalanche. Start farming right away using our ",(0,i.kt)("a",{parentName:"p",href:"https://app.arable.finance/#/app/farms"},"Farms")," page."),(0,i.kt)("h2",{id:"staking"},"Staking"),(0,i.kt)("p",null,"You can stake your ACRE tokens on Arable. Staking your ACRE tokens will earn you ACRE rewards."),(0,i.kt)("p",null,"Staking is available on Avalanche Start staking right away at our ",(0,i.kt)("a",{parentName:"p",href:"https://app.arable.finance/#/pools"},"Staking")," page."),(0,i.kt)("h2",{id:"liquidity-mining"},"Liquidity Mining"),(0,i.kt)("p",null,"Liquidity mining is a way to earn rewards by providing liquidity to a pool, such as the arUSD tri pool at ",(0,i.kt)("a",{parentName:"p",href:"https://avax.curve.fi/factory/86"},"Curve")," or the ",(0,i.kt)("a",{parentName:"p",href:"https://frontier.osmosis.zone/pool/875"},"ACRE/USDC pool")," at Osmosis."),(0,i.kt)("p",null,"Liquidity mining is available on Avalanche and Cosmos."),(0,i.kt)("p",null,"When providing liquidity on Avalanche you will receive LP tokens (liquidity provider tokens) that you can stake on the ",(0,i.kt)("a",{parentName:"p",href:"https://app.arable.finance/#/pools"},"Pools"),"](",(0,i.kt)("a",{parentName:"p",href:"https://app.arable.finance/#/pools"},"https://app.arable.finance/#/pools"),") page to earn ACRE rewards. Check out our ",(0,i.kt)("a",{parentName:"p",href:"/liquidity-mining-guides/providing-liquidity-on-avalanche"},"Avalanche liquidity mining guide")," for more information."),(0,i.kt)("p",null,"When providing liquidity on Osmosis you will earn OSMSO rewards and receive pool shares which you can then bond directly at Osmosis to earn even more OSMO rewards. Check out our ",(0,i.kt)("a",{parentName:"p",href:"/liquidity-mining-guides/providing-liquidity-on-osmosis"},"Osmosis liquidity mining guide")," for more information."),(0,i.kt)("h2",{id:"delegated-staking"},"Delegated Staking"),(0,i.kt)("p",null,"You can delegate your ACRE tokens to a validator on Arable. Delegated staking is a way to earn rewards by delegating your ACRE tokens to a validator. When you delegate your ACRE tokens to a validator you will receive ACRE rewards."),(0,i.kt)("p",null,"Delegated staking is available on Acrechain. Start delegated staking right away using our ",(0,i.kt)("a",{parentName:"p",href:"https://app.arable.finance/#/delegated-staking"},"Delegated Staking")," page."),(0,i.kt)("h2",{id:"stability-pool"},"Stability Pool"),(0,i.kt)("p",null,"You can swap between a variety of stablecoins at our stability pool. The stability pool allows swapping at a rate of always 1:1. You can also provide liquidity to the stability pool and earn ACRE rewards. The stability fund is a one-sided pool, which means you only have to deposit one stablecoin instead of pairing it up with another token."),(0,i.kt)("p",null,"The stability pool is available on Acrechain and Evmos. Start swapping and providing liquidity right away using our ",(0,i.kt)("a",{parentName:"p",href:"https://app.arable.finance/#/app/stability"},"Stability Pool")," page."),(0,i.kt)("h2",{id:"governance"},"Governance"),(0,i.kt)("p",null,"You can vote on proposals at Arable and help decide the future of Arable and Acrechain. You can also add your own proposals."),(0,i.kt)("p",null,"Voting is available on Acrechain. For more information on how to vote, read our ",(0,i.kt)("a",{parentName:"p",href:"/acrechain/governance"},"Governance")," page and visit our governance channels at Discord."),(0,i.kt)("h2",{id:"whats-next"},"What's next?"),(0,i.kt)("p",null,"Join us at our ",(0,i.kt)("a",{parentName:"p",href:"/about/socials"},"socials")," including our great communities on ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/bxFXCpk3hK"},"Discord")," and Telegram](",(0,i.kt)("a",{parentName:"p",href:"https://t.me/ArableProtocol"},"https://t.me/ArableProtocol"),") and feel free to ask any questions and give us feedback. See you soon!"))}p.isMDXComponent=!0}}]);