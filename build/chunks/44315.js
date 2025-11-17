/** Chunk was on web.js **/
/** chunk id: 44315, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K3: () => _,
  Lq: () => d,
  Sl: () => f
}), require("./704826.js"), require("./35282.js");
var Chunk473749 = require("./473749.js"),
  Chunk688619 = require("./688619.js"),
  a = require.n(Chunk688619),
  Chunk691324 = require("./691324.js"),
  Chunk399606 = require("./399606.js"),
  Chunk900089 = require("./900089.js"),
  Chunk607070 = require("./607070.js");

function u(e) {
  return e.toUpperCase().replace(/-/g, "_")
}

function d(e) {
  return (0, l.Fw)(u(e))
}

function f(e) {
  return null != e ? o.b[e] : null
}

function _(e) {
  let t = (0, s.e7)([c.Z], () => c.Z.saturation);
  return r.useMemo(() => {
    if (null == e) return null;
    if ("currentColor" === e || e.startsWith("var(")) return e;
    let n = a()(e);
    return n.set("hsl.s", n.get("hsl.s") * t).hex()
  }, [e, t])
}
require("./981631.js")