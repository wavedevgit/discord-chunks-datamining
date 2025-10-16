/** Chunk was on web.js **/
/** chunk id: 208049, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $d: () => N,
  AA: () => R,
  Db: () => k,
  Dx: () => C,
  R: () => M,
  TB: () => P,
  XE: () => L,
  hs: () => w,
  w: () => A,
  xR: () => x,
  xU: () => D,
  xz: () => j
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
  }, O = async () => {
    let e = new Map;
    try {
      let t = (await Chunk544891.tn.get({
        url: Chunk981631.ANM.TOP_SOUNDS_FOR_GUILDS,
        rejectWithError: false,
        timeout: 500
      })).body;
      Object.entries(exports.top_sounds_by_guild).forEach(t => {
        let [n, r] = t;
        e.set(n, r.map(_.Kv))
      })
    } catch (e) {}
    Chunk570140.Z.dispatch({
      type: "SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_SUCCESS",
      topSoundsForGuilds: module
    })
  }, v = e => new Promise(t => {
    let n = () => {
      o.Z.unsubscribe(e, n), setTimeout(t, 0)
    };
    o.Z.subscribe(e, n)
  }), I = () => {
    if (!Chunk763296.Z.shouldFetchDefaultSounds()) return Promise.resolve();
    Chunk570140.Z.dispatch({
      type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS"
    });
    let e = v("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
    return y(), module
  }, T = () => {
    let e = (0, Chunk174470.D)();
    if (0 === module.length) return Promise.resolve();
    let t = v("SOUNDBOARD_SOUNDS_RECEIVED");
    return Chunk570140.Z.dispatch({
      type: "GUILD_SOUNDBOARD_FETCH"
    }), Chunk570140.Z.dispatch({
      type: "REQUEST_SOUNDBOARD_SOUNDS",
      guildIds: module
    }), exports
  }, S = () => {
    if (!Chunk763296.Z.shouldFetchTopSoundsForGuilds()) return Promise.resolve();
    Chunk570140.Z.dispatch({
      type: "SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FETCH"
    });
    let e = v("SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_SUCCESS");
    return O(), module
  }, A = async () => {
    if (__OVERLAY__) return Chunk570140.Z.dispatch({
      type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST"
    }), Promise.all([]);
    let e = performance.now(),
      t = !b;
    b = true;
    let n = await Promise.all([I(), T(), S()]);
    if (exports) {
      let t = performance.now() - module;
      Chunk626135.default.track(Chunk981631.rMx.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED, {
        elapsed_ms: exports
      })
    }
    return require
  };
async function C(e) {
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
async function N(e) {
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
async function R(e, t) {
  await a.tn.del({
    url: m.ANM.GUILD_SOUNDBOARD_SOUND(e, t),
    oldFormErrors: true,
    rejectWithError: false
  })
}

function P(e) {
  c.DZ.updateAsync("favoriteSoundboardSounds", t => i().size(t.soundIds) >= g.oX ? (s.Z.show({
    title: E.intl.string(E.t["+XYXtb"]),
    body: E.intl.formatToPlainString(E.t.JaIyFh, {
      count: g.oX
    })
  }), false) : !t.soundIds.includes(e) && void t.soundIds.push(e), g.fy.INFREQUENT_USER_ACTION)
}

function w(e) {
  c.DZ.updateAsync("favoriteSoundboardSounds", t => {
    t.soundIds = t.soundIds.filter(t => t !== e)
  }, g.fy.INFREQUENT_USER_ACTION)
}
async function D(e, t) {
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

function L(e, t, n) {
  o.Z.dispatch({
    type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
    sound: t,
    channelId: e,
    trigger: n
  })
}

function x(e, t) {
  o.Z.dispatch({
    type: "GUILD_SOUNDBOARD_SOUND_PLAY_START",
    soundId: e,
    userId: t
  })
}

function M(e, t) {
  o.Z.dispatch({
    type: "GUILD_SOUNDBOARD_SOUND_PLAY_END",
    soundId: e,
    userId: t
  })
}

function j(e, t) {
  o.Z.dispatch({
    type: "USER_SOUNDBOARD_SET_VOLUME",
    volume: e,
    location: t
  })
}

function k(e) {
  o.Z.dispatch({
    type: "SOUNDBOARD_MUTE_JOIN_SOUND",
    channelId: e
  })
}