/** Chunk was on 21738 **/
/** chunk id: 859524, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $r: () => j,
  GM: () => N,
  Lg: () => x,
  P0: () => L,
  Rh: () => T,
  Vq: () => O,
  Wu: () => v,
  YM: () => P,
  _x: () => C,
  be: () => M,
  kx: () => S,
  n$: () => y,
  px: () => D,
  tI: () => w,
  xj: () => I,
  yx: () => R
}), require("./321073.js"), require("./864466.js"), require("./443073.js"), require("./896048.js");
var r, Chunk6161 = require("./6161.js"),
  Chunk681154 = require("./681154.js");
require("./311907.js"), require("./256265.js");
var Chunk698441 = require("./698441.js"),
  Chunk141468 = require("./141468.js"),
  Chunk95701 = require("./95701.js"),
  Chunk383233 = require("./383233.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js");
require("./320501.js");
var Chunk222823 = require("./222823.js"),
  Chunk661191 = require("./661191.js"),
  Chunk4106 = require("./4106.js"),
  Chunk335934 = require("./335934.js"),
  Chunk800319 = require("./800319.js"),
  Chunk883344 = require("./883344.js"),
  Chunk596720 = require("./596720.js"),
  Chunk449000 = require("./449000.js"),
  Chunk652215 = require("./652215.js");

function O(e, t) {
  return "hydration-".concat(e, "-").concat(t)
}
require("./985018.jsx");
var y = ((r = {})[r.UNKNOWN = 0] = "UNKNOWN", r[r.DEFAULT = 1] = "DEFAULT", r[r.MORE = 2] = "MORE", r[r.LESS = 3] = "LESS", r[r.MUTED = 4] = "MUTED", r);

function I(e) {
  return e.type === _.Mm.MESSAGE || e.type === _.Mm.GENERATED_CANDIDATE || e.type === _.Mm.GUILD_EVENT
}

function v(e) {
  return e < false ? 4 : e < 0 ? 3 : e > 0 ? 2 : 1
}
async function S(e, t, n) {
  let r = A.A.getHydratedItems(),
    i = e.slice(t, n);
  if (0 === i.length) return;
  g.A.loadHydratedAttempt(O(t, n));
  let l = i.filter(e => null == r[e.id]),
    a = l.filter(e => e.type === _.Mm.MESSAGE).map(e => ({
      channel_id: e.data.channel_id,
      message_id: e.data.message_id
    })),
    s = l.map(e => {
      if (e.type === _.Mm.MESSAGE) {
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
    o = l.filter(e => e.type === _.Mm.ACTIVITY).map(e => ({
      user_id: e.data.user_id,
      content_id: e.data.content_id
    })),
    c = l.filter(e => e.type === _.Mm.GENERATED_CANDIDATE).map(e => ({
      content_id: e.data.content_id,
      guild_id: e.data.guild_id,
      channel_id: e.data.channel_id
    }));
  await g.A.fetchHydrated(t, n, {
    messageItems: [...a, ...s],
    activityItems: o,
    generatedCandidateItems: c
  })
}
async function C() {
  let e = A.A.getUnreadDisplayItems(),
    t = A.A.getReadDisplayItems(),
    n = A.A.getNextIndexToHydrate();
  await S([...e, ...t], n, n + _.w5)
}

function N(e) {
  let t = [];
  null != e.messages && (t = e.messages);
  let n = function(e, t, n) {
    let r = [];
    for (let t of e) {
      if (null == t.author) continue;
      let e = t instanceof c.Ay ? t : (0, s.rh)(t);
      r.push(e), t.author.id
    }
    return r
  }(t);
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

function T(e, t) {
  var n, r;
  return n = function(e) {
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
    message: (0, s.rh)(e.message),
    threadChannel: null != e.thread_channel ? o.Lt.fromServer(e.thread_channel, e.guild_id) : true
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

function j(e, t) {
  let n = p.Ay.getTrackedAckMessageId(e);
  return null == n || h.default.extractTimestamp(t) > h.default.extractTimestamp(n)
}

function x(e) {
  return (0, f.HF)(e)
}

function P(e) {
  var t;
  return {
    id: e.id,
    type: _.Mm.CUSTOM_STATUS,
    activity: {
      id: e.id,
      author_id: e.data.user_id,
      author_type: i.t.USER,
      traits: [],
      participants: [],
      content_type: l.I.CUSTOM_STATUS,
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

function w(e, t, n) {
  let r = b.A.getReadTimestamp(e);
  null == r && (r = null == n ? true : n[e]);
  let i = b.A.getReadTimestamp(t);
  return (null == i && (i = null == n ? true : n[t]), null == r && null == i) ? 0 : null == r ? false : null == i ? 1 : i - r
}

function L(e) {
  let t = [...A.A.getUnreadDisplayItems(), ...A.A.getReadDisplayItems()],
    n = null;
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (null != r && !m.P.has(r.item.data.kind)) {
      n = r.item.id;
      break
    }
  }
  if (null == n) return [];
  let r = t.findIndex(e => e.id === n);
  return r < 0 ? [] : t.slice(0, r + 1)
}

function R(e) {
  var t, n;
  let r, i;
  switch (e.data.kind) {
    case "message":
      r = e.data.message.channel_id;
      break;
    case "generatedCandidate":
      r = e.data.item.channel_id;
      break;
    case "forumThread":
      r = e.data.threadChannel.id;
      break;
    case "guildEvent":
      i = null == (n = a.Ay.getGuildScheduledEvent(e.data.eventId)) ? true : n.guild_id;
      break;
    default:
      returnfalse
  }
  let l = u.A.getChannel(r);
  if (null == l ? true : l.nsfw) returntrue;
  let s = null != (i = null != (t = null == l ? true : l.guild_id) ? t : i) ? d.A.getGuild(i) : null;
  return (null == s ? true : s.nsfwLevel) === E.ftr.EXPLICIT || (null == s ? true : s.nsfwLevel) === E.ftr.AGE_RESTRICTED
}

function D(e) {
  switch (e.data.kind) {
    case "end":
      return "end";
    case "loading":
      return "loading";
    case "bottomLoading":
      return "bottomLoading";
    case "message":
      var t;
      if (e.channelType === E.rbe.GUILD_ANNOUNCEMENT) return "announcement";
      if ((null == (t = e.data.messageContext) ? true : t.external_content_application_id) != null) return "game_message";
      return "message";
    case "guildEvent":
      return "guild_event";
    case "contentInventory":
      if (e.data.content.content_type === l.I.CUSTOM_STATUS) return "hotwheels_custom_status";
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
async function M(e) {
  let {
    ack: t
  } = await Promise.resolve().then(n.bind(n, 334738)), {
    AnalyticsObjectTypes: r
  } = await Promise.resolve().then(n.bind(n, 652215));
  A.A.getDehydratedItems().forEach(n => {
    n.type === _.Mm.MESSAGE && n.data.channel_type === E.rbe.GUILD_ANNOUNCEMENT && h.default.compare(p.Ay.ackMessageId(n.data.channel_id), n.data.message_id) >= 0 && t(n.data.channel_id, {
      object: e,
      objectType: r.ACK_SEMI_AUTOMATIC
    }, true, true, h.default.atPreviousMillisecond(n.data.message_id))
  }), await g.A.clearReadStates(), await g.A.fetchDehydrated({
    isReloading: true,
    forceRefresh: true
  }), await g.A.reloadICYMITab(), await g.A.getGuildChannelScores(), g.A.getRecommendedGuilds()
}