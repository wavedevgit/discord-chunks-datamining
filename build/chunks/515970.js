/** Chunk was on web.js **/
/** chunk id: 515970, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $t: () => M,
  Jm: () => D,
  OL: () => G,
  R5: () => U,
  _Z: () => L,
  f7: () => k,
  gq: () => x,
  jA: () => j,
  pg: () => w
}), require("./388685.js"), require("./415506.js"), require("./781311.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk493683 = require("./493683.js"),
  Chunk904245 = require("./904245.js"),
  Chunk812206 = require("./812206.js"),
  Chunk339085 = require("./339085.js"),
  Chunk957730 = require("./957730.js"),
  Chunk987509 = require("./987509.js"),
  Chunk752048 = require("./752048.js"),
  Chunk598077 = require("./598077.js"),
  Chunk592125 = require("./592125.js"),
  Chunk77498 = require("./77498.js"),
  Chunk165630 = require("./165630.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk411198 = require("./411198.js"),
  Chunk709054 = require("./709054.js"),
  Chunk612776 = require("./612776.js"),
  Chunk981631 = require("./981631.js");

function A(e, t, n) {
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
      A(e, t, n[t])
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

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R() {
  let e = Chunk752048.Z.getUserAffinities().slice(0, 4).map(e => b.default.getUser(e.otherUserId)).filter(e => null != e),
    t = Chunk165630.Z.affinities.slice(0, 3).map(e => {
      let t = E.Z.getGuild(e.guildId);
      return i()(null != t, "Guild must exist"), {
        guild: (0, v.yS)(P(C({}, t), {
          features: [...t.features]
        })),
        numMessagesSent: 0x9e6ca8,
        numVoiceMinutes: 409516.21576666617
      }
    }),
    n = Chunk339085.ZP.emojiFrecencyWithoutFetchingLatest.frequently.slice(0, 5).map(e => ({
      id: e.id,
      name: "surrogates" in e ? e.surrogates : e.name,
      animated: e.animated
    })),
    r = Chunk812206.Z._getAllApplications().slice(0, 5).map(e => ({
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
    users: module.slice(1, 4),
    sidekick: {
      user: module[0],
      numMessagesSent: 0x9eb1f6,
      numVoiceMinutes: 2741198.975133333
    },
    guilds: {
      guilds: exports,
      numGuildsJoined: 203
    },
    emojis: {
      emojis: require,
      numEmojisSent: 0x21414c9c
    },
    applications: {
      applications: Chunk512722,
      totalGamesPlayed: 4278
    }
  }
}
async function w() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  if (Chunk570140.Z.dispatch({
      type: "CHECKPOINT_FETCH_START"
    }), module) {
    let {
      users: e,
      guilds: t,
      emojis: n,
      applications: r,
      cardId: i,
      powerLevel: a,
      powerLevelPercentile: s,
      messages: l,
      voice: c,
      sidekick: u,
      quests: d
    } = R();
    Chunk570140.Z.dispatch({
      type: "CHECKPOINT_FETCH_SUCCESS",
      data: {
        cardId: i,
        powerLevel: Chunk544891,
        powerLevelPercentile: Chunk493683,
        messages: Chunk904245,
        emojis: require,
        voice: Chunk812206,
        guilds: exports,
        users: module,
        applications: Chunk512722,
        quests: Chunk957730,
        sidekick: Chunk339085
      }
    });
    return
  }
  try {
    var t, n, r, i, s, l, c, u;
    let {
      body: e
    } = await Chunk544891.tn.get({
      url: "/checkpoint",
      rejectWithError: true
    }), {
      card_id: d,
      power_level: f,
      power_level_percentile: p,
      messages: m,
      emojis: g,
      voice: b,
      guilds: y,
      users: O,
      sidekick: I,
      applications: T,
      quests: A,
      avatar_decoration: N
    } = module;
    Chunk570140.Z.dispatch({
      type: "CHECKPOINT_FETCH_SUCCESS",
      data: {
        cardId: Chunk957730,
        powerLevel: Chunk987509,
        powerLevelPercentile: Chunk752048,
        messages: null != Chunk592125 ? {
          numMessagesSent: Chunk592125.num_messages_sent,
          numMessagesSentPercentile: Chunk592125.num_messages_sent_percentile,
          topMonth: {
            month: null != (s = null == (t = Chunk592125.top_month) ? true : exports.month) ? Chunk493683 : 1,
            numMessagesSent: null != (l = null == (n = Chunk592125.top_month) ? true : require.num_messages_sent) ? Chunk904245 : 0
          }
        } : true,
        emojis: null != Chunk165630 ? {
          emojis: Chunk165630.emojis.map(e => P(C({}, e), {
            id: S.default.isProbablyAValidSnowflake(e.id) ? e.id : true
          })),
          numEmojisSent: Chunk165630.num_emojis_sent
        } : true,
        voice: null != Chunk594174 ? {
          totalVoiceMinutes: Chunk594174.total_voice_minutes,
          totalVoiceMinutesPercentile: Chunk594174.total_voice_minutes_percentile,
          topMonth: {
            month: null != (c = null == (r = Chunk594174.top_month) ? true : Chunk512722.month) ? Chunk812206 : 1,
            numMinutesInVoice: null != (u = null == (i = Chunk594174.top_month) ? true : i.num_minutes_in_voice) ? Chunk339085 : 0
          }
        } : true,
        guilds: null != Chunk626135 ? {
          guilds: Chunk626135.guilds.map(e => ({
            numMessagesSent: e.num_messages_sent,
            numVoiceMinutes: e.num_voice_minutes,
            guild: (0, v.wD)(e.guild, E.Z.getGuild(e.guild.id))
          })),
          numGuildsJoined: Chunk626135.num_guilds_joined
        } : true,
        users: null != Chunk823379 ? Chunk823379.map(e => {
          let {
            user: t
          } = e;
          return new _.Z(t)
        }) : true,
        applications: null != Chunk981631 ? {
          applications: Chunk981631.applications.map(e => ({
            game: P(C({}, (0, h.m)(e.game)), {
              coverImageHash: e.game.cover_image_hash
            }),
            numDaysPlayed: e.num_sessions
          })),
          totalGamesPlayed: Chunk981631.total_games_played
        } : true,
        quests: null != A ? {
          numCompleted: A.num_completed,
          numOrbs: A.num_orbs
        } : true,
        sidekick: null != Chunk612776 ? {
          numMessagesSent: Chunk612776.num_messages_sent,
          numVoiceMinutes: Chunk612776.num_voice_minutes,
          user: new Chunk598077.Z(Chunk612776.user)
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
    Chunk570140.Z.dispatch({
      type: "CHECKPOINT_FETCH_FAILED"
    })
  }
}
let D = async (e, t, n) => {
  let {
    withMessage: r
  } = t;
  (await Promise.all(e.map(f.qx))).filter(O.lm).forEach(e => {
    let t = m.Z.getChannel(e);
    if (null == t) return;
    let n = d.ZP.parse(t, null != r ? r : "");
    n.components = [], l.Z.sendMessage(e, n, false, {
      location: "checkpoint",
      withCheckpoint: true
    })
  })
};
async function x(e, t) {
  let n = await s.Z.openPrivateChannel({
      recipientIds: t,
      location: "checkpoint-sidekick",
      navigateToChannel: false
    }),
    r = m.Z.getChannel(n);
  if (null == r) throw Error("Failed to open private channel");
  let i = (0, I._3)().findIndex(t => t.trim() === e);
  y.default.track(T.rMx.CHECKPOINT_SIDEKICK_MESSAGE_SENT, {
    other_user_id: t,
    message_variant: i.toString()
  });
  let a = d.ZP.parse(r, e);
  return l.Z.sendMessage(r.id, a, false, {
    location: "checkpoint-sidekick"
  })
}
async function L() {
  try {
    return await Chunk544891.tn.post({
      url: "/checkpoint/loot",
      rejectWithError: true
    })
  } catch (e) {}
}

function j(e) {
  return o.Z.dispatch({
    type: "CHECKPOINT_SET_VOLUME",
    volume: e
  })
}

function M() {
  return Chunk570140.Z.dispatch({
    type: "CHECKPOINT_TOGGLE_MUTE"
  })
}

function k(e) {
  return o.Z.dispatch({
    type: "CHECKPOINT_SET_HIGHEST_SLIDE_SEEN",
    slide: e
  })
}

function U() {
  return Chunk570140.Z.dispatch({
    type: "CHECKPOINT_AFTER_CLOSED"
  })
}

function G() {
  return Chunk570140.Z.dispatch({
    type: "CHECKPOINT_SET_HAS_SEEN_REWATCH_POPOVER"
  })
}