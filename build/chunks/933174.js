/** Chunk was on web.js **/
/** chunk id: 933174, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk891567 = require("./891567.js");
let a = e => e;

function o(e, t = a) {
  let n = r.useSyncExternalStore(e.subscribe, () => t(e.getState()), () => t(e.getInitialState()));
  return r.useDebugValue(n), n
}
let s = e => {
    let t = (0, i.M)(e),
      n = e => o(t, e);
    return Object.assign(n, t), n
  },
  l = e => e ? s(e) : s