/** Chunk was on web.js **/
/** chunk id: 702992, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => a
});
var Chunk959462 = require("./959462.js"),
  Chunk64700 = require("./64700.js");

function a(e, t, n) {
  let a = (0, r.J)(() => {
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