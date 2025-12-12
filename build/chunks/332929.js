/** Chunk was on web.js **/
/** chunk id: 332929, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk572614 = require("./572614.js");
let o = e => e;

function a(e, t = o) {
  let n = r.useSyncExternalStore(e.subscribe, () => t(e.getState()), () => t(e.getInitialState()));
  return r.useDebugValue(n), n
}
let s = e => {
    let t = (0, i.M)(e),
      n = e => a(t, e);
    return Object.assign(n, t), n
  },
  l = e => e ? s(e) : s