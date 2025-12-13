/** Chunk was on web.js **/
/** chunk id: 938111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js");

function o(e, t) {
  let n = (0, i.e7)([a.Z], () => a.Z.useReducedMotion);
  r.useEffect(() => {
    if (!t) return;
    let r = e.current;
    if (null == r) return;
    let i = requestAnimationFrame(() => {
      r.scrollIntoView({
        behavior: n ? "auto" : "smooth"
      })
    });
    return () => cancelAnimationFrame(i)
  }, [e, t, n])
}