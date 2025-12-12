/** Chunk was on web.js **/
/** chunk id: 447770, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => a
});
var Chunk484948 = require("./484948.js"),
  Chunk473749 = require("./473749.js");

function a(e, t, n, a) {
  let o = (0, r.i)(n),
    s = null == n;
  (0, i.useEffect)(() => {
    if (s || !e.current) return;
    let n = e.current;
    return n.addEventListener(t, o, a), () => {
      n.removeEventListener(t, o, a)
    }
  }, [e, t, a, s, o])
}