/** Chunk was on web.js **/
/** chunk id: 630248, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
}), require("./321073.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk155718 = require("./155718.js"),
  Chunk283047 = require("./283047.js"),
  Chunk933958 = require("./933958.js"),
  Chunk617617 = require("./617617.js"),
  Chunk705751 = require("./705751.js"),
  Chunk355097 = require("./355097.js");

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
let E = [Chunk155718.kc.CHAT, Chunk155718.kc.PRIMARY_ENTRY_POINT],
  y = {
    pendingUsages: []
  },
  b = new Chunk283047.A({
    computeBonus: () => 100,
    lookupKey: e => e,
    afterCompute: () => {},
    numFrequentlyItems: Chunk705751.h2
  });

function O(e) {
  let {
    settings: {
      type: t
    },
    wasSaved: n
  } = e;
  if (t !== p.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n) returnfalse;
  y.pendingUsages = []
}

function v(e) {
  var t;
  let {
    command: n
  } = e;
  if (!E.includes(n.type) || (null == (t = u.Ay.getLaunchState(n.applicationId)) ? true : t.isLaunching)) returnfalse;
  I(n.applicationId)
}

function A(e) {
  let {
    applicationId: t
  } = e;
  I(t)
}

function I(e) {
  y.pendingUsages.push({
    key: e,
    timestamp: Date.now()
  }), b.track(e), b.compute()
}

function S() {
  var e, t;
  let n = null != (e = null == (t = d.A.frecencyWithoutFetchingLatest.applicationFrecency) ? true : t.applications) ? e : {};
  b.overwriteHistory(a().mapValues(n, e => g(h({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), y.pendingUsages)
}
class T extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (y = e), this.waitFor(u.Ay, d.A), this.syncWith([d.A], S)
  }
  getState() {
    return y
  }
  hasPendingUsage() {
    return y.pendingUsages.length > 0
  }
  getApplicationFrecencyWithoutLoadingLatest() {
    return b
  }
  getScoreWithoutLoadingLatest(e) {
    var t;
    return null != (t = b.getScore(e)) ? t : 0
  }
  getTopApplicationsWithoutLoadingLatest() {
    return b.frequently
  }
}
_(T, "displayName", "ApplicationFrecencyStore"), _(T, "persistKey", "ApplicationFrecency");
let C = new T(Chunk73153.h, {
  APPLICATION_COMMAND_USED: v,
  EMBEDDED_ACTIVITY_OPEN: A,
  USER_SETTINGS_PROTO_UPDATE: O
})