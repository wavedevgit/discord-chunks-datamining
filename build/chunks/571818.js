/** Chunk was on web.js **/
/** chunk id: 571818, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => a
});
var Chunk101741 = require("./101741.js"),
  Chunk647438 = require("./647438.js");

function a(e, t, n) {
  let a = (0, i.useRef)(t),
    o = (0, r.i)(() => {
      n && n(a.current)
    });
  (0, i.useEffect)(() => {
    var t;
    let n = null == e || null == (t = e.current) ? true : t.form;
    return null == n || n.addEventListener("reset", o), () => {
      null == n || n.removeEventListener("reset", o)
    }
  }, [e, o])
}