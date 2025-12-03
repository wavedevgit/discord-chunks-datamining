/** Chunk was on 80448 **/
/** chunk id: 515970, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  pg: () => j
}), require("./388685.js"), require("./415506.js"), require("./781311.js");
var Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js");
require("./493683.js"), require("./904245.js");
var Chunk812206 = require("./812206.js"),
  Chunk339085 = require("./339085.js");
require("./957730.js"), require("./987509.js");
var Chunk752048 = require("./752048.js"),
  Chunk598077 = require("./598077.js");
require("./592125.js");
var Chunk77498 = require("./77498.js"),
  Chunk165630 = require("./165630.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js");
require("./626135.js"), require("./823379.js");
var Chunk411198 = require("./411198.js"),
  Chunk709054 = require("./709054.js");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function j() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  if (Chunk570140.Z.dispatch({
      type: "CHECKPOINT_FETCH_START"
    }), module) {
    let {
      users: e,
      guilds: t,
      emojis: n,
      applications: i,
      cardId: r,
      powerLevel: u,
      powerLevelPercentile: d,
      messages: h,
      voice: j,
      sidekick: y,
      quests: _
    } = function() {
      let e = Chunk752048.Z.getUserAffinities().slice(0, 4).map(e => x.default.getUser(e.otherUserId)).filter(e => null != e),
        t = Chunk165630.Z.affinities.slice(0, 3).map(e => {
          let t = p.Z.getGuild(e.guildId);
          return s()(null != t, "Guild must exist"), {
            guild: (0, g.yS)(v(f({}, t), {
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
        i = Chunk812206.Z._getAllApplications().slice(0, 5).map(e => ({
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
    }();
    Chunk570140.Z.dispatch({
      type: "CHECKPOINT_FETCH_SUCCESS",
      data: {
        cardId: Chunk544891,
        powerLevel: Chunk598077,
        powerLevelPercentile: Chunk77498,
        messages: Chunk709054,
        emojis: require,
        voice: j,
        guilds: exports,
        users: module,
        applications: Chunk512722,
        quests: _,
        sidekick: y
      }
    });
    return
  }
  try {
    let {
      body: e
    } = await Chunk544891.tn.get({
      url: "/checkpoint",
      rejectWithError: true
    }), {
      card_id: t,
      power_level: n,
      power_level_percentile: i,
      messages: s,
      emojis: o,
      voice: a,
      guilds: c,
      users: m,
      sidekick: x,
      applications: j,
      quests: y,
      avatar_decoration: _
    } = module;
    Chunk570140.Z.dispatch({
      type: "CHECKPOINT_FETCH_SUCCESS",
      data: {
        cardId: exports,
        powerLevel: require,
        powerLevelPercentile: Chunk512722,
        messages: null != s ? {
          numMessagesSent: s.num_messages_sent,
          numMessagesSentPercentile: s.num_messages_sent_percentile,
          topMonth: {
            month: s.top_month.month,
            numMessagesSent: s.top_month.num_messages_sent
          }
        } : true,
        emojis: null != Chunk812206 ? {
          emojis: Chunk812206.emojis.map(e => v(f({}, e), {
            id: h.default.isProbablyAValidSnowflake(e.id) ? e.id : true
          })),
          numEmojisSent: Chunk812206.num_emojis_sent
        } : true,
        voice: null != Chunk339085 ? {
          totalVoiceMinutes: Chunk339085.total_voice_minutes,
          totalVoiceMinutesPercentile: Chunk339085.total_voice_minutes_percentile,
          topMonth: {
            month: Chunk339085.top_month.month,
            numMinutesInVoice: Chunk339085.top_month.num_minutes_in_voice
          }
        } : true,
        guilds: null != Chunk752048 ? {
          guilds: Chunk752048.guilds.map(e => ({
            numMessagesSent: e.num_messages_sent,
            numVoiceMinutes: e.num_voice_minutes,
            guild: (0, g.wD)(e.guild, p.Z.getGuild(e.guild.id))
          })),
          numGuildsJoined: Chunk752048.num_guilds_joined
        } : true,
        users: null != Chunk165630 ? Chunk165630.map(e => {
          let {
            user: t
          } = e;
          return new u.Z(t)
        }) : true,
        applications: null != j ? {
          applications: j.applications.map(e => ({
            game: v(f({}, (0, d.m)(e.game)), {
              coverImageHash: e.game.cover_image_hash
            }),
            numDaysPlayed: e.num_sessions
          })),
          totalGamesPlayed: j.total_games_played
        } : true,
        quests: null != y ? {
          numCompleted: y.num_completed,
          numOrbs: y.num_orbs
        } : true,
        sidekick: null != Chunk594174 ? {
          numMessagesSent: Chunk594174.num_messages_sent,
          numVoiceMinutes: Chunk594174.num_voice_minutes,
          user: new Chunk598077.Z(Chunk594174.user)
        } : true,
        avatarDecoration: null != _ ? {
          type: _.type,
          asset: _.asset,
          label: _.label,
          skuId: _.sku_id
        } : true
      }
    })
  } catch (e) {
    Chunk570140.Z.dispatch({
      type: "CHECKPOINT_FETCH_FAILED"
    })
  }
}
require("./612776.js"), require("./981631.js")