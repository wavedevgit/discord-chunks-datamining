/** Chunk was on web.js **/
/** chunk id: 629710, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AT: () => E,
  DQ: () => A,
  Hz: () => D,
  LD: () => C,
  MD: () => S,
  SI: () => P,
  UJ: () => R,
  X6: () => I,
  aQ: () => U,
  g4: () => N,
  hi: () => L,
  kC: () => v,
  kh: () => O,
  px: () => G,
  rb: () => b
}), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./997841.js"), require("./539854.js");
var Chunk524437 = require("./524437.js"),
  Chunk911969 = require("./911969.js"),
  Chunk432877 = require("./432877.js"),
  Chunk978003 = require("./978003.js"),
  Chunk768494 = require("./768494.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk630388 = require("./630388.js"),
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
    return null == t || null == e ? m.qn.NONE : y(t, n)
  },
  y = (e, t) => {
    let n = d.default.getCurrentUser();
    if (null == n || t === n.id) return m.qn.NONE;
    let r = L(e, t, [l.Z, u.Z]);
    return null == r ? m.qn.NONE : O(r)
  },
  O = e => {
    let t = E();
    return null == e ? m.qn.NONE : D(t.map(t => U(t.getUserSettingsWithDefaults()[e]) ? t.harmType : null).filter(_.lm))
  };

function v(e) {
  let t = b(e);
  return I(e, t)
}

function I(e, t) {
  var n, r;
  if (t === m.qn.NONE || null == e) returnfalse;
  if ((null == (n = e.attachments) ? true : n.some(e => C({
      type: p.l.Attachment,
      media: e
    }, t).length > 0)) || (null == (r = e.embeds) ? true : r.some(e => C({
      type: p.l.Embed,
      media: e
    }, t).length > 0))) returntrue;
  let i = null;
  if ("messageSnapshots" in e ? i = e.messageSnapshots : "message_snapshots" in e && (i = e.message_snapshots), null == i || 0 === i.length) returnfalse;
  for (let e of i)
    if (I(e.message, t)) returntrue;
  returnfalse
}

function T(e) {
  return (Array.isArray(e) ? e : [e]).flatMap(e => {
    switch (e.type) {
      case i.re.MEDIA_GALLERY:
        return e.items.map(e => e.media);
      case i.re.THUMBNAIL:
        return e.media;
      case i.re.FILE:
        return e.file;
      case i.re.SECTION:
      case i.re.ACTION_ROW:
        return e.components.flatMap(T);
      default:
        return []
    }
  }).map(e => "proxy_url" in e ? (0, s.ym)(e) : e)
}

function S(e, t) {
  var n, r;
  let i = null != t ? t : b(e);
  if (i === m.qn.NONE) returnfalse;
  if ((null == (n = e.attachments) ? true : n.some(e => R({
      type: p.l.Attachment,
      media: e
    }, i))) || (null == (r = e.embeds) ? true : r.some(e => R({
      type: p.l.Embed,
      media: e
    }, i))) || null != e.components && T(e.components).some(e => R({
      type: p.l.GenericMedia,
      media: e
    }, i))) returntrue;
  let a = null;
  if ("messageSnapshots" in e ? a = e.messageSnapshots : "message_snapshots" in e && (a = e.message_snapshots), null == a || 0 === a.length) returnfalse;
  for (let e of a)
    if (S(e.message, i)) returntrue;
  returnfalse
}

function A(e) {
  var t, n, r, i;
  let a = b(e);
  if (a === m.qn.NONE) return {
    attachmentIds: [],
    embedIds: []
  };
  let o = null == (t = e.attachments) ? true : t.filter(e => R({
      type: p.l.Attachment,
      media: e
    }, a)),
    s = null == (n = e.embeds) ? true : n.filter(e => R({
      type: p.l.Embed,
      media: e
    }, a));
  return {
    attachmentIds: null != (r = null == o ? true : o.map(e => e.id).filter(Boolean)) ? r : [],
    embedIds: null != (i = null == s ? true : s.map((e, t) => "embed_".concat(t)).filter(Boolean)) ? i : []
  }
}

function C(e, t) {
  if (t === m.qn.NONE) return [];
  let n = w(t);
  return 0 === n.length ? [] : n.filter(t => P(t, e)).map(e => m.Fj[e].obscureReason)
}

function N(e, t) {
  if (t === m.qn.NONE) returnfalse;
  let n = w(t);
  return 0 !== n.length && n.filter(t => P(t, e)).length > 0
}

function R(e, t) {
  if (t === m.qn.NONE || a.ZP.get("explicit_media_redaction_ignore_pending_scan")) returnfalse;
  let n = w(t);
  if (0 === n.length) returnfalse;
  switch (e.type) {
    case p.l.Embed:
      return x(e.media, n);
    case p.l.Attachment:
      return M(e.media, n);
    case p.l.GenericMedia:
      return k(e.media, n);
    default:
      returnfalse
  }
}

function P(e, t) {
  var n, r, i, o;
  if (null == e) returnfalse;
  let s = m.Fj[e];
  if (null != s.devSettingKey && a.ZP.get(s.devSettingKey)) returntrue;
  switch (t.type) {
    case p.l.Embed:
      return (0, f.yE)(null != (n = t.media.flags) ? n : 0, s.embedFlag);
    case p.l.Attachment:
      return (0, f.yE)(null != (r = t.media.flags) ? r : 0, s.attachmentFlag);
    case p.l.GenericMedia:
      return (0, f.yE)(null != (o = null == (i = t.media.contentScanMetadata) ? true : i.flags) ? o : 0, s.genericMediaFlag);
    default:
      returnfalse
  }
}

function D(e) {
  let t = m.qn.NONE;
  for (let n of e) switch (n) {
    case m._.EXPLICIT:
      t |= m.qn.EXPLICIT;
      break;
    case m._.GORE:
      t |= m.qn.GORE;
      break;
    case m._.SELF_HARM:
      t |= m.qn.SELF_HARM
  }
  return t
}

function w(e) {
  if (e === m.qn.NONE) return [];
  let t = [];
  for (let n of E())(e & n.bitmask) > 0 && t.push(n.harmType);
  return t
}

function L(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [l.Z, u.Z],
    [r, i] = n,
    a = r.getChannel(e),
    o = d.default.getCurrentUser();
  return null == o || t === o.id || null == a ? null : a.isDM() || a.isGroupDM() ? null != t && i.getFriendIDs().includes(t) ? p.n.FRIEND_DM : p.n.NON_FRIEND_DM : p.n.GUILD
}

function x(e, t) {
  var n, r, i, a, o, s, l;
  return !(0 === t.length || null == e || 0 === t.filter(t => !P(t, {
    type: p.l.Embed,
    media: e
  })).length || "video" in e && null != e.video && (null == (n = e.video) ? true : n.width) === 0 && (null == (r = e.video) ? true : r.height) === 0 || "thumbnail" in e && null != e.thumbnail && (null == (i = e.thumbnail) ? true : i.width) === 0 && (null == (a = e.thumbnail) ? true : a.height) === 0 || "image" in e && null != e.image && (null == (o = e.image) ? true : o.width) === 0 && (null == (s = e.image) ? true : s.height) === 0 || "images" in e && (null == (l = e.images) ? true : l.some(e => null != e && 0 === e.width && 0 === e.height))) && j(B(e), t)
}

function M(e, t) {
  var n;
  return 0 !== t.length && 0 !== t.filter(t => !P(t, {
    type: p.l.Attachment,
    media: e
  })).length && j(null != (n = e.content_scan_version) ? n : e.contentScanVersion, t)
}

function k(e, t) {
  var n;
  return 0 !== t.length && 0 !== t.filter(t => !P(t, {
    type: p.l.GenericMedia,
    media: e
  })).length && j(null == (n = e.contentScanMetadata) ? true : n.version, t)
}

function j(e, t) {
  let n = h.Z.validContentScanVersion;
  return e !== g && (t.includes(m._.GORE) || t.includes(m._.SELF_HARM) ? null == e || e < n : null == e)
}

function U(e) {
  return null != e && [r.Q4.BLOCK, r.Q4.BLUR].includes(e)
}

function G(e) {
  var t, n;
  let r = null,
    i = null;
  if (null == e) return {
    channelId: r,
    authorId: i
  };
  if ("channel_id" in e && (r = e.channel_id), "messageReference" in e && (0, o.Z)(e) && null != e.messageReference) {
    let n = c.Z.getMessage(e.messageReference.channel_id, e.messageReference.message_id);
    null != n && (i = null == (t = n.author) ? true : t.id)
  } else "author" in e ? i = null == (n = e.author) ? true : n.id : "author_id" in e && (i = e.author_id);
  return {
    channelId: r,
    authorId: i
  }
}

function B(e) {
  return null != e.content_scan_version ? e.content_scan_version : null != e.contentScanVersion || null != e.contentScanVersion ? e.contentScanVersion : null
}