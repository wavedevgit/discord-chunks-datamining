/** Chunk was on web.js **/
/** chunk id: 131193, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => u,
  s: () => l
});
var Chunk647438 = require("./647438.js"),
  Chunk922365 = require("./922365.js"),
  Chunk101186 = require("./101186.js");
let {
  useSyncExternalStoreWithSelector: a
} = Chunk922365, s = e => e;

function l(e, t = s, n) {
  let i = a(e.subscribe, e.getState, e.getInitialState, t, n);
  return r.useDebugValue(i), i
}
let c = (e, t) => {
    let n = (0, o.M)(e),
      r = (e, r = t) => l(n, e, r);
    return Object.assign(r, n), r
  },
  u = (e, t) => e ? c(e, t) : c