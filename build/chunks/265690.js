/** Chunk was on web.js **/
/** chunk id: 265690, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => u,
  n: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk179637 = require("./179637.js"),
  Chunk870844 = require("./870844.js");
let {
  useSyncExternalStoreWithSelector: s
} = Chunk179637, o = e => e;

function l(e, t = o, n) {
  let i = s(e.subscribe, e.getState, e.getInitialState, t, n);
  return r.useDebugValue(i), i
}
let c = (e, t) => {
    let n = (0, a.y)(e),
      r = (e, r = t) => l(n, e, r);
    return Object.assign(r, n), r
  },
  u = (e, t) => e ? c(e, t) : c