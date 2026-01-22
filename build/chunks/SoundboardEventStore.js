/** Chunk was on web.js **/
/** chunk id: 163956, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => k
}), require("./321073.js"), require("./896048.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk635377 = require("./635377.js"),
  o = require.n(Chunk635377),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk283047 = require("./283047.js"),
  Chunk617617 = require("./617617.js"),
  Chunk287809 = require("./287809.js"),
  Chunk477851 = require("./477851.js"),
  Chunk209932 = require("./209932.js"),
  Chunk807348 = require("./807348.js"),
  Chunk766864 = require("./766864.js"),
  Chunk980504 = require("./980504.js"),
  Chunk355097 = require("./355097.js");

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

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = [],
  S = new(o())({
    max: Chunk980504.E7
  }),
  I = new Chunk283047.A({
    computeBonus: () => 100,
    lookupKey: e => _.A.getSoundById(e),
    afterCompute: () => {},
    numFrequentlyItems: Chunk980504.SC
  });

function T(e) {
  let {
    sound: t,
    trigger: n
  } = e;
  if (!j()) return;
  let r = t.soundId.toString();
  n === h.Zm.SOUNDBOARD && R(r)
}

function C(e) {
  var t;
  let {
    soundId: n,
    userId: r
  } = e;
  if (!L()) return;
  let i = n.toString();
  r !== (null == (t = f.default.getCurrentUser()) ? true : t.id) && w(i) && N(i)
}

function N(e) {
  S.set(e, e)
}

function R(e) {
  I.track(e), v.push({
    key: e,
    timestamp: Date.now()
  }), I.compute()
}

function w(e) {
  for (let t of _.A.getSounds().values())
    if (null != t.find(t => t.soundId.toString() === e)) returntrue;
  returnfalse
}

function P(e) {
  return a().mapValues(e, e => A(y({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  }))
}

function D() {
  var e;
  if (!j()) return;
  let t = null == (e = d.A.frecencyWithoutFetchingLatest.playedSoundFrecency) ? true : e.playedSounds;
  I.overwriteHistory(P(null != t ? t : {}), v)
}

function x(e) {
  let {
    settings: {
      type: t
    },
    wasSaved: n
  } = e;
  j() && t === E.oD.FRECENCY_AND_FAVORITES_SETTINGS && n && (v = [])
}

function L() {
  return (0, p._)({
    location: "soundboard_event_store",
    autoTrackExposure: false
  }).canSeeRecentlyHeard
}

function j() {
  return (0, m.YK)("soundboard_event_store")
}
class M extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(_.A, d.A, f.default), (null == e ? true : e.recentlyHeardCache) != null && S.load(e.recentlyHeardCache), (null == e ? true : e.playedEventsPendingFlush) != null && (v = e.playedEventsPendingFlush), this.syncWith([d.A], D)
  }
  getState() {
    return {
      recentlyHeardCache: S.dump(),
      playedEventsPendingFlush: v
    }
  }
  hasPendingUsage() {
    return v.length > 0
  }
  get playedSoundHistory() {
    return I.usageHistory
  }
  get recentlyHeardSoundIds() {
    return S.values()
  }
  get frecentlyPlayedSounds() {
    return I.frequently
  }
}
b(M, "displayName", "SoundboardEventStore"), b(M, "persistKey", "SoundboardEventStore");
let k = new M(Chunk73153.h, {
  GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: T,
  GUILD_SOUNDBOARD_SOUND_PLAY_START: C,
  USER_SETTINGS_PROTO_UPDATE: x
})