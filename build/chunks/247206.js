/** Chunk was on web.js **/
/** chunk id: 247206, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cm: () => S,
  Hc: () => y,
  IV: () => O,
  JO: () => P,
  Jl: () => w,
  Ks: () => N,
  M0: () => D,
  OP: () => b,
  Pq: () => E,
  QN: () => v,
  UU: () => m,
  Yy: () => h,
  aP: () => g,
  m8: () => R,
  xx: () => I,
  yf: () => C
});
var Chunk286379 = require("./286379.js");
require("./524437.js");
var Chunk81643 = require("./81643.js");
require("./432877.js");
var Chunk797614 = require("./797614.js"),
  Chunk182274 = require("./182274.js"),
  Chunk128064 = require("./128064.js"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk948561 = require("./948561.js");
require("./774863.js");
var Chunk936141 = require("./936141.js"),
  Chunk719548 = require("./719548.js"),
  Chunk981631 = require("./981631.js");
require("./388032.jsx");
let p = 1;
var h = function(e) {
    return e.EXPLICIT_MEDIA_LEARN_MORE_VIEWED = "explicit_media_learn_more_viewed", e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = "explicit_media_learn_more_click_settings", e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = "explicit_media_learn_more_click_learn_more", e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = "explicit_media_learn_more_click_dismiss", e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = "explicit_media_learn_more_click_false_positive", e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY = "explicit_media_learn_more_click_age_verify_reverify", e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE = "explicit_media_learn_more_click_age_verify_learn_more", e.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = "explicit_media_false_positive_viewed", e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = "explicit_media_false_positive_click_confirm", e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = "explicit_media_false_positive_click_cancel", e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = "explicit_media_sender_false_positive_button_clicked", e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = "explicit_media_false_positive_clyde_message_sent", e
  }({}),
  m = function(e) {
    return e.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = "explicit_media_obscured_false_positive_flow", e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = "explicit_media_sender_false_positive_flow", e.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = "explicit_media_message_send_blocked", e.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = "explicit_media_add_media_to_forum_post_blocked", e
  }({});

function g(e) {
  let {
    action: t,
    channelId: n,
    messageId: r,
    context: i
  } = e;
  if (null == n || null == r) return;
  let a = l.Z.getChannel(n);
  c.default.track(_.rMx.EXPLICIT_MEDIA_ACTION, {
    action: t,
    guild_id: null == a ? true : a.guild_id,
    channel_id: n,
    message_id: r,
    user_is_underage: (0, o.U)(),
    context: i
  })
}
var E = function(e) {
  return e.UPDATE = "update", e.TIMEOUT = "timeout", e
}({});

function b(e, t) {
  let n = Math.min(Math.floor((Date.now() - e) / 1e3), 3);
  a.Z.increment({
    name: r.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
    tags: ["timingBucket:".concat(n), "source:".concat(t), "metricVersion:".concat(p)]
  })
}

function y(e) {
  var t, n, i, s;
  let {
    channelId: d,
    messageId: f,
    attachmentIds: h,
    embedIds: m
  } = e;
  if (null == d || null == f || (null != (t = null == h ? true : h.length) ? t : 0) === 0 && (null != (n = null == m ? true : m.length) ? n : 0) === 0) return;
  let g = l.Z.getChannel(d);
  c.default.track(_.rMx.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
    channel_id: d,
    guild_id: null == g ? true : g.guild_id,
    message_id: f,
    embed_ids: m,
    user_is_underage: (0, o.U)(),
    scan_timeout_duration: u.b2,
    attachment_ids_v2: h
  }), a.Z.increment({
    name: r.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT,
    tags: ["metricVersion:".concat(p)]
  }), a.Z.distribution({
    name: r.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION
  }, (null != (i = null == h ? true : h.length) ? i : 0) + (null != (s = null == m ? true : m.length) ? s : 0))
}

function O(e) {
  let {
    channelId: t,
    numOfAttachments: n,
    numOfAttachmentsPendingScan: i,
    numOfEmbeds: o,
    numOfEmbedsPendingScan: s
  } = e;
  if (null == t) return;
  let u = l.Z.getChannel(t);
  c.default.track(_.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
    channel_id: t,
    guild_id: null == u ? true : u.guild_id,
    num_of_attachments: n,
    num_of_attachments_pending_scan: i,
    num_of_embeds: o,
    num_of_embeds_pending_scan: s
  });
  let d = i + s;
  d > 0 && a.Z.distribution({
    name: r.V.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2
  }, d)
}

function v(e) {
  let {
    messageId: t,
    channelId: n,
    numOfAttachments: r,
    numOfSelfHarmAttachments: i,
    numOfEmbeds: a,
    numOfGoreAttachments: o,
    numOfExplicitAttachments: s,
    numOfSelfHarmEmbeds: u,
    numOfGoreEmbeds: d,
    numOfExplicitEmbeds: f
  } = e, p = s > 0 || f > 0, h = o > 0 || d > 0, m = i > 0 || u > 0;
  if (null == n || null == t || !p && !h && !m) return;
  let g = l.Z.getChannel(n);
  c.default.track(_.rMx.REDACTABLE_MESSAGE_LOADED, {
    message_id: t,
    channel_id: n,
    channel_type: null == g ? true : g.type,
    guild_id: null == g ? true : g.guild_id,
    num_of_attachments: r,
    num_of_gore_attachments: o,
    num_of_explicit_attachments: s,
    num_of_self_harm_attachments: i,
    num_of_embeds: a,
    num_of_gore_embeds: d,
    num_of_explicit_embeds: f,
    num_of_self_harm_embeds: u,
    has_redactable_explicit: p,
    has_redactable_gore: h,
    has_redactable_self_harm: m
  })
}

function I(e) {
  let {
    messageId: t,
    channelId: n,
    numOfAttachments: r,
    numOfExplicitAttachments: i,
    numOfEmbeds: a,
    numOfExplicitEmbeds: o
  } = e;
  if (null == n) return;
  let s = l.Z.getChannel(n);
  c.default.track(_.rMx.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
    message_id: t,
    channel_id: n,
    channel_type: null == s ? true : s.type,
    guild_id: null == s ? true : s.guild_id,
    num_of_attachments: r,
    num_of_explicit_attachments: i,
    num_of_embeds: a,
    num_of_explicit_embeds: o
  })
}

function S(e) {
  let {
    attachments: t,
    embeds: n
  } = T(e), r = A(e);
  return e = e.merge({
    attachments: t,
    embeds: n,
    messageSnapshots: r
  })
}

function T(e) {
  return {
    attachments: e.attachments.map(e => (e.content_scan_version = false, e)),
    embeds: e.embeds.map(e => (e.contentScanVersion = false, e))
  }
}

function A(e) {
  let {
    messageSnapshots: t
  } = e;
  return null == t || 0 === t.length ? t : t.map(e => {
    let {
      message: t
    } = e, {
      attachments: n,
      embeds: r
    } = T(t);
    return t = t.merge({
      attachments: n,
      embeds: r
    }), e = e.merge({
      message: t
    })
  })
}
let C = (e, t) => null != e && null != t && (e <= f.LN || t <= f.iE);

function N() {
  let e = (0, Chunk128064.c_)("explicit_media_redaction_utils"),
    t = (0, Chunk81643.sf)();
  return module && exports
}

function R() {
  let e = (0, Chunk128064.pY)("explicit_media_redaction_utils"),
    t = (0, Chunk81643.L5)();
  return module && exports
}

function P(e) {
  return !!R() && null != e && d.eq.has(e)
}

function w(e) {
  let {
    obscure: t
  } = e;
  (0, i.M$)() && c.default.track(_.rMx.EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2, {
    toggle_direction: t ? "hide" : "show"
  })
}

function D(e) {
  var t;
  return null == (t = e.message_snapshots) ? true : t.some(e => {
    var t, n;
    return (null == (t = e.message) ? true : t.attachments) != null && e.message.attachments.length > 0 || (null == (n = e.message) ? true : n.embeds) != null && e.message.embeds.length > 0
  })
}