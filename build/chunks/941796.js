/** Chunk was on web.js **/
/** chunk id: 941796, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => a
});
var Chunk300941 = require("./300941.js"),
  Chunk647438 = require("./647438.js");

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