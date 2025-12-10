/** Chunk was on web.js **/
/** chunk id: 173747, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => z
}), require("./388685.js"), require("./539854.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk274616 = require("./274616.js"),
  Chunk57513 = require("./57513.js"),
  Chunk51025 = require("./51025.js"),
  Chunk812206 = require("./812206.js"),
  Chunk695346 = require("./695346.js"),
  Chunk581883 = require("./581883.js"),
  Chunk283595 = require("./283595.js"),
  Chunk417363 = require("./417363.js"),
  Chunk391690 = require("./391690.js"),
  Chunk70956 = require("./70956.js"),
  Chunk780570 = require("./780570.js"),
  Chunk804739 = require("./804739.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let v = new Set,
  S = {},
  I = new Set,
  T = {},
  C = new Set,
  A = {},
  N = 10 * Chunk70956.Z.Millis.MINUTE,
  P = 6 * Chunk70956.Z.Millis.HOUR,
  R = 10 * Chunk70956.Z.Millis.MINUTE,
  D = new Chunk846519.V7;

function w(e) {
  D.start(e + Math.random() * N, c.o)
}

function x() {
  return !Chunk695346.bm.getSetting() && (w(P), L())
}

function L() {
  if (!(0, Chunk804739.Q)() || Chunk695346.bm.getSetting()) returnfalse;
  let e = Chunk283595.Z.entitledBranchIds,
    t = [];
  for (let n of module) A.hasOwnProperty(require) || (A[require] = null, exports.push(require));
  if (0 === exports.length) returnfalse;
  Chunk570140.Z.wait(() => Chunk274616.o(exports))
}

function j() {
  if (!(0, Chunk804739.Q)()) returnfalse;
  for (let e of C) {
    let {
      applicationId: t,
      branchId: n
    } = (0, Chunk780570.CP)(module);
    null != Chunk812206.Z.getApplication(exports) && (C.delete(module), M(exports, require))
  }
}

function M(e, t) {
  if (null != S[t] && g.Z.shouldBeInstalled(e, t)) {
    let n = S[t],
      r = n.manifestIds,
      i = h.Z.getState(e, t);
    null != i && i.shouldPatch && (i.buildId !== n.id || !a().isEqual(i.manifestIds, r)) && l.Z.wait(() => {
      let i = f.Z.getApplication(e);
      null != i ? (C.delete((0, b.Tu)(e, t)), (0, d.li)(i, t, n.id, r, true)) : C.add((0, b.Tu)(e, t))
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
  I.delete(n), S[n] = {
    id: o,
    applicationId: t,
    branchId: n,
    locale: r,
    manifestIds: a
  }, M(t, n)
}

function G(e) {
  let {
    branchId: t
  } = e;
  v.delete(t), I.add(t)
}

function Z(e) {
  let {
    buildId: t
  } = e;
  T.hasOwnProperty(t) || (T[t] = null)
}

function B(e) {
  let {
    buildId: t,
    sizeKB: n
  } = e;
  T[t] = n
}

function F(e) {
  let {
    buildId: t
  } = e;
  null == T[t] && delete T[t]
}

function V(e) {
  let {
    branches: t
  } = e, n = {};
  for (let e in m.Z.libraryApplications) {
    let t = m.Z.libraryApplications[e];
    n[t.branchId] = t
  }
  for (let e of t) {
    let {
      id: t,
      liveBuildId: r
    } = e;
    if (r !== A[t]) {
      let e = n[t];
      null != e && l.Z.wait(() => u.l(e.id, e.branchId, true))
    }
    A[t] = r
  }
  w(P)
}

function H() {
  w(R)
}

function Y() {
  D.stop()
}

function W(e) {
  let {
    entitlements: t
  } = e;
  if (!(0, y.Q)()) returnfalse;
  let n = new Set;
  for (let e of t) n.add(e.application_id);
  for (let e in m.Z.libraryApplications) {
    let t = m.Z.libraryApplications[e];
    n.has(t.id) && (0, b.Je)(t) && l.Z.wait(() => u.l(t.id, t.branchId))
  }
}
class K extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.syncWith([Chunk283595.Z], L), this.waitFor(Chunk812206.Z, Chunk417363.Z, Chunk391690.Z, Chunk283595.Z, Chunk581883.Z)
  }
  getTargetBuildId(e, t) {
    return null == S[t] ? null : S[t].id
  }
  getTargetManifests(e, t) {
    return null == S[t] ? null : S[t].manifestIds
  }
  hasNoBuild(e, t) {
    return I.has(t)
  }
  isFetching(e, t) {
    return v.has(t)
  }
  needsToFetchBuildSize(e) {
    return !T.hasOwnProperty(e)
  }
  getBuildSize(e) {
    return T[e]
  }
}
O(K, "displayName", "ApplicationBuildStore");
let z = new K(Chunk570140.Z, {
  CONNECTION_OPEN: x,
  GAMES_DATABASE_UPDATE: j,
  APPLICATION_BUILD_FETCH_START: k,
  APPLICATION_BUILD_FETCH_SUCCESS: U,
  APPLICATION_BUILD_NOT_FOUND: G,
  APPLICATION_BUILD_SIZE_FETCH_START: Z,
  APPLICATION_BUILD_SIZE_FETCH_SUCCESS: B,
  APPLICATION_BUILD_SIZE_FETCH_FAIL: F,
  APPLICATION_BRANCHES_FETCH_SUCCESS: V,
  APPLICATION_BRANCHES_FETCH_FAIL: H,
  CONNECTION_CLOSED: Y,
  LOGOUT: Y,
  SKU_PURCHASE_SUCCESS: W
})