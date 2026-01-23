/** Chunk was on web.js **/
/** chunk id: 205761, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => P,
  D: () => v
}), require("./747238.js"), require("./321073.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk283047 = require("./283047.js"),
  Chunk617617 = require("./617617.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = 10,
  O = 100,
  v = 100,
  A = new Chunk283047.A({
    computeBonus: () => O,
    computeWeight: e => {
      let t = 1;
      return 0 === e ? t = 100 : e >= 1 && e < 2 ? t = 70 : e >= 2 && e < 4 ? t = 50 : e >= 4 && e < 7 ? t = 30 : e >= 7 && (t = 10), t
    },
    lookupKey: e => {
      var t, n;
      return null != (t = null != (n = d.A.getGuild(e)) ? n : u.A.getChannel(e)) ? t : u.A.getChannel(u.A.getDMFromUserId(e))
    },
    afterCompute: () => {},
    numFrequentlyItems: v,
    maxSamples: b
  }),
  I = null,
  S = null;

function T(e) {
  let {
    guildId: t,
    channelId: n
  } = e, r = false;
  return n !== I && (I = null != n ? n : null, null != n && _.Ut1.test(n) && (r = true, A.track(n), w.pendingUsages.push({
    key: n,
    timestamp: Date.now()
  }))), t !== S && (S = null != t ? t : null, null != t && _.Ut1.test(t) && (r = true, A.track(t), w.pendingUsages.push({
    key: t,
    timestamp: Date.now()
  }))), r
}

function C(e) {
  let {
    settings: {
      type: t
    },
    wasSaved: n
  } = e;
  return t === h.oD.FRECENCY_AND_FAVORITES_SETTINGS && !!n && (w.pendingUsages = [], true)
}

function N() {
  var e;
  let t = null == (e = c.A.frecencyWithoutFetchingLatest.guildAndChannelFrecency) ? true : e.guildAndChannels;
  if (null == t) returnfalse;
  A.overwriteHistory(a().mapValues(t, e => y(g({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), w.pendingUsages)
}
let w = {
  pendingUsages: []
};
class R extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(u.A, d.A, f.A, p.A, c.A), null != e && (e.pendingUsages = e.pendingUsages.filter(e => null != e && _.Ut1.test(e.key)), w = e), this.syncWith([c.A], N)
  }
  getState() {
    return w
  }
  hasPendingUsage() {
    return w.pendingUsages.length > 0
  }
  get frecencyWithoutFetchingLatest() {
    return A
  }
  getFrequentlyWithoutFetchingLatest() {
    return A.frequently
  }
  getScoreWithoutFetchingLatest(e) {
    var t;
    return null != (t = A.getFrecency(e)) ? t : 0
  }
  getScoreForDMWithoutFetchingLatest(e) {
    let t = u.A.getDMFromUserId(e);
    return null != t ? this.getScoreWithoutFetchingLatest(t) : 0
  }
  getMaxScore() {
    return v * b
  }
  getBonusScore() {
    return O
  }
}
m(R, "displayName", "FrecencyStore"), m(R, "persistKey", "FrecencyStore");
let P = new R(Chunk73153.h, {
  CHANNEL_SELECT: T,
  VOICE_CHANNEL_SELECT: T,
  USER_SETTINGS_PROTO_UPDATE: C
})