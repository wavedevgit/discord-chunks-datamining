/** Chunk was on web.js **/
/** chunk id: 808325, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk365311 = require("./365311.js"),
  Chunk37812 = require("./37812.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
let u = new Chunk365311.Z(() => (0, i.ZDy)(async () => {
  let {
    default: e
  } = await n.e("37971").then(n.bind(n, 848548));
  return t => (0, r.jsx)(e, c({}, t))
}, {
  modalKey: o._,
  onCloseRequest: s.VqG
}))