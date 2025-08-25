/** Chunk was on web.js **/
/** chunk id: 187282, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => o
});
var Chunk256402 = require("./256402.js"),
  Chunk647438 = require("./647438.js");

function o(e, t, n, o) {
  let a = (0, r.i)(n),
    s = null == n;
  (0, i.useEffect)(() => {
    if (s || !e.current) return;
    let n = e.current;
    return n.addEventListener(t, a, o), () => {
      n.removeEventListener(t, a, o)
    }
  }, [e, t, o, s, a])
}