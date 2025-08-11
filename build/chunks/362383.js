/** Chunk was on web.js **/
/** chunk id: 362383, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => u,
  s: () => l
});
var Chunk73800 = require("./73800.js"),
  Chunk368179 = require("./368179.js"),
  Chunk842022 = require("./842022.js");
let {
  useSyncExternalStoreWithSelector: a
} = Chunk368179, s = e => e;

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