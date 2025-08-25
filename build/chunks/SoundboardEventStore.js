/** Chunk was on web.js **/
/** chunk id: 178106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./539854.js"), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
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
  Chunk710111 = require("./710111.js"),
  Chunk526761 = require("./526761.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = [],
  I = new(s())({
    max: Chunk710111.zb
  }),
  T = new Chunk704907.ZP({
    computeBonus: () => 100,
    computeWeight: e => {
      let t = 1;
      return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
    },
    lookupKey: e => p.Z.getSoundById(e),
    afterCompute: () => {},
    numFrequentlyItems: Chunk710111.O6
  });

function S(e) {
  let {
    sound: t,
    trigger: n
  } = e;
  if (!L()) return;
  let r = t.soundId.toString();
  n === h.YQ.SOUNDBOARD && N(r)
}

function A(e) {
  var t;
  let {
    soundId: n,
    userId: r
  } = e;
  if (!x()) return;
  let i = n.toString();
  r !== (null == (t = f.default.getCurrentUser()) ? true : t.id) && R(i) && C(i)
}

function C(e) {
  I.set(e, e)
}

function N(e) {
  T.track(e), v.push({
    key: e,
    timestamp: Date.now()
  }), T.compute()
}

function R(e) {
  for (let t of p.Z.getSounds().values())
    if (null != t.find(t => t.soundId.toString() === e)) returntrue;
  returnfalse
}

function P(e) {
  return o().mapValues(e, e => O(b({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  }))
}

function w() {
  var e;
  if (!L()) return;
  let t = null == (e = Chunk581883.Z.frecencyWithoutFetchingLatest.playedSoundFrecency) ? true : module.playedSounds;
  T.overwriteHistory(P(null != exports ? exports : {}), v)
}

function D(e) {
  let {
    settings: {
      type: t
    },
    wasSaved: n
  } = e;
  L() && t === g.yP.FRECENCY_AND_FAVORITES_SETTINGS && n && (v = [])
}

function x() {
  return (0, Chunk164878.v)({
    location: "soundboard_event_store",
    autoTrackExposure: false
  }).canSeeRecentlyHeard
}

function L() {
  return (0, Chunk164878.v)({
    location: "soundboard_event_store",
    autoTrackExposure: false
  }).canSeeFrequentlyPlayed
}
class j extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(f.default, p.Z), (null == e ? true : e.recentlyHeardCache) != null && I.load(e.recentlyHeardCache), (null == e ? true : e.playedEventsPendingFlush) != null && (v = e.playedEventsPendingFlush), this.syncWith([d.Z], w)
  }
  getState() {
    return {
      recentlyHeardCache: I.dump(),
      playedEventsPendingFlush: v
    }
  }
  hasPendingUsage() {
    return v.length > 0
  }
  get playedSoundHistory() {
    return T.usageHistory
  }
  get recentlyHeardSoundIds() {
    return I.values()
  }
  get frecentlyPlayedSounds() {
    return T.frequently
  }
}
E(j, "displayName", "SoundboardEventStore"), E(j, "persistKey", "SoundboardEventStore");
let k = new j(Chunk570140.Z, {
  GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: S,
  GUILD_SOUNDBOARD_SOUND_PLAY_START: A,
  USER_SETTINGS_PROTO_UPDATE: D
})