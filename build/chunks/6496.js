/** Chunk was on web.js **/
/** chunk id: 6496, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  RR: () => A,
  WW: () => T,
  bE: () => N,
  n4: () => M,
  q8: () => C,
  t$: () => S,
  xl: () => L
}), require("./415506.js"), require("./388685.js"), require("./781311.js");
var Chunk683860 = require("./683860.js"),
  Chunk344185 = require("./344185.js"),
  Chunk569471 = require("./569471.js"),
  Chunk260483 = require("./260483.js"),
  Chunk144140 = require("./144140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk496675 = require("./496675.js"),
  Chunk117530 = require("./117530.js"),
  Chunk709054 = require("./709054.js"),
  Chunk660189 = require("./660189.js"),
  Chunk559241 = require("./559241.js"),
  Chunk474387 = require("./474387.js"),
  Chunk702225 = require("./702225.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk124368 = require("./124368.js");

function y(e, t, n) {
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
      y(e, t, n[t])
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

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e) {
  return m.Z.getForumChannelSessionId(e)
}

function S(e) {
  switch (e) {
    case r.z.CREATION_DATE:
      return b.SX.CREATION_DATE;
    case r.z.LATEST_ACTIVITY:
      return b.SX.LATEST_ACTIVITY;
    default:
      throw Error("Unexpected sort order ".concat(e))
  }
}

function A(e) {
  return d.Z.getUploads(e, c.d.FirstThreadMessage).length
}

function C(e) {
  var t, n;
  let r = l.Z.getChannel(e);
  if (null == r) return [];
  let i = l.Z.getChannel(r.parent_id),
    a = null == i ? true : i.availableTags;
  if (null == i || null == a) return [];
  let o = null != (n = null == (t = c.Z.getThreadSettings(e)) ? true : t.appliedTags) ? n : new Set,
    s = new Set(a.map(e => e.id));
  return Array.from(o).filter(e => s.has(e))
}

function N(e, t) {
  return Object.keys(i.Z.getThreadsForParent(e, t)).length
}

function R(e) {
  let {
    loaded: t,
    firstMessage: n
  } = _.Z.getMessage(e);
  return t ? n : null
}

function P(e) {
  let t = R(e);
  return null == t ? 0 : t.reactions.length
}

function w(e) {
  let t = R(e);
  return null == t ? 0 : t.reactions.reduce((e, t) => e + t.count, 0)
}

function D(e) {
  var t, n;
  let r = l.Z.getChannel(e);
  if (null == r) return [];
  let i = l.Z.getChannel(r.parent_id),
    a = null == i ? true : i.availableTags;
  if (null == i || null == a) return [];
  let o = new Set(a.map(e => e.id));
  return null != (n = null == (t = r.appliedTags) ? true : t.filter(e => o.has(e))) ? n : []
}

function x(e) {
  let t = R(e);
  return null == t ? [] : t.attachments.map(e => {
    var t;
    return null != (t = e.content_type) ? t : "unknown"
  })
}

function L(e) {
  var t, n, r, i;
  let {
    channelId: a,
    sessionId: o
  } = e, s = l.Z.getChannel(a);
  return null != s && s.isForumLikeChannel() ? {
    forum_channel_has_guidelines: null != s.topic && s.topic.trim().length > 0,
    forum_channel_default_emoji_reaction_id: null == (t = s.defaultReactionEmoji) ? true : t.emojiId,
    forum_channel_default_emoji_reaction_name: null == (n = s.defaultReactionEmoji) ? true : n.emojiName,
    forum_channel_available_tag_ids: null != (i = null == (r = s.availableTags) ? true : r.map(e => e.id)) ? i : [],
    forum_channel_tag_required: s.hasFlag(E.zZ.REQUIRE_TAG),
    forum_channel_can_create_post: u.Z.can(g.Plq.SEND_MESSAGES, s),
    forum_channel_filter_tag_ids: p.Z.getFilterTagIdsAnalytics(),
    forum_channel_sort_order: p.Z.getSortOrderAnalytics(s.id),
    forum_channel_session_id: null != o ? o : T(s.id),
    forum_channel_layout: p.Z.getLayoutAnalytics(s.id),
    forum_channel_default_sort_order: s.defaultSortOrder,
    forum_channel_tag_setting: p.Z.getTagSettingAnalytics(s.id),
    forum_channel_default_layout: s.defaultForumLayout,
    forum_channel_is_moderator_report_channel: s.isModeratorReportChannel()
  } : null
}

function M(e) {
  var t, n, r, i, c, u, d;
  let {
    channelId: _,
    sessionId: p
  } = e, m = l.Z.getChannel(_);
  if (null == m || !m.isForumPost()) return null;
  let g = l.Z.getChannel(m.parent_id);
  return null != g && g.isForumLikeChannel() ? I(O({}, L({
    channelId: g.id,
    sessionId: p
  })), {
    thread_approximate_member_count: o.Z.getMemberCount(_),
    thread_approximate_message_count: s.Z.getCount(_),
    thread_archived: (null == (t = m.threadMetadata) ? true : t.archived) === true,
    thread_locked: null != (u = null == (n = m.threadMetadata) ? true : n.locked) && u,
    thread_auto_archive_duration_minutes: null != (d = null == (r = m.threadMetadata) ? true : r.autoArchiveDuration) ? d : 0,
    thread_approximate_creation_date: f.default.extractTimestamp(_),
    forum_post_id: m.id,
    forum_post_first_message_id: f.default.castChannelIdAsMessageId(m.id),
    forum_post_num_reactions: w(m.id),
    forum_post_num_unique_reactions: P(m.id),
    forum_post_applied_tag_ids: D(m.id),
    forum_post_is_pinned: m.hasFlag(E.zZ.PINNED),
    forum_post_is_new: null == (i = h.Z.getReadStateSnapshotAnalytics(m.id)) ? true : i.isNew,
    forum_post_is_unread: null == (c = h.Z.getReadStateSnapshotAnalytics(m.id)) ? true : c.hasUnreads,
    forum_post_is_following: a.Z.hasJoined(m.id),
    forum_post_attachment_mimetypes: x(m.id)
  }) : null
}