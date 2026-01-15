/** Chunk was on web.js **/
/** chunk id: 822245, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./539854.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk911969 = require("./911969.js"),
  Chunk704907 = require("./704907.js"),
  Chunk317381 = require("./317381.js"),
  Chunk581883 = require("./581883.js"),
  Chunk674563 = require("./674563.js"),
  Chunk526761 = require("./526761.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = [Chunk911969.yU.CHAT, Chunk911969.yU.PRIMARY_ENTRY_POINT],
  b = {
    pendingUsages: []
  },
  y = new Chunk704907.Z({
    computeBonus: () => 100,
    lookupKey: e => e,
    afterCompute: () => {},
    numFrequentlyItems: Chunk674563.yP
  });

function O(e) {
  let {
    settings: {
      type: t
    },
    wasSaved: n
  } = e;
  if (t !== p.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) returnfalse;
  b.pendingUsages = []
}

function v(e) {
  var t;
  let {
    command: n
  } = e;
  if (!E.includes(n.type) || (null == (t = u.ZP.getLaunchState(n.applicationId)) ? true : t.isLaunching)) returnfalse;
  I(n.applicationId)
}

function S(e) {
  let {
    applicationId: t
  } = e;
  I(t)
}

function I(e) {
  b.pendingUsages.push({
    key: e,
    timestamp: Date.now()
  }), y.track(e), y.compute()
}

function T() {
  var e, t;
  let n = null != (t = null == (e = d.Z.frecencyWithoutFetchingLatest.applicationFrecency) ? true : e.applications) ? t : {};
  y.overwriteHistory(a().mapValues(n, e => g(h({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), b.pendingUsages)
}
class C extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (b = e), this.waitFor(u.ZP, d.Z), this.syncWith([d.Z], T)
  }
  getState() {
    return b
  }
  hasPendingUsage() {
    return b.pendingUsages.length > 0
  }
  getApplicationFrecencyWithoutLoadingLatest() {
    return y
  }
  getScoreWithoutLoadingLatest(e) {
    var t;
    return null != (t = y.getScore(e)) ? t : 0
  }
  getTopApplicationsWithoutLoadingLatest() {
    return y.frequently
  }
}
_(C, "displayName", "ApplicationFrecencyStore"), _(C, "persistKey", "ApplicationFrecency");
let A = new C(Chunk570140.Z, {
  APPLICATION_COMMAND_USED: v,
  EMBEDDED_ACTIVITY_OPEN: S,
  USER_SETTINGS_PROTO_UPDATE: O
})