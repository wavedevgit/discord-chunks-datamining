/** Chunk was on 1272 **/
/** chunk id: 613928, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $U: () => Z,
  FJ: () => D,
  HG: () => k,
  IC: () => A,
  NV: () => x,
  Rm: () => R,
  _e: () => C,
  aL: () => I,
  eO: () => M,
  em: () => T,
  es: () => N,
  jv: () => S,
  mV: () => L,
  rK: () => w,
  wV: () => P,
  y_: () => v,
  ye: () => U
}), require("./539854.js"), require("./472816.js"), require("./794429.js"), require("./388685.js");
var r, Chunk661869 = require("./661869.js"),
  Chunk876215 = require("./876215.js");
require("./442837.js"), require("./368844.js");
var Chunk924301 = require("./924301.js"),
  Chunk786761 = require("./786761.js"),
  Chunk131704 = require("./131704.js"),
  Chunk23750 = require("./23750.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js");
require("./375954.js");
var Chunk306680 = require("./306680.js"),
  Chunk709054 = require("./709054.js"),
  Chunk948053 = require("./948053.js"),
  Chunk518929 = require("./518929.js"),
  Chunk940893 = require("./940893.js"),
  Chunk144725 = require("./144725.js"),
  Chunk797394 = require("./797394.js"),
  Chunk634773 = require("./634773.js"),
  Chunk981631 = require("./981631.js"),
  Chunk764051 = require("./764051.js");

function v(e, t) {
  return "hydration-".concat(e, "-").concat(t)
}
require("./388032.jsx");
var I = ((r = {})[r.UNKNOWN = 0] = "UNKNOWN", r[r.DEFAULT = 1] = "DEFAULT", r[r.MORE = 2] = "MORE", r[r.LESS = 3] = "LESS", r[r.MUTED = 4] = "MUTED", r);

function C(e) {
  return e.type === b.Ni.MESSAGE || e.type === b.Ni.SUMMARY || e.type === b.Ni.GENERATED_CANDIDATE || e.type === b.Ni.GUILD_EVENT
}

function S(e) {
  return e < false ? 4 : e < 0 ? 3 : e > 0 ? 2 : 1
}
async function T(e, t, n) {
  let r = _.Z.getHydratedItems(),
    i = e.slice(t, n);
  if (0 === i.length) return;
  h.Z.loadHydratedAttempt(v(t, n));
  let l = i.filter(e => null == r[e.id]),
    a = l.filter(e => e.type === b.Ni.MESSAGE).map(e => ({
      channel_id: e.data.channel_id,
      message_id: e.data.message_id
    })),
    s = l.map(e => {
      if (e.type === b.Ni.MESSAGE) {
        var t, n, r;
        let i = [];
        return (null == (t = e.data.message_context) ? true : t.reply_message_id) != null && i.push({
          channel_id: e.data.channel_id,
          message_id: e.data.message_context.reply_message_id
        }), (null == (n = e.data.message_context) ? true : n.before_message_id) != null && i.push({
          channel_id: e.data.channel_id,
          message_id: e.data.message_context.before_message_id
        }), (null == (r = e.data.message_context) ? true : r.after_message_id) != null && i.push({
          channel_id: e.data.channel_id,
          message_id: e.data.message_context.after_message_id
        }), i
      }
      return []
    }).flat().filter(Boolean),
    o = l.filter(e => e.type === b.Ni.SUMMARY).map(e => ({
      guild_id: e.data.guild_id,
      channel_id: e.data.channel_id,
      summary_id: e.data.summary_id
    })),
    c = l.filter(e => e.type === b.Ni.ACTIVITY).map(e => ({
      user_id: e.data.user_id,
      content_id: e.data.content_id
    })),
    u = l.filter(e => e.type === b.Ni.GENERATED_CANDIDATE).map(e => ({
      content_id: e.data.content_id,
      guild_id: e.data.guild_id,
      channel_id: e.data.channel_id
    }));
  await h.Z.fetchHydrated(t, n, {
    messageItems: [...a, ...s],
    summaryItems: o,
    activityItems: c,
    generatedCandidateItems: u
  })
}
async function N() {
  let e = Chunk144725.Z.getUnreadDisplayItems(),
    t = Chunk144725.Z.getReadDisplayItems(),
    n = Chunk144725.Z.getNextIndexToHydrate();
  await T([...module, ...exports], require, require + Chunk797394.xy)
}

function j(e, t, n) {
  let r = [],
    i = null;
  for (let l of e) {
    if (null == l.author || t && i === l.author.id) continue;
    let e = l instanceof c.ZP ? l : (0, s.e5)(l);
    if (r.push(e), i = l.author.id, null != n && r.length >= n) break
  }
  return r
}

function P(e, t) {
  let {
    reactions: n,
    reactionCount: r
  } = function(e) {
    let t = [],
      n = 0;
    for (let l of e)
      if (null != l.reactions) {
        if (t.length < 5)
          for (let e of l.reactions) {
            var r, i;
            (null == e.count_details || (null != (r = e.count_details.burst) ? r : 0) > 0 || (null != (i = e.count_details.normal) ? i : 0) > 0) && t.push(e)
          }
        n += function(e) {
          let t = 0;
          if (null != e.reactions) {
            let n = (null != e.reactions ? e.reactions : []).map(e => {
              var t, n;
              return null == e.count_details ? 0 : (null != (t = e.count_details.burst) ? t : 0) + (null != (n = e.count_details.normal) ? n : 0)
            });
            n.length > 0 && (t = n.reduce((e, t) => e + t))
          }
          return t
        }(l)
      } return {
      reactions: t,
      reactionCount: n
    }
  }(e.messages), i = j(e.messages, true, 3);
  return {
    id: e.id,
    topic: e.topic,
    summShort: e.summ_short,
    people: Array.from(new Set(e.people)),
    startId: e.start_id,
    endId: e.end_id,
    count: e.count,
    channelId: e.channel_id,
    type: e.type,
    messages: i,
    reactions: n,
    messageIds: e.messages.map(e => e.id),
    guildId: t,
    reactionCount: r,
    numTotalMessages: e.messages.length,
    source: e.source
  }
}

function x(e) {
  let t = [];
  null != e.messages && (t = e.messages);
  let n = j(t);
  return {
    guild_id: e.guild_id,
    content_id: e.content_id,
    channel_id: e.channel_id,
    type: e.type,
    primary_text: e.primary_text,
    secondary_text: e.secondary_text,
    message_ids: e.message_ids,
    message_scores: e.message_scores,
    user_ids: e.user_ids,
    image_urls: e.image_urls,
    created_at: e.created_at,
    messages: n
  }
}

function A(e, t) {
  var n, r;
  let i, l;
  return null != e.before_messages && (i = j(e.before_messages).slice(-y.h9)), null != e.after_messages && (l = j(e.after_messages).slice(0, y.Ml)), n = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, t), r = r = {
    message: (0, s.e5)(e.message),
    threadChannel: null != e.thread_channel ? o.dy.fromServer(e.thread_channel, e.guild_id) : true,
    beforeMessages: i,
    afterMessages: l
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
  }), n
}

function Z(e, t) {
  let n = p.ZP.getTrackedAckMessageId(e);
  return null == n || f.default.extractTimestamp(t) > f.default.extractTimestamp(n)
}

function w(e) {
  return (0, g.VZ)(e)
}

function L(e) {
  var t;
  return {
    id: e.id,
    type: b.Ni.CUSTOM_STATUS,
    activity: {
      id: e.id,
      author_id: e.data.user_id,
      author_type: i.i.USER,
      traits: [],
      participants: [],
      content_type: l.s.CUSTOM_STATUS,
      extra: {
        type: "custom_status_extra",
        status: null != (t = e.data.text) ? t : "",
        emoji_id: e.data.emoji_id,
        emoji_name: e.data.emoji_name,
        emoji_animated: e.data.emoji_animated,
        attachments: e.data.attachments
      }
    },
    score: e.score,
    score_components: e.score_components
  }
}

function R(e, t, n) {
  let r = E.Z.getReadTimestamp(e);
  null == r && (r = null == n ? true : n[e]);
  let i = E.Z.getReadTimestamp(t);
  return (null == i && (i = null == n ? true : n[t]), null == r && null == i) ? 0 : null == r ? false : null == i ? 1 : i - r
}

function D(e) {
  let t = [..._.Z.getUnreadDisplayItems(), ..._.Z.getReadDisplayItems()],
    n = null;
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (null != r && !m.X.has(r.item.data.kind)) {
      n = r.item.id;
      break
    }
  }
  if (null == n) return [];
  let r = t.findIndex(e => e.id === n);
  return r < 0 ? [] : t.slice(0, r + 1)
}

function M(e) {
  var t, n;
  let r, i;
  switch (e.data.kind) {
    case "message":
      r = e.data.message.channel_id;
      break;
    case "channelSummary":
      r = e.data.topic.channelId;
      break;
    case "generatedCandidate":
      r = e.data.item.channel_id;
      break;
    case "forumThread":
      r = e.data.threadChannel.id;
      break;
    case "guildEvent":
      i = null == (t = a.ZP.getGuildScheduledEvent(e.data.eventId)) ? true : t.guild_id;
      break;
    default:
      returnfalse
  }
  let l = u.Z.getChannel(r);
  if (null == l ? true : l.nsfw) returntrue;
  let s = null != (i = null != (n = null == l ? true : l.guild_id) ? n : i) ? d.Z.getGuild(i) : null;
  return (null == s ? true : s.nsfwLevel) === O.V_K.EXPLICIT || (null == s ? true : s.nsfwLevel) === O.V_K.AGE_RESTRICTED
}

function k(e) {
  switch (e.data.kind) {
    case "end":
      return "end";
    case "loading":
      return "loading";
    case "bottomLoading":
      return "bottomLoading";
    case "message":
      var t;
      if (e.channelType === O.d4z.GUILD_ANNOUNCEMENT) return "announcement";
      if ((null == (t = e.data.messageContext) ? true : t.external_content_application_id) != null) return "game_message";
      return "message";
    case "channelSummary":
      return "summary";
    case "guildEvent":
      return "guild_event";
    case "contentInventory":
      if (e.data.content.content_type === l.s.CUSTOM_STATUS) return "hotwheels_custom_status";
      return "hotwheels_gaming_activity";
    case "recommendedGuilds":
      return "recommended_guilds";
    case "forumThread":
      return "forum_thread";
    case "generatedCandidate":
      return "generated_candidate";
    case "icymiHeader":
      return "icymi_header";
    default:
      return "unknown"
  }
}
async function U(e) {
  let {
    ack: t
  } = await Promise.resolve().then(n.bind(n, 45114)), {
    AnalyticsObjectTypes: r
  } = await Promise.resolve().then(n.bind(n, 981631));
  _.Z.getDehydratedItems().forEach(n => {
    n.type === b.Ni.MESSAGE && n.data.channel_type === O.d4z.GUILD_ANNOUNCEMENT && f.default.compare(p.ZP.ackMessageId(n.data.channel_id), n.data.message_id) >= 0 && t(n.data.channel_id, {
      object: e,
      objectType: r.ACK_SEMI_AUTOMATIC
    }, true, true, f.default.atPreviousMillisecond(n.data.message_id))
  }), await h.Z.clearReadStates(), await h.Z.fetchDehydrated({
    isReloading: true,
    forceRefresh: true
  }), await h.Z.reloadICYMITab(), await h.Z.getGuildChannelScores(), h.Z.getRecommendedGuilds()
}