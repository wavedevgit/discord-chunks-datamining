/** Chunk was on web.js **/
/** chunk id: 677137, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  qW: () => a
});
var Chunk647438 = require("./647438.js");
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
let i = (0, Chunk647438.createContext)(false);

function a(e) {
  let t = (t, n) => (0, r.useContext)(i) ? null : e(t, n);
  return t.displayName = e.displayName || e.name, (0, r.forwardRef)(t)
}