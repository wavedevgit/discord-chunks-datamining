/** Chunk was on web.js **/
/** chunk id: 617590, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  wP: () => d
}), require("./321073.js"), require("./65821.js");
var Chunk306173 = require("./306173.js"),
  Chunk279234 = require("./279234.js"),
  Chunk626584 = require("./626584.js"),
  Chunk954571 = require("./954571.js"),
  Chunk548965 = require("./548965.js"),
  Chunk652215 = require("./652215.js");
let c = new Chunk626584.A("libdiscore"),
  u = false;
async function d() {
  if (!u) {
    try {
      await (0, i.P)();
      let e = (0, r.t7)(6, 7);
      c.info("The answer for life the universe and everything is:", e), f()
    } catch (e) {
      _(e)
    }
    u = true
  }
}

function f() {
  let e = [];
  s.ML.forEach(t => {
    let n = t.getEnabledFeatureName();
    null != n && e.push(n)
  }), o.default.track(l.HAw.LIBDISCORE_LOADED, {
    success: true,
    experimental_features: e
  })
}

function p(e) {
  let t = "",
    n = null;
  return (e instanceof Error ? (t = e.message, n = e.name) : t = null != e ? String(e) : "Unknown error", t.length > 1e3 && (t = t.substring(0, 997) + "..."), null != n) ? "".concat(n, ": ").concat(t) : t
}

function _(e) {
  c.error("Failed to execute smoke test:", e);
  let t = p(e);
  o.default.track(l.HAw.LIBDISCORE_LOADED, {
    success: false,
    error: t
  })
}