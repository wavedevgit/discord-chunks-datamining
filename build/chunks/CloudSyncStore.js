/** Chunk was on web.js **/
/** chunk id: 293245, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a;
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var o, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk372123 = require("./372123.js"),
  Chunk594190 = require("./594190.js"),
  Chunk283595 = require("./283595.js"),
  Chunk780570 = require("./780570.js"),
  Chunk358085 = require("./358085.js"),
  Chunk209492 = require("./209492.js"),
  Chunk981631 = require("./981631.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g() {
  let e = Chunk594190.ZP.getRunningDiscordApplicationIds();
  for (let t of a.filter(t => !e.includes(t))) {
    let e = Chunk283595.Z.getActiveLibraryApplication(exports);
    null != module && Chunk570140.Z.wait(() => {
      try {
        Chunk372123.Z(module.id, module.branchId)
      } catch (e) {}
    })
  }
  return a = module, false
}

function E(e) {
  let {
    applicationId: t,
    branchId: n
  } = e, r = (0, f.Tu)(t, n);
  i.add(r)
}

function b(e) {
  let {
    applicationId: t,
    branchId: n
  } = e, a = (0, f.Tu)(t, n);
  return i.delete(a), r[a] = {
    type: h.TzF.DONE,
    timestamp: Date.now()
  }, true
}

function y(e) {
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
  } = e, s = (0, f.Tu)(t, n);
  r[s] = {
    type: h.TzF.CONFLICT,
    next: a,
    remote: o
  }, i.delete(s)
}

function v(e) {
  let {
    applicationId: t,
    branchId: n
  } = e, a = (0, f.Tu)(t, n);
  r[a] = {
    type: h.TzF.ERROR
  }, i.delete(a)
}
class I extends(o = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk283595.Z, Chunk594190.ZP), Chunk358085.isPlatformEmbedded && Chunk209492.S(), r = {}, i = new Set, a = []
  }
  getState(e, t) {
    return r[(0, f.Tu)(e, t)]
  }
  isSyncing(e, t) {
    let n = (0, f.Tu)(e, t);
    return i.has(n)
  }
}
m(I, "displayName", "CloudSyncStore");
let T = new I(Chunk570140.Z, {
  GAME_CLOUD_SYNC_START: E,
  GAME_CLOUD_SYNC_UPDATE: y,
  GAME_CLOUD_SYNC_COMPLETE: b,
  GAME_CLOUD_SYNC_CONFLICT: O,
  GAME_CLOUD_SYNC_ERROR: v,
  RUNNING_GAMES_CHANGE: g
})