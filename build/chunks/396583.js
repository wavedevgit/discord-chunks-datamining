/** Chunk was on web.js **/
/** chunk id: 396583, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009);

function o(e, t) {
  let n = (0, r.useRef)(e),
    i = (0, r.useRef)(null);
  (0, r.useEffect)(() => {
    n.current = e
  }, [e]), (0, r.useEffect)(() => {
    function e() {
      a()(null != n.current, "Missing callback"), n.current()
    }
    if (null === t) {
      null !== i.current && (clearInterval(i.current), i.current = null);
      return
    }
    return i.current = setInterval(e, t), () => clearInterval(i.current)
  }, [t])
}