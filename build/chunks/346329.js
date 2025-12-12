/** Chunk was on web.js **/
/** chunk id: 346329, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  installApplication: () => f,
  performDefaultLibraryApplicationAction: () => m,
  playApplication: () => Chunk696748.a,
  repairApplication: () => _,
  updateApplication: () => p
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

function f(e, t, n) {
  let r = o.Z.getApplication(e);
  if (null == r) return;
  let i = a.Z.getTargetBuildId(r.id, t),
    s = a.Z.getTargetManifests(r.id, t);
  null != i && null != s && null != u.L && (0, u.L)(r, t, i, s, n)
}

function p(e, t) {
  let n = o.Z.getApplication(e);
  if (null != n) return r.li(n, t, a.Z.getTargetBuildId(n.id, t), a.Z.getTargetManifests(n.id, t))
}

function _(e, t, n) {
  let i = o.Z.getApplication(e);
  if (null != i) return r.cG(i, t, n)
}

function m(e, t) {
  let n = (0, s.i)(e, l.Z, c.Z),
    {
      analyticsParams: r
    } = t;
  switch (n) {
    case d.apO.PLAY:
      return (0, i.a)(e.id, e, {
        analyticsParams: r
      });
    case d.apO.INSTALL:
      return f(e.id, e.branchId, r.source);
    case d.apO.UPDATE:
      return p(e.id, e.branchId)
  }
}