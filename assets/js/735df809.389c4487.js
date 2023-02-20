"use strict";(self.webpackChunkarabledocs=self.webpackChunkarabledocs||[]).push([[4132],{4137:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||o;return a?r.createElement(k,l(l({ref:t},m),{},{components:a})):r.createElement(k,l({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5191:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(4137));const o={id:"restake-for-validators"},l="REStake for Validators",i={unversionedId:"validator-guides/restake-for-validators",id:"validator-guides/restake-for-validators",title:"REStake for Validators",description:"REStake is a service that allows you to automatically re-stake your self-delegation rewards and allow your delegators to automatically re-stake their rewards. This means that they won't have to manually claim their rewards and re-delegate them to your validator.",source:"@site/docs/validator-guides/restake-for-validators.md",sourceDirName:"validator-guides",slug:"/validator-guides/restake-for-validators",permalink:"/validator-guides/restake-for-validators",draft:!1,tags:[],version:"current",frontMatter:{id:"restake-for-validators"},sidebar:"docs",previous:{title:"Autocompound with REStake",permalink:"/validator-guides/restake-for-delegators"},next:{title:"Delegate ACRE on Acrechain",permalink:"/wallet-guides/delegate-acre"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Set up REStake",id:"set-up-restake",level:2},{value:"Install Docker and Docker Compose",id:"install-docker-and-docker-compose",level:3},{value:"Start the Docker container",id:"start-the-docker-container",level:3},{value:"Clone and configure REStake",id:"clone-and-configure-restake",level:3},{value:"Submitting your operator",id:"submitting-your-operator",level:2},{value:"Fork and clone the Validator Registry",id:"fork-and-clone-the-validator-registry",level:3},{value:"Add your validator address",id:"add-your-validator-address",level:3},{value:"Add your validator identity",id:"add-your-validator-identity",level:3},{value:"Submit a pull request",id:"submit-a-pull-request",level:3},{value:"Set REStake to run automatically on a schedule",id:"set-restake-to-run-automatically-on-a-schedule",level:2},{value:"Create a systemd unit file for REStake",id:"create-a-systemd-unit-file-for-restake",level:3},{value:"Create a systemd timer for REStake",id:"create-a-systemd-timer-for-restake",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"restake-for-validators"},"REStake for Validators"),(0,n.kt)("p",null,"REStake is a service that allows you to automatically re-stake your self-delegation rewards and allow your delegators to automatically re-stake their rewards. This means that they won't have to manually claim their rewards and re-delegate them to your validator."),(0,n.kt)("p",null,"To set up REStake, you need to authorize REStake to send transactions on your behalf. This is done by using Authz, a new feature in Cosmos blockchains."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You need to have a ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ArableProtocol/acrechain/tree/main/networks/mainnet/acre_9052-1"},"validator set up")," on the ACRE Mainnet."),(0,n.kt)("li",{parentName:"ul"},"Set up a separate wallet for REStake. This wallet will be used to authorize REStake to send transactions on your behalf."),(0,n.kt)("li",{parentName:"ul"},"You need to have at least 1 ACRE in your REStake wallet.")),(0,n.kt)("h2",{id:"set-up-restake"},"Set up REStake"),(0,n.kt)("p",null,"The following steps will guide you through the process of setting up REStake and is based on the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eco-stake/restake"},"REStake Readme"),"."),(0,n.kt)("h3",{id:"install-docker-and-docker-compose"},"Install Docker and Docker Compose"),(0,n.kt)("p",null,"If you do not want to use Docker, you can follow the instructions in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eco-stake/restake#instructions-for-npm"},"REStake Readme")," to install REStake without Docker using NPM instead."),(0,n.kt)("p",null,"REStake is a Docker container that runs on your server. To install Docker and Docker Compose, follow the instructions on the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker website"),"."),(0,n.kt)("p",null,"For Ubuntu, you can also use the following guides:"),(0,n.kt)("p",null,"Install Docker: ",(0,n.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04"},"https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04")),(0,n.kt)("p",null,"Install Docker Compose: ",(0,n.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-20-04"},"https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-20-04")),(0,n.kt)("h3",{id:"start-the-docker-container"},"Start the Docker container"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Start the Docker container in the background:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,n.kt)("p",{parentName:"li"},"If you reboot the server, you will need to start the Docker container again.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the logs of the container:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," docker-compose logs -f\n")))),(0,n.kt)("h3",{id:"clone-and-configure-restake"},"Clone and configure REStake"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clone the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eco-stake/restake"},"REStake repository"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/eco-stake/restake\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change the directory to the ",(0,n.kt)("inlineCode",{parentName:"p"},"restake")," folder:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd restake\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy the ",(0,n.kt)("inlineCode",{parentName:"p"},".env.example")," file to ",(0,n.kt)("inlineCode",{parentName:"p"},".env")," and fill in the values. You will need to add the mnemonic seed phrase of your REStake wallet."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env.example .env\nnano .env\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the dependencies and build the Docker container:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," docker-compose run --rm app npm install\n docker-compose build --no-cache\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new file:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"echo '{\"acrechain\": {}}' > src/networks.local.json\n")))),(0,n.kt)("h2",{id:"submitting-your-operator"},"Submitting your operator"),(0,n.kt)("p",null,"The REStake bot will automatically re-stake your rewards. To do this, you need to submit your operator address to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eco-stake/validator-registry"},"Validator Registry"),"."),(0,n.kt)("h3",{id:"fork-and-clone-the-validator-registry"},"Fork and clone the Validator Registry"),(0,n.kt)("p",null,"Update the Validator Registry to include your operator data for auto-compounding on any desired networks."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fork the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eco-stake/validator-registry"},"Validator Registry")," repository.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clone the Validator Registry repository fork."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/<my-github-user-name>/restake-validator-registry\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change the directory to the validator-registry folder:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd validator-registry\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new directory for your validator:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir <your-validator-name>\n")))),(0,n.kt)("h3",{id:"add-your-validator-address"},"Add your validator address"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new file in your favorite text editor:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"nano <your-validator-name>/chains.json\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the following JSON to the file:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "../chains.schema.json",\n  "name": "<your-validator-name>",\n  "chains": [\n    {\n      "name": "acrechain",\n      "address": "<your-validator-address>",\n      "restake": {\n        "address": "<your-restake-wallet-address>",\n        "run_time": ["09:00", "21:00"],\n        "minimum_reward": 100000000000000000\n      }\n    }\n  ]\n}\n')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"restake.run_time")," is the UTC time you want your bot to run. You can give it a single time, for example 09:00, for one run at 9am UTC. You can also use an array of times, for example ",(0,n.kt)("inlineCode",{parentName:"p"},'["09:00", "21:00"]')," for two runs. And if you want multiple runs per hour/day, use an interval string, for example ",(0,n.kt)("inlineCode",{parentName:"p"},'"every 15 minutes"'),"."))),(0,n.kt)("h3",{id:"add-your-validator-identity"},"Add your validator identity"),(0,n.kt)("p",null,"You will need to generate a public key with keybase.io and add it to your profile file."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you do not have a keybase account, create one at ",(0,n.kt)("a",{parentName:"p",href:"https://keybase.io/"},"keybase.io"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Using the keybase CLI, generate a new key:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"keybase pgp gen\n")),(0,n.kt)("p",{parentName:"li"},"In the next step we will add the key ID to your profile file. The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eco-stake/validator-registry"},"Validator Registry Readme")," is not clear whether the key ID is the full fingerprint, which can be viewed by running ",(0,n.kt)("inlineCode",{parentName:"p"},"keybase pgp list")," or the ID that is shown at the end of running the previous command. We will be using the latter since the format conforms to the example in the readme (",(0,n.kt)("inlineCode",{parentName:"p"},"5992A6D423A406D6"),").")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new file in your favourite text editor:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"nano <your-validator-name>/profile.json\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the following JSON to the file:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "../profile.schema.json",\n  "name": "<your-validator-name>",\n  "identity": "<your-key-id>"\n}\n')))),(0,n.kt)("h3",{id:"submit-a-pull-request"},"Submit a pull request"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Commit and push your changes to your forked repository:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "Add <your-validator-name> to Validator Registry"\ngit push\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Submit a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eco-stake/validator-registry/pulls"},"pull request")," to the Validator Registry repository to update your operator. REStake will then update within 15 minutes of the changes being merged."))),(0,n.kt)("h2",{id:"set-restake-to-run-automatically-on-a-schedule"},"Set REStake to run automatically on a schedule"),(0,n.kt)("p",null,"You can set REStake to run automatically on a schedule using systemd. First, we will create a systemd unit file and then a systemd timer file to call the unit file."),(0,n.kt)("h3",{id:"create-a-systemd-unit-file-for-restake"},"Create a systemd unit file for REStake"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new file:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/system/restake.service\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the following to the file:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," [Unit]\n Description=restake service with docker compose\n Requires=docker.service\n After=docker.service\n Wants=restake.timer\n\n [Service]\n Type=oneshot\n WorkingDirectory=/path/to/restake\n ExecStart=/usr/local/bin/docker-compose run --rm app npm run autostake\n\n [Install]\n WantedBy=multi-user.target\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable the service:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable restake.service\n")))),(0,n.kt)("h3",{id:"create-a-systemd-timer-for-restake"},"Create a systemd timer for REStake"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new file:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/system/restake.timer\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the following to the file, to run twice a day at 9am and 9pm UTC:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," [Unit]\n Description=restake timer\n\n [Timer]\n OnCalendar=*-*-* 09:00:00\n OnCalendar=*-*-* 21:00:00\n Persistent=true\n\n [Install]\n WantedBy=timers.target\n")),(0,n.kt)("p",{parentName:"li"},"Or if you want to run every hour:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," [Unit]\n Description=restake timer\n\n [Timer]\n OnCalendar=*-*-* *:00:00\n Persistent=true\n\n [Install]\n WantedBy=timers.target\n")),(0,n.kt)("p",{parentName:"li"},"Or if you want to run every 5 minutes:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," [Unit]\n Description=restake timer\n\n [Timer]\n OnCalendar=*-*-* *:00/5:00\n Persistent=true\n\n [Install]\n WantedBy=timers.target\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You can check variants of intervals using systemd-analyze:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"systemd-analyze calendar --iterations=8 '*:00/5:00' | grep Iter\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable the timer:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable restake.timer\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Start the timer:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," sudo systemctl start restake.timer\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the status of the timer:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," sudo systemctl status restake.timer\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the logs of the timer:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," sudo journalctl -u restake.timer\n")))))}u.isMDXComponent=!0}}]);