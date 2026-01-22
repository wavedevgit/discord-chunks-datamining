/** Chunk was on web.js **/
/** chunk id: 94343, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js");

function s(e, t) {
  let n = (0, i.bG)([a.A], () => a.A.useReducedMotion);
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