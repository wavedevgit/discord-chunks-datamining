/** Chunk was on web.js **/
/** chunk id: 533207, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk729937 = require("./729937.js"),
  Chunk981616 = require("./981616.js"),
  Chunk285933 = require("./285933.js"),
  Chunk227005 = require("./227005.js");

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
  (0, l.A)(d) && null != f && null != f.sync_id && (await (0, s.dM)(), await (0, s.G8)().catch(e => ((0, i.mMO)(async () => {
    let {
      default: e
    } = await n.e("3371").then(n.bind(n, 990726));
    return t => (0, r.jsx)(e, u({}, t))
  }), Promise.reject(e))), a.OH(f, p.id), (0, o.A)(t, p, f, c))
}