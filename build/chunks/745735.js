/** Chunk was on web.js **/
/** chunk id: 745735, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722);

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