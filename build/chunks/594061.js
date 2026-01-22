/** Chunk was on web.js **/
/** chunk id: 594061, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $w: () => U,
  D1: () => H,
  Df: () => D,
  Sb: () => O.Sb,
  TG: () => x,
  _N: () => F,
  bW: () => P,
  cE: () => N,
  ji: () => L,
  nT: () => B,
  o_: () => j,
  wc: () => w,
  xB: () => V,
  xs: () => G
}), require("./65821.js"), require("./896048.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk562465 = require("./562465.js"),
  Chunk554146 = require("./554146.js"),
  Chunk803805 = require("./803805.js"),
  Chunk873298 = require("./873298.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk256787 = require("./256787.js"),
  Chunk367727 = require("./367727.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927813 = require("./927813.js"),
  Chunk460288 = require("./460288.js"),
  Chunk405892 = require("./405892.js"),
  Chunk617617 = require("./617617.js"),
  Chunk159201 = require("./159201.js"),
  Chunk761821 = require("./761821.js"),
  Chunk355097 = require("./355097.js"),
  Chunk652215 = require("./652215.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}
let I = 5e3,
  T = "UserSettingsProtoLastWriteTimes",
  C = Date.now();

function N() {}
Chunk73153.h.subscribe("CONNECTION_OPEN", () => {
  C = Date.now()
}), Chunk73153.h.subscribe("CONNECTION_CLOSED", () => {
  C = Date.now()
}), "u" > typeof document && (document.addEventListener("mousedown", () => {
  C = 0
}), document.addEventListener("keydown", () => {
  C = 0
}));
class R {
  getEditInfo() {
    return E.A.getFullState()[this.type]
  }
  getCurrentValue() {
    return this.getEditInfo().proto
  }
  async updateAsync(e, t, n) {
    await this.loadIfNecessary();
    let r = (0, b.f)(this.ProtoClass, e),
      i = this.getCurrentValue()[e],
      a = (0, b.a)(i, t, r, this.ProtoClass, e);
    null != a && (__OVERLAY__ ? u.h.dispatch({
      type: "USER_SETTINGS_PROTO_ENQUEUE_UPDATE",
      settings: {
        type: this.type,
        proto: a
      },
      delaySeconds: n,
      jitter: n === O.Sb.AUTOMATED || n === O.Sb.DAILY,
      partial: true,
      resetEditInfo: false,
      local: true
    }) : (this.logger.log("Updating ".concat(String(e), " with delay ").concat(n)), this.markDirty(a, {
      delaySeconds: n,
      jitter: n === O.Sb.AUTOMATED || n === O.Sb.DAILY
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
    false !== t.dispatch && u.h.dispatch({
      type: "USER_SETTINGS_PROTO_UPDATE",
      settings: {
        type: this.type,
        proto: e
      },
      partial: true,
      local: true
    });
    let s = null != (n = t.delaySeconds) ? n : 0;
    if (null != a.timeout && s < r.timeoutDelay && !r.rateLimited && (clearTimeout(a.timeout), a.timeout = true), null == a.timeout) {
      let e = s * h.A.Millis.SECOND;
      t.jitter && (e += Math.floor(Math.random() * Math.min(e, 30 * h.A.Millis.SECOND))), this.logger.log("Scheduling save from markDirty"), a.timeout = setTimeout(this.persistChanges, e), a.timeoutDelay = s
    }
    null != t.cleanup && (a.cleanupFuncs = [...r.cleanupFuncs, ...t.cleanup]), null == r.protoToSave ? a.protoToSave = e : a.protoToSave = (0, y.RK)(this.ProtoClass, r.protoToSave, e), this.dispatchChanges(a)
  }
  dispatchChanges(e) {
    u.h.dispatch({
      type: "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO",
      settings: {
        changes: e,
        type: this.type
      }
    })
  }
  saveLastSendTime() {
    var e;
    let t = null != (e = c.w.get(T)) ? e : {};
    t[this.type] = Date.now(), c.w.set(T, t)
  }
  loadIfUncached(e, t) {
    E.A.hasLoaded(e) && true !== t || this.loadIfNecessary(t)
  }
  async loadIfNecessary(e) {
    if (__OVERLAY__) return void u.h.dispatch({
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
        } = await a.Bo.get({
          url: A.Rsh.USER_SETTINGS_PROTO(this.type),
          rejectWithError: false
        }), n = (0, y.ii)(this.ProtoClass, t);
        if (null == n) return void this.dispatchChanges({
          loading: false,
          loaded: true
        });
        let r = g.A[this.type],
          {
            proto: i,
            isDirty: s,
            cleanupFuncs: o
          } = (0, y.vI)(n, r);
        return await u.h.dispatch({
          type: "USER_SETTINGS_PROTO_UPDATE",
          settings: {
            type: this.type,
            proto: n
          },
          resetEditInfo: s || e,
          local: false
        }), s && this.markDirtyFromMigration(i, o), n
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
      delaySeconds: O.Sb.AUTOMATED,
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
    let t = I + Math.floor(Math.random() * I),
      n = setTimeout(this.persistChanges, t);
    this.dispatchChanges({
      timeout: n,
      timeoutDelay: t
    })
  }
  constructor(e, t) {
    v(this, "ProtoClass", true), v(this, "type", true), v(this, "logger", true), v(this, "beforeSendCallbacks", true), v(this, "lastSendTime", true), v(this, "persistChanges", true), this.ProtoClass = e, this.type = t, this.beforeSendCallbacks = [], this.lastSendTime = 0, this.persistChanges = async () => {
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
      let t = (0, y.ob)(this.ProtoClass, e.protoToSave);
      if (null == t || "" === t) return void this.logger.log("Not persisting proto because there is nothing to change");
      try {
        this.saveLastSendTime();
        let {
          body: n
        } = await a.Bo.patch({
          url: A.Rsh.USER_SETTINGS_PROTO(this.type),
          body: {
            settings: t,
            required_data_version: e.offlineEditDataVersion
          },
          rejectWithError: false
        });
        n.out_of_date && this.logger.log("Proto was out of date, discarding changes"), this.getEditInfo().editInfo.cleanupFuncs.forEach(e => e());
        let r = (0, y.ii)(this.ProtoClass, n.settings);
        if (null == r) return;
        u.h.dispatch({
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
          let n = setTimeout(this.persistChanges, Math.min(30 * h.A.Millis.SECOND, t * h.A.Millis.SECOND));
          this.dispatchChanges({
            rateLimited: true,
            timeout: n
          })
        } else if (400 === e.status && (null == (n = e.body) ? true : n.code) === A.t02.INVALID_USER_SETTINGS_DATA) throw this.logger.log("Reloading do to invalid data"), this.loadIfNecessary(true), e;
        else throw this.logger.log("Unknown user settings error"), e
      }
    }, this.logger = new d.A(this.ProtoClass.typeName)
  }
}
let w = new R(Chunk873298.nT, Chunk355097.oD.PRELOADED_USER_SETTINGS),
  P = new R(Chunk803805.aw, Chunk355097.oD.FRECENCY_AND_FAVORITES_SETTINGS),
  D = {
    [Chunk355097.oD.PRELOADED_USER_SETTINGS]: w,
    [Chunk355097.oD.FRECENCY_AND_FAVORITES_SETTINGS]: P
  };

function x(e, t, n) {
  return w.updateAsync("guilds", n => (0, y.$o)(n, e, t), n)
}

function L(e, t, n, r) {
  return x(e, e => (0, y.VB)(e, t, n), r)
}

function j(e) {
  return M(e), w.updateAsync("userContent", t => {
    if ((0, m.c0)(t.dismissedContents, e)) returnfalse;
    t.dismissedContents = (0, m.Vf)(t.dismissedContents, e)
  }, O.Sb.INFREQUENT_USER_ACTION)
}

function M(e) {
  E.A.hasLoaded(O.oD.PRELOADED_USER_SETTINGS) || k(e) || _.default.track(A.HAw.DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN, {
    content_type: s.M[e]
  })
}

function k(e) {
  var t;
  let n = null == (t = E.A.settings.userContent) ? true : t.dismissedContents;
  return null != n && (0, m.c0)(n, e)
}
async function U(e, t) {
  return await w.updateAsync("userContent", n => {
    n.recurringDismissibleContentStates[e] = S({}, n.recurringDismissibleContentStates[e], t)
  }, O.Sb.INFREQUENT_USER_ACTION)
}
async function G(e, t, n) {
  return await x(t, t => {
    t.guildDismissibleContentStates[e] = S({}, t.guildDismissibleContentStates[e], n)
  }, O.Sb.INFREQUENT_USER_ACTION)
}

function V(e) {
  return w.updateAsync("userContent", t => {
    if (!(0, m.c0)(t.dismissedContents, e)) returnfalse;
    t.dismissedContents = (0, m.We)(t.dismissedContents, e)
  }, O.Sb.INFREQUENT_USER_ACTION)
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
  }, O.Sb.INFREQUENT_USER_ACTION)
}

function H() {
  return w.updateAsync("userContent", e => {
    let t = new Uint8Array;
    for (let n of f.zd)(0, f.Jq)(n) ? t = (0, m.Vf)(t, n) : e.recurringDismissibleContentStates[n] = (0, p.Tg)(n);
    e.dismissedContents = t
  }, O.Sb.INFREQUENT_USER_ACTION)
}