/** Chunk was on web.js **/
/** chunk id: 853425, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk386506 = require("./386506.js"),
  Chunk304761 = require("./304761.js"),
  Chunk865427 = require("./865427.js"),
  Chunk478543 = require("./478543.jsx"),
  Chunk366953 = require("./366953.js");
async function d(e) {
  if (200 !== (await (0, o.f0)(e)).status) throw Error("Build override couldn't apply");
  window.location.reload(true)
}
async function f(e) {
  if (200 !== (await (0, o.aD)(e)).status) throw Error("Build override couldn't apply");
  window.location.reload(true)
}
async function _() {
  await (0, Chunk386506.bF)(), window.location.reload(true)
}
let p = Chunk473749.memo(function(e) {
  let {
    url: t
  } = e, n = (0, a.cj)([s.C], () => s.C.getCurrentBuildOverride()), o = (0, a.e7)([s.C], () => s.C.getBuildOverride(t)), {
    payload: p,
    validatedURL: h
  } = o, m = n.state === s.Z.Resolving || o.state === s.Z.Resolving, g = i.useCallback(() => {
    if ((0, l.mG)(o.url) && null != o.override) {
      var e;
      return f(null == (e = o.override) ? true : e.targetBuildOverride)
    }
    return null == p ? Promise.reject(Error("Invalid override payload")) : ((0, u.Z)(o.override, p), d(p))
  }, [p, o]);
  return null != h ? (0, r.jsx)(c.Z, {
    loading: m,
    linkMeta: o.override,
    currentOverrides: n.overrides,
    applyBuildOverride: g,
    clearBuildOverride: _,
    url: h
  }) : null
})