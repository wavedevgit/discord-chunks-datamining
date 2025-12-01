/** Chunk was on web.js **/
/** chunk id: 208049, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $d: () => R,
  AA: () => w,
  Db: () => G,
  Dx: () => P,
  R: () => k,
  TB: () => D,
  XE: () => j,
  hs: () => x,
  w: () => N,
  xR: () => M,
  xU: () => L,
  xz: () => U
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
  Chunk771784 = require("./771784.js"),
  Chunk174470 = require("./174470.js"),
  Chunk710111 = require("./710111.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");
let y = false,
  O = async () => {
    try {
      let e = (await Chunk544891.tn.get({
        url: Chunk981631.ANM.SOUNDBOARD_DEFAULT_SOUNDS,
        rejectWithError: false
      })).body.map(e => (0, p.o3)(e, h.X8));
      Chunk570140.Z.dispatch({
        type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS",
        soundboardSounds: module
      })
    } catch (e) {
      throw Chunk570140.Z.dispatch({
        type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE"
      }), new Chunk479531.Z(module)
    }
  }, v = async () => {
    let e = new Map;
    try {
      let t = (await Chunk544891.tn.get({
        url: Chunk981631.ANM.TOP_SOUNDS_FOR_GUILDS,
        rejectWithError: false,
        timeout: 1e3
      })).body;
      Object.entries(exports.top_sounds_by_guild).forEach(t => {
        let [n, r] = t;
        e.set(n, r.map(p.Kv))
      }), Chunk570140.Z.dispatch({
        type: "SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_SUCCESS",
        topSoundsForGuilds: module
      })
    } catch (e) {
      Chunk570140.Z.dispatch({
        type: "SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FAILURE"
      })
    }
  }, S = e => new Promise(t => {
    let n = () => {
      o.Z.unsubscribe(e, n), setTimeout(t, 0)
    };
    o.Z.subscribe(e, n)
  }), I = e => new Promise(t => {
    let n = new Map;
    e.forEach(r => {
      let i = () => {
        e.forEach(e => {
          let t = n.get(e);
          null != t && o.Z.unsubscribe(e, t)
        }), setTimeout(t, 0)
      };
      n.set(r, i), o.Z.subscribe(r, i)
    })
  }), T = () => {
    if (!Chunk763296.Z.shouldFetchDefaultSounds()) return Promise.resolve();
    Chunk570140.Z.dispatch({
      type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS"
    });
    let e = S("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
    return (0, Chunk771784.sI)("maybeFetchDefaultSounds") && v(), O(), module
  }, A = () => {
    let e = (0, Chunk174470.D)();
    if (0 === module.length) return Promise.resolve();
    let t = S("SOUNDBOARD_SOUNDS_RECEIVED");
    return Chunk570140.Z.dispatch({
      type: "GUILD_SOUNDBOARD_FETCH"
    }), Chunk570140.Z.dispatch({
      type: "REQUEST_SOUNDBOARD_SOUNDS",
      guildIds: module
    }), exports
  }, C = () => {
    if (!Chunk763296.Z.shouldFetchTopSoundsForGuilds()) return Promise.resolve();
    Chunk570140.Z.dispatch({
      type: "SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FETCH"
    });
    let e = I(["SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_SUCCESS", "SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FAILURE"]);
    return v(), module
  }, N = async () => {
    if (__OVERLAY__) return Chunk570140.Z.dispatch({
      type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST"
    }), Promise.all([]);
    let e = performance.now(),
      t = !y;
    y = true;
    let n = await Promise.all([T(), A(), C()]);
    if (exports) {
      let t = performance.now() - module;
      Chunk626135.default.track(Chunk981631.rMx.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED, {
        elapsed_ms: exports
      })
    }
    return require
  };
async function P(e) {
  let {
    guildId: t,
    name: n,
    sound: r,
    volume: i,
    emojiId: o,
    emojiName: s
  } = e, l = await a.tn.post({
    url: g.ANM.GUILD_SOUNDBOARD_SOUNDS(t),
    body: {
      name: n,
      sound: r,
      volume: i,
      emoji_id: o,
      emoji_name: s
    },
    rejectWithError: false
  });
  return (0, p.o3)(l.body, t)
}
async function R(e) {
  let {
    guildId: t,
    soundId: n,
    name: r,
    volume: i,
    emojiId: o,
    emojiName: s
  } = e, l = await a.tn.patch({
    url: g.ANM.GUILD_SOUNDBOARD_SOUND(t, n),
    body: {
      name: r,
      volume: i,
      emoji_id: o,
      emoji_name: s
    },
    rejectWithError: false
  });
  return (0, p.o3)(l.body, t)
}
async function w(e, t) {
  await a.tn.del({
    url: g.ANM.GUILD_SOUNDBOARD_SOUND(e, t),
    oldFormErrors: true,
    rejectWithError: false
  })
}

function D(e) {
  c.DZ.updateAsync("favoriteSoundboardSounds", t => i().size(t.soundIds) >= E.oX ? (s.Z.show({
    title: b.intl.string(b.t["+XYXtZ"]),
    body: b.intl.formatToPlainString(b.t.JaIyFi, {
      count: E.oX
    })
  }), false) : !t.soundIds.includes(e) && void t.soundIds.push(e), E.fy.INFREQUENT_USER_ACTION)
}

function x(e) {
  c.DZ.updateAsync("favoriteSoundboardSounds", t => {
    t.soundIds = t.soundIds.filter(t => t !== e)
  }, E.fy.INFREQUENT_USER_ACTION)
}
async function L(e, t) {
  try {
    let n = await a.tn.get({
      url: g.ANM.SOUNDBOARD_SOUND_GUILD_DATA(e, t),
      rejectWithError: false
    });
    return null != n.body ? (0, d.PP)(n.body) : null
  } catch (e) {
    throw new l.Z(e)
  }
}

function j(e, t, n) {
  o.Z.dispatch({
    type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
    sound: t,
    channelId: e,
    trigger: n
  })
}

function M(e, t) {
  o.Z.dispatch({
    type: "GUILD_SOUNDBOARD_SOUND_PLAY_START",
    soundId: e,
    userId: t
  })
}

function k(e, t) {
  o.Z.dispatch({
    type: "GUILD_SOUNDBOARD_SOUND_PLAY_END",
    soundId: e,
    userId: t
  })
}

function U(e, t) {
  o.Z.dispatch({
    type: "USER_SOUNDBOARD_SET_VOLUME",
    volume: e,
    location: t
  })
}

function G(e) {
  o.Z.dispatch({
    type: "SOUNDBOARD_MUTE_JOIN_SOUND",
    channelId: e
  })
}