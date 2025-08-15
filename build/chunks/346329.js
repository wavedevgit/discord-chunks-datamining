/** Chunk was on 6380 **/
/** chunk id: 346329, original params: t,e,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  installApplication: () => p,
  performDefaultLibraryApplicationAction: () => y,
  playApplication: () => Chunk696748.a,
  repairApplication: () => f,
  updateApplication: () => h
});
var Chunk51025 = require("./51025.js"),
  Chunk696748 = require("./696748.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk173747 = require("./173747.js"),
  Chunk7956 = require("./7956.js"),
  Chunk417363 = require("./417363.js"),
  Chunk941128 = require("./941128.js"),
  Chunk702523 = require("./702523.jsx"),
  Chunk981631 = require("./981631.js");

function p(t, e, n) {
  let i = l.Z.getApplication(t);
  if (null == i) return;
  let r = o.Z.getTargetBuildId(i.id, e),
    a = o.Z.getTargetManifests(i.id, e);
  null != r && null != a && null != d.L && (0, d.L)(i, e, r, a, n)
}

function h(t, e) {
  let n = l.Z.getApplication(t);
  if (null != n) return i.li(n, e, o.Z.getTargetBuildId(n.id, e), o.Z.getTargetManifests(n.id, e))
}

function f(t, e, n) {
  let r = l.Z.getApplication(t);
  if (null != r) return i.cG(r, e, n)
}

function y(t, e) {
  let n = (0, a.i)(t, c.Z, s.Z),
    {
      analyticsParams: i
    } = e;
  switch (n) {
    case u.apO.PLAY:
      return (0, r.a)(t.id, t, {
        analyticsParams: i
      });
    case u.apO.INSTALL:
      return p(t.id, t.branchId, i.source);
    case u.apO.UPDATE:
      return h(t.id, t.branchId)
  }
}