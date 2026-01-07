/** Chunk was on web.js **/
/** chunk id: 176159, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _G: () => a,
  qW: () => o
});
var Chunk473749 = require("./473749.js");
if ("undefined" != typeof HTMLTemplateElement) {
  let e = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild").get;
  Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
    configurable: true,
    enumerable: true,
    get: function() {
      return this.dataset.reactAriaHidden ? this.content.firstChild : e.call(this)
    }
  })
}
let i = (0, Chunk473749.createContext)(false);

function a(e) {
  if ((0, r.useContext)(i)) return r.createElement(r.Fragment, null, e.children);
  let t = r.createElement(i.Provider, {
    value: true
  }, e.children);
  return r.createElement("template", {
    "data-react-aria-hidden": true
  }, t)
}

function o(e) {
  let t = (t, n) => (0, r.useContext)(i) ? null : e(t, n);
  return t.displayName = e.displayName || e.name, (0, r.forwardRef)(t)
}