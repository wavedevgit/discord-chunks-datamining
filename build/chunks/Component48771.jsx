/** Chunk was on 47841 **/
/** chunk id: 48771, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk60501 = require("./60501.js");

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let a = {
  open() {
    (0, i.mMO)(async () => {
      if (l.J.getConfig({
          location: "EnableCommunityModalActionCreators"
        }).enabled) {
        let {
          default: e
        } = await Promise.all([n.e("20115"), n.e("85981")]).then(n.bind(n, 939006));
        return t => (0, r.jsx)(e, s({}, t))
      } {
        let {
          default: e
        } = await n.e("92853").then(n.bind(n, 135668));
        return t => (0, r.jsx)(e, s({}, t))
      }
    })
  }
}