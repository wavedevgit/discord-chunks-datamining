/** Chunk was on web.js **/
/** chunk id: 209932, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => $
}), require("./896048.js"), require("./321073.js"), require("./446912.js"), require("./864466.js"), require("./443073.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk253932 = require("./253932.js"),
  Chunk617617 = require("./617617.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk824744 = require("./824744.js"),
  Chunk661191 = require("./661191.js"),
  Chunk766864 = require("./766864.js"),
  Chunk980504 = require("./980504.js"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js");

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
  A = new Set,
  v = 0,
  S = 0,
  I = 0,
  T = 0,
  C = new Set,
  N = new Map,
  R = false;

function w() {
  b.clear(), y.clear(), T = 0, O.clear(), N.clear(), R = false, S = 0, I = 0, v = 0
}

function P() {
  O.clear(), N.clear()
}

function D() {
  S = 1
}

function x(e) {
  let {
    updates: t
  } = e;
  t.forEach(e => {
    let {
      guildId: t,
      sounds: n
    } = e;
    b.set(t, n)
  }), S = 2
}

function L(e) {
  let {
    guild: t
  } = e;
  b.delete(t.id)
}

function j(e) {
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

function k(e) {
  let {
    soundId: t,
    guildId: n
  } = e, r = b.get(n), i = null == r ? true : r.findIndex(e => e.soundId === t);
  null == r || null == i || i < 0 || (r.splice(i, 1), b.set(n, [...r]))
}

function U() {
  v = 1
}

function G(e) {
  let {
    soundboardSounds: t
  } = e;
  b.set(h.mV, t), v = 2
}

function V() {
  I = 1
}

function F(e) {
  let {
    topSoundsForGuilds: t
  } = e;
  y = new Map(t), I = 2, T = Date.now()
}

function B() {
  I = 2, T = 0
}

function H(e) {
  var t, n, r;
  let {
    soundId: i,
    userId: a
  } = e, s = (null != (t = O.get(i)) ? t : 0) + 1, o = (null != (n = N.get(a)) ? n : 0) + 1;
  O.set(i, s), N.set(a, o), a !== (null == (r = u.default.getCurrentUser()) ? true : r.id) && (R = true)
}

function Y(e) {
  var t, n;
  let {
    soundId: r,
    userId: i
  } = e, a = (null != (t = O.get(r)) ? t : 0) - 1, s = (null != (n = N.get(i)) ? n : 0) - 1;
  a <= 0 ? O.delete(r) : O.set(r, a), s <= 0 ? N.delete(i) : N.set(i, s)
}
let W = a().debounce((e, t) => {
  d.default.track(m.HAw.UPDATE_SOUNDBOARD_SETTINGS, {
    volume: Math.round((0, f.M)(e)),
    location_stack: t
  }), l.dG.updateSetting({
    volume: e
  })
}, 1e3);

function K(e) {
  let {
    volume: t,
    location: n
  } = e;
  W(t, n)
}

function z(e) {
  var t, n;
  let r = null != (t = null == e || null == (n = e.audioContextSettings) ? true : n.user) ? t : {};
  for (let [e, t] of Object.entries(r)) t.soundboardMuted ? A.add(e) : A.delete(e);
  for (let e of A.keys()) null == r[e] && A.delete(e)
}

function q(e) {
  let {
    settings: t
  } = e, {
    type: n,
    proto: r
  } = t;
  if (n === g.oD.FRECENCY_AND_FAVORITES_SETTINGS) {
    var i, a;
    C = new Set(null != (i = null == r || null == (a = r.favoriteSoundboardSounds) ? true : a.soundIds) ? i : [])
  } else n === g.oD.PRELOADED_USER_SETTINGS && z(r)
}

function X(e) {
  let {
    userId: t
  } = e;
  A.has(t) ? A.delete(t) : A.add(t)
}

function Z(e) {
  let {
    soundboardStoreState: t
  } = e;
  b = new Map(p.default.entries(t.soundboardSounds)), C = new Set(t.favoritedSoundIds), A = new Set(t.localSoundboardMutes)
}
class Q extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.A, u.default), z(c.A.settings)
  }
  getOverlaySerializedState() {
    return {
      soundboardSounds: Object.fromEntries(b),
      favoritedSoundIds: Array.from(C),
      localSoundboardMutes: Array.from(A)
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
    return 1 === S
  }
  isFetchingDefaultSounds() {
    return 1 === v
  }
  isFetching() {
    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
  }
  shouldFetchDefaultSounds() {
    return 0 === v
  }
  hasFetchedDefaultSounds() {
    return 2 === v
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
    return A.has(e)
  }
  hasHadOtherUserPlaySoundInSession() {
    return R
  }
  shouldFetchTopSoundsForGuilds() {
    return (0, _.vB)("SoundboardStore") && (0 === I || 2 === I && Date.now() - T > 864e5)
  }
  hasFetchedTopSoundsForGuilds() {
    return 2 === I
  }
  hasFetchedAllSounds() {
    let e = [S, v];
    return (0, _.vB)("SoundboardStore") && e.push(I), e.every(e => 2 === e)
  }
  isFetchingAnySounds() {
    return [S, v, I].some(e => 1 === e)
  }
}
E(Q, "displayName", "SoundboardStore");
let $ = new Q(Chunk73153.h, {
  LOGOUT: w,
  GUILD_SOUNDBOARD_FETCH: D,
  GUILD_SOUNDBOARD_SOUND_CREATE: j,
  GUILD_SOUNDBOARD_SOUND_UPDATE: j,
  GUILD_SOUNDBOARD_SOUND_DELETE: k,
  GUILD_SOUNDBOARD_SOUND_PLAY_START: H,
  GUILD_SOUNDBOARD_SOUND_PLAY_END: Y,
  GUILD_SOUNDBOARD_SOUNDS_UPDATE: M,
  USER_SOUNDBOARD_SET_VOLUME: K,
  VOICE_CHANNEL_SELECT: P,
  USER_SETTINGS_PROTO_UPDATE: q,
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS: U,
  SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: G,
  SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FETCH: V,
  SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_SUCCESS: F,
  SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FAILURE: B,
  SOUNDBOARD_SOUNDS_RECEIVED: x,
  GUILD_DELETE: L,
  AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: X,
  OVERLAY_INITIALIZE: Z
})