/** Chunk was on web.js **/
/** chunk id: 447770, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => o
});
var Chunk484948 = require("./484948.js"),
  Chunk473749 = require("./473749.js");

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