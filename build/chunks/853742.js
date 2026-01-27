/** Chunk was on web.js **/
/** chunk id: 853742, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bd: () => x,
  Cd: () => R,
  El: () => U,
  Lj: () => T,
  Md: () => j,
  Ml: () => w,
  OG: () => B,
  Q_: () => G,
  Sc: () => y,
  UA: () => O,
  Z_: () => E,
  _4: () => I,
  _Z: () => N,
  ad: () => P,
  bh: () => L,
  hT: () => b,
  jC: () => D,
  jh: () => M,
  jr: () => v,
  pO: () => C,
  py: () => S,
  rH: () => F,
  ri: () => k,
  sB: () => A,
  zd: () => V
}), require("./733351.js");
var Chunk58149 = require("./58149.js"),
  Chunk332456 = require("./332456.js"),
  Chunk237774 = require("./237774.js"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk969043 = require("./969043.js"),
  Chunk768953 = require("./768953.js"),
  Chunk759735 = require("./759735.js"),
  Chunk652215 = require("./652215.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  let {
    guildId: t,
    channelId: n,
    sessionId: i,
    postIds: a,
    additionalTimes: o
  } = e;
  r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_SEEN_BATCH, g(h({}, (0, f.fO)({
    channelId: n,
    sessionId: i
  })), {
    guild_id: t,
    channel_id: n,
    post_ids: a,
    additional_seen_time_millis: o
  }))
}

function y(e) {
  let {
    guildId: t,
    channelId: n,
    numSearchResults: i
  } = e;
  r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_SEARCHED, g(h({}, (0, f.fO)({
    channelId: n
  })), {
    guild_id: t,
    channel_id: n,
    num_search_results: i
  }))
}

function b(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_SEARCH_CLEARED, g(h({}, (0, f.fO)({
    channelId: n
  })), {
    guild_id: t,
    channel_id: n
  }))
}

function O(e) {
  let {
    guildId: t,
    channelId: n,
    tagId: i,
    filterTagIds: a,
    added: o,
    location: s
  } = e;
  r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_TAG_FILTER_CLICKED, g(h({}, (0, f.fO)({
    channelId: n
  })), {
    guild_id: t,
    channel_id: n,
    tag_id: i,
    filter_tag_ids: a,
    added: o,
    location: s
  }))
}

function v(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, g(h({}, (0, f.fO)({
    channelId: n
  })), {
    guild_id: t,
    channel_id: n
  }))
}

function A(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, g(h({}, (0, f.fO)({
    channelId: n
  })), {
    guild_id: t,
    channel_id: n
  }))
}

function I(e) {
  var t, n, i, a;
  let {
    guildId: l,
    channelId: c
  } = e, u = o.A.getChannel(c);
  if (null == u) return;
  let d = s.A.getThreadSettings(c),
    _ = null == (t = u.template) ? true : t.trim(),
    m = s.A.getDraft(c, s.C.FirstThreadMessage),
    E = null == m || 0 === m.length || (null == m ? true : m.trim()) === _,
    y = (null == d ? true : d.appliedTags) == null || (null == d || null == (n = d.appliedTags) ? true : n.size) === 0,
    b = (null == d ? true : d.name) == null || (null == d || null == (a = d.name) || null == (i = a.trim()) ? true : i.length) === 0;
  E && y && b || r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, g(h({}, (0, f.fO)({
    channelId: c
  })), {
    guild_id: l,
    channel_id: c,
    applied_tag_ids: (0, f.au)(c),
    num_attachments: (0, f.d1)(c)
  }))
}

function S(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, g(h({}, (0, f.fO)({
    channelId: n
  })), {
    guild_id: t,
    channel_id: n
  }))
}

function T(e) {
  let {
    guildId: t,
    channelId: n,
    postId: i
  } = e;

  function a() {
    r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_POST_CREATED, g(h({}, (0, f.$L)({
      channelId: i
    })), {
      guild_id: t,
      channel_id: n
    }))
  }
  u.A.isLoading(i) ? u.A.addConditionalChangeListener(() => !!u.A.isLoading(i) || (a(), false)) : a()
}

function C(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_SCROLLED, g(h({}, (0, f.fO)({
    channelId: n
  })), {
    guild_id: t,
    channel_id: n
  }))
}

function N(e) {
  let {
    guildId: t,
    channelId: n,
    numArchivedThreads: i,
    hasMoreThreads: a,
    filterTagIds: s,
    sortOrder: c
  } = e;
  l.default.track(p.HAw.FORUM_CHANNEL_MORE_POSTS_LOADED, g(h({}, (0, r.H$)(t), (0, r.dI)(o.A.getChannel(n)), (0, f.fO)({
    channelId: n
  })), {
    guild_id: t,
    channel_id: n,
    num_archived_threads: i,
    num_active_threads: (0, f.io)(t, n),
    has_more_threads: a,
    filter_tag_ids: s,
    sort_order: c
  }))
}

function w(e) {
  let {
    guildId: t,
    channelId: n,
    postId: i,
    location: a
  } = e;
  r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_POST_CLICKED, g(h({}, (0, f.$L)({
    channelId: i
  })), {
    guild_id: t,
    channel_id: n,
    is_search_result: null != d.A.getSearchResults(n),
    location: a
  }))
}

function R(e) {
  let {
    guildId: t,
    channelId: n,
    sortOrder: i
  } = e;
  r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_POSTS_SORTED, g(h({}, (0, f.fO)({
    channelId: n
  })), {
    guild_id: t,
    channel_id: n,
    sort_type: (0, f.kL)(i),
    sort_order: i,
    forum_channel_sort_order: i
  }))
}

function P(e) {
  let {
    guildId: t,
    channelId: n,
    forumLayout: i
  } = e;
  r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_LAYOUT_UPDATED, g(h({}, (0, f.fO)({
    channelId: n
  })), {
    guild_id: t,
    channel_id: n,
    forum_channel_layout: i
  }))
}

function D(e) {
  let {
    postId: t,
    location: n
  } = e;
  r.Ay.trackWithMetadata(p.HAw.FORUM_POST_LINK_COPIED, {
    forum_post_id: t,
    location: n
  })
}

function L(e) {
  let {
    onboardingCTA: t
  } = e;
  r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_ONBOARDING_CLICKED, {
    onboarding_cta_type: t
  })
}

function x(e) {
  let {
    forumDemoId: t
  } = e;
  r.Ay.trackWithMetadata(p.HAw.FORUM_UPSELL_MODAL_CLICKED, {
    forum_demo_id: t
  })
}

function M(e) {
  let {
    added: t
  } = e;
  r.Ay.trackWithMetadata(p.HAw.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, {
    added: t
  })
}

function j(e) {
  let {
    readGuideCta: t
  } = e;
  r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_HELPER_CARD_CLICKED, {
    read_guide_cta: t
  })
}

function k(e) {
  let {
    isMobile: t
  } = e;
  r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, {
    is_mobile: t
  })
}

function U() {
  r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED)
}

function G() {
  r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED)
}

function F(e) {
  r.Ay.trackWithMetadata(p.HAw.CHANNEL_OPENED, g(h({}, (0, r.H$)(e.guild_id), (0, r.dI)(e), (0, i.C)(e, true), (0, r.qL)(e.id)), {
    channel_view: "Split View",
    platform: (0, c.getPlatform)()
  })), (0, a.k)(p.HAw.CHANNEL_OPENED_CLICKSTREAM, {
    channelId: e.id
  })
}

function V() {
  r.Ay.trackWithMetadata(p.HAw.OPEN_MODAL, {
    type: "Forum Channel Upsell Modal",
    location: {
      section: p.JJy.CHANNEL_WELCOME_CTA
    }
  })
}

function B(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  r.Ay.trackWithMetadata(p.HAw.THREAD_CREATION_STARTED, g(h({}, (0, i.C)(o.A.getChannel(n))), {
    channel_id: n,
    guild_id: t
  }))
}