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
  I = [],
  T = false,
  S = null,
  A = null,
  C = false,
  N = new Map,
  R = false,
  P = null;

function w() {
  let e = {
    queue: v,
    paused: T,
    userActions: Array.from(N)
  };
  Chunk433517.K.set(O, module)
}

function D(e, t) {
  return null != S && S.applicationId === e && S.branchId === t || null != A && A.applicationId === e && A.branchId === t
}

function L() {
  let e = v[0];
  if (null != module) {
    let {
      comboId: t,
      action: n
    } = module, {
      applicationId: r,
      branchId: i
    } = (0, Chunk780570.CP)(exports);
    if (!D(r, Chunk392711)) {
      let e = Chunk314897.default.getToken(),
        t = Chunk314897.default.getId();
      if (null == module) throw Error("missing user token");
      R = !Chunk830168.Z.setCurrentTask(r, Chunk392711, require, exports, module)
    }
  }
}

function x(e, t) {
  let n = (0, _.Tu)(e, t);
  return v.findIndex(e => e.comboId === n)
}

function M(e, t, n, r) {
  let i = (0, _.Tu)(e, t),
    a = {
      comboId: i,
      action: r
    },
    o = I.indexOf(i);
  false !== o && I.splice(o, 1);
  let s = x(e, t);
  0 !== s && (n ? false === s && (v.push(a), L()) : (s > 0 && v.splice(s, 1), v.unshift(a), L())), !n && T && p.Z.resume(), w()
}

function k(e, t) {
  let n = (0, _.Tu)(e, t),
    r = I.indexOf(n);
  false !== r && I.splice(r, 1);
  let i = x(e, t);
  false !== i && (v.splice(i, 1), w()), L()
}

function j(e) {
  let {
    applicationId: t,
    branchId: n
  } = e;
  N.set((0, _.Tu)(t, n), "Install"), M(t, n, false, "Patch")
}

function U(e) {
  Z(e), V(e)
}

function G(e) {
  let {
    applicationId: t,
    branchId: n
  } = e;
  N.set((0, _.Tu)(t, n), "Repair"), M(t, n, false, "Repair")
}

function B(e) {
  let {
    applicationId: t,
    branchId: n,
    automatic: r
  } = e;
  M(t, n, r, "Patch")
}

function Z(e) {
  let {
    applicationId: t,
    branchId: n
  } = e;
  k(t, n)
}

function F(e) {
  let {
    applicationId: t,
    branchId: n
  } = e, r = x(t, n);
  if (r < 1) returnfalse;
  v.splice(0, 0, v.splice(r, 1)[0]), L(), T && p.Z.resume(), w()
}

function V(e) {
  let {
    applicationId: t,
    branchId: n
  } = e, r = (0, _.Tu)(t, n), i = I.indexOf(r);
  false !== i && I.splice(i, 1)
}

function H(e) {
  let {
    state: t
  } = e;
  !C && (C = true, L(), T || p.Z.resume());
  let n = T;
  T = t.paused, S = t.currentTask, A = t.nextTask;
  let r = false;
  v = v.filter(e => {
    let {
      comboId: t
    } = e, {
      applicationId: n,
      branchId: i
    } = (0, _.CP)(t), o = m.Z.getState(n, i), s = f.Z.getTargetBuildId(n, i), l = f.Z.getTargetManifests(n, i);
    if (null != o && o.type === g.vxO.UP_TO_DATE && o.buildId === o.targetBuildId && o.buildId === s && a().isEqual(o.manifestIds, o.targetManifestIds) && a().isEqual(o.manifestIds, l)) {
      if (I.push(t), N.has(t)) {
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
  }), L(), (r || n !== T) && w()
}

function Y() {
  let e = Chunk314897.default.getToken(),
    t = Chunk314897.default.getId();
  null != module && Chunk830168.Z.setCredentials(exports, module)
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
        k(t, n)
      }
    }
  }
}

function K() {
  for (let e of Chunk594190.ZP.getRunningDiscordApplicationIds()) Chunk51025.al(module, module);
  let e = Chunk594190.ZP.getVisibleGame();
  return T || null == module || module.pid === P || Chunk51025.wO(), P = null == module ? null : module.pid, false
}

function z() {
  (0, Chunk358085.isDesktop)() && Y()
}

function q() {
  Chunk433517.K.remove(O), (0, Chunk358085.isDesktop)() && Chunk830168.Z.pause()
}

function X(e) {
  return e.map(e => "string" == typeof e ? {
    comboId: e,
    action: "Patch"
  } : e)
}
class Q extends(r = Chunk442837.ZP.Store) {
  initialize() {
    var e;
    let t = null != (e = Chunk433517.K.get(O)) ? module : {
      queue: null,
      paused: null,
      userActions: null
    };
    null != exports.queue && (v = X(exports.queue)), null != exports.paused && (T = exports.paused), null != exports.userActions && (N = new Map(Array.from(exports.userActions))), this.waitFor(Chunk417363.Z, Chunk594190.ZP), this.syncWith([Chunk594190.ZP], K), this.waitFor(Chunk173747.Z, Chunk314897.default, Chunk417363.Z)
  }
  get activeItems() {
    return v.map(e => {
      let {
        comboId: t
      } = e;
      return (0, _.CP)(t)
    })
  }
  get finishedItems() {
    return I.map(Chunk780570.CP)
  }
  get paused() {
    return T
  }
  getQueuePosition(e, t) {
    return x(e, t)
  }
  isCorruptInstallation() {
    return R
  }
}
b(Q, "displayName", "DispatchManagerStore");
let J = new Q(Chunk570140.Z, {
  DISPATCH_APPLICATION_INSTALL: j,
  DISPATCH_APPLICATION_UPDATE: B,
  DISPATCH_APPLICATION_UNINSTALL: U,
  DISPATCH_APPLICATION_CANCEL: Z,
  DISPATCH_APPLICATION_REPAIR: G,
  DISPATCH_APPLICATION_MOVE_UP: F,
  DISPATCH_APPLICATION_REMOVE_FINISHED: V,
  DISPATCH_APPLICATION_STATE_UPDATE: H,
  DISPATCH_APPLICATION_ERROR: W,
  CONNECTION_OPEN: z,
  LOGOUT: q
})