/** Chunk was on web.js **/
/** chunk id: 465797, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a;
require.d(exports, {
  A: () => I
}), require("./896048.js");
var o, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk54827 = require("./54827.js"),
  Chunk15285 = require("./15285.js"),
  Chunk189081 = require("./189081.js"),
  Chunk674378 = require("./674378.js"),
  Chunk723702 = require("./723702.js"),
  Chunk986120 = require("./986120.js"),
  Chunk652215 = require("./652215.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g() {
  let e = u.Ay.getRunningDiscordApplicationIds();
  for (let t of a.filter(t => !e.includes(t))) {
    let e = d.A.getActiveLibraryApplication(t);
    null != e && l.h.wait(() => {
      try {
        c.O(e.id, e.branchId)
      } catch (e) {}
    })
  }
  return a = e, false
}

function E(e) {
  let {
    applicationId: t,
    branchId: n
  } = e, r = (0, f.gW)(t, n);
  i.add(r)
}

function y(e) {
  let {
    applicationId: t,
    branchId: n
  } = e, a = (0, f.gW)(t, n);
  return i.delete(a), r[a] = {
    type: h.VX0.DONE,
    timestamp: Date.now()
  }, true
}

function b(e) {
  let {
    state: t
  } = e;
  for (let e of Object.keys(t)) r[e] = t[e]
}

function O(e) {
  let {
    applicationId: t,
    branchId: n,
    next: a,
    remote: o
  } = e, s = (0, f.gW)(t, n);
  r[s] = {
    type: h.VX0.CONFLICT,
    next: a,
    remote: o
  }, i.delete(s)
}

function v(e) {
  let {
    applicationId: t,
    branchId: n
  } = e, a = (0, f.gW)(t, n);
  r[a] = {
    type: h.VX0.ERROR
  }, i.delete(a)
}
class A extends(o = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(d.A, u.Ay), p.isPlatformEmbedded && _.T(), r = {}, i = new Set, a = []
  }
  getState(e, t) {
    return r[(0, f.gW)(e, t)]
  }
  isSyncing(e, t) {
    let n = (0, f.gW)(e, t);
    return i.has(n)
  }
}
m(A, "displayName", "CloudSyncStore");
let I = new A(Chunk73153.h, {
  GAME_CLOUD_SYNC_START: E,
  GAME_CLOUD_SYNC_UPDATE: b,
  GAME_CLOUD_SYNC_COMPLETE: y,
  GAME_CLOUD_SYNC_CONFLICT: O,
  GAME_CLOUD_SYNC_ERROR: v,
  RUNNING_GAMES_CHANGE: g
})