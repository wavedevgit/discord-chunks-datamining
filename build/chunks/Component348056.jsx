/** Chunk was on web.js **/
/** chunk id: 348056, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk148810 = require("./148810.js"),
  Chunk521502 = require("./521502.js"),
  Chunk380610 = require("./380610.js"),
  Chunk446347 = require("./446347.jsx"),
  Chunk390486 = require("./390486.js");
async function d(e) {
  if (200 !== (await (0, o.oA)(e)).status) throw Error("Build override couldn't apply");
  window.location.reload(true)
}
async function f(e) {
  if (200 !== (await (0, o.Zk)(e)).status) throw Error("Build override couldn't apply");
  window.location.reload(true)
}
async function p() {
  await (0, o.iD)(), window.location.reload(true)
}
let _ = Chunk64700.memo(function(e) {
  let {
    url: t
  } = e, n = (0, a.cf)([s.A], () => s.A.getCurrentBuildOverride()), o = (0, a.bG)([s.A], () => s.A.getBuildOverride(t)), {
    payload: _,
    validatedURL: h
  } = o, m = n.state === s.U.Resolving || o.state === s.U.Resolving, g = i.useCallback(() => {
    if ((0, l.h4)(o.url) && null != o.override) {
      var e;
      return f(null == (e = o.override) ? true : e.targetBuildOverride)
    }
    return null == _ ? Promise.reject(Error("Invalid override payload")) : ((0, u.R)(o.override, _), d(_))
  }, [_, o]);
  return null != h ? (0, r.jsx)(c.A, {
    loading: m,
    linkMeta: o.override,
    currentOverrides: n.overrides,
    applyBuildOverride: g,
    clearBuildOverride: p,
    url: h
  }) : null
})