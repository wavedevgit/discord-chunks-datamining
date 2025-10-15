/** Chunk was on web.js **/
/** chunk id: 208049, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $d: () => A,
  AA: () => C,
  Db: () => M,
  Dx: () => S,
  R: () => L,
  TB: () => N,
  XE: () => w,
  hs: () => R,
  w: () => T,
  xR: () => D,
  xU: () => P,
  xz: () => x
}), require("./388685.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk479531 = require("./479531.js"),
  Chunk675478 = require("./675478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk900849 = require("./900849.js"),
  Chunk763296 = require("./763296.js"),
  Chunk697426 = require("./697426.js"),
  Chunk174470 = require("./174470.js"),
  Chunk710111 = require("./710111.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");
let b = false,
  y = async () => {
    try {
      let e = (await Chunk544891.tn.get({
        url: Chunk981631.ANM.SOUNDBOARD_DEFAULT_SOUNDS,
        rejectWithError: false
      })).body.map(e => (0, _.o3)(e, h.X8));
      Chunk570140.Z.dispatch({
        type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS",
        soundboardSounds: module
      })
    } catch (e) {
      throw Chunk570140.Z.dispatch({
        type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE"
      }), new Chunk479531.Z(module)
    }
  }, O = e => new Promise(t => {
    let n = () => {
      o.Z.unsubscribe(e, n), setTimeout(t, 0)
    };
    o.Z.subscribe(e, n)
  }), v = () => {
    if (!Chunk763296.Z.shouldFetchDefaultSounds()) return Promise.resolve();
    Chunk570140.Z.dispatch({
      type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS"
    });
    let e = O("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
    return y(), module
  }, I = () => {
    let e = (0, Chunk174470.D)();
    if (0 === module.length) return Promise.resolve();
    let t = O("SOUNDBOARD_SOUNDS_RECEIVED");
    return Chunk570140.Z.dispatch({
      type: "GUILD_SOUNDBOARD_FETCH"
    }), Chunk570140.Z.dispatch({
      type: "REQUEST_SOUNDBOARD_SOUNDS",
      guildIds: module
    }), exports
  }, T = async () => {
    if (__OVERLAY__) return Chunk570140.Z.dispatch({
      type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST"
    }), Promise.all([]);
    let e = performance.now(),
      t = !b;
    b = true;
    let n = await Promise.all([v(), I()]);
    if (exports) {
      let t = performance.now() - module;
      Chunk626135.default.track(Chunk981631.rMx.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED, {
        elapsed_ms: exports
      })
    }
    return require
  };
async function S(e) {
  let {
    guildId: t,
    name: n,
    sound: r,
    volume: i,
    emojiId: o,
    emojiName: s
  } = e, l = await a.tn.post({
    url: m.ANM.GUILD_SOUNDBOARD_SOUNDS(t),
    body: {
      name: n,
      sound: r,
      volume: i,
      emoji_id: o,
      emoji_name: s
    },
    rejectWithError: false
  });
  return (0, _.o3)(l.body, t)
}
async function A(e) {
  let {
    guildId: t,
    soundId: n,
    name: r,
    volume: i,
    emojiId: o,
    emojiName: s
  } = e, l = await a.tn.patch({
    url: m.ANM.GUILD_SOUNDBOARD_SOUND(t, n),
    body: {
      name: r,
      volume: i,
      emoji_id: o,
      emoji_name: s
    },
    rejectWithError: false
  });
  return (0, _.o3)(l.body, t)
}
async function C(e, t) {
  await a.tn.del({
    url: m.ANM.GUILD_SOUNDBOARD_SOUND(e, t),
    oldFormErrors: true,
    rejectWithError: false
  })
}

function N(e) {
  c.DZ.updateAsync("favoriteSoundboardSounds", t => i().size(t.soundIds) >= g.oX ? (s.Z.show({
    title: E.intl.string(E.t["+XYXtb"]),
    body: E.intl.formatToPlainString(E.t.JaIyFh, {
      count: g.oX
    })
  }), false) : !t.soundIds.includes(e) && void t.soundIds.push(e), g.fy.INFREQUENT_USER_ACTION)
}

function R(e) {
  c.DZ.updateAsync("favoriteSoundboardSounds", t => {
    t.soundIds = t.soundIds.filter(t => t !== e)
  }, g.fy.INFREQUENT_USER_ACTION)
}
async function P(e, t) {
  try {
    let n = await a.tn.get({
      url: m.ANM.SOUNDBOARD_SOUND_GUILD_DATA(e, t),
      rejectWithError: false
    });
    return null != n.body ? (0, d.PP)(n.body) : null
  } catch (e) {
    throw new l.Z(e)
  }
}

function w(e, t, n) {
  o.Z.dispatch({
    type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
    sound: t,
    channelId: e,
    trigger: n
  })
}

function D(e, t) {
  o.Z.dispatch({
    type: "GUILD_SOUNDBOARD_SOUND_PLAY_START",
    soundId: e,
    userId: t
  })
}

function L(e, t) {
  o.Z.dispatch({
    type: "GUILD_SOUNDBOARD_SOUND_PLAY_END",
    soundId: e,
    userId: t
  })
}

function x(e, t) {
  o.Z.dispatch({
    type: "USER_SOUNDBOARD_SET_VOLUME",
    volume: e,
    location: t
  })
}

function M(e) {
  o.Z.dispatch({
    type: "SOUNDBOARD_MUTE_JOIN_SOUND",
    channelId: e
  })
}