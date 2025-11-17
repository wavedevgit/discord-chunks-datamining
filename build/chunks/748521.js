/** Chunk was on web.js **/
/** chunk id: 748521, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => u,
  s: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk326674 = require("./326674.js"),
  Chunk343203 = require("./343203.js");
let {
  useSyncExternalStoreWithSelector: o
} = Chunk326674, s = e => e;

function l(e, t = s, n) {
  let i = o(e.subscribe, e.getState, e.getInitialState, t, n);
  return r.useDebugValue(i), i
}
let c = (e, t) => {
    let n = (0, a.M)(e),
      r = (e, r = t) => l(n, e, r);
    return Object.assign(r, n), r
  },
  u = (e, t) => e ? c(e, t) : c