/** Chunk was on web.js **/
/** chunk id: 629710, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AT: () => E,
  DQ: () => C,
  Hz: () => w,
  LD: () => A,
  MD: () => T,
  SI: () => R,
  UJ: () => P,
  X6: () => S,
  aQ: () => U,
  g4: () => N,
  hi: () => x,
  kC: () => v,
  kh: () => O,
  px: () => G,
  rb: () => b
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./997841.js"), require("./539854.js");
var Chunk95015 = require("./95015.js"),
  Chunk524437 = require("./524437.js"),
  Chunk911969 = require("./911969.js"),
  Chunk432877 = require("./432877.js"),
  Chunk978003 = require("./978003.js"),
  Chunk768494 = require("./768494.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk991621 = require("./991621.js"),
  Chunk774863 = require("./774863.js"),
  Chunk294509 = require("./294509.js");
let g = false,
  E = () => Object.values(Chunk294509.Fj).filter(e => {
    var t;
    return null == e.isEligible || (null == (t = e.isEligible) ? true : t.call(e))
  }),
  b = e => {
    let {
      channelId: t,
      authorId: n
    } = G(e);
    return null == t || null == e ? h.qn.NONE : y(t, n)
  },
  y = (e, t) => {
    let n = f.default.getCurrentUser();
    if (null == n || t === n.id) return h.qn.NONE;
    let r = x(e, t, [c.Z, d.Z]);
    return null == r ? h.qn.NONE : O(r)
  },
  O = e => {
    let t = E();
    return null == e ? h.qn.NONE : w(t.map(t => U(t.getUserSettingsWithDefaults()[e]) ? t.harmType : null).filter(p.lm))
  };

function v(e) {
  let t = b(e);
  return S(e, t)
}

function S(e, t) {
  var n, r;
  if (t === h.qn.NONE || null == e) returnfalse;
  if ((null == (n = e.attachments) ? true : n.some(e => A({
      type: _.l.Attachment,
      media: e
    }, t).length > 0)) || (null == (r = e.embeds) ? true : r.some(e => A({
      type: _.l.Embed,
      media: e
    }, t).length > 0))) returntrue;
  let i = null;
  if ("messageSnapshots" in e ? i = e.messageSnapshots : "message_snapshots" in e && (i = e.message_snapshots), null == i || 0 === i.length) returnfalse;
  for (let e of i)
    if (S(e.message, t)) returntrue;
  returnfalse
}

function I(e) {
  return (Array.isArray(e) ? e : [e]).flatMap(e => {
    switch (e.type) {
      case a.re.MEDIA_GALLERY:
        return e.items.map(e => e.media);
      case a.re.THUMBNAIL:
        return e.media;
      case a.re.FILE:
        return e.file;
      case a.re.SECTION:
      case a.re.ACTION_ROW:
        return e.components.flatMap(I);
      default:
        return []
    }
  }).map(e => "proxy_url" in e ? (0, l.ym)(e) : e)
}

function T(e, t) {
  var n, r;
  let i = null != t ? t : b(e);
  if (i === h.qn.NONE) returnfalse;
  if ((null == (n = e.attachments) ? true : n.some(e => P({
      type: _.l.Attachment,
      media: e
    }, i))) || (null == (r = e.embeds) ? true : r.some(e => P({
      type: _.l.Embed,
      media: e
    }, i))) || null != e.components && I(e.components).some(e => P({
      type: _.l.GenericMedia,
      media: e
    }, i))) returntrue;
  let a = null;
  if ("messageSnapshots" in e ? a = e.messageSnapshots : "message_snapshots" in e && (a = e.message_snapshots), null == a || 0 === a.length) returnfalse;
  for (let e of a)
    if (T(e.message, i)) returntrue;
  returnfalse
}

function C(e) {
  var t, n, r, i;
  let a = b(e);
  if (a === h.qn.NONE) return {
    attachmentIds: [],
    embedIds: []
  };
  let o = null == (t = e.attachments) ? true : t.filter(e => P({
      type: _.l.Attachment,
      media: e
    }, a)),
    s = null == (n = e.embeds) ? true : n.filter(e => P({
      type: _.l.Embed,
      media: e
    }, a));
  return {
    attachmentIds: null != (r = null == o ? true : o.map(e => e.id).filter(Boolean)) ? r : [],
    embedIds: null != (i = null == s ? true : s.map((e, t) => "embed_".concat(t)).filter(Boolean)) ? i : []
  }
}

function A(e, t) {
  if (t === h.qn.NONE) return [];
  let n = D(t);
  return 0 === n.length ? [] : n.filter(t => R(t, e)).map(e => h.Fj[e].obscureReason)
}

function N(e, t) {
  if (t === h.qn.NONE) returnfalse;
  let n = D(t);
  return 0 !== n.length && n.filter(t => R(t, e)).length > 0
}

function P(e, t) {
  if (t === h.qn.NONE || o.ZP.get("explicit_media_redaction_ignore_pending_scan")) returnfalse;
  let n = D(t);
  if (0 === n.length) returnfalse;
  switch (e.type) {
    case _.l.Embed:
      return L(e.media, n);
    case _.l.Attachment:
      return j(e.media, n);
    case _.l.GenericMedia:
      return M(e.media, n);
    default:
      returnfalse
  }
}

function R(e, t) {
  var n, i, a, s;
  if (null == e) returnfalse;
  let l = h.Fj[e];
  if (null != l.devSettingKey && o.ZP.get(l.devSettingKey)) returntrue;
  switch (t.type) {
    case _.l.Embed:
      return (0, r.yE)(null != (n = t.media.flags) ? n : 0, l.embedFlag);
    case _.l.Attachment:
      return (0, r.yE)(null != (i = t.media.flags) ? i : 0, l.attachmentFlag);
    case _.l.GenericMedia:
      return (0, r.yE)(null != (s = null == (a = t.media.contentScanMetadata) ? true : a.flags) ? s : 0, l.genericMediaFlag);
    default:
      returnfalse
  }
}

function w(e) {
  let t = h.qn.NONE;
  for (let n of e) switch (n) {
    case h._.EXPLICIT:
      t |= h.qn.EXPLICIT;
      break;
    case h._.GORE:
      t |= h.qn.GORE;
      break;
    case h._.SELF_HARM:
      t |= h.qn.SELF_HARM
  }
  return t
}

function D(e) {
  if (e === h.qn.NONE) return [];
  let t = [];
  for (let n of E())(e & n.bitmask) > 0 && t.push(n.harmType);
  return t
}

function x(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [c.Z, d.Z],
    [r, i] = n,
    a = r.getChannel(e),
    o = f.default.getCurrentUser();
  return null == o || t === o.id || null == a ? null : a.isDM() || a.isGroupDM() ? null != t && i.getFriendIDs().includes(t) ? _.n.FRIEND_DM : _.n.NON_FRIEND_DM : _.n.GUILD
}

function L(e, t) {
  var n, r, i, a, o, s, l;
  return !(0 === t.length || null == e || 0 === t.filter(t => !R(t, {
    type: _.l.Embed,
    media: e
  })).length || "video" in e && null != e.video && (null == (n = e.video) ? true : n.width) === 0 && (null == (r = e.video) ? true : r.height) === 0 || "thumbnail" in e && null != e.thumbnail && (null == (i = e.thumbnail) ? true : i.width) === 0 && (null == (a = e.thumbnail) ? true : a.height) === 0 || "image" in e && null != e.image && (null == (o = e.image) ? true : o.width) === 0 && (null == (s = e.image) ? true : s.height) === 0 || "images" in e && (null == (l = e.images) ? true : l.some(e => null != e && 0 === e.width && 0 === e.height))) && k(Z(e), t)
}

function j(e, t) {
  var n;
  return 0 !== t.length && 0 !== t.filter(t => !R(t, {
    type: _.l.Attachment,
    media: e
  })).length && k(null != (n = e.content_scan_version) ? n : e.contentScanVersion, t)
}

function M(e, t) {
  var n;
  return 0 !== t.length && 0 !== t.filter(t => !R(t, {
    type: _.l.GenericMedia,
    media: e
  })).length && k(null == (n = e.contentScanMetadata) ? true : n.version, t)
}

function k(e, t) {
  let n = m.Z.validContentScanVersion;
  return e !== g && (t.includes(h._.GORE) || t.includes(h._.SELF_HARM) ? null == e || e < n : null == e)
}

function U(e) {
  return null != e && [i.Q4.BLOCK, i.Q4.BLUR].includes(e)
}

function G(e) {
  var t, n;
  let r = null,
    i = null;
  if (null == e) return {
    channelId: r,
    authorId: i
  };
  if ("channel_id" in e && (r = e.channel_id), "messageReference" in e && (0, s.Z)(e) && null != e.messageReference) {
    let n = u.Z.getMessage(e.messageReference.channel_id, e.messageReference.message_id);
    null != n && (i = null == (t = n.author) ? true : t.id)
  } else "author" in e ? i = null == (n = e.author) ? true : n.id : "author_id" in e && (i = e.author_id);
  return {
    channelId: r,
    authorId: i
  }
}

function Z(e) {
  return null != e.content_scan_version ? e.content_scan_version : null != e.contentScanVersion || null != e.contentScanVersion ? e.contentScanVersion : null
}