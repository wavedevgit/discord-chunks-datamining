/** Chunk was on web.js **/
/** chunk id: 796104, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K8: () => M,
  Rq: () => k,
  _5: () => G,
  cJ: () => D,
  fr: () => x,
  hv: () => U,
  ls: () => j,
  nX: () => P,
  qm: () => L
}), require("./896048.js"), require("./65821.js"), require("./733351.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk308528 = require("./308528.js"),
  Chunk843472 = require("./843472.js"),
  Chunk587895 = require("./587895.js"),
  Chunk508675 = require("./508675.js"),
  Chunk451909 = require("./451909.js"),
  Chunk223863 = require("./223863.js"),
  Chunk21119 = require("./21119.js"),
  Chunk427157 = require("./427157.js"),
  Chunk734057 = require("./734057.js"),
  Chunk760751 = require("./760751.js"),
  Chunk197305 = require("./197305.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk403362 = require("./403362.js"),
  Chunk860689 = require("./860689.js"),
  Chunk661191 = require("./661191.js"),
  Chunk532294 = require("./532294.js"),
  Chunk652215 = require("./652215.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w() {
  let e = p.A.getUserAffinities().slice(0, 4).map(e => y.default.getUser(e.otherUserId)).filter(e => null != e),
    t = g.A.affinities.slice(0, 3).map(e => {
      let t = E.A.getGuild(e.guildId);
      return i()(null != t, "Guild must exist"), {
        guild: (0, v.yF)(R(C({}, t), {
          features: [...t.features]
        })),
        numMessagesSent: 0x9e6ca8,
        numVoiceMinutes: 409516.21576666617
      }
    }),
    n = u.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(0, 5).map(e => ({
      id: e.id,
      name: "surrogates" in e ? e.surrogates : e.name,
      animated: e.animated
    })),
    r = c.A._getAllApplications().slice(0, 5).map(e => ({
      game: {
        id: e.id,
        name: e.name,
        icon: e.icon,
        coverImageHash: e.coverImage
      },
      numDaysPlayed: 289
    }));
  return {
    cardId: 1,
    powerLevel: 0x9eb1f6,
    powerLevelPercentile: 5,
    messages: {
      numMessagesSent: 0x9eb1f6,
      numMessagesSentPercentile: 99.99,
      topMonth: {
        month: 8,
        numMessagesSent: 0x9eb1f6
      }
    },
    voice: {
      totalVoiceMinutes: 2741198.975133333,
      totalVoiceMinutesPercentile: 99.99,
      topMonth: {
        numMinutesInVoice: 2741198.975133333,
        month: 8
      }
    },
    quests: {
      numCompleted: 164,
      numOrbs: 122690
    },
    users: e.slice(1, 4),
    sidekick: {
      user: e[0],
      numMessagesSent: 0x9eb1f6,
      numVoiceMinutes: 2741198.975133333
    },
    guilds: {
      guilds: t,
      numGuildsJoined: 203
    },
    emojis: {
      emojis: n,
      numEmojisSent: 0x21414c9c
    },
    applications: {
      applications: r,
      totalGamesPlayed: 4278
    }
  }
}
async function P() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  if (s.h.dispatch({
      type: "CHECKPOINT_FETCH_START"
    }), e) {
    let {
      users: e,
      guilds: t,
      emojis: n,
      applications: r,
      cardId: i,
      powerLevel: a,
      powerLevelPercentile: o,
      messages: l,
      voice: c,
      sidekick: u,
      quests: d
    } = w();
    s.h.dispatch({
      type: "CHECKPOINT_FETCH_SUCCESS",
      data: {
        cardId: i,
        powerLevel: a,
        powerLevelPercentile: o,
        messages: l,
        emojis: n,
        voice: c,
        guilds: t,
        users: e,
        applications: r,
        quests: d,
        sidekick: u
      }
    });
    return
  }
  try {
    var t, n, r, i, o, l, c, u;
    let {
      body: e
    } = await a.Bo.get({
      url: "/checkpoint",
      rejectWithError: true
    }), {
      card_id: d,
      power_level: f,
      power_level_percentile: p,
      messages: h,
      emojis: g,
      voice: y,
      guilds: b,
      users: O,
      sidekick: I,
      applications: S,
      quests: T,
      avatar_decoration: N
    } = e;
    s.h.dispatch({
      type: "CHECKPOINT_FETCH_SUCCESS",
      data: {
        cardId: d,
        powerLevel: f,
        powerLevelPercentile: p,
        messages: null != h ? {
          numMessagesSent: h.num_messages_sent,
          numMessagesSentPercentile: h.num_messages_sent_percentile,
          topMonth: {
            month: null != (t = null == (o = h.top_month) ? true : o.month) ? t : 1,
            numMessagesSent: null != (n = null == (l = h.top_month) ? true : l.num_messages_sent) ? n : 0
          }
        } : true,
        emojis: null != g ? {
          emojis: g.emojis.map(e => R(C({}, e), {
            id: A.default.isProbablyAValidSnowflake(e.id) ? e.id : true
          })),
          numEmojisSent: g.num_emojis_sent
        } : true,
        voice: null != y ? {
          totalVoiceMinutes: y.total_voice_minutes,
          totalVoiceMinutesPercentile: y.total_voice_minutes_percentile,
          topMonth: {
            month: null != (r = null == (c = y.top_month) ? true : c.month) ? r : 1,
            numMinutesInVoice: null != (i = null == (u = y.top_month) ? true : u.num_minutes_in_voice) ? i : 0
          }
        } : true,
        guilds: null != b ? {
          guilds: b.guilds.map(e => ({
            numMessagesSent: e.num_messages_sent,
            numVoiceMinutes: e.num_voice_minutes,
            guild: (0, v.Wj)(e.guild, E.A.getGuild(e.guild.id))
          })),
          numGuildsJoined: b.num_guilds_joined
        } : true,
        users: null != O ? O.map(e => {
          let {
            user: t
          } = e;
          return new _.A(t)
        }) : true,
        applications: null != S ? {
          applications: S.applications.map(e => ({
            game: R(C({}, (0, m.M)(e.game)), {
              coverImageHash: e.game.cover_image_hash
            }),
            numDaysPlayed: e.num_sessions
          })),
          totalGamesPlayed: S.total_games_played
        } : true,
        quests: null != T ? {
          numCompleted: T.num_completed,
          numOrbs: T.num_orbs
        } : true,
        sidekick: null != I ? {
          numMessagesSent: I.num_messages_sent,
          numVoiceMinutes: I.num_voice_minutes,
          user: new _.A(I.user)
        } : true,
        avatarDecoration: null != N ? {
          type: N.type,
          asset: N.asset,
          label: N.label,
          skuId: N.sku_id
        } : true
      }
    })
  } catch (e) {
    s.h.dispatch({
      type: "CHECKPOINT_FETCH_FAILED"
    })
  }
}
let D = async (e, t, n) => {
  let {
    withMessage: r
  } = t;
  (await Promise.all(e.map(f.pk))).filter(O.Vq).forEach(e => {
    let t = h.A.getChannel(e);
    if (null == t) return;
    let n = d.Ay.parse(t, null != r ? r : "");
    n.components = [], l.A.sendMessage(e, n, false, {
      location: "checkpoint",
      withCheckpoint: true
    })
  })
};
async function x(e, t) {
  let n = await o.A.openPrivateChannel({
      recipientIds: t,
      location: "checkpoint-sidekick",
      navigateToChannel: false
    }),
    r = h.A.getChannel(n);
  if (null == r) throw Error("Failed to open private channel");
  let i = (0, I.qk)().findIndex(t => t.trim() === e);
  b.default.track(S.HAw.CHECKPOINT_SIDEKICK_MESSAGE_SENT, {
    other_user_id: t,
    message_variant: i.toString()
  });
  let a = d.Ay.parse(r, e);
  return l.A.sendMessage(r.id, a, false, {
    location: "checkpoint-sidekick"
  })
}
async function L() {
  try {
    return await a.Bo.post({
      url: "/checkpoint/loot",
      rejectWithError: true
    })
  } catch (e) {}
}

function j(e) {
  return s.h.dispatch({
    type: "CHECKPOINT_SET_VOLUME",
    volume: e
  })
}

function M() {
  return s.h.dispatch({
    type: "CHECKPOINT_TOGGLE_MUTE"
  })
}

function k(e) {
  return s.h.dispatch({
    type: "CHECKPOINT_SET_HIGHEST_SLIDE_SEEN",
    slide: e
  })
}

function U() {
  return s.h.dispatch({
    type: "CHECKPOINT_AFTER_CLOSED"
  })
}

function G() {
  return s.h.dispatch({
    type: "CHECKPOINT_SET_HAS_SEEN_REWATCH_POPOVER"
  })
}