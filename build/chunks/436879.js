/** Chunk was on 384 **/
/** chunk id: 436879, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk999382 = require("./999382.js");

function s(e, t) {
  let [n, s] = r.useState(false), o = (0, i.e7)([a.Z], () => a.Z.getProps().subsection), c = (0, i.e7)([l.Z], () => l.Z.useReducedMotion);
  r.useEffect(() => {
    n || null !== e.current && o === t && (s(true), e.current.scrollIntoView({
      behavior: c ? "auto" : "smooth"
    }))
  }, [n, o, t, c, e])
}