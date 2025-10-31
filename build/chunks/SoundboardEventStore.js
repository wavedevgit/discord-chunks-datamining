/** Chunk was on web.js **/
/** chunk id: 178106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./539854.js"), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk31775 = require("./31775.js"),
  s = require.n(Chunk31775),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk704907 = require("./704907.js"),
  Chunk581883 = require("./581883.js"),
  Chunk594174 = require("./594174.js"),
  Chunk164878 = require("./164878.js"),
  Chunk763296 = require("./763296.js"),
  Chunk697426 = require("./697426.js"),
  Chunk771784 = require("./771784.js"),
  Chunk710111 = require("./710111.js"),
  Chunk526761 = require("./526761.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = [],
  T = new(s())({
    max: Chunk710111.zb
  }),
  S = new Chunk704907.Z({
    computeBonus: () => 100,
    lookupKey: e => p.Z.getSoundById(e),
    afterCompute: () => {},
    numFrequentlyItems: Chunk710111.O6
  });

function A(e) {
  let {
    sound: t,
    trigger: n
  } = e;
  if (!M()) return;
  let r = t.soundId.toString();
  n === h.YQ.SOUNDBOARD && R(r)
}

function C(e) {
  var t;
  let {
    soundId: n,
    userId: r
  } = e;
  if (!L()) return;
  let i = n.toString();
  r !== (null == (t = f.default.getCurrentUser()) ? true : t.id) && P(i) && N(i)
}

function N(e) {
  T.set(e, e)
}

function R(e) {
  S.track(e), I.push({
    key: e,
    timestamp: Date.now()
  }), S.compute()
}

function P(e) {
  for (let t of p.Z.getSounds().values())
    if (null != t.find(t => t.soundId.toString() === e)) returntrue;
  returnfalse
}

function w(e) {
  return a().mapValues(e, e => v(y({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  }))
}

function D() {
  var e;
  if (!M()) return;
  let t = null == (e = Chunk581883.Z.frecencyWithoutFetchingLatest.playedSoundFrecency) ? true : module.playedSounds;
  S.overwriteHistory(w(null != exports ? exports : {}), I)
}

function x(e) {
  let {
    settings: {
      type: t
    },
    wasSaved: n
  } = e;
  M() && t === E.yP.FRECENCY_AND_FAVORITES_SETTINGS && n && (I = [])
}

function L() {
  return (0, Chunk164878.v)({
    location: "soundboard_event_store",
    autoTrackExposure: false
  }).canSeeRecentlyHeard
}

function M() {
  return (0, Chunk771784.Lq)("soundboard_event_store")
}
class j extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(p.Z, d.Z, f.default), (null == e ? true : e.recentlyHeardCache) != null && T.load(e.recentlyHeardCache), (null == e ? true : e.playedEventsPendingFlush) != null && (I = e.playedEventsPendingFlush), this.syncWith([d.Z], D)
  }
  getState() {
    return {
      recentlyHeardCache: T.dump(),
      playedEventsPendingFlush: I
    }
  }
  hasPendingUsage() {
    return I.length > 0
  }
  get playedSoundHistory() {
    return S.usageHistory
  }
  get recentlyHeardSoundIds() {
    return T.values()
  }
  get frecentlyPlayedSounds() {
    return S.frequently
  }
}
b(j, "displayName", "SoundboardEventStore"), b(j, "persistKey", "SoundboardEventStore");
let k = new j(Chunk570140.Z, {
  GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: A,
  GUILD_SOUNDBOARD_SOUND_PLAY_START: C,
  USER_SETTINGS_PROTO_UPDATE: x
})