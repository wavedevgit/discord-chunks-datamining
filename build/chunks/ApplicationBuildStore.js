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
  I = {},
  T = new Set,
  S = {},
  A = new Set,
  C = {},
  N = 10 * Chunk70956.Z.Millis.MINUTE,
  R = 6 * Chunk70956.Z.Millis.HOUR,
  P = 10 * Chunk70956.Z.Millis.MINUTE,
  w = new Chunk846519.V7;

function D(e) {
  w.start(e + Math.random() * N, c.o)
}

function x() {
  return !Chunk695346.bm.getSetting() && (D(R), L())
}

function L() {
  if (!(0, Chunk804739.Q)() || Chunk695346.bm.getSetting()) returnfalse;
  let e = Chunk283595.Z.entitledBranchIds,
    t = [];
  for (let n of module) C.hasOwnProperty(require) || (C[require] = null, exports.push(require));
  if (0 === exports.length) returnfalse;
  Chunk570140.Z.wait(() => Chunk274616.o(exports))
}

function M() {
  if (!(0, Chunk804739.Q)()) returnfalse;
  for (let e of A) {
    let {
      applicationId: t,
      branchId: n
    } = (0, Chunk780570.CP)(module);
    null != Chunk812206.Z.getApplication(exports) && (A.delete(module), k(exports, require))
  }
}

function k(e, t) {
  if (null != I[t] && g.Z.shouldBeInstalled(e, t)) {
    let n = I[t],
      r = n.manifestIds,
      i = m.Z.getState(e, t);
    null != i && i.shouldPatch && (i.buildId !== n.id || !a().isEqual(i.manifestIds, r)) && l.Z.wait(() => {
      let i = f.Z.getApplication(e);
      null != i ? (A.delete((0, b.Tu)(e, t)), (0, d.li)(i, t, n.id, r, true)) : A.add((0, b.Tu)(e, t))
    })
  }
}

function j(e) {
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
  T.delete(n), I[n] = {
    id: o,
    applicationId: t,
    branchId: n,
    locale: r,
    manifestIds: a
  }, k(t, n)
}

function G(e) {
  let {
    branchId: t
  } = e;
  v.delete(t), T.add(t)
}

function B(e) {
  let {
    buildId: t
  } = e;
  S.hasOwnProperty(t) || (S[t] = null)
}

function Z(e) {
  let {
    buildId: t,
    sizeKB: n
  } = e;
  S[t] = n
}

function F(e) {
  let {
    buildId: t
  } = e;
  null == S[t] && delete S[t]
}

function V(e) {
  let {
    branches: t
  } = e, n = {};
  for (let e in h.Z.libraryApplications) {
    let t = h.Z.libraryApplications[e];
    n[t.branchId] = t
  }
  for (let e of t) {
    let {
      id: t,
      liveBuildId: r
    } = e;
    if (r !== C[t]) {
      let e = n[t];
      null != e && l.Z.wait(() => u.l(e.id, e.branchId, true))
    }
    C[t] = r
  }
  D(R)
}

function H() {
  D(P)
}

function Y() {
  w.stop()
}

function W(e) {
  let {
    entitlements: t
  } = e;
  if (!(0, y.Q)()) returnfalse;
  let n = new Set;
  for (let e of t) n.add(e.application_id);
  for (let e in h.Z.libraryApplications) {
    let t = h.Z.libraryApplications[e];
    n.has(t.id) && (0, b.Je)(t) && l.Z.wait(() => u.l(t.id, t.branchId))
  }
}
class K extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.syncWith([Chunk283595.Z], L), this.waitFor(Chunk812206.Z, Chunk417363.Z, Chunk391690.Z, Chunk283595.Z, Chunk581883.Z)
  }
  getTargetBuildId(e, t) {
    return null == I[t] ? null : I[t].id
  }
  getTargetManifests(e, t) {
    return null == I[t] ? null : I[t].manifestIds
  }
  hasNoBuild(e, t) {
    return T.has(t)
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
O(K, "displayName", "ApplicationBuildStore");
let z = new K(Chunk570140.Z, {
  CONNECTION_OPEN: x,
  GAMES_DATABASE_UPDATE: M,
  APPLICATION_BUILD_FETCH_START: j,
  APPLICATION_BUILD_FETCH_SUCCESS: U,
  APPLICATION_BUILD_NOT_FOUND: G,
  APPLICATION_BUILD_SIZE_FETCH_START: B,
  APPLICATION_BUILD_SIZE_FETCH_SUCCESS: Z,
  APPLICATION_BUILD_SIZE_FETCH_FAIL: F,
  APPLICATION_BRANCHES_FETCH_SUCCESS: V,
  APPLICATION_BRANCHES_FETCH_FAIL: H,
  CONNECTION_CLOSED: Y,
  LOGOUT: Y,
  SKU_PURCHASE_SUCCESS: W
})