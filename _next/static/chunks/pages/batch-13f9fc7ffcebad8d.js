(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[624],{3162:function(e,t,n){var r,a,i;a=[],void 0===(i="function"===typeof(r=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){l(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,s=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,t,n){var s=o.URL||o.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?i(l):a(l.href)?r(e,t,n):i(l,l.target="_blank")):(l.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){i(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,o){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,o),n);else if(a(e))r(e,n,o);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){i(s)}))}}:function(e,t,n,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,n);var i="application/octet-stream"===e.type,l=/constructor/i.test(o.HTMLElement)||o.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&l||s)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},d.readAsDataURL(e)}else{var u=o.URL||o.webkitURL,f=u.createObjectURL(e);a?a.location=f:location.href=f,a=null,setTimeout((function(){u.revokeObjectURL(f)}),4e4)}});o.saveAs=l.saveAs=l,e.exports=l})?r.apply(t,a):r)||(e.exports=i)},3427:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});n(7294);var r=n(3977),a=n(1608),i=n(1555),o=n(5893);function s(){return(0,o.jsx)("div",{className:"header",children:(0,o.jsx)(r.Z,{children:(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(i.Z,{className:"headerTxt",md:8,xs:12,children:"ETH Wallet Generator"}),(0,o.jsx)(i.Z,{className:"headetRht",md:4,xs:12,children:"\xa9 Web3 Camp"})]})})})}var l=n(9521),c=n(545),d=n(7462),u=n(3778),f=n(1664),p=n(1163),h=l.ZP.ul.withConfig({displayName:"Lftbox__UlLft",componentId:"sc-108grez-0"})(["padding:0;li{display:flex;align-content:center;margin-bottom:10px;padding:10px 20px;.lft{margin-right:10px;}.rht{line-height:1.8em;}a{text-decoration:none;color:#666666;}&:hover,&.active{background:#f8f8f8;border-radius:8px;}}"]);function m(){var e=(0,p.useRouter)();return(0,o.jsx)("div",{children:(0,o.jsxs)(h,{children:[(0,o.jsxs)("li",{className:"/"===e.pathname?"active":"",children:[(0,o.jsx)("span",{className:"lft",children:(0,o.jsx)(d.Z,{color:"#bbb"})}),(0,o.jsx)("span",{className:"rht",children:(0,o.jsx)(f.default,{href:"/",children:"Create/Recovery ETH Address"})})]}),(0,o.jsxs)("li",{className:"/batch"===e.pathname?"active":"",children:[(0,o.jsx)("span",{className:"lft",children:(0,o.jsx)(u.Z,{color:"#bbb"})}),(0,o.jsx)("span",{className:"rht",children:(0,o.jsx)(f.default,{href:"/batch",children:"Batch Create ETH Address"})})]})]})})}var v=l.ZP.div.withConfig({displayName:"footerBox__Footer",componentId:"sc-5ilt5y-0"})(["height:80px;margin-top:60px;width:100%;padding-top:15px;background:#fff;font-size:14px;.midBox{display:flex;justify-content:space-between;align-items:center;}img{width:40px;height:40px;}.lft{padding-left:10px;}a{display:inline-block;margin-left:20px;}"]);function x(){return(0,o.jsx)(v,{children:(0,o.jsx)(r.Z,{children:(0,o.jsxs)("div",{className:"midBox",children:[(0,o.jsx)("a",{href:"https://web3camp.us",target:"_blank",rel:"noreferrer",children:(0,o.jsx)("div",{className:"lft",children:"\xa9 2022 Web3camp.us"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("a",{href:"https://github.com/Web3Camp-Labs/ETH-Wallet-Generator",target:"_blank",rel:"noreferrer",children:(0,o.jsx)("img",{src:"./github.png",alt:""})}),(0,o.jsx)("a",{href:"https://twitter.com/Web3Camp",target:"_blank",rel:"noreferrer",children:(0,o.jsx)("img",{src:"./Twitter.png",alt:""})})]})]})})})}var y=l.ZP.div.withConfig({displayName:"layout__MainContent",componentId:"sc-tvt3yy-0"})(["display:flex;flex-direction:column;min-height:100vh;"]),b=l.ZP.div.withConfig({displayName:"layout__MainBox",componentId:"sc-tvt3yy-1"})(["display:flex;flex-grow:1;"]),g=(0,l.ZP)(r.Z).withConfig({displayName:"layout__BgBox",componentId:"sc-tvt3yy-2"})(["margin-top:30px;"]),j=(0,l.ZP)(c.Z).withConfig({displayName:"layout__CardBox",componentId:"sc-tvt3yy-3"})(["border:0;box-shadow:0 0 5px #ccc;border-radius:6px;"]);function w(e){var t=e.children;return(0,o.jsxs)(y,{children:[(0,o.jsx)(s,{}),(0,o.jsx)(b,{children:(0,o.jsx)(g,{children:(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(i.Z,{md:3,xs:12,children:(0,o.jsx)(m,{})}),(0,o.jsxs)(i.Z,{md:9,xs:12,children:[" ",(0,o.jsx)(j,{body:!0,children:t})]})]})})}),(0,o.jsx)(x,{})]})}},4510:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(t),n.d(t,{default:function(){return F}});var i=n(29);function o(e){var t;if("undefined"!==typeof Symbol&&(Symbol.asyncIterator&&(t=e[Symbol.asyncIterator]),null==t&&Symbol.iterator&&(t=e[Symbol.iterator])),null==t&&(t=e["@@asyncIterator"]),null==t&&(t=e["@@iterator"]),null==t)throw new TypeError("Object is not async iterable");return t.call(e)}var s=n(7794),l=n.n(s),c=n(7294),d=n(3427),u=n(4119),f=n(1358),p=n(3680),h=n(6968),m=n(9521),v=n(5697),x=n.n(v),y=["color","size","title"];function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j=(0,c.forwardRef)((function(e,t){var n=e.color,r=e.size,a=e.title,i=g(e,y);return c.createElement("svg",b({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:n},i),a?c.createElement("title",null,a):null,c.createElement("path",{d:"M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"}),c.createElement("path",{d:"M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"}))}));j.propTypes={color:x().string,size:x().oneOfType([x().string,x().number]),title:x().string},j.defaultProps={color:"currentColor",size:"1em",title:null};var w=j,O=["color","size","title"];function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E=(0,c.forwardRef)((function(e,t){var n=e.color,r=e.size,a=e.title,i=_(e,O);return c.createElement("svg",k({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:n},i),a?c.createElement("title",null,a):null,c.createElement("path",{fillRule:"evenodd",d:"M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"}),c.createElement("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}),c.createElement("path",{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"}))}));E.propTypes={color:x().string,size:x().oneOfType([x().string,x().number]),title:x().string},E.defaultProps={color:"currentColor",size:"1em",title:null};var C=E,A=n(2153),N=n(1372),T=n(2751),Z=n(3162),S=n(3454),P=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{l(r.next(e))}catch(t){i(t)}}function s(e){try{l(r.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((r=r.apply(e,t||[])).next())}))};const L="function"===typeof requestAnimationFrame?requestAnimationFrame:S.nextTick;const I=(e,t,n,r,a,i,o)=>{const s=function(e,t){return[...Array(Math.ceil(e.length/t))].reduce(((n,r,a)=>{const i=a*t;return n.concat([e.slice(i,i+t)])}),[])}(r,o);let l=0;return function r(){if(l>=s.length)return void e(n);const o=s[l];l+=1,o.map((e=>Array.isArray(e)?e:a.map((t=>{var n;return null!==(n=e[t])&&void 0!==n?n:""})))).forEach((e=>{n.push(e.map(t).join(i))})),L(r)}};function M({columns:e,datas:t,separator:n=",",noHeader:r=!1,wrapColumnChar:a="",newLineAtEnd:i=!1,chunkSize:o=1e3}){return P(this,void 0,void 0,(function*(){return new Promise(((s,l)=>P(this,void 0,void 0,(function*(){const c=((e,t)=>n=>{t&&n.push(""),e(n.join("\r\n"))})(s,i),d=(u=a,e=>`${u}${e}${u}`);var u;try{if(t="function"===typeof t?yield t():yield t,!Array.isArray(t))return s();const a=e?(e=>e.reduce(((e,t)=>{var n;return"string"===typeof t?e[t]=t:e[t.id]=null!==(n=t.displayName)&&void 0!==n?n:t.id,e}),{}))(e):(e=>e.reduce(((e,t)=>{return Array.isArray(t)?e:(n=e,Object.keys(t).reduce(((e,t)=>(e[t]=t,e)),n));var n}),{}))(t),i=[];if(!r){const e=Object.values(a);e.length>0&&i.push(e.map(d).join(n))}const l=Object.keys(a),u=I(c,d,i,t,l,n,o);L(u)}catch(f){return l(f)}}))))}))}var B=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{l(r.next(e))}catch(t){i(t)}}function s(e){try{l(r.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((r=r.apply(e,t||[])).next())}))},z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};class H extends c.Component{constructor(){super(...arguments),this.handleClick=()=>B(this,void 0,void 0,(function*(){const{suffix:e,prefix:t,bom:n,extension:r,disabled:a,meta:i,separator:o,handleError:s,handleEmpty:l}=this.props;if(a)return;let c,{filename:d}=this.props;try{c=yield M(this.props)}catch(m){return null===s||void 0===s?void 0:s(m)}if(!c){if(l)return l();c=""}const u=!1!==n?"\ufeff":"",f=i?`sep=${o}\r\n`:"",p=r||".csv";-1===d.indexOf(p)&&(d+=p),e&&(d="string"===typeof e||"number"===typeof e?d.replace(p,`_${e}${p}`):d.replace(p,`_${(new Date).getTime()}${p}`)),t&&(d="string"===typeof t||"number"===typeof t?`${t}_${d}`:`${(new Date).getTime()}_${d}`);const h=new Blob([`${u}${f}${c}`],{type:"text/csv;charset=utf-8"});Z.saveAs(h,d)}))}render(){const e=this.props,{children:t,text:n,disabled:r,filename:a,suffix:i,prefix:o,bom:s,columns:l,datas:d,separator:u,noHeader:f,wrapColumnChar:p,newLineAtEnd:h,chunkSize:m}=e,v=z(e,["children","text","disabled","filename","suffix","prefix","bom","columns","datas","separator","noHeader","wrapColumnChar","newLineAtEnd","chunkSize"]);return"undefined"===typeof t?c.createElement("button",Object.assign({type:"button"},v,{onClick:this.handleClick,disabled:r}),n||"Download"):c.createElement("div",Object.assign({role:"button",tabIndex:0},v,{onClick:this.handleClick,onKeyPress:this.handleClick}),t)}}var R=n(5893),$=m.ZP.ul.withConfig({displayName:"batch__Ulbox",componentId:"sc-g82lnm-0"})(['margin-top:20px;li{background:#f8f8f8;padding:0 20px;margin-bottom:20px;user-select:none;&>div{padding:20px 0;border-bottom:1px solid #ddd;display:flex;word-break:break-all;&:last-child{border-bottom:0;}}.title{min-width:130px;display:flex;.titleMain{white-space:nowrap;}.iconbox{margin-right:10px;}span{color:purple;font-family:"din_bold";}}}']),U=m.ZP.div.withConfig({displayName:"batch__BtnGroup",componentId:"sc-g82lnm-1"})(["display:flex;button{margin-right:20px;}"]),W=m.ZP.div.withConfig({displayName:"batch__Total",componentId:"sc-g82lnm-2"})(['font-family:"din_bold";color:purple;margin-top:20px;background:#f8f8f8;padding:20px;span{margin-right:10px;color:#666;}']),D=m.ZP.div.withConfig({displayName:"batch__LoadingBox",componentId:"sc-g82lnm-3"})(["display:flex;align-content:center;justify-content:center;margin:50px 0;span{margin-left:20px;}"]);function F(){var e,t=(0,c.useState)([]),n=t[0],r=t[1],s=(0,c.useState)(!1),d=s[0],m=s[1],v=(0,c.useState)(""),x=v[0],y=v[1],b=function(){var e=(0,i.Z)(l().mark((function e(){var t,n,r,a,i,o,s,c,d;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=A.OF(),e.next=3,A.OI(t,"");case 3:return n=e.sent,r=N.hdkey.fromMasterSeed(n),"m/44'/60'/0'/0/0",a=r.derivePath("m/44'/60'/0'/0/0"),i=a._hdkey._privateKey,o=(0,T.bufferToHex)(i),s=a._hdkey._publicKey,(0,T.bufferToHex)(s),c=(0,T.pubToAddress)(s,!0),d=(0,T.bufferToHex)(c),e.abrupt("return",{address:d,mnemonic:t,privateKey:o});case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=(0,i.Z)(l().mark((function e(){var t,n,i,s,c,d,u,f;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(!0),t=a(Array(x)),n=[],i=!1,s=!1,e.prev=5,d=o(t);case 7:return e.next=9,d.next();case 9:if(!(i=!(u=e.sent).done)){e.next=18;break}return u.value,e.next=13,b();case 13:f=e.sent,n.push(f);case 15:i=!1,e.next=7;break;case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(5),s=!0,c=e.t0;case 24:if(e.prev=24,e.prev=25,!i||null==d.return){e.next=29;break}return e.next=29,d.return();case 29:if(e.prev=29,!s){e.next=32;break}throw c;case 32:return e.finish(29);case 33:return e.finish(24);case 34:m(!1),r(n);case 36:case"end":return e.stop()}}),e,null,[[5,20,24,34],[25,,29,33]])})));return function(){return e.apply(this,arguments)}}();return(0,R.jsxs)("div",{children:[(0,R.jsx)("div",{children:(0,R.jsx)(u.Z,{controlId:"floatingInput",label:"Number of wallets created",className:"mb-3",children:(0,R.jsx)(f.Z.Control,{type:"text",placeholder:"Number of wallets created",value:x,onChange:function(e){return function(e){var t=e.target;y(parseInt(t.value))}(e)}})})}),(0,R.jsxs)(U,{children:[(0,R.jsx)(p.Z,{variant:"flat",onClick:function(){return g()},children:"Batch Create ETH Address"}),!!n.length&&(0,R.jsxs)(H,{datas:n,filename:"myWallets_".concat(null===(e=n[0])||void 0===e?void 0:e.address),extension:".csv",children:[" ",(0,R.jsxs)(p.Z,{variant:"dark",children:[" ",(0,R.jsx)(w,{})," Download"]})]})]}),(0,R.jsxs)(W,{children:[(0,R.jsx)("span",{children:" Created:"}),null===n||void 0===n?void 0:n.length]}),(0,R.jsx)("div",{children:(0,R.jsxs)($,{children:[d&&(0,R.jsxs)(D,{children:[(0,R.jsx)(h.Z,{animation:"border",variant:"dark"})," ",(0,R.jsx)("span",{children:"Loading..."})]}),null===n||void 0===n?void 0:n.map((function(e,t){return(0,R.jsxs)("li",{children:[(0,R.jsxs)("div",{children:[(0,R.jsxs)("div",{className:"title",children:[(0,R.jsx)("div",{className:"iconbox",children:(0,R.jsx)(C,{color:"purple"})}),(0,R.jsx)("div",{className:"titleMain",children:"address"}),(0,R.jsx)("span",{children:t+1})]}),(0,R.jsx)("div",{children:e.address})]}),(0,R.jsxs)("div",{children:[(0,R.jsxs)("div",{className:"title",children:[(0,R.jsx)("div",{className:"iconbox",children:(0,R.jsx)(C,{color:"purple"})}),(0,R.jsx)("div",{className:"titleMain",children:"mnemonic"})]}),(0,R.jsx)("div",{children:e.mnemonic})]}),(0,R.jsxs)("div",{children:[(0,R.jsxs)("div",{className:"title",children:[(0,R.jsx)("div",{className:"iconbox",children:(0,R.jsx)(C,{color:"purple"})}),(0,R.jsx)("div",{className:"titleMain",children:"private key"})]}),(0,R.jsx)("div",{children:e.privateKey})]})]},e.address)}))]})})]})}F.getLayout=function(e){return(0,R.jsx)(d.Z,{children:e})}},2312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/batch",function(){return n(4510)}])},6601:function(){},9214:function(){},5568:function(){},2361:function(){},4616:function(){}},function(e){e.O(0,[714,37,774,888,179],(function(){return t=2312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);