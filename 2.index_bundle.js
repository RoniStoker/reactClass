(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3],{26:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var o="?client_id=${id}&client_secret=${sec}";function a(e,t){return"Not Found"===e?"".concat(t," doesn't exist"):e}function c(e){return fetch("https://api.github.com/users/".concat(e,"/repos").concat(o,"&per_page=100")).then((function(e){return e.json()})).then((function(t){if(t.message)throw new Error(a(t.message,e));return t}))}function l(e,t){return 3*e+function(e){return e.reduce((function(e,t){return e+t.stargazers_count}),0)}(t)}function i(e){return Promise.all([(t=e,fetch("https://api.github.com/users/".concat(t).concat(o)).then((function(e){return e.json()})).then((function(e){if(e.message)throw new Error(a(e.message,t));return e}))),c(e)]).then((function(e){var t=r(e,2),n=t[0],o=t[1];return{profile:n,score:l(n.followers,o)}}));var t}function u(e){return Promise.all([i(e[0]),i(e[1])]).then((function(e){return function(e){return e.sort((function(e,t){return t.score-e.score}))}(e)}))}function s(e){var t=window.encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(e,"&sort=stars&order=desc&type=Repositories"));return fetch(t).then((function(e){return e.json()})).then((function(e){if(!e.items)throw new Error(e.message);return e.items}))}},27:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1),o=n.n(r),a=n(0),c=n.n(a),l=n(4);function i(e){var t=e.header,n=e.subheader,r=e.avatar,a=e.href,c=e.name,i=e.children;return o.a.createElement(l.a,null,(function(e){e.theme;return o.a.createElement("div",{className:"card bg-${theme}"},o.a.createElement("h4",{className:"header-lg center-text"},t),o.a.createElement("img",{className:"avatar",src:r,alt:"Avatar for ".concat(c)}),n&&o.a.createElement("h4",{className:"center-text"},n),o.a.createElement("h2",{className:"center-text"},o.a.createElement("a",{className:"link",href:a},c)),i)}))}i.propTypes={header:c.a.string.isRequired,subheader:c.a.string,avatar:c.a.string.isRequired,href:c.a.string.isRequired,name:c.a.string.isRequired}},28:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(0),c=n.n(a);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=u(t).call(this,e))||"object"!==l(o)&&"function"!=typeof o?s(r):o).state={hovering:!1},n.mouseOver=n.mouseOver.bind(s(n)),n.mouseOut=n.mouseOut.bind(s(n)),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(r=[{key:"mouseOver",value:function(){this.setState({hovering:!0})}},{key:"mouseOut",value:function(){this.setState({hovering:!1})}},{key:"render",value:function(){return o.a.createElement("div",{onMouseOver:this.mouseOver,onMouseOut:this.mouseOut},this.props.children(this.state.hovering))}}])&&i(n.prototype,r),a&&i(n,a),t}(o.a.Component),m={container:{position:"relative",display:"flex"},tooltip:{boxSizing:"border-box",position:"absolute",width:"160px",bottom:"100%",left:"50%",marginLeft:"-80px",borderRadius:"3px",backgroundColor:"hsla(0, 0%, 20%, 0.9)",padding:"7px",marginBottom:"5px",color:"#fff",textAlign:"center",fontSize:"14px"}};function b(e){var t=e.text,n=e.children;e.hovering;return o.a.createElement(p,null,(function(e){return o.a.createElement("div",{style:m.container},!0===e&&o.a.createElement("div",{style:m.tooltip},t),n)}))}b.propTypes={text:c.a.string.isRequired};t.a=b},30:function(e,t,n){"use strict";const r=n(31),o=n(32),a=n(33);function c(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function l(e,t){return t.decode?o(e):e}function i(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function u(e){const t=(e=i(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function s(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function f(e,t){const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":return(e,t,n)=>{const r="string"==typeof t&&t.split("").indexOf(",")>-1?t.split(","):t;n[e]=r};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},t)),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const o of e.split("&")){let[e,c]=a(t.decode?o.replace(/\+/g," "):o,"=");c=void 0===c?null:l(c,t),n(l(e,t),c,r)}for(const e of Object.keys(r)){const n=r[e];if("object"==typeof n&&null!==n)for(const e of Object.keys(n))n[e]=s(n[e],t);else r[e]=s(n,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((e,t)=>{const n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}t.extract=u,t.parse=f,t.stringify=(e,t)=>{if(!e)return"";const n=function(e){switch(e.arrayFormat){case"index":return t=>(n,r)=>{const o=n.length;return void 0===r||e.skipNull&&null===r?n:null===r?[...n,[c(t,e),"[",o,"]"].join("")]:[...n,[c(t,e),"[",c(o,e),"]=",c(r,e)].join("")]};case"bracket":return t=>(n,r)=>void 0===r||e.skipNull&&null===r?n:null===r?[...n,[c(t,e),"[]"].join("")]:[...n,[c(t,e),"[]=",c(r,e)].join("")];case"comma":return t=>(n,r)=>null==r||0===r.length?n:0===n.length?[[c(t,e),"=",c(r,e)].join("")]:[[n,c(r,e)].join(",")];default:return t=>(n,r)=>void 0===r||e.skipNull&&null===r?n:null===r?[...n,c(t,e)]:[...n,[c(t,e),"=",c(r,e)].join("")]}}(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)),r=Object.assign({},e);if(t.skipNull)for(const e of Object.keys(r))void 0!==r[e]&&null!==r[e]||delete r[e];const o=Object.keys(r);return!1!==t.sort&&o.sort(t.sort),o.map(r=>{const o=e[r];return void 0===o?"":null===o?c(r,t):Array.isArray(o)?o.reduce(n(r),[]).join("&"):c(r,t)+"="+c(o,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>({url:i(e).split("?")[0]||"",query:f(u(e),t)})},31:function(e,t,n){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)},32:function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],a(n),a(r))}function c(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=o.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var r=c(n[0]);r!==n[0]&&(t[n[0]]=r)}n=o.exec(e)}t["%C2"]="�";for(var a=Object.keys(t),l=0;l<a.length;l++){var i=a[l];e=e.replace(new RegExp(i,"g"),t[i])}return e}(e)}}},33:function(e,t,n){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},34:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var r=n(1),o=n.n(r),a=n(26),c=n(29),l=n(27),i=n(0),u=n.n(i),s=n(7),f=n(28),p=n(30),m=n.n(p),b=n(6);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=e.profile;return o.a.createElement("ul",{className:"card-list"},o.a.createElement("li",null,o.a.createElement(c.i,{color:"rgb(239, 115, 115)",size:22}),t.name),t.location&&o.a.createElement("li",null,o.a.createElement(f.a,{text:"User's location"},o.a.createElement(c.c,{color:"rgb(144, 115, 255)",size:22}),t.location)),t.company&&o.a.createElement("li",null,o.a.createElement(f.a,{text:"User's company"},o.a.createElement(c.a,{color:"#795548",size:22}),t.company)),o.a.createElement("li",null,o.a.createElement(c.k,{color:"rgb(129, 195, 245)",size:22}),t.followers.toLocaleString()," followers"),o.a.createElement("li",null,o.a.createElement(c.j,{color:"rgb(64, 183, 95)",size:22}),t.following.toLocaleString()," following"))}E.propTypes={profile:u.a.object.isRequired};var w=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=d(this,g(t).call(this,e))).state={winner:null,loser:null,error:null,loading:!0},n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this,t=m.a.parse(this.props.location.search),n=t.playerOne,r=t.playerTwo;Object(a.a)([n,r]).then((function(t){e.setState({winner:t[0],loser:t[1],error:null,loading:!1})})).catch((function(t){var n=t.message;e.setState({error:n,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.winner,n=e.loser,r=e.error;return!0===e.loading?o.a.createElement(s.a,{text:"Battling",speed:"100"}):r?o.a.createElement("p",{className:"center-text error"},r):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"grid space-around container-sm"},o.a.createElement(l.a,{header:t.score===n.score?"Tie":"Winner",subheader:"Score: ".concat(t.score.toLocaleString()),avatar:t.profile.avatar_url,href:t.profile.html_url,name:t.profile.login},o.a.createElement(E,{profile:t.profile})),o.a.createElement(l.a,{header:t.score===n.score?"Tie":"Loser",subheader:"Score: ".concat(n.score.toLocaleString()),avatar:n.profile.avatar_url,href:n.profile.html_url,name:n.profile.login},o.a.createElement(E,{profile:n.profile}))),o.a.createElement(b.a,{to:"/battle",className:"btn dark-btn btn-space"},"Reset"))}}])&&h(n.prototype,r),c&&h(n,c),t}(o.a.Component)},36:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var r=n(1),o=n.n(r),a=n(29),c=n(0),l=n.n(c),i=(n(34),n(4)),u=n(6);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function b(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?h(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(){return o.a.createElement(i.a,null,(function(e){var t=e.theme;return o.a.createElement("div",{className:"instructions-container"},o.a.createElement("h1",{className:"center-text header-lg"},"Instructions"),o.a.createElement("ol",{className:"container-sm grid center-text battle-instructions"},o.a.createElement("li",null,o.a.createElement("h3",{className:"header-sm"},"Enter two Github users"),o.a.createElement(a.j,{className:"bg-".concat(t),color:"rgb(255, 191, 116)",size:140})),o.a.createElement("li",null,o.a.createElement("h3",{className:"header-sm"},"Battle"),o.a.createElement(a.e,{className:"bg-".concat(t),color:"#727272",size:140})),o.a.createElement("li",null,o.a.createElement("h3",{className:"header-sm"},"See the winners"),o.a.createElement(a.h,{className:"bg-".concat(t),color:"rgb(255, 215, 0)",size:140}))))}))}var w=function(e){function t(){var e,n;f(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return v(h(n=b(this,(e=y(t)).call.apply(e,[this].concat(o)))),"state",{username:""}),v(h(n),"handleSubmit",(function(e){e.preventDefault(),n.props.onSubmit(n.state.username)})),v(h(n),"handleChange",(function(e){n.setState({username:e.target.value})})),n}return d(t,e),m(t,[{key:"render",value:function(){var e=this;return o.a.createElement(i.a,null,(function(t){var n=t.theme;return o.a.createElement("form",{className:"column player",onSubmit:e.handleSubmit},o.a.createElement("label",{htmlFor:"username",className:"player-label"},e.props.label),o.a.createElement("div",{className:"row player-inputs"},o.a.createElement("input",{type:"text",id:"username",className:"input-".concat(n),placeholder:"github username",autoComplete:"off",value:e.state.username,onChange:e.handleChange}),o.a.createElement("button",{className:"btn ".concat("dark"===n?"light-btn":"dark-btn"),type:"submit",disabled:!e.state.username},"Submit")))}))}}]),t}(o.a.Component);function O(e){var t=e.username,n=e.onReset,r=e.label;return o.a.createElement(i.a,null,(function(e){var c=e.theme;return o.a.createElement("div",{className:"column player"},o.a.createElement("h3",{className:"player-label"},r),o.a.createElement("div",{className:"row bg-".concat(c)},o.a.createElement("div",{className:"player-info"},o.a.createElement("img",{className:"avatar-small",src:"https://github.com/".concat(t,".png?size=200"),alt:"Avatar for ".concat(t)}),o.a.createElement("a",{href:"https://github.com/".concat(t),className:"link"},t)),o.a.createElement("button",{className:"btn-clear flex-center",onClick:n},o.a.createElement(a.g,{color:"rgb(194, 57, 42)",size:26}))))}))}w.propTypes={onSubmit:l.a.func.isRequired,label:l.a.string.isRequired},O.propTypes={username:l.a.string.isRequired,onReset:l.a.func.isRequired,label:l.a.string.isRequired};var j=function(e){function t(){var e,n;f(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return v(h(n=b(this,(e=y(t)).call.apply(e,[this].concat(o)))),"state",{playerOne:null,playerTwo:null}),v(h(n),"handleSubmit",(function(e,t){n.setState(v({},e,t))})),v(h(n),"handleReset",(function(e){n.setState(v({},e,null))})),n}return d(t,e),m(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.playerOne,r=t.playerTwo;return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,null),o.a.createElement("div",{className:"players-container"},o.a.createElement("h1",{className:"center-text header-lg"},"Players"),o.a.createElement("div",{className:"row space-around"},null===n?o.a.createElement(w,{label:"Player One",onSubmit:function(t){return e.handleSubmit("playerOne",t)}}):o.a.createElement(O,{username:n,label:"Player One",onReset:function(){return e.handleReset("playerOne")}}),null===r?o.a.createElement(w,{label:"Player Two",onSubmit:function(t){return e.handleSubmit("playerTwo",t)}}):o.a.createElement(O,{username:r,label:"Player Two",onReset:function(){return e.handleReset("playerTwo")}})),n&&r&&o.a.createElement(u.a,{className:"btn dark-btn btn-space",to:{pathname:"/battle/results",search:"?playerOne=".concat(n,"&playerTwo=").concat(r)}},"Battle")))}}]),t}(o.a.Component)}}]);