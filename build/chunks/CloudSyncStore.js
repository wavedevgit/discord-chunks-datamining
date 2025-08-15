/** Chunk was on 6380 **/
/** chunk id: 293245, original params: t,e,n (module,exports,require) **/
let i, r, l;
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var o, a, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk372123 = require("./372123.js"),
  Chunk594190 = require("./594190.js"),
  Chunk283595 = require("./283595.js"),
  Chunk780570 = require("./780570.js"),
  Chunk358085 = require("./358085.js"),
  Chunk209492 = require("./209492.js"),
  Chunk981631 = require("./981631.js");
class O extends(o = Chunk442837.ZP.Store) {
  initialize() {
    Chunk358085.isPlatformEmbedded && Chunk209492.S(), i = {}, r = new Set, l = []
  }
  getState(t, e) {
    return i[(0, h.Tu)(t, e)]
  }
  isSyncing(t, e) {
    let n = (0, h.Tu)(t, e);
    return r.has(n)
  }
}(a = "displayName") in O ? Object.defineProperty(O, a, {
  value: "CloudSyncStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : O[a] = "CloudSyncStore";
let m = new O(Chunk570140.Z, {
  GAME_CLOUD_SYNC_START: function(t) {
    let {
      applicationId: e,
      branchId: n
    } = t, i = (0, h.Tu)(e, n);
    r.add(i)
  },
  GAME_CLOUD_SYNC_UPDATE: function(t) {
    let {
      state: e
    } = t;
    for (let t of Object.keys(e)) i[t] = e[t]
  },
  GAME_CLOUD_SYNC_COMPLETE: function(t) {
    let {
      applicationId: e,
      branchId: n
    } = t, l = (0, h.Tu)(e, n);
    return r.delete(l), i[l] = {
      type: C.TzF.DONE,
      timestamp: Date.now()
    }, true
  },
  GAME_CLOUD_SYNC_CONFLICT: function(t) {
    let {
      applicationId: e,
      branchId: n,
      next: l,
      remote: o
    } = t, a = (0, h.Tu)(e, n);
    i[a] = {
      type: C.TzF.CONFLICT,
      next: l,
      remote: o
    }, r.delete(a)
  },
  GAME_CLOUD_SYNC_ERROR: function(t) {
    let {
      applicationId: e,
      branchId: n
    } = t, l = (0, h.Tu)(e, n);
    i[l] = {
      type: C.TzF.ERROR
    }, r.delete(l)
  },
  RUNNING_GAMES_CHANGE: function() {
    let t = Chunk594190.ZP.getRunningDiscordApplicationIds();
    for (let e of l.filter(e => !t.includes(e))) {
      let t = Chunk283595.Z.getActiveLibraryApplication(exports);
      null != module && Chunk570140.Z.wait(() => {
        try {
          Chunk372123.Z(module.id, module.branchId)
        } catch (t) {}
      })
    }
    return l = module, false
  }
})