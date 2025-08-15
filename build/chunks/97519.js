/** Chunk was on web.js **/
/** chunk id: 97519, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => l
});
var Chunk73800 = require("./73800.js"),
  Chunk842022 = require("./842022.js");
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