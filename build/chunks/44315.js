/** Chunk was on web.js **/
/** chunk id: 44315, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk688619 = require("./688619.js"),
  o = require.n(Chunk688619),
  Chunk399606 = require("./399606.js"),
  Chunk607070 = require("./607070.js");

function l(e) {
  let t = (0, a.e7)([s.Z], () => s.Z.saturation);
  return r.useMemo(() => {
    if (null == e) return null;
    if ("currentColor" === e || e.startsWith("var(")) return e;
    let n = o()(e);
    return n.set("hsl.s", n.get("hsl.s") * t).hex()
  }, [e, t])
}