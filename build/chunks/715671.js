/** Chunk was on web.js **/
/** chunk id: 715671, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  installApplication: () => f,
  performDefaultLibraryApplicationAction: () => h,
  playApplication: () => i.L,
  repairApplication: () => _,
  updateApplication: () => p
});
var Chunk92077 = require("./92077.js"),
  Chunk501945 = require("./501945.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk568004 = require("./568004.js"),
  Chunk227841 = require("./227841.js"),
  Chunk194871 = require("./194871.js"),
  Chunk966846 = require("./966846.js"),
  Chunk201373 = require("./201373.jsx"),
  Chunk652215 = require("./652215.js");

function f(e, t, n) {
  let r = a.A.getApplication(e);
  if (null == r) return;
  let i = s.A.getTargetBuildId(r.id, t),
    o = s.A.getTargetManifests(r.id, t);
  null != i && null != o && null != u.o && (0, u.o)(r, t, i, o, n)
}

function p(e, t) {
  let n = a.A.getApplication(e);
  if (null != n) return r.K3(n, t, s.A.getTargetBuildId(n.id, t), s.A.getTargetManifests(n.id, t))
}

function _(e, t, n) {
  let i = a.A.getApplication(e);
  if (null != i) return r.qv(i, t, n)
}

function h(e, t) {
  let n = (0, o.F)(e, l.A, c.A),
    {
      analyticsParams: r
    } = t;
  switch (n) {
    case d.Hf6.PLAY:
      return (0, i.L)(e.id, e, {
        analyticsParams: r
      });
    case d.Hf6.INSTALL:
      return f(e.id, e.branchId, r.source);
    case d.Hf6.UPDATE:
      return p(e.id, e.branchId)
  }
}