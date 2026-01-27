/** Chunk was on web.js **/
/** chunk id: 966846, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => J
}), require("./896048.js"), require("./65821.js"), require("./321073.js"), require("./667532.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk92077 = require("./92077.js"),
  Chunk15285 = require("./15285.js"),
  Chunk961350 = require("./961350.js"),
  Chunk568004 = require("./568004.js"),
  Chunk674378 = require("./674378.js"),
  Chunk962052 = require("./962052.js"),
  Chunk723702 = require("./723702.js"),
  Chunk194871 = require("./194871.js"),
  Chunk652215 = require("./652215.js"),
  Chunk613057 = require("./613057.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = [Chunk613057.Hi.AUTHENTICATION_FAILED, Chunk613057.Hi.NOT_ENTITLED],
  O = "DispatchManagerStore",
  v = [],
  A = [],
  I = false,
  S = null,
  T = null,
  C = false,
  N = new Map,
  w = false,
  R = null;

function P() {
  let e = {
    queue: v,
    paused: I,
    userActions: Array.from(N)
  };
  s.w.set(O, e)
}

function D(e, t) {
  return null != S && S.applicationId === e && S.branchId === t || null != T && T.applicationId === e && T.branchId === t
}

function L() {
  let e = v[0];
  if (null != e) {
    let {
      comboId: t,
      action: n
    } = e, {
      applicationId: r,
      branchId: i
    } = (0, p.r0)(t);
    if (!D(r, i)) {
      let e = d.default.getToken(),
        t = d.default.getId();
      if (null == e) throw Error("missing user token");
      w = !_.A.setCurrentTask(r, i, n, t, e)
    }
  }
}

function x(e, t) {
  let n = (0, p.gW)(e, t);
  return v.findIndex(e => e.comboId === n)
}

function M(e, t, n, r) {
  let i = (0, p.gW)(e, t),
    a = {
      comboId: i,
      action: r
    },
    o = A.indexOf(i);
  false !== o && A.splice(o, 1);
  let s = x(e, t);
  0 !== s && (n ? false === s && (v.push(a), L()) : (s > 0 && v.splice(s, 1), v.unshift(a), L())), !n && I && _.A.resume(), P()
}

function j(e, t) {
  let n = (0, p.gW)(e, t),
    r = A.indexOf(n);
  false !== r && A.splice(r, 1);
  let i = x(e, t);
  false !== i && (v.splice(i, 1), P()), L()
}

function k(e) {
  let {
    applicationId: t,
    branchId: n
  } = e;
  N.set((0, p.gW)(t, n), "Install"), M(t, n, false, "Patch")
}

function U(e) {
  V(e), H(e)
}

function G(e) {
  let {
    applicationId: t,
    branchId: n
  } = e;
  N.set((0, p.gW)(t, n), "Repair"), M(t, n, false, "Repair")
}

function F(e) {
  let {
    applicationId: t,
    branchId: n,
    automatic: r
  } = e;
  M(t, n, r, "Patch")
}

function V(e) {
  let {
    applicationId: t,
    branchId: n
  } = e;
  j(t, n)
}

function B(e) {
  let {
    applicationId: t,
    branchId: n
  } = e, r = x(t, n);
  if (r < 1) returnfalse;
  v.splice(0, 0, v.splice(r, 1)[0]), L(), I && _.A.resume(), P()
}

function H(e) {
  let {
    applicationId: t,
    branchId: n
  } = e, r = (0, p.gW)(t, n), i = A.indexOf(r);
  false !== i && A.splice(i, 1)
}

function Y(e) {
  let {
    state: t
  } = e;
  !C && (C = true, L(), I || _.A.resume());
  let n = I;
  I = t.paused, S = t.currentTask, T = t.nextTask;
  let r = false;
  v = v.filter(e => {
    let {
      comboId: t
    } = e, {
      applicationId: n,
      branchId: i
    } = (0, p.r0)(t), o = m.A.getState(n, i), s = f.A.getTargetBuildId(n, i), l = f.A.getTargetManifests(n, i);
    if (null != o && o.type === g.WTw.UP_TO_DATE && o.buildId === o.targetBuildId && o.buildId === s && a().isEqual(o.manifestIds, o.targetManifestIds) && a().isEqual(o.manifestIds, l)) {
      if (A.push(t), N.has(t)) {
        switch (N.get(t)) {
          case "Install":
            c.BK(n, o);
            break;
          case "Repair":
            c.jU(n, o)
        }
        N.delete(t)
      }
      return r = true, false
    }
    returntrue
  }), L(), (r || n !== I) && P()
}

function W() {
  let e = d.default.getToken(),
    t = d.default.getId();
  null != e && _.A.setCredentials(t, e)
}

function K(e) {
  let {
    error: t
  } = e, {
    code: n
  } = t;
  if (null != n) {
    if (b.includes(n)) W();
    else if (n === E.Hi.APPLICATION_NOT_FOUND) {
      let {
        context: e
      } = t;
      if (null != e) {
        let {
          application_id: t,
          branch_id: n
        } = e;
        j(t, n)
      }
    }
  }
}

function z() {
  for (let e of u.Ay.getRunningDiscordApplicationIds()) c.ZT(e, e);
  let e = u.Ay.getVisibleGame();
  return I || null == e || e.pid === R || c.v7(), R = null == e ? null : e.pid, false
}

function q() {
  (0, h.isDesktop)() && W()
}

function Z() {
  s.w.remove(O), (0, h.isDesktop)() && _.A.pause()
}

function Q(e) {
  return e.map(e => "string" == typeof e ? {
    comboId: e,
    action: "Patch"
  } : e)
}
class X extends(r = Chunk311907.Ay.Store) {
  initialize() {
    var e;
    let t = null != (e = s.w.get(O)) ? e : {
      queue: null,
      paused: null,
      userActions: null
    };
    null != t.queue && (v = Q(t.queue)), null != t.paused && (I = t.paused), null != t.userActions && (N = new Map(Array.from(t.userActions))), this.waitFor(m.A, u.Ay), this.syncWith([u.Ay], z), this.waitFor(f.A, d.default, m.A)
  }
  get activeItems() {
    return v.map(e => {
      let {
        comboId: t
      } = e;
      return (0, p.r0)(t)
    })
  }
  get finishedItems() {
    return A.map(p.r0)
  }
  get paused() {
    return I
  }
  getQueuePosition(e, t) {
    return x(e, t)
  }
  isCorruptInstallation() {
    return w
  }
}
y(X, "displayName", "DispatchManagerStore");
let J = new X(Chunk73153.h, {
  DISPATCH_APPLICATION_INSTALL: k,
  DISPATCH_APPLICATION_UPDATE: F,
  DISPATCH_APPLICATION_UNINSTALL: U,
  DISPATCH_APPLICATION_CANCEL: V,
  DISPATCH_APPLICATION_REPAIR: G,
  DISPATCH_APPLICATION_MOVE_UP: B,
  DISPATCH_APPLICATION_REMOVE_FINISHED: H,
  DISPATCH_APPLICATION_STATE_UPDATE: Y,
  DISPATCH_APPLICATION_ERROR: K,
  CONNECTION_OPEN: q,
  LOGOUT: Z
})