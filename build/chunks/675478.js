/** Chunk was on web.js **/
/** chunk id: 675478, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BU: () => L,
  Cd: () => U,
  DZ: () => R,
  PS: () => x,
  T6: () => N,
  Z1: () => F,
  aj: () => D,
  bE: () => V,
  fy: () => O.fy,
  hW: () => w,
  m9: () => G,
  nm: () => j,
  sr: () => B,
  w9: () => Z
}), require("./415506.js"), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk544891 = require("./544891.js"),
  Chunk704215 = require("./704215.js"),
  Chunk377108 = require("./377108.js"),
  Chunk524437 = require("./524437.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk428967 = require("./428967.js"),
  Chunk605236 = require("./605236.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk915486 = require("./915486.js"),
  Chunk262847 = require("./262847.js"),
  Chunk581883 = require("./581883.js"),
  Chunk28926 = require("./28926.js"),
  Chunk48481 = require("./48481.js"),
  Chunk526761 = require("./526761.js"),
  Chunk981631 = require("./981631.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}
let T = 5e3,
  C = "UserSettingsProtoLastWriteTimes",
  A = Date.now();

function N() {}
Chunk570140.Z.subscribe("CONNECTION_OPEN", () => {
  A = Date.now()
}), Chunk570140.Z.subscribe("CONNECTION_CLOSED", () => {
  A = Date.now()
}), "undefined" != typeof document && (document.addEventListener("mousedown", () => {
  A = 0
}), document.addEventListener("keydown", () => {
  A = 0
}));
class P {
  getEditInfo() {
    return E.Z.getFullState()[this.type]
  }
  getCurrentValue() {
    return this.getEditInfo().proto
  }
  async updateAsync(e, t, n) {
    await this.loadIfNecessary();
    let r = (0, b.H)(this.ProtoClass, e),
      i = this.getCurrentValue()[e],
      a = (0, b.r)(i, t, r, this.ProtoClass, e);
    null != a && (__OVERLAY__ ? u.Z.dispatch({
      type: "USER_SETTINGS_PROTO_ENQUEUE_UPDATE",
      settings: {
        type: this.type,
        proto: a
      },
      delaySeconds: n,
      jitter: n === O.fy.AUTOMATED || n === O.fy.DAILY,
      partial: true,
      resetEditInfo: false,
      local: true
    }) : (this.logger.log("Updating ".concat(String(e), " with delay ").concat(n)), this.markDirty(a, {
      delaySeconds: n,
      jitter: n === O.fy.AUTOMATED || n === O.fy.DAILY
    })))
  }
  markDirty(e, t) {
    var n;
    i()(!__OVERLAY__, "this cannot run in the overlay");
    let {
      editInfo: r
    } = this.getEditInfo(), a = {
      timeout: r.timeout
    };
    if (!r.loaded) throw Error("Cannot edit user settings proto because we have not yet loaded the stored version from the DB");
    false !== t.dispatch && u.Z.dispatch({
      type: "USER_SETTINGS_PROTO_UPDATE",
      settings: {
        type: this.type,
        proto: e
      },
      partial: true,
      local: true
    });
    let o = null != (n = t.delaySeconds) ? n : 0;
    if (null != a.timeout && o < r.timeoutDelay && !r.rateLimited && (clearTimeout(a.timeout), a.timeout = true), null == a.timeout) {
      let e = o * h.Z.Millis.SECOND;
      t.jitter && (e += Math.floor(Math.random() * Math.min(e, 30 * h.Z.Millis.SECOND))), this.logger.log("Scheduling save from markDirty"), a.timeout = setTimeout(this.persistChanges, e), a.timeoutDelay = o
    }
    null != t.cleanup && (a.cleanupFuncs = [...r.cleanupFuncs, ...t.cleanup]), null == r.protoToSave ? a.protoToSave = e : a.protoToSave = (0, y.re)(this.ProtoClass, r.protoToSave, e), this.dispatchChanges(a)
  }
  dispatchChanges(e) {
    u.Z.dispatch({
      type: "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO",
      settings: {
        changes: e,
        type: this.type
      }
    })
  }
  saveLastSendTime() {
    var e;
    let t = null != (e = c.K.get(C)) ? e : {};
    t[this.type] = Date.now(), c.K.set(C, t)
  }
  loadIfUncached(e, t) {
    E.Z.hasLoaded(e) && true !== t || this.loadIfNecessary(t)
  }
  async loadIfNecessary(e) {
    if (__OVERLAY__) return void u.Z.dispatch({
      type: "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY",
      settingsType: this.type
    });
    let {
      editInfo: t
    } = this.getEditInfo();
    if (e || !t.loaded && !t.loading) {
      this.logger.log("Loading proto"), this.dispatchChanges({
        loading: true
      });
      try {
        let {
          body: {
            settings: t
          }
        } = await a.tn.get({
          url: v.ANM.USER_SETTINGS_PROTO(this.type),
          rejectWithError: false
        }), n = (0, y.d5)(this.ProtoClass, t);
        if (null == n) return void this.dispatchChanges({
          loading: false,
          loaded: true
        });
        let r = g.Z[this.type],
          {
            proto: i,
            isDirty: o,
            cleanupFuncs: s
          } = (0, y.xt)(n, r);
        return await u.Z.dispatch({
          type: "USER_SETTINGS_PROTO_UPDATE",
          settings: {
            type: this.type,
            proto: n
          },
          resetEditInfo: o || e,
          local: false
        }), o && this.markDirtyFromMigration(i, s), n
      } catch (e) {
        throw this.dispatchChanges({
          loading: false
        }), e
      }
    }
  }
  markDirtyFromMigration(e, t) {
    i()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Marking dirty due to migrates"), i()(null == this.getEditInfo().editInfo.offlineEditDataVersion, "offline changes are not supported with migrations"), this.markDirty(e, {
      cleanup: t,
      dispatch: false,
      delaySeconds: O.fy.AUTOMATED,
      jitter: true
    })
  }
  markDirtyIfHasPendingChange(e) {
    this.beforeSendCallbacks.some(e => {
      let {
        hasChanges: t
      } = e;
      return t()
    }) && this.markDirty(this.ProtoClass.create(), {
      dispatch: false,
      delaySeconds: 0,
      cleanup: e
    })
  }
  scheduleSaveFromOfflineEdit() {
    i()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Scheduling save from offline edit");
    let {
      editInfo: e
    } = this.getEditInfo();
    i()(null != e.protoToSave, "protoToSave cannot be null"), i()(null != e.offlineEditDataVersion, "offlineEditDataVersion cannot be null"), i()(null == e.timeout, "timeout must not be set already");
    let t = T + Math.floor(Math.random() * T),
      n = setTimeout(this.persistChanges, t);
    this.dispatchChanges({
      timeout: n,
      timeoutDelay: t
    })
  }
  constructor(e, t) {
    S(this, "ProtoClass", true), S(this, "type", true), S(this, "logger", true), S(this, "beforeSendCallbacks", true), S(this, "lastSendTime", true), S(this, "persistChanges", true), this.ProtoClass = e, this.type = t, this.beforeSendCallbacks = [], this.lastSendTime = 0, this.persistChanges = async () => {
      i()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Persisting proto");
      let {
        editInfo: e
      } = this.getEditInfo();
      if (null == e.protoToSave) return void this.logger.log("Not persisting proto because the proto was null");
      this.beforeSendCallbacks.forEach(t => {
        let {
          processProto: n
        } = t;
        return n(e.protoToSave)
      });
      let t = (0, y.xU)(this.ProtoClass, e.protoToSave);
      if (null == t || "" === t) return void this.logger.log("Not persisting proto because there is nothing to change");
      try {
        this.saveLastSendTime();
        let {
          body: n
        } = await a.tn.patch({
          url: v.ANM.USER_SETTINGS_PROTO(this.type),
          body: {
            settings: t,
            required_data_version: e.offlineEditDataVersion
          },
          rejectWithError: false
        });
        n.out_of_date && this.logger.log("Proto was out of date, discarding changes"), this.getEditInfo().editInfo.cleanupFuncs.forEach(e => e());
        let r = (0, y.d5)(this.ProtoClass, n.settings);
        if (null == r) return;
        u.Z.dispatch({
          type: "USER_SETTINGS_PROTO_UPDATE",
          settings: {
            proto: r,
            type: this.type
          },
          resetEditInfo: true,
          wasSaved: true,
          local: false
        })
      } catch (e) {
        var n;
        if (429 === e.status) {
          this.logger.log("Rate limited, scheduling retry");
          let t = parseInt(e.headers["retry-after"]);
          isNaN(t) && (t = 60);
          let n = setTimeout(this.persistChanges, Math.min(30 * h.Z.Millis.SECOND, t * h.Z.Millis.SECOND));
          this.dispatchChanges({
            rateLimited: true,
            timeout: n
          })
        } else if (400 === e.status && (null == (n = e.body) ? true : n.code) === v.evJ.INVALID_USER_SETTINGS_DATA) throw this.logger.log("Reloading do to invalid data"), this.loadIfNecessary(true), e;
        else throw this.logger.log("Unknown user settings error"), e
      }
    }, this.logger = new d.Z(this.ProtoClass.typeName)
  }
}
let w = new P(Chunk524437.o8, Chunk526761.yP.PRELOADED_USER_SETTINGS),
  R = new P(Chunk377108.ji, Chunk526761.yP.FRECENCY_AND_FAVORITES_SETTINGS),
  D = {
    [Chunk526761.yP.PRELOADED_USER_SETTINGS]: w,
    [Chunk526761.yP.FRECENCY_AND_FAVORITES_SETTINGS]: R
  };

function x(e, t, n) {
  return w.updateAsync("guilds", n => (0, y.u0)(n, e, t), n)
}

function L(e, t, n, r) {
  return x(e, e => (0, y.uL)(e, t, n), r)
}

function j(e) {
  return M(e), w.updateAsync("userContent", t => {
    if ((0, m.jl)(t.dismissedContents, e)) returnfalse;
    t.dismissedContents = (0, m.GV)(t.dismissedContents, e)
  }, O.fy.INFREQUENT_USER_ACTION)
}

function M(e) {
  !E.Z.hasLoaded(O.yP.PRELOADED_USER_SETTINGS) && (k(e) || _.default.track(v.rMx.DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN, {
    content_type: o.z[e]
  }))
}

function k(e) {
  var t;
  let n = null == (t = E.Z.settings.userContent) ? true : t.dismissedContents;
  return null != n && (0, m.jl)(n, e)
}
async function U(e, t) {
  return await w.updateAsync("userContent", n => {
    n.recurringDismissibleContentStates[e] = I({}, n.recurringDismissibleContentStates[e], t)
  }, O.fy.INFREQUENT_USER_ACTION)
}
async function G(e, t, n) {
  return await x(t, t => {
    t.guildDismissibleContentStates[e] = I({}, t.guildDismissibleContentStates[e], n)
  }, O.fy.INFREQUENT_USER_ACTION)
}

function Z(e) {
  return w.updateAsync("userContent", t => {
    if (!(0, m.jl)(t.dismissedContents, e)) returnfalse;
    t.dismissedContents = (0, m.jx)(t.dismissedContents, e)
  }, O.fy.INFREQUENT_USER_ACTION)
}

function F(e) {
  return U(e, {
    lastDismissedVersion: 0,
    lastDismissedAtMs: "0",
    lastDismissedObjectId: "0",
    numTimesDismissed: 0
  })
}

function B() {
  return w.updateAsync("userContent", e => {
    e.dismissedContents = new Uint8Array, e.recurringDismissibleContentStates = {}
  }, O.fy.INFREQUENT_USER_ACTION)
}

function V() {
  return w.updateAsync("userContent", e => {
    let t = new Uint8Array;
    for (let n of f.V_)(0, f.O2)(n) ? t = (0, m.GV)(t, n) : e.recurringDismissibleContentStates[n] = (0, p.F8)(n);
    e.dismissedContents = t
  }, O.fy.INFREQUENT_USER_ACTION)
}