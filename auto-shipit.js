(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{53:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;l(r(2));var o,n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}(r(0));l(r(1)),l(r(62));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r,n){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&l)for(var a in l)void 0===t[a]&&(t[a]=l[a]);else t||(t=l||{});if(1===i)t.children=n;else if(i>1){for(var s=new Array(i),u=0;u<i;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const s=e=>{var t,r;return r=t=class extends n.default.Component{constructor(...e){super(...e),a(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?n.default.createElement(e,this.props,this.props.children||null):null}},a(t,"defaultProps",{shouldLoad:!0}),r};s(()=>r.e(23).then(r.bind(null,63))),s(()=>r.e(23).then(r.bind(null,64)));var u=i("section",{},void 0,i("h1",{},void 0,i("code",{},void 0,"auto shipit")),i("p",{},void 0,"Run the full auto-release project. Will detect if in a lerna project and publish accordingly."),i("pre",{},void 0,i("code",{className:"language-sh"},void 0,"auto shipit",i("br",{}))));var d=e=>i("div",{className:e.className},void 0,u);t.default=d,e.exports=t.default}}]);
//# sourceMappingURL=auto-shipit.js.map