/** Chunk was on 47841 **/
/** chunk id: 665346, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk555337 = require("./555337.js");

function a(e, t) {
  let [n, a] = r.useState(false), c = (0, i.bG)([s.A], () => s.A.getProps().subsection), o = (0, i.bG)([l.A], () => l.A.useReducedMotion);
  r.useEffect(() => {
    n || null !== e.current && c === t && (a(true), e.current.scrollIntoView({
      behavior: o ? "auto" : "smooth"
    }))
  }, [n, c, t, o, e])
}