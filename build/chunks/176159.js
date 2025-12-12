/** Chunk was on web.js **/
/** chunk id: 176159, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _G: () => o,
  qW: () => a
});
var Chunk473749 = require("./473749.js");
if ("undefined" != typeof HTMLTemplateElement) {
  let e = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild").get;
  Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
    configurable: true,
    enumerable: true,
    get: function() {
      return this.dataset.reactAriaHidden ? this.content.firstChild : module.call(this)
    }
  })
}
let i = (0, Chunk473749.createContext)(false);

function o(e) {
  if ((0, r.useContext)(i)) return r.createElement(r.Fragment, null, e.children);
  let t = r.createElement(i.Provider, {
    value: true
  }, e.children);
  return r.createElement("template", {
    "data-react-aria-hidden": true
  }, t)
}

function a(e) {
  let t = (t, n) => (0, r.useContext)(i) ? null : e(t, n);
  return t.displayName = e.displayName || e.name, (0, r.forwardRef)(t)
}