/** Chunk was on 9536 **/
/** chunk id: 338327, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk639774 = require("./639774.js");

function a(e) {
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
let s = {
  open() {
    (0, Chunk481060.ZDy)(async () => {
      if (Chunk639774.f.getConfig({
          location: "EnableCommunityModalActionCreators"
        }).enabled) {
        let {
          default: e
        } = await Promise.all([require.e("57486"), require.e("43339")]).then(require.bind(require, 87026));
        return t => (0, r.jsx)(e, a({}, t))
      } {
        let {
          default: e
        } = await require.e("51218").then(require.bind(require, 848972));
        return t => (0, r.jsx)(e, a({}, t))
      }
    })
  }
}