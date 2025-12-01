/** Chunk was on web.js **/
/** chunk id: 894344, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk763472 = require("./763472.js"),
  Chunk647162 = require("./647162.js"),
  Chunk680686 = require("./680686.js"),
  Chunk131303 = require("./131303.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}
async function d(e, t, c) {
  let {
    hasSpotifyAccount: d,
    activity: f,
    user: p
  } = e;
  (0, l.Z)(d) && null != f && null != f.sync_id && (await (0, o.KV)(), await (0, o.yp)().catch(e => ((0, i.ZDy)(async () => {
    let {
      default: e
    } = await n.e("46317").then(n.bind(n, 841178));
    return t => (0, r.jsx)(e, u({}, t))
  }), Promise.reject(e))), a.Z_(f, p.id), (0, s.Z)(t, p, f, c))
}