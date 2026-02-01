/** Chunk was on web.js **/
/** chunk id: 568004, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => q
}), require("./896048.js"), require("./321073.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk781763 = require("./781763.js"),
  Chunk356645 = require("./356645.js"),
  Chunk92077 = require("./92077.js"),
  Chunk587895 = require("./587895.js"),
  Chunk253932 = require("./253932.js"),
  Chunk617617 = require("./617617.js"),
  Chunk189081 = require("./189081.js"),
  Chunk194871 = require("./194871.js"),
  Chunk775228 = require("./775228.js"),
  Chunk927813 = require("./927813.js"),
  Chunk674378 = require("./674378.js"),
  Chunk144914 = require("./144914.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let v = new Set,
  A = {},
  I = new Set,
  S = {},
  T = new Set,
  C = {},
  N = 10 * Chunk927813.A.Millis.MINUTE,
  w = 6 * Chunk927813.A.Millis.HOUR,
  R = 10 * Chunk927813.A.Millis.MINUTE,
  P = new Chunk451988.Ep;

function D(e) {
  P.start(e + Math.random() * N, c.r)
}

function L() {
  return !p.l_.getSetting() && (D(w), x())
}

function x() {
  if (!(0, b.S)() || p.l_.getSetting()) returnfalse;
  let e = h.A.entitledBranchIds,
    t = [];
  for (let n of e) C.hasOwnProperty(n) || (C[n] = null, t.push(n));
  if (0 === t.length) returnfalse;
  l.h.wait(() => c.r(t))
}

function M() {
  if (!(0, b.S)()) returnfalse;
  for (let e of T) {
    let {
      applicationId: t,
      branchId: n
    } = (0, y.r0)(e);
    null != f.A.getApplication(t) && (T.delete(e), j(t, n))
  }
}

function j(e, t) {
  if (null != A[t] && g.A.shouldBeInstalled(e, t)) {
    let n = A[t],
      r = n.manifestIds,
      i = m.A.getState(e, t);
    null != i && i.shouldPatch && (i.buildId !== n.id || !a().isEqual(i.manifestIds, r)) && l.h.wait(() => {
      let i = f.A.getApplication(e);
      null != i ? (T.delete((0, y.gW)(e, t)), (0, d.K3)(i, t, n.id, r, true)) : T.add((0, y.gW)(e, t))
    })
  }
}

function k(e) {
  let {
    branchId: t
  } = e;
  v.add(t)
}

function U(e) {
  let {
    applicationId: t,
    branchId: n,
    locale: r,
    build: i
  } = e;
  v.delete(n);
  let a = i.manifests.map(e => {
      let {
        id: t
      } = e;
      return t
    }),
    o = i.id;
  I.delete(n), A[n] = {
    id: o,
    applicationId: t,
    branchId: n,
    locale: r,
    manifestIds: a
  }, j(t, n)
}

function G(e) {
  let {
    branchId: t
  } = e;
  v.delete(t), I.add(t)
}

function V(e) {
  let {
    buildId: t
  } = e;
  S.hasOwnProperty(t) || (S[t] = null)
}

function F(e) {
  let {
    buildId: t,
    sizeKB: n
  } = e;
  S[t] = n
}

function B(e) {
  let {
    buildId: t
  } = e;
  null == S[t] && delete S[t]
}

function H(e) {
  let {
    branches: t
  } = e, n = {};
  for (let e in h.A.libraryApplications) {
    let t = h.A.libraryApplications[e];
    n[t.branchId] = t
  }
  for (let e of t) {
    let {
      id: t,
      liveBuildId: r
    } = e;
    if (r !== C[t]) {
      let e = n[t];
      null != e && l.h.wait(() => u.n(e.id, e.branchId, true))
    }
    C[t] = r
  }
  D(w)
}

function Y() {
  D(R)
}

function W() {
  P.stop()
}

function K(e) {
  let {
    entitlements: t
  } = e;
  if (!(0, b.S)()) returnfalse;
  let n = new Set;
  for (let e of t) n.add(e.application_id);
  for (let e in h.A.libraryApplications) {
    let t = h.A.libraryApplications[e];
    n.has(t.id) && (0, y.XZ)(t) && l.h.wait(() => u.n(t.id, t.branchId))
  }
}
class z extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.syncWith([h.A], x), this.waitFor(f.A, m.A, g.A, h.A, _.A)
  }
  getTargetBuildId(e, t) {
    return null == A[t] ? null : A[t].id
  }
  getTargetManifests(e, t) {
    return null == A[t] ? null : A[t].manifestIds
  }
  hasNoBuild(e, t) {
    return I.has(t)
  }
  isFetching(e, t) {
    return v.has(t)
  }
  needsToFetchBuildSize(e) {
    return !S.hasOwnProperty(e)
  }
  getBuildSize(e) {
    return S[e]
  }
}
O(z, "displayName", "ApplicationBuildStore");
let q = new z(Chunk73153.h, {
  CONNECTION_OPEN: L,
  GAMES_DATABASE_UPDATE: M,
  APPLICATION_BUILD_FETCH_START: k,
  APPLICATION_BUILD_FETCH_SUCCESS: U,
  APPLICATION_BUILD_NOT_FOUND: G,
  APPLICATION_BUILD_SIZE_FETCH_START: V,
  APPLICATION_BUILD_SIZE_FETCH_SUCCESS: F,
  APPLICATION_BUILD_SIZE_FETCH_FAIL: B,
  APPLICATION_BRANCHES_FETCH_SUCCESS: H,
  APPLICATION_BRANCHES_FETCH_FAIL: Y,
  CONNECTION_CLOSED: W,
  LOGOUT: W,
  SKU_PURCHASE_SUCCESS: K
})