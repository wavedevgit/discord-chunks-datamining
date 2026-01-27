/** Chunk was on web.js **/
/** chunk id: 931239, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk93023 = require("./93023.js");
let a = e => e;

function o(e, t = a) {
  let n = r.useSyncExternalStore(e.subscribe, () => t(e.getState()), () => t(e.getInitialState()));
  return r.useDebugValue(n), n
}
let s = e => {
    let t = (0, i.y)(e),
      n = e => o(t, e);
    return Object.assign(n, t), n
  },
  l = e => e ? s(e) : s