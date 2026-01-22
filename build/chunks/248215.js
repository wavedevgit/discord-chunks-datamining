/** Chunk was on web.js **/
/** chunk id: 248215, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => a
});
var Chunk959462 = require("./959462.js"),
  Chunk64700 = require("./64700.js");

function a(e, t, n, a) {
  let s = (0, r.J)(n),
    o = null == n;
  (0, i.useEffect)(() => {
    if (o || !e.current) return;
    let n = e.current;
    return n.addEventListener(t, s, a), () => {
      n.removeEventListener(t, s, a)
    }
  }, [e, t, a, o, s])
}