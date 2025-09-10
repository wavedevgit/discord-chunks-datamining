/** Chunk was on web.js **/
/** chunk id: 408558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => a
});
var Chunk256402 = require("./256402.js"),
  Chunk647438 = require("./647438.js");

function a(e, t, n) {
  let a = (0, r.i)(() => {
    n && n(t)
  });
  (0, i.useEffect)(() => {
    var t;
    let n = null == e || null == (t = e.current) ? true : t.form;
    return null == n || n.addEventListener("reset", a), () => {
      null == n || n.removeEventListener("reset", a)
    }
  }, [e, a])
}