/** Chunk was on web.js **/
/** chunk id: 353640, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => s,
  v: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk870844 = require("./870844.js");
let a = e => e;

function s(e, t = a) {
  let n = r.useSyncExternalStore(e.subscribe, r.useCallback(() => t(e.getState()), [e, t]), r.useCallback(() => t(e.getInitialState()), [e, t]));
  return r.useDebugValue(n), n
}
let o = e => {
    let t = (0, i.y)(e),
      n = e => s(t, e);
    return Object.assign(n, t), n
  },
  l = e => e ? o(e) : o