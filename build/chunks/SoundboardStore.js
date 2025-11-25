/** Chunk was on web.js **/
/** chunk id: 763296, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => J
}), require("./388685.js"), require("./539854.js"), require("./467055.js"), require("./472816.js"), require("./794429.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk695346 = require("./695346.js"),
  Chunk581883 = require("./581883.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk36703 = require("./36703.js"),
  Chunk709054 = require("./709054.js"),
  Chunk771784 = require("./771784.js"),
  Chunk710111 = require("./710111.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = new Map,
  y = new Map,
  O = new Map,
  v = new Set,
  I = 0,
  T = 0,
  S = 0,
  A = 0,
  C = new Set,
  N = new Map,
  R = false;

function P() {
  b.clear(), y.clear(), A = 0, O.clear(), N.clear(), R = false, T = 0, S = 0, I = 0
}

function D() {
  O.clear(), N.clear()
}

function w() {
  T = 1
}

function L(e) {
  let {
    updates: t
  } = e;
  t.forEach(e => {
    let {
      guildId: t,
      sounds: n
    } = e;
    b.set(t, n)
  }), T = 2
}

function x(e) {
  let {
    guild: t
  } = e;
  b.delete(t.id)
}

function M(e) {
  let {
    sound: t
  } = e, n = b.get(t.guildId), r = null == n ? true : n.findIndex(e => e.soundId === t.soundId);
  null != n && null != r && false !== r ? (n[r] = t, b.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), b.set(t.guildId, [...n]))
}

function k(e) {
  let {
    guildId: t,
    soundboardSounds: n
  } = e;
  b.set(t, n)
}

function j(e) {
  let {
    soundId: t,
    guildId: n
  } = e, r = b.get(n), i = null == r ? true : r.findIndex(e => e.soundId === t);
  null == r || null == i || i < 0 || (r.splice(i, 1), b.set(n, [...r]))
}

function U() {
  I = 1
}

function G(e) {
  let {
    soundboardSounds: t
  } = e;
  b.set(h.X8, t), I = 2
}

function B() {
  S = 1
}

function Z(e) {
  let {
    topSoundsForGuilds: t
  } = e;
  y = new Map(t), S = 2, A = Date.now()
}

function F() {
  S = 2, A = 0
}

function V(e) {
  var t, n, r;
  let {
    soundId: i,
    userId: a
  } = e, o = (null != (n = O.get(i)) ? n : 0) + 1, s = (null != (r = N.get(a)) ? r : 0) + 1;
  O.set(i, o), N.set(a, s), a !== (null == (t = u.default.getCurrentUser()) ? true : t.id) && (R = true)
}

function H(e) {
  var t, n;
  let {
    soundId: r,
    userId: i
  } = e, a = (null != (t = O.get(r)) ? t : 0) - 1, o = (null != (n = N.get(i)) ? n : 0) - 1;
  a <= 0 ? O.delete(r) : O.set(r, a), o <= 0 ? N.delete(i) : N.set(i, o)
}
let W = a().debounce((e, t) => {
  d.default.track(m.rMx.UPDATE_SOUNDBOARD_SETTINGS, {
    volume: Math.round((0, f.P)(e)),
    location_stack: t
  }), l.kU.updateSetting({
    volume: e
  })
}, 1e3);

function Y(e) {
  let {
    volume: t,
    location: n
  } = e;
  W(t, n)
}

function K(e) {
  var t, n;
  let r = null != (n = null == e || null == (t = e.audioContextSettings) ? true : t.user) ? n : {};
  for (let [e, t] of Object.entries(r)) t.soundboardMuted ? v.add(e) : v.delete(e);
  for (let e of v.keys()) null == r[e] && v.delete(e)
}

function z(e) {
  let {
    settings: t
  } = e, {
    type: n,
    proto: r
  } = t;
  if (n === g.yP.FRECENCY_AND_FAVORITES_SETTINGS) {
    var i, a;
    C = new Set(null != (a = null == r || null == (i = r.favoriteSoundboardSounds) ? true : i.soundIds) ? a : [])
  } else n === g.yP.PRELOADED_USER_SETTINGS && K(r)
}

function q(e) {
  let {
    userId: t
  } = e;
  v.has(t) ? v.delete(t) : v.add(t)
}

function X(e) {
  let {
    soundboardStoreState: t
  } = e;
  b = new Map(_.default.entries(t.soundboardSounds)), C = new Set(t.favoritedSoundIds), v = new Set(t.localSoundboardMutes)
}
class Q extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk581883.Z, Chunk594174.default), K(Chunk581883.Z.settings)
  }
  getOverlaySerializedState() {
    return {
      soundboardSounds: Object.fromEntries(b),
      favoritedSoundIds: Array.from(C),
      localSoundboardMutes: Array.from(v)
    }
  }
  getSounds() {
    return b
  }
  getSoundsForGuild(e) {
    return b.get(e)
  }
  getSound(e, t) {
    var n;
    return (null != (n = b.get(e)) ? n : []).find(e => e.soundId === t)
  }
  getSoundById(e) {
    return Array.from(b.values()).flat().find(t => t.soundId === e)
  }
  isFetchingSounds() {
    return 1 === T
  }
  isFetchingDefaultSounds() {
    return 1 === I
  }
  isFetching() {
    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
  }
  shouldFetchDefaultSounds() {
    return 0 === I
  }
  hasFetchedDefaultSounds() {
    return 2 === I
  }
  isUserPlayingSounds(e) {
    let t = N.get(e);
    return null != t && t > 0
  }
  isPlayingSound(e) {
    return null != O.get(e)
  }
  isFavoriteSound(e) {
    return C.has(e)
  }
  getFavorites() {
    return C
  }
  getAllTopSoundsForGuilds() {
    return y
  }
  isLocalSoundboardMuted(e) {
    return v.has(e)
  }
  hasHadOtherUserPlaySoundInSession() {
    return R
  }
  shouldFetchTopSoundsForGuilds() {
    return (0, Chunk771784.cI)("SoundboardStore") && (0 === S || 2 === S && Date.now() - A > 864e5)
  }
  hasFetchedTopSoundsForGuilds() {
    return 2 === S
  }
  hasFetchedAllSounds() {
    let e = [T, I];
    return (0, Chunk771784.cI)("SoundboardStore") && module.push(S), module.every(e => 2 === e)
  }
  isFetchingAnySounds() {
    return [T, I, S].some(e => 1 === e)
  }
}
E(Q, "displayName", "SoundboardStore");
let J = new Q(Chunk570140.Z, {
  LOGOUT: P,
  GUILD_SOUNDBOARD_FETCH: w,
  GUILD_SOUNDBOARD_SOUND_CREATE: M,
  GUILD_SOUNDBOARD_SOUND_UPDATE: M,
  GUILD_SOUNDBOARD_SOUND_DELETE: j,
  GUILD_SOUNDBOARD_SOUND_PLAY_START: V,
  GUILD_SOUNDBOARD_SOUND_PLAY_END: H,
  GUILD_SOUNDBOARD_SOUNDS_UPDATE: k,
  USER_SOUNDBOARD_SET_VOLUME: Y,
  VOICE_CHANNEL_SELECT: D,
  USER_SETTINGS_PROTO_UPDATE: z,
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS: U,
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: G,
  SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FETCH: B,
  SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_SUCCESS: Z,
  SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FAILURE: F,
  SOUNDBOARD_SOUNDS_RECEIVED: L,
  GUILD_DELETE: x,
  AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: q,
  OVERLAY_INITIALIZE: X
})