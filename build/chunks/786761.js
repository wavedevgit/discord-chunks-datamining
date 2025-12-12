/** Chunk was on web.js **/
/** chunk id: 786761, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Pv: () => U,
  e5: () => P,
  gx: () => R,
  lp: () => k,
  wi: () => w
}), require("./997841.js"), require("./388685.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
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

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = new Chunk598077.Z({
  id: "???",
  username: "???"
});

function C(e) {
  var t;
  return null == e.author ? T : null != e.webhook_id ? new d.Z(e.author) : null != (t = _.default.getUser(e.author.id)) ? t : new d.Z(e.author)
}

function A(e) {
  returnfalse
}

function N(e) {
  var t;
  return new u.pi(I(v({}, e), {
    timestamp: new Date(e.timestamp),
    editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
    attachments: D(e),
    embeds: L(e),
    components: (0, a.uZ)(null != (t = e.components) ? t : []),
    codedLinks: y.V$x.NON_PARSED.has(e.type) ? [] : (0, o.ZP)(e.content)
  }))
}

function P(e) {
  var t, n, r, i, o, a, l, d;
  let _, m, {
      reactions: b,
      interactionData: O
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    S = N(e),
    T = null != (i = null == (t = e.mentions) ? true : t.map(e => e.id)) ? i : [],
    P = null != (o = e.mention_roles) ? o : [],
    R = null != (a = e.mention_channels) ? a : [],
    w = null != (l = e.mention_games) ? l : [],
    D = e.message_reference,
    L = C(e),
    k = null,
    U = null == e ? true : e.gift_info,
    G = e.gifting_prompt,
    Z = null != e.interaction ? c.Z.createFromServer(e.interaction) : null,
    F = e.type === y.uaV.THREAD_STARTER_MESSAGE ? null == (r = e.referenced_message) || null == (n = r.author) ? true : n.id : true,
    B = e.content;
  return new u.ZP((e.type === y.uaV.PREMIUM_REFERRAL && (_ = g.default.isProbablyAValidSnowflake(e.content) ? e.content : true, B = ""), e.type === y.uaV.PREMIUM_GROUP_INVITE && (m = g.default.isProbablyAValidSnowflake(e.content) ? e.content : true, B = ""), A(e)) ? I(v({}, k), {
    id: e.id,
    channel_id: e.channel_id,
    type: y.uaV.DEFAULT,
    author: L,
    timestamp: S.timestamp,
    isUnsupported: true
  }) : I(v({}, e, k, S.toJS()), {
    author: L,
    webhookId: e.webhook_id,
    blocked: p.Z.isBlockedForMessage(e) || null != F && p.Z.isBlocked(F),
    ignored: p.Z.isIgnoredForMessage(e) || null != F && p.Z.isIgnored(F),
    mentionEveryone: e.mention_everyone,
    mentions: T,
    mentionRoles: P,
    mentionChannels: R,
    mentionGames: w,
    messageReference: D,
    mentioned: (0, E.Sz)({
      userId: f.default.getId(),
      channelId: e.channel_id,
      mentionEveryone: null != (d = e.mention_everyone) && d,
      mentionUsers: T,
      mentionRoles: P,
      mentionGames: w.map(e => e.id)
    }),
    giftCodes: (0, h.Fp)(e) ? (0, h.Q_)(null == e ? true : e.embeds[0].url) : (0, h.Q_)(e.content),
    content: B,
    referralTrialOfferId: _,
    premiumGroupInviteId: m,
    call: x(e.call, S.timestamp),
    messageSnapshots: M(e),
    reactions: j(null != b ? b : e.reactions, e.poll),
    interaction: Z,
    interactionData: null != O ? O : e.interaction_data,
    interactionMetadata: e.interaction_metadata,
    roleSubscriptionData: e.role_subscription_data,
    purchaseNotification: e.purchase_notification,
    poll: null == e.poll ? true : (0, s.Z)(e.poll),
    sharedClientTheme: e.shared_client_theme,
    potions: e.potions,
    giftInfo: null == U ? true : U,
    giftingPrompt: G
  }))
}

function R(e, t) {
  return null != t.edited_timestamp ? I(v({}, t), {
    reactions: e.reactions,
    interaction_data: e.interaction_data
  }) : v({}, e, t)
}

function w(e, t) {
  if (null != t.edited_timestamp) return P(t, {
    reactions: e.reactions,
    interactionData: e.interactionData
  });
  let n = e,
    r = false;
  if (null != t.call && (n = n.set("call", x(t.call, e.timestamp))), null != t.attachments && (n = n.set("attachments", D(t))), null != t.application && (n = n.set("application", t.application)), null != t.activity && (n = n.set("activity", t.activity)), null != t.content && "" !== t.content && (n = n.set("content", t.content)), null != t.embeds && (n = n.set("embeds", L(t))), null != t.message_snapshots && (n = n.set("messageSnapshots", M(t))), t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)), null != n.webhookId && null != t.author && (n = n.set("author", new d.Z(t.author))), null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)), null != t.components && (n = n.set("components", (0, a.uZ)(t.components))), null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)), null != t.reactions) {
    var i;
    n = n.set("reactions", j(null != (i = e.reactions) ? i : t.reactions))
  }
  return null != t.poll && (n = n.set("poll", (0, s.Z)(t.poll))), null != t.mentions && (n = n.set("mentions", t.mentions.map(e => e.id)), r = true), null != t.mention_games && (n = n.set("mentionGames", t.mention_games), r = true), null != t.mention_everyone && (n = n.set("mentionEveryone", t.mention_everyone), r = true), null != t.mention_roles && (n = n.set("mentionRoles", t.mention_roles), r = true), null != t.potions && (n = n.set("potions", t.potions)), r && (n = n.set("mentioned", (0, E.ZP)({
    message: n,
    userId: f.default.getId()
  }))), n
}

function D(e) {
  return null == e.attachments ? [] : e.attachments.map(e => I(v({}, e), {
    spoiler: e.filename.startsWith(b._j)
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

function L(e) {
  if (null == e.embeds) return [];
  let t = e.embeds.map(t => (0, m.kC)(e.channel_id, e.id, t));
  return (0, m.o3)(t)
}

function j(e, t) {
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
    let t = v({}, e);
    if ((null == t ? true : t.count_details) != null) {
      var n, r;
      t.burst_count = null != (n = t.count_details.burst) ? n : 0, t.count = null != (r = t.count_details.normal) ? r : 0
    }
    return t.count < 0 && (t.count = 0), t.burst_count < 0 && (t.burst_count = 0), t
  })
}

function M(e) {
  return null == e.message_snapshots ? [] : e.message_snapshots.map(e => {
    let {
      message: t,
      moderator_report: n
    } = e;
    return new u.Hx({
      message: N(t),
      moderator_report: n
    })
  })
}
let k = e => 0 === (0, l.cv)(e).length || "" !== e.content;

function U(e) {
  return e.hasFlag(y.iLy.EPHEMERAL) && e.type !== y.uaV.IN_GAME_MESSAGE_NUX
}