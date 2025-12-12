/** Chunk was on web.js **/
/** chunk id: 179549, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => o
});
var Chunk484948 = require("./484948.js"),
  Chunk473749 = require("./473749.js");

function o(e, t, n) {
  let o = (0, r.i)(() => {
    n && n(t)
  });
  (0, i.useEffect)(() => {
    var t;
    let n = null == e || null == (t = e.current) ? true : t.form;
    return null == n || n.addEventListener("reset", o), () => {
      null == n || n.removeEventListener("reset", o)
    }
  }, [e, o])
}