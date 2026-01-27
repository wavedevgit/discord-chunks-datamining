/** Chunk was on web.js **/
/** chunk id: 353640, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => o,
  v: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk870844 = require("./870844.js");
let a = e => e;

function o(e, t = a) {
  let n = r.useSyncExternalStore(e.subscribe, r.useCallback(() => t(e.getState()), [e, t]), r.useCallback(() => t(e.getInitialState()), [e, t]));
  return r.useDebugValue(n), n
}
let s = e => {
    let t = (0, i.y)(e),
      n = e => o(t, e);
    return Object.assign(n, t), n
  },
  l = e => e ? s(e) : s