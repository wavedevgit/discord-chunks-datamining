/** Chunk was on web.js **/
/** chunk id: 759735, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $L: () => j,
  au: () => C,
  cr: () => I,
  d1: () => T,
  fO: () => L,
  io: () => N,
  kL: () => S
}), require("./65821.js"), require("./896048.js"), require("./733351.js");
var Chunk602137 = require("./602137.js"),
  Chunk970278 = require("./970278.js"),
  Chunk152007 = require("./152007.js"),
  Chunk802958 = require("./802958.js"),
  Chunk456874 = require("./456874.js"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk576705 = require("./576705.js"),
  Chunk522602 = require("./522602.js"),
  Chunk661191 = require("./661191.js"),
  Chunk969043 = require("./969043.js"),
  Chunk679804 = require("./679804.js"),
  Chunk878317 = require("./878317.js"),
  Chunk536437 = require("./536437.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk37411 = require("./37411.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e) {
  return m.A.getForumChannelSessionId(e)
}

function S(e) {
  switch (e) {
    case r.T.CREATION_DATE:
      return y.az.CREATION_DATE;
    case r.T.LATEST_ACTIVITY:
      return y.az.LATEST_ACTIVITY;
    default:
      throw Error("Unexpected sort order ".concat(e))
  }
}

function T(e) {
  return d.A.getUploads(e, c.C.FirstThreadMessage).length
}

function C(e) {
  var t, n;
  let r = l.A.getChannel(e);
  if (null == r) return [];
  let i = l.A.getChannel(r.parent_id),
    a = null == i ? true : i.availableTags;
  if (null == i || null == a) return [];
  let s = null != (t = null == (n = c.A.getThreadSettings(e)) ? true : n.appliedTags) ? t : new Set,
    o = new Set(a.map(e => e.id));
  return Array.from(s).filter(e => o.has(e))
}

function N(e, t) {
  return Object.keys(i.A.getThreadsForParent(e, t)).length
}

function w(e) {
  let {
    loaded: t,
    firstMessage: n
  } = p.A.getMessage(e);
  return t ? n : null
}

function R(e) {
  let t = w(e);
  return null == t ? 0 : t.reactions.length
}

function P(e) {
  let t = w(e);
  return null == t ? 0 : t.reactions.reduce((e, t) => e + t.count, 0)
}

function D(e) {
  var t, n;
  let r = l.A.getChannel(e);
  if (null == r) return [];
  let i = l.A.getChannel(r.parent_id),
    a = null == i ? true : i.availableTags;
  if (null == i || null == a) return [];
  let s = new Set(a.map(e => e.id));
  return null != (t = null == (n = r.appliedTags) ? true : n.filter(e => s.has(e))) ? t : []
}

function x(e) {
  let t = w(e);
  return null == t ? [] : t.attachments.map(e => {
    var t;
    return null != (t = e.content_type) ? t : "unknown"
  })
}

function L(e) {
  var t, n, r, i;
  let {
    channelId: a,
    sessionId: s
  } = e, o = l.A.getChannel(a);
  return null != o && o.isForumLikeChannel() ? {
    forum_channel_has_guidelines: null != o.topic && o.topic.trim().length > 0,
    forum_channel_default_emoji_reaction_id: null == (n = o.defaultReactionEmoji) ? true : n.emojiId,
    forum_channel_default_emoji_reaction_name: null == (r = o.defaultReactionEmoji) ? true : r.emojiName,
    forum_channel_available_tag_ids: null != (t = null == (i = o.availableTags) ? true : i.map(e => e.id)) ? t : [],
    forum_channel_tag_required: o.hasFlag(E.lx.REQUIRE_TAG),
    forum_channel_can_create_post: u.A.can(g.xBc.SEND_MESSAGES, o),
    forum_channel_filter_tag_ids: _.A.getFilterTagIdsAnalytics(),
    forum_channel_sort_order: _.A.getSortOrderAnalytics(o.id),
    forum_channel_session_id: null != s ? s : I(o.id),
    forum_channel_layout: _.A.getLayoutAnalytics(o.id),
    forum_channel_default_sort_order: o.defaultSortOrder,
    forum_channel_tag_setting: _.A.getTagSettingAnalytics(o.id),
    forum_channel_default_layout: o.defaultForumLayout,
    forum_channel_is_moderator_report_channel: o.isModeratorReportChannel()
  } : null
}

function j(e) {
  var t, n, r, i, c, u, d;
  let {
    channelId: p,
    sessionId: _
  } = e, m = l.A.getChannel(p);
  if (null == m || !m.isForumPost()) return null;
  let g = l.A.getChannel(m.parent_id);
  return null != g && g.isForumLikeChannel() ? A(O({}, L({
    channelId: g.id,
    sessionId: _
  })), {
    thread_approximate_member_count: s.A.getMemberCount(p),
    thread_approximate_message_count: o.A.getCount(p),
    thread_archived: (null == (r = m.threadMetadata) ? true : r.archived) === true,
    thread_locked: null != (t = null == (i = m.threadMetadata) ? true : i.locked) && t,
    thread_auto_archive_duration_minutes: null != (n = null == (c = m.threadMetadata) ? true : c.autoArchiveDuration) ? n : 0,
    thread_approximate_creation_date: f.default.extractTimestamp(p),
    forum_post_id: m.id,
    forum_post_first_message_id: f.default.castChannelIdAsMessageId(m.id),
    forum_post_num_reactions: P(m.id),
    forum_post_num_unique_reactions: R(m.id),
    forum_post_applied_tag_ids: D(m.id),
    forum_post_is_pinned: m.hasFlag(E.lx.PINNED),
    forum_post_is_new: null == (u = h.A.getReadStateSnapshotAnalytics(m.id)) ? true : u.isNew,
    forum_post_is_unread: null == (d = h.A.getReadStateSnapshotAnalytics(m.id)) ? true : d.hasUnreads,
    forum_post_is_following: a.A.hasJoined(m.id),
    forum_post_attachment_mimetypes: x(m.id)
  }) : null
}