/** Chunk was on web.js **/
/** chunk id: 293335, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js");
let i = (e, t) => {
  let [n, i] = r.useState(false), o = r.useRef(false);
  return r.useEffect(() => {
    let t = e.reduce((e, t) => (e.includes(t.src) || e.push(t.src), e), []);
    i(t.length), o.current = t.length
  }, [e, o, i]), r.useEffect(() => {
    0 === n && t()
  }, [n, t]), {
    pending: n,
    pendingRef: o,
    setPending: i
  }
}