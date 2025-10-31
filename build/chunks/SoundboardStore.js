/** Chunk was on web.js **/
/** chunk id: 763296, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => X
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
  A = new Set,
  C = new Map,
  N = false;

function R() {
  b.clear(), y.clear(), O.clear(), C.clear(), N = false, T = 0, S = 0, I = 0
}

function P() {
  O.clear(), C.clear()
}

function w() {
  T = 1
}

function D(e) {
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

function L(e) {
  let {
    sound: t
  } = e, n = b.get(t.guildId), r = null == n ? true : n.findIndex(e => e.soundId === t.soundId);
  null != n && null != r && false !== r ? (n[r] = t, b.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), b.set(t.guildId, [...n]))
}

function M(e) {
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

function k() {
  I = 1
}

function U(e) {
  let {
    soundboardSounds: t
  } = e;
  b.set(h.X8, t), I = 2
}

function G() {
  S = 1
}

function B(e) {
  let {
    topSoundsForGuilds: t
  } = e;
  y = new Map(t), S = 2
}

function Z(e) {
  var t, n, r;
  let {
    soundId: i,
    userId: a
  } = e, o = (null != (n = O.get(i)) ? n : 0) + 1, s = (null != (r = C.get(a)) ? r : 0) + 1;
  O.set(i, o), C.set(a, s), a !== (null == (t = u.default.getCurrentUser()) ? true : t.id) && (N = true)
}

function F(e) {
  var t, n;
  let {
    soundId: r,
    userId: i
  } = e, a = (null != (t = O.get(r)) ? t : 0) - 1, o = (null != (n = C.get(i)) ? n : 0) - 1;
  a <= 0 ? O.delete(r) : O.set(r, a), o <= 0 ? C.delete(i) : C.set(i, o)
}
let V = a().debounce((e, t) => {
  d.default.track(m.rMx.UPDATE_SOUNDBOARD_SETTINGS, {
    volume: Math.round((0, f.P)(e)),
    location_stack: t
  }), l.kU.updateSetting({
    volume: e
  })
}, 1e3);

function H(e) {
  let {
    volume: t,
    location: n
  } = e;
  V(t, n)
}

function Y(e) {
  var t, n;
  let r = null != (n = null == e || null == (t = e.audioContextSettings) ? true : t.user) ? n : {};
  for (let [e, t] of Object.entries(r)) t.soundboardMuted ? v.add(e) : v.delete(e);
  for (let e of v.keys()) null == r[e] && v.delete(e)
}

function W(e) {
  let {
    settings: t
  } = e, {
    type: n,
    proto: r
  } = t;
  if (n === g.yP.FRECENCY_AND_FAVORITES_SETTINGS) {
    var i, a;
    A = new Set(null != (a = null == r || null == (i = r.favoriteSoundboardSounds) ? true : i.soundIds) ? a : [])
  } else n === g.yP.PRELOADED_USER_SETTINGS && Y(r)
}

function K(e) {
  let {
    userId: t
  } = e;
  v.has(t) ? v.delete(t) : v.add(t)
}

function z(e) {
  let {
    soundboardStoreState: t
  } = e;
  b = new Map(_.default.entries(t.soundboardSounds)), A = new Set(t.favoritedSoundIds), v = new Set(t.localSoundboardMutes)
}
class q extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk581883.Z, Chunk594174.default), Y(Chunk581883.Z.settings)
  }
  getOverlaySerializedState() {
    return {
      soundboardSounds: Object.fromEntries(b),
      favoritedSoundIds: Array.from(A),
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
    let t = C.get(e);
    return null != t && t > 0
  }
  isPlayingSound(e) {
    return null != O.get(e)
  }
  isFavoriteSound(e) {
    return A.has(e)
  }
  getFavorites() {
    return A
  }
  getAllTopSoundsForGuilds() {
    return y
  }
  isLocalSoundboardMuted(e) {
    return v.has(e)
  }
  hasHadOtherUserPlaySoundInSession() {
    return N
  }
  shouldFetchTopSoundsForGuilds() {
    return (0, Chunk771784.cI)("SoundboardStore") && 0 === S
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
E(q, "displayName", "SoundboardStore");
let X = new q(Chunk570140.Z, {
  LOGOUT: R,
  GUILD_SOUNDBOARD_FETCH: w,
  GUILD_SOUNDBOARD_SOUND_CREATE: L,
  GUILD_SOUNDBOARD_SOUND_UPDATE: L,
  GUILD_SOUNDBOARD_SOUND_DELETE: j,
  GUILD_SOUNDBOARD_SOUND_PLAY_START: Z,
  GUILD_SOUNDBOARD_SOUND_PLAY_END: F,
  GUILD_SOUNDBOARD_SOUNDS_UPDATE: M,
  USER_SOUNDBOARD_SET_VOLUME: H,
  VOICE_CHANNEL_SELECT: P,
  USER_SETTINGS_PROTO_UPDATE: W,
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS: k,
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: U,
  SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FETCH: G,
  SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_SUCCESS: B,
  SOUNDBOARD_SOUNDS_RECEIVED: D,
  GUILD_DELETE: x,
  AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: K,
  OVERLAY_INITIALIZE: z
})