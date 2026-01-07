/** Chunk was on web.js **/
/** chunk id: 177692, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mn: () => d
}), require("./539854.js"), require("./415506.js");
var Chunk668757 = require("./668757.js"),
  Chunk511495 = require("./511495.js"),
  Chunk710845 = require("./710845.js"),
  Chunk626135 = require("./626135.js"),
  Chunk894276 = require("./894276.js"),
  Chunk981631 = require("./981631.js");
let c = new Chunk710845.Z("libdiscore"),
  u = false;
async function d() {
  if (!u) {
    try {
      await (0, i.e)();
      let e = (0, r.rs)(6, 7);
      c.info("The answer for life the universe and everything is:", e), f()
    } catch (e) {
      _(e)
    }
    u = true
  }
}

function f() {
  let e = [];
  s.Re.forEach(t => {
    let n = t.getEnabledFeatureName();
    null != n && e.push(n)
  }), o.default.track(l.rMx.LIBDISCORE_LOADED, {
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
  o.default.track(l.rMx.LIBDISCORE_LOADED, {
    success: false,
    error: t
  })
}