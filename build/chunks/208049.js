/** Chunk was on web.js **/
/** chunk id: 208049, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $d: () => T,
  AA: () => S,
  Db: () => x,
  Dx: () => I,
  R: () => w,
  TB: () => A,
  XE: () => R,
  hs: () => C,
  w: () => v,
  xR: () => P,
  xU: () => N,
  xz: () => D
}), require("./388685.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk479531 = require("./479531.js"),
  Chunk675478 = require("./675478.js"),
  Chunk900849 = require("./900849.js"),
  Chunk763296 = require("./763296.js"),
  Chunk697426 = require("./697426.js"),
  Chunk174470 = require("./174470.js"),
  Chunk710111 = require("./710111.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");
let E = async () => {
  try {
    let e = (await Chunk544891.tn.get({
      url: Chunk981631.ANM.SOUNDBOARD_DEFAULT_SOUNDS,
      rejectWithError: false
    })).body.map(e => (0, f.o3)(e, p.X8));
    Chunk570140.Z.dispatch({
      type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS",
      soundboardSounds: module
    })
  } catch (e) {
    throw Chunk570140.Z.dispatch({
      type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE"
    }), new Chunk479531.Z(module)
  }
}, b = e => new Promise(t => {
  let n = () => {
    a.Z.unsubscribe(e, n), setTimeout(t, 0)
  };
  a.Z.subscribe(e, n)
}), y = () => {
  if (!Chunk763296.Z.shouldFetchDefaultSounds()) return Promise.resolve();
  Chunk570140.Z.dispatch({
    type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS"
  });
  let e = b("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
  return E(), module
}, O = () => {
  let e = (0, Chunk174470.D)();
  if (0 === module.length) return Promise.resolve();
  let t = b("SOUNDBOARD_SOUNDS_RECEIVED");
  return Chunk570140.Z.dispatch({
    type: "GUILD_SOUNDBOARD_FETCH"
  }), Chunk570140.Z.dispatch({
    type: "REQUEST_SOUNDBOARD_SOUNDS",
    guildIds: module
  }), exports
}, v = () => __OVERLAY__ ? (Chunk570140.Z.dispatch({
  type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST"
}), Promise.all([])) : Promise.all([y(), O()]);
async function I(e) {
  let {
    guildId: t,
    name: n,
    sound: r,
    volume: i,
    emojiId: a,
    emojiName: s
  } = e, l = await o.tn.post({
    url: h.ANM.GUILD_SOUNDBOARD_SOUNDS(t),
    body: {
      name: n,
      sound: r,
      volume: i,
      emoji_id: a,
      emoji_name: s
    },
    rejectWithError: false
  });
  return (0, f.o3)(l.body, t)
}
async function T(e) {
  let {
    guildId: t,
    soundId: n,
    name: r,
    volume: i,
    emojiId: a,
    emojiName: s
  } = e, l = await o.tn.patch({
    url: h.ANM.GUILD_SOUNDBOARD_SOUND(t, n),
    body: {
      name: r,
      volume: i,
      emoji_id: a,
      emoji_name: s
    },
    rejectWithError: false
  });
  return (0, f.o3)(l.body, t)
}
async function S(e, t) {
  await o.tn.del({
    url: h.ANM.GUILD_SOUNDBOARD_SOUND(e, t),
    oldFormErrors: true,
    rejectWithError: false
  })
}

function A(e) {
  c.DZ.updateAsync("favoriteSoundboardSounds", t => i().size(t.soundIds) >= m.oX ? (s.Z.show({
    title: g.intl.string(g.t["+XYXtb"]),
    body: g.intl.formatToPlainString(g.t.JaIyFh, {
      count: m.oX
    })
  }), false) : !t.soundIds.includes(e) && void t.soundIds.push(e), m.fy.INFREQUENT_USER_ACTION)
}

function C(e) {
  c.DZ.updateAsync("favoriteSoundboardSounds", t => {
    t.soundIds = t.soundIds.filter(t => t !== e)
  }, m.fy.INFREQUENT_USER_ACTION)
}
async function N(e, t) {
  try {
    let n = await o.tn.get({
      url: h.ANM.SOUNDBOARD_SOUND_GUILD_DATA(e, t),
      rejectWithError: false
    });
    return null != n.body ? (0, u.PP)(n.body) : null
  } catch (e) {
    throw new l.Z(e)
  }
}

function R(e, t, n) {
  a.Z.dispatch({
    type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
    sound: t,
    channelId: e,
    trigger: n
  })
}

function P(e, t) {
  a.Z.dispatch({
    type: "GUILD_SOUNDBOARD_SOUND_PLAY_START",
    soundId: e,
    userId: t
  })
}

function w(e, t) {
  a.Z.dispatch({
    type: "GUILD_SOUNDBOARD_SOUND_PLAY_END",
    soundId: e,
    userId: t
  })
}

function D(e, t) {
  a.Z.dispatch({
    type: "USER_SOUNDBOARD_SET_VOLUME",
    volume: e,
    location: t
  })
}

function x(e) {
  a.Z.dispatch({
    type: "SOUNDBOARD_MUTE_JOIN_SOUND",
    channelId: e
  })
}