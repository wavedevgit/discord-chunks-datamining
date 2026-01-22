/** Chunk was on web.js **/
/** chunk id: 749401, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk310784 = require("./310784.js"),
  a = require.n(Chunk310784),
  Chunk417597 = require("./417597.js"),
  Chunk775602 = require("./775602.js");

function l(e) {
  let t = (0, s.bG)([o.A], () => o.A.saturation);
  return r.useMemo(() => {
    if (null == e) return null;
    if ("currentColor" === e || e.startsWith("var(")) return e;
    let n = a()(e);
    return n.set("hsl.s", n.get("hsl.s") * t).hex()
  }, [e, t])
}