/** Chunk was on web.js **/
/** chunk id: 786761, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Pv: () => G,
  e5: () => P,
  gx: () => w,
  lp: () => U,
  wi: () => D
}), require("./997841.js"), require("./388685.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk920412 = require("./920412.js"),
  Chunk830121 = require("./830121.js"),
  Chunk292419 = require("./292419.js"),
  Chunk330044 = require("./330044.js"),
  Chunk378233 = require("./378233.js"),
  Chunk360742 = require("./360742.js"),
  Chunk23750 = require("./23750.js"),
  Chunk598077 = require("./598077.js"),
  Chunk314897 = require("./314897.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk408433 = require("./408433.js"),
  Chunk669079 = require("./669079.js"),
  Chunk709054 = require("./709054.js"),
  Chunk572804 = require("./572804.js");
require("./739566.js");
var Chunk959517 = require("./959517.js"),
  Chunk981631 = require("./981631.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = new Chunk598077.Z({
  id: "???",
  username: "???"
});

function N(e) {
  var t;
  return null == e.author ? A : null != e.webhook_id ? new f.Z(e.author) : null != (t = h.default.getUser(e.author.id)) ? t : new f.Z(e.author)
}

function C(e) {
  returnfalse
}

function R(e) {
  var t;
  return new d.pi(S(I({}, e), {
    timestamp: new Date(e.timestamp),
    editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
    attachments: L(e),
    embeds: M(e),
    components: (0, s.uZ)(null != (t = e.components) ? t : [], {
      includeEmojiSrc: false
    }),
    codedLinks: e.type === O.uaV.THREAD_CREATED ? [] : (0, o.ZP)(e.content)
  }))
}

function P(e) {
  var t, n, r, i, o, s, c, f;
  let h, m, {
      reactions: y,
      interactionData: v
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    T = R(e),
    A = null != (i = null == (t = e.mentions) ? true : t.map(e => e.id)) ? i : [],
    P = null != (o = e.mention_roles) ? o : [],
    w = null != (s = e.mention_channels) ? s : [],
    D = null != (c = e.mention_games) ? c : [],
    L = e.message_reference,
    M = N(e),
    U = null,
    G = null == e ? true : e.gift_info,
    B = e.gifting_prompt,
    V = null != e.interaction ? u.Z.createFromServer(e.interaction) : null,
    F = e.type === O.uaV.THREAD_STARTER_MESSAGE ? null == (r = e.referenced_message) || null == (n = r.author) ? true : n.id : true,
    Z = e.content;
  return new d.ZP((e.type === O.uaV.PREMIUM_REFERRAL ? (h = E.default.isProbablyAValidSnowflake(e.content) ? e.content : true, Z = "") : e.type === O.uaV.CHAT_WALLPAPER_SET && (m = (0, a.Z)(e.content), Z = ""), C(e)) ? S(I({}, U), {
    id: e.id,
    channel_id: e.channel_id,
    type: O.uaV.DEFAULT,
    author: M,
    timestamp: T.timestamp,
    isUnsupported: true
  }) : S(I({}, e, U, T.toJS()), {
    author: M,
    webhookId: e.webhook_id,
    blocked: p.Z.isBlockedForMessage(e) || null != F && p.Z.isBlocked(F),
    ignored: p.Z.isIgnoredForMessage(e) || null != F && p.Z.isIgnored(F),
    mentionEveryone: e.mention_everyone,
    mentions: A,
    mentionRoles: P,
    mentionChannels: w,
    mentionGames: D,
    messageReference: L,
    mentioned: (0, b.Sz)({
      userId: _.default.getId(),
      channelId: e.channel_id,
      mentionEveryone: null != (f = e.mention_everyone) && f,
      mentionUsers: A,
      mentionRoles: P,
      mentionGames: D.map(e => e.id)
    }),
    giftCodes: (0, g.Fp)(e) ? (0, g.Q_)(null == e ? true : e.embeds[0].url) : (0, g.Q_)(e.content),
    content: Z,
    referralTrialOfferId: h,
    call: x(e.call, T.timestamp),
    messageSnapshots: j(e),
    reactions: k(null != y ? y : e.reactions, e.poll),
    interaction: V,
    interactionData: null != v ? v : e.interaction_data,
    interactionMetadata: e.interaction_metadata,
    roleSubscriptionData: e.role_subscription_data,
    purchaseNotification: e.purchase_notification,
    poll: null == e.poll ? true : (0, l.Z)(e.poll),
    potions: e.potions,
    giftInfo: null == G ? true : G,
    giftingPrompt: B,
    chatWallpaperInfo: m
  }))
}

function w(e, t) {
  return null != t.edited_timestamp ? S(I({}, t), {
    reactions: e.reactions,
    interaction_data: e.interaction_data
  }) : I({}, e, t)
}

function D(e, t) {
  if (null != t.edited_timestamp) return P(t, {
    reactions: e.reactions,
    interactionData: e.interactionData
  });
  let n = e,
    r = false;
  if (null != t.call && (n = n.set("call", x(t.call, e.timestamp))), null != t.attachments && (n = n.set("attachments", L(t))), null != t.content && "" !== t.content && (n = n.set("content", t.content)), null != t.embeds && (n = n.set("embeds", M(t))), null != t.message_snapshots && (n = n.set("messageSnapshots", j(t))), t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)), null != n.webhookId && null != t.author && (n = n.set("author", new f.Z(t.author))), null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)), null != t.components && (n = n.set("components", (0, s.uZ)(t.components, {
      includeEmojiSrc: false
    }))), null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)), null != t.reactions) {
    var i;
    n = n.set("reactions", k(null != (i = e.reactions) ? i : t.reactions))
  }
  return null != t.poll && (n = n.set("poll", (0, l.Z)(t.poll))), null != t.mentions && (n = n.set("mentions", t.mentions.map(e => e.id)), r = true), null != t.mention_games && (n = n.set("mentionGames", t.mention_games), r = true), null != t.mention_everyone && (n = n.set("mentionEveryone", t.mention_everyone), r = true), null != t.mention_roles && (n = n.set("mentionRoles", t.mention_roles), r = true), null != t.potions && (n = n.set("potions", t.potions)), r && (n = n.set("mentioned", (0, b.ZP)({
    message: n,
    userId: _.default.getId()
  }))), n
}

function L(e) {
  return null == e.attachments ? [] : e.attachments.map(e => S(I({}, e), {
    spoiler: e.filename.startsWith(y._j)
  }))
}

function x(e, t) {
  if (null != e) {
    let n = null != e.ended_timestamp ? i()(new Date(e.ended_timestamp)) : null,
      r = null != n ? i().duration(n.diff(t)) : null;
    return {
      participants: e.participants,
      endedTimestamp: n,
      duration: r
    }
  }
  return null
}

function M(e) {
  if (null == e.embeds) return [];
  let t = e.embeds.map(t => (0, m.kC)(e.channel_id, e.id, t));
  return (0, m.o3)(t)
}

function k(e, t) {
  var n;
  if (null == e && (null == t ? true : t.results) == null) return [];
  let r = null == t || null == (n = t.results) ? true : n.answer_counts.map(e => ({
    count_details: {
      vote: e.count
    },
    me_vote: e.me_voted,
    emoji: {
      id: e.id.toString(),
      name: "",
      animated: false
    },
    me: false,
    me_burst: false,
    count: e.count,
    burst_count: 0
  }));
  return [...null != e ? e : [], ...null != r ? r : []].map(e => {
    let t = I({}, e);
    if ((null == t ? true : t.count_details) != null) {
      var n, r;
      t.burst_count = null != (n = t.count_details.burst) ? n : 0, t.count = null != (r = t.count_details.normal) ? r : 0
    }
    return t.count < 0 && (t.count = 0), t.burst_count < 0 && (t.burst_count = 0), t
  })
}

function j(e) {
  return null == e.message_snapshots ? [] : e.message_snapshots.map(e => {
    let {
      message: t,
      moderator_report: n
    } = e;
    return new d.Hx({
      message: R(t),
      moderator_report: n
    })
  })
}
let U = e => 0 === (0, c.cv)(e).length || "" !== e.content;

function G(e) {
  return e.hasFlag(O.iLy.EPHEMERAL) && e.type !== O.uaV.IN_GAME_MESSAGE_NUX
}