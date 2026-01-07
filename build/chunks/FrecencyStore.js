/** Chunk was on web.js **/
/** chunk id: 580005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => v,
  Z: () => w
}), require("./35282.js"), require("./539854.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk704907 = require("./704907.js"),
  Chunk581883 = require("./581883.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js");

function h(e, t, n) {
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
      h(e, t, n[t])
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

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = 10,
  O = 100,
  v = 100,
  S = new Chunk704907.Z({
    computeBonus: () => O,
    computeWeight: e => {
      let t = 1;
      return 0 === e ? t = 100 : e >= 1 && e < 2 ? t = 70 : e >= 2 && e < 4 ? t = 50 : e >= 4 && e < 7 ? t = 30 : e >= 7 && (t = 10), t
    },
    lookupKey: e => {
      var t, n;
      return null != (n = null != (t = d.Z.getGuild(e)) ? t : u.Z.getChannel(e)) ? n : u.Z.getChannel(u.Z.getDMFromUserId(e))
    },
    afterCompute: () => {},
    numFrequentlyItems: v,
    maxSamples: y
  }),
  I = null,
  T = null;

function C(e) {
  let {
    guildId: t,
    channelId: n
  } = e, r = false;
  return n !== I && (I = null != n ? n : null, null != n && _.Xyh.test(n) && (r = true, S.track(n), P.pendingUsages.push({
    key: n,
    timestamp: Date.now()
  }))), t !== T && (T = null != t ? t : null, null != t && _.Xyh.test(t) && (r = true, S.track(t), P.pendingUsages.push({
    key: t,
    timestamp: Date.now()
  }))), r
}

function A(e) {
  let {
    settings: {
      type: t
    },
    wasSaved: n
  } = e;
  return t === m.yP.FRECENCY_AND_FAVORITES_SETTINGS && !!n && (P.pendingUsages = [], true)
}

function N() {
  var e;
  let t = null == (e = c.Z.frecencyWithoutFetchingLatest.guildAndChannelFrecency) ? true : e.guildAndChannels;
  if (null == t) returnfalse;
  S.overwriteHistory(a().mapValues(t, e => b(g({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), P.pendingUsages)
}
let P = {
  pendingUsages: []
};
class R extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(u.Z, d.Z, f.Z, p.Z, c.Z), null != e && (e.pendingUsages = e.pendingUsages.filter(e => null != e && _.Xyh.test(e.key)), P = e), this.syncWith([c.Z], N)
  }
  getState() {
    return P
  }
  hasPendingUsage() {
    return P.pendingUsages.length > 0
  }
  get frecencyWithoutFetchingLatest() {
    return S
  }
  getFrequentlyWithoutFetchingLatest() {
    return S.frequently
  }
  getScoreWithoutFetchingLatest(e) {
    var t;
    return null != (t = S.getFrecency(e)) ? t : 0
  }
  getScoreForDMWithoutFetchingLatest(e) {
    let t = u.Z.getDMFromUserId(e);
    return null != t ? this.getScoreWithoutFetchingLatest(t) : 0
  }
  getMaxScore() {
    return v * y
  }
  getBonusScore() {
    return O
  }
}
h(R, "displayName", "FrecencyStore"), h(R, "persistKey", "FrecencyStore");
let w = new R(Chunk570140.Z, {
  CHANNEL_SELECT: C,
  VOICE_CHANNEL_SELECT: C,
  USER_SETTINGS_PROTO_UPDATE: A
})