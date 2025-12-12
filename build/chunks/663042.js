/** Chunk was on web.js **/
/** chunk id: 663042, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => l,
  o: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk343203 = require("./343203.js");
let o = e => e;

function a(e, t = o) {
  let n = r.useSyncExternalStore(e.subscribe, r.useCallback(() => t(e.getState()), [e, t]), r.useCallback(() => t(e.getInitialState()), [e, t]));
  return r.useDebugValue(n), n
}
let s = e => {
    let t = (0, i.M)(e),
      n = e => a(t, e);
    return Object.assign(n, t), n
  },
  l = e => e ? s(e) : s