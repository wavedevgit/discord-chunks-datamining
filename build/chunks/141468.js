/** Chunk was on web.js **/
/** chunk id: 141468, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  IU: () => P,
  SP: () => w,
  ec: () => U,
  ei: () => k,
  rh: () => R
}), require("./938796.js"), require("./896048.js");
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk833291 = require("./833291.js"),
  Chunk814890 = require("./814890.js"),
  Chunk921457 = require("./921457.js"),
  Chunk378058 = require("./378058.js"),
  Chunk399144 = require("./399144.js"),
  Chunk383233 = require("./383233.js"),
  Chunk427157 = require("./427157.js"),
  Chunk961350 = require("./961350.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk659674 = require("./659674.js"),
  Chunk45938 = require("./45938.js"),
  Chunk661191 = require("./661191.js"),
  Chunk451919 = require("./451919.js");
require("./763754.js");
var Chunk381941 = require("./381941.js"),
  Chunk652215 = require("./652215.js");

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

function A(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = new Chunk427157.A({
  id: "???",
  username: "???"
});

function T(e) {
  var t;
  return null == e.author ? S : null != e.webhook_id ? new d.A(e.author) : null != (t = _.default.getUser(e.author.id)) ? t : new d.A(e.author)
}

function C(e) {
  returnfalse
}

function N(e) {
  var t;
  return new u.go(I(v({}, e), {
    timestamp: new Date(e.timestamp),
    editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
    attachments: D(e),
    embeds: L(e),
    components: (0, s.ZV)(null != (t = e.components) ? t : []),
    codedLinks: b.MRS.NON_PARSED.has(e.type) ? [] : (0, a.Ay)(e.content)
  }))
}

function R(e) {
  var t, n, r, i, a, s, l, d;
  let _, h, {
      reactions: y,
      interactionData: O
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    A = N(e),
    S = null != (t = null == (s = e.mentions) ? true : s.map(e => e.id)) ? t : [],
    R = null != (n = e.mention_roles) ? n : [],
    w = null != (r = e.mention_channels) ? r : [],
    P = null != (i = e.mention_games) ? i : [],
    D = e.message_reference,
    L = T(e),
    k = null,
    U = null == e ? true : e.gift_info,
    G = e.gifting_prompt,
    V = null != e.interaction ? c.A.createFromServer(e.interaction) : null,
    F = e.type === b.lAJ.THREAD_STARTER_MESSAGE ? null == (d = e.referenced_message) || null == (l = d.author) ? true : l.id : true,
    B = e.content;
  return new u.Ay((e.type === b.lAJ.PREMIUM_REFERRAL && (_ = g.default.isProbablyAValidSnowflake(e.content) ? e.content : true, B = ""), e.type === b.lAJ.PREMIUM_GROUP_INVITE && (h = g.default.isProbablyAValidSnowflake(e.content) ? e.content : true, B = ""), C(e)) ? I(v({}, k), {
    id: e.id,
    channel_id: e.channel_id,
    type: b.lAJ.DEFAULT,
    author: L,
    timestamp: A.timestamp,
    isUnsupported: true
  }) : I(v({}, e, k, A.toJS()), {
    author: L,
    webhookId: e.webhook_id,
    blocked: p.A.isBlockedForMessage(e) || null != F && p.A.isBlocked(F),
    ignored: p.A.isIgnoredForMessage(e) || null != F && p.A.isIgnored(F),
    mentionEveryone: e.mention_everyone,
    mentions: S,
    mentionRoles: R,
    mentionChannels: w,
    mentionGames: P,
    messageReference: D,
    mentioned: (0, E.Uj)({
      userId: f.default.getId(),
      channelId: e.channel_id,
      mentionEveryone: null != (a = e.mention_everyone) && a,
      mentionUsers: S,
      mentionRoles: R,
      mentionGames: P.map(e => e.id)
    }),
    giftCodes: (0, m.pF)(e) ? (0, m.e7)(null == e ? true : e.embeds[0].url) : (0, m.e7)(e.content),
    content: B,
    referralTrialOfferId: _,
    premiumGroupInviteId: h,
    call: x(e.call, A.timestamp),
    messageSnapshots: M(e),
    reactions: j(null != y ? y : e.reactions, e.poll),
    interaction: V,
    interactionData: null != O ? O : e.interaction_data,
    interactionMetadata: e.interaction_metadata,
    roleSubscriptionData: e.role_subscription_data,
    purchaseNotification: e.purchase_notification,
    poll: null == e.poll ? true : (0, o.A)(e.poll),
    sharedClientTheme: e.shared_client_theme,
    giftInfo: null == U ? true : U,
    giftingPrompt: G
  }))
}

function w(e, t) {
  return null != t.edited_timestamp ? I(v({}, t), {
    reactions: e.reactions,
    interaction_data: e.interaction_data
  }) : v({}, e, t)
}

function P(e, t) {
  if (null != t.edited_timestamp) return R(t, {
    reactions: e.reactions,
    interactionData: e.interactionData
  });
  let n = e,
    r = false;
  if (null != t.call && (n = n.set("call", x(t.call, e.timestamp))), null != t.attachments && (n = n.set("attachments", D(t))), null != t.application && (n = n.set("application", t.application)), null != t.activity && (n = n.set("activity", t.activity)), null != t.content && "" !== t.content && (n = n.set("content", t.content)), null != t.embeds && (n = n.set("embeds", L(t))), null != t.message_snapshots && (n = n.set("messageSnapshots", M(t))), t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)), null != n.webhookId && null != t.author && (n = n.set("author", new d.A(t.author))), null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)), null != t.components && (n = n.set("components", (0, s.ZV)(t.components))), null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)), null != t.reactions) {
    var i;
    n = n.set("reactions", j(null != (i = e.reactions) ? i : t.reactions))
  }
  return null != t.poll && (n = n.set("poll", (0, o.A)(t.poll))), null != t.mentions && (n = n.set("mentions", t.mentions.map(e => e.id)), r = true), null != t.mention_games && (n = n.set("mentionGames", t.mention_games), r = true), null != t.mention_everyone && (n = n.set("mentionEveryone", t.mention_everyone), r = true), null != t.mention_roles && (n = n.set("mentionRoles", t.mention_roles), r = true), r && (n = n.set("mentioned", (0, E.Ay)({
    message: n,
    userId: f.default.getId()
  }))), n
}

function D(e) {
  return null == e.attachments ? [] : e.attachments.map(e => I(v({}, e), {
    spoiler: e.filename.startsWith(y._W)
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
  let t = e.embeds.map(t => (0, h.fK)(e.channel_id, e.id, t));
  return (0, h.nh)(t)
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
    return new u.vF({
      message: N(t),
      moderator_report: n
    })
  })
}
let k = e => 0 === (0, l.o6)(e).length || "" !== e.content;

function U(e) {
  return e.hasFlag(b.pr7.EPHEMERAL) && e.type !== b.lAJ.IN_GAME_MESSAGE_NUX
}