/** Chunk was on 384 **/
/** chunk id: 436879, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk999382 = require("./999382.js");

function a(e, t) {
  let [n, a] = r.useState(false), o = (0, i.e7)([s.Z], () => s.Z.getProps().subsection), c = (0, i.e7)([l.Z], () => l.Z.useReducedMotion);
  r.useEffect(() => {
    n || null !== e.current && o === t && (a(true), e.current.scrollIntoView({
      behavior: c ? "auto" : "smooth"
    }))
  }, [n, o, t, c, e])
}