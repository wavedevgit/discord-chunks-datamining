/** Chunk was on web.js **/
/** chunk id: 941128, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => J
}), require("./388685.js"), require("./415506.js"), require("./539854.js"), require("./290780.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk51025 = require("./51025.js"),
  Chunk594190 = require("./594190.js"),
  Chunk314897 = require("./314897.js"),
  Chunk173747 = require("./173747.js"),
  Chunk780570 = require("./780570.js"),
  Chunk830168 = require("./830168.js"),
  Chunk358085 = require("./358085.js"),
  Chunk417363 = require("./417363.js"),
  Chunk981631 = require("./981631.js"),
  Chunk186901 = require("./186901.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = [Chunk186901.ff.AUTHENTICATION_FAILED, Chunk186901.ff.NOT_ENTITLED],
  O = "DispatchManagerStore",
  v = [],
  S = [],
  I = false,
  T = null,
  C = null,
  A = false,
  N = new Map,
  P = false,
  R = null;

function w() {
  let e = {
    queue: v,
    paused: I,
    userActions: Array.from(N)
  };
  s.K.set(O, e)
}

function D(e, t) {
  return null != T && T.applicationId === e && T.branchId === t || null != C && C.applicationId === e && C.branchId === t
}

function x() {
  let e = v[0];
  if (null != e) {
    let {
      comboId: t,
      action: n
    } = e, {
      applicationId: r,
      branchId: i
    } = (0, p.CP)(t);
    if (!D(r, i)) {
      let e = d.default.getToken(),
        t = d.default.getId();
      if (null == e) throw Error("missing user token");
      P = !_.Z.setCurrentTask(r, i, n, t, e)
    }
  }
}

function L(e, t) {
  let n = (0, p.Tu)(e, t);
  return v.findIndex(e => e.comboId === n)
}

function j(e, t, n, r) {
  let i = (0, p.Tu)(e, t),
    a = {
      comboId: i,
      action: r
    },
    o = S.indexOf(i);
  false !== o && S.splice(o, 1);
  let s = L(e, t);
  0 !== s && (n ? false === s && (v.push(a), x()) : (s > 0 && v.splice(s, 1), v.unshift(a), x())), !n && I && _.Z.resume(), w()
}

function M(e, t) {
  let n = (0, p.Tu)(e, t),
    r = S.indexOf(n);
  false !== r && S.splice(r, 1);
  let i = L(e, t);
  false !== i && (v.splice(i, 1), w()), x()
}

function k(e) {
  let {
    applicationId: t,
    branchId: n
  } = e;
  N.set((0, p.Tu)(t, n), "Install"), j(t, n, false, "Patch")
}

function U(e) {
  F(e), V(e)
}

function G(e) {
  let {
    applicationId: t,
    branchId: n
  } = e;
  N.set((0, p.Tu)(t, n), "Repair"), j(t, n, false, "Repair")
}

function Z(e) {
  let {
    applicationId: t,
    branchId: n,
    automatic: r
  } = e;
  j(t, n, r, "Patch")
}

function F(e) {
  let {
    applicationId: t,
    branchId: n
  } = e;
  M(t, n)
}

function B(e) {
  let {
    applicationId: t,
    branchId: n
  } = e, r = L(t, n);
  if (r < 1) returnfalse;
  v.splice(0, 0, v.splice(r, 1)[0]), x(), I && _.Z.resume(), w()
}

function V(e) {
  let {
    applicationId: t,
    branchId: n
  } = e, r = (0, p.Tu)(t, n), i = S.indexOf(r);
  false !== i && S.splice(i, 1)
}

function H(e) {
  let {
    state: t
  } = e;
  !A && (A = true, x(), I || _.Z.resume());
  let n = I;
  I = t.paused, T = t.currentTask, C = t.nextTask;
  let r = false;
  v = v.filter(e => {
    let {
      comboId: t
    } = e, {
      applicationId: n,
      branchId: i
    } = (0, p.CP)(t), o = h.Z.getState(n, i), s = f.Z.getTargetBuildId(n, i), l = f.Z.getTargetManifests(n, i);
    if (null != o && o.type === g.vxO.UP_TO_DATE && o.buildId === o.targetBuildId && o.buildId === s && a().isEqual(o.manifestIds, o.targetManifestIds) && a().isEqual(o.manifestIds, l)) {
      if (S.push(t), N.has(t)) {
        switch (N.get(t)) {
          case "Install":
            c.XT(n, o);
            break;
          case "Repair":
            c.Wx(n, o)
        }
        N.delete(t)
      }
      return r = true, false
    }
    returntrue
  }), x(), (r || n !== I) && w()
}

function Y() {
  let e = d.default.getToken(),
    t = d.default.getId();
  null != e && _.Z.setCredentials(t, e)
}

function W(e) {
  let {
    error: t
  } = e, {
    code: n
  } = t;
  if (null != n) {
    if (y.includes(n)) Y();
    else if (n === E.ff.APPLICATION_NOT_FOUND) {
      let {
        context: e
      } = t;
      if (null != e) {
        let {
          application_id: t,
          branch_id: n
        } = e;
        M(t, n)
      }
    }
  }
}

function K() {
  for (let e of u.ZP.getRunningDiscordApplicationIds()) c.al(e, e);
  let e = u.ZP.getVisibleGame();
  return I || null == e || e.pid === R || c.wO(), R = null == e ? null : e.pid, false
}

function z() {
  (0, m.isDesktop)() && Y()
}

function q() {
  s.K.remove(O), (0, m.isDesktop)() && _.Z.pause()
}

function Q(e) {
  return e.map(e => "string" == typeof e ? {
    comboId: e,
    action: "Patch"
  } : e)
}
class X extends(r = Chunk442837.ZP.Store) {
  initialize() {
    var e;
    let t = null != (e = s.K.get(O)) ? e : {
      queue: null,
      paused: null,
      userActions: null
    };
    null != t.queue && (v = Q(t.queue)), null != t.paused && (I = t.paused), null != t.userActions && (N = new Map(Array.from(t.userActions))), this.waitFor(h.Z, u.ZP), this.syncWith([u.ZP], K), this.waitFor(f.Z, d.default, h.Z)
  }
  get activeItems() {
    return v.map(e => {
      let {
        comboId: t
      } = e;
      return (0, p.CP)(t)
    })
  }
  get finishedItems() {
    return S.map(p.CP)
  }
  get paused() {
    return I
  }
  getQueuePosition(e, t) {
    return L(e, t)
  }
  isCorruptInstallation() {
    return P
  }
}
b(X, "displayName", "DispatchManagerStore");
let J = new X(Chunk570140.Z, {
  DISPATCH_APPLICATION_INSTALL: k,
  DISPATCH_APPLICATION_UPDATE: Z,
  DISPATCH_APPLICATION_UNINSTALL: U,
  DISPATCH_APPLICATION_CANCEL: F,
  DISPATCH_APPLICATION_REPAIR: G,
  DISPATCH_APPLICATION_MOVE_UP: B,
  DISPATCH_APPLICATION_REMOVE_FINISHED: V,
  DISPATCH_APPLICATION_STATE_UPDATE: H,
  DISPATCH_APPLICATION_ERROR: W,
  CONNECTION_OPEN: z,
  LOGOUT: q
})