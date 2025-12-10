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
let S = [],
  I = new(s())({
    max: Chunk710111.zb
  }),
  T = new Chunk704907.Z({
    computeBonus: () => 100,
    lookupKey: e => _.Z.getSoundById(e),
    afterCompute: () => {},
    numFrequentlyItems: Chunk710111.O6
  });

function C(e) {
  let {
    sound: t,
    trigger: n
  } = e;
  if (!j()) return;
  let r = t.soundId.toString();
  n === m.YQ.SOUNDBOARD && P(r)
}

function A(e) {
  var t;
  let {
    soundId: n,
    userId: r
  } = e;
  if (!L()) return;
  let i = n.toString();
  r !== (null == (t = f.default.getCurrentUser()) ? true : t.id) && R(i) && N(i)
}

function N(e) {
  I.set(e, e)
}

function P(e) {
  T.track(e), S.push({
    key: e,
    timestamp: Date.now()
  }), T.compute()
}

function R(e) {
  for (let t of _.Z.getSounds().values())
    if (null != t.find(t => t.soundId.toString() === e)) returntrue;
  returnfalse
}

function D(e) {
  return a().mapValues(e, e => v(y({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  }))
}

function w() {
  var e;
  if (!j()) return;
  let t = null == (e = Chunk581883.Z.frecencyWithoutFetchingLatest.playedSoundFrecency) ? true : module.playedSounds;
  T.overwriteHistory(D(null != exports ? exports : {}), S)
}

function x(e) {
  let {
    settings: {
      type: t
    },
    wasSaved: n
  } = e;
  j() && t === E.yP.FRECENCY_AND_FAVORITES_SETTINGS && n && (S = [])
}

function L() {
  return (0, Chunk164878.v)({
    location: "soundboard_event_store",
    autoTrackExposure: false
  }).canSeeRecentlyHeard
}

function j() {
  return (0, Chunk771784.Lq)("soundboard_event_store")
}
class M extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(_.Z, d.Z, f.default), (null == e ? true : e.recentlyHeardCache) != null && I.load(e.recentlyHeardCache), (null == e ? true : e.playedEventsPendingFlush) != null && (S = e.playedEventsPendingFlush), this.syncWith([d.Z], w)
  }
  getState() {
    return {
      recentlyHeardCache: I.dump(),
      playedEventsPendingFlush: S
    }
  }
  hasPendingUsage() {
    return S.length > 0
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
b(M, "displayName", "SoundboardEventStore"), b(M, "persistKey", "SoundboardEventStore");
let k = new M(Chunk570140.Z, {
  GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: C,
  GUILD_SOUNDBOARD_SOUND_PLAY_START: A,
  USER_SETTINGS_PROTO_UPDATE: x
})