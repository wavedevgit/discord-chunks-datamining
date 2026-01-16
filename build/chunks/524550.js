/** Chunk was on web.js **/
/** chunk id: 524550, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => u,
  s: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk856225 = require("./856225.js"),
  Chunk771196 = require("./771196.js");
let {
  useSyncExternalStoreWithSelector: o
} = Chunk856225, s = e => e;

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