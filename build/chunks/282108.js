/** Chunk was on web.js **/
/** chunk id: 282108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $V: () => w,
  Fg: () => b,
  KM: () => A,
  LE: () => D,
  M: () => C,
  O8: () => O,
  b: () => N,
  c2: () => L,
  f: () => G,
  gh: () => P,
  ku: () => E,
  mS: () => I,
  nx: () => V,
  qo: () => R,
  s9: () => T,
  y5: () => v
}), require("./896048.js"), require("./114821.js"), require("./339614.js"), require("./938796.js"), require("./321073.js");
var Chunk665260 = require("./665260.js"),
  Chunk873298 = require("./873298.js"),
  Chunk155718 = require("./155718.js"),
  Chunk865116 = require("./865116.js"),
  Chunk427930 = require("./427930.js"),
  Chunk731068 = require("./731068.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk930125 = require("./930125.js"),
  Chunk900819 = require("./900819.js"),
  Chunk811602 = require("./811602.js");
let g = false,
  E = () => Object.values(m.Jn).filter(e => {
    var t;
    return null == e.isEligible || (null == (t = e.isEligible) ? true : t.call(e))
  }),
  b = e => {
    let {
      channelId: t,
      authorId: n
    } = V(e);
    return null == t || null == e ? m.LO.NONE : y(t, n)
  },
  y = (e, t) => {
    let n = f.default.getCurrentUser();
    if (null == n || t === n.id) return m.LO.NONE;
    let r = L(e, t, [c.A, d.A]);
    return null == r ? m.LO.NONE : O(r)
  },
  O = e => {
    let t = E();
    return null == e ? m.LO.NONE : D(t.map(t => G(t.getUserSettingsWithDefaults()[e]) ? t.harmType : null).filter(p.Vq))
  };

function A(e) {
  let t = b(e);
  return v(e, t)
}

function v(e, t) {
  var n, r;
  if (t === m.LO.NONE || null == e) returnfalse;
  if ((null == (n = e.attachments) ? true : n.some(e => N({
      type: _.D.Attachment,
      media: e
    }, t).length > 0)) || (null == (r = e.embeds) ? true : r.some(e => N({
      type: _.D.Embed,
      media: e
    }, t).length > 0))) returntrue;
  let i = null;
  if ("messageSnapshots" in e ? i = e.messageSnapshots : "message_snapshots" in e && (i = e.message_snapshots), null == i || 0 === i.length) returnfalse;
  for (let e of i)
    if (v(e.message, t)) returntrue;
  returnfalse
}

function S(e) {
  return (Array.isArray(e) ? e : [e]).flatMap(e => {
    switch (e.type) {
      case a.I5.MEDIA_GALLERY:
        return e.items.map(e => e.media);
      case a.I5.THUMBNAIL:
        return e.media;
      case a.I5.FILE:
        return e.file;
      case a.I5.SECTION:
      case a.I5.ACTION_ROW:
        return e.components.flatMap(S);
      default:
        return []
    }
  }).map(e => "proxy_url" in e ? (0, l.Uv)(e) : e)
}

function I(e, t) {
  var n, r;
  let i = null != t ? t : b(e);
  if (i === m.LO.NONE) returnfalse;
  if ((null == (n = e.attachments) ? true : n.some(e => w({
      type: _.D.Attachment,
      media: e
    }, i))) || (null == (r = e.embeds) ? true : r.some(e => w({
      type: _.D.Embed,
      media: e
    }, i))) || null != e.components && S(e.components).some(e => w({
      type: _.D.GenericMedia,
      media: e
    }, i))) returntrue;
  let a = null;
  if ("messageSnapshots" in e ? a = e.messageSnapshots : "message_snapshots" in e && (a = e.message_snapshots), null == a || 0 === a.length) returnfalse;
  for (let e of a)
    if (I(e.message, i)) returntrue;
  returnfalse
}

function T(e) {
  return !(null != e.components && S(e.components).some(e => e.loadingState === a.TD.LOADING)) && true
}

function C(e) {
  var t, n, r, i;
  let a = b(e);
  if (a === m.LO.NONE) return {
    attachmentIds: [],
    embedIds: []
  };
  let s = null == (r = e.attachments) ? true : r.filter(e => w({
      type: _.D.Attachment,
      media: e
    }, a)),
    o = null == (i = e.embeds) ? true : i.filter(e => w({
      type: _.D.Embed,
      media: e
    }, a));
  return {
    attachmentIds: null != (t = null == s ? true : s.map(e => e.id).filter(Boolean)) ? t : [],
    embedIds: null != (n = null == o ? true : o.map((e, t) => "embed_".concat(t)).filter(Boolean)) ? n : []
  }
}

function N(e, t) {
  if (t === m.LO.NONE) return [];
  let n = x(t);
  return 0 === n.length ? [] : n.filter(t => P(t, e)).map(e => m.Jn[e].obscureReason)
}

function R(e, t) {
  if (t === m.LO.NONE) returnfalse;
  let n = x(t);
  return 0 !== n.length && n.filter(t => P(t, e)).length > 0
}

function w(e, t) {
  if (t === m.LO.NONE || s.Ay.get("explicit_media_redaction_ignore_pending_scan")) returnfalse;
  let n = x(t);
  if (0 === n.length) returnfalse;
  switch (e.type) {
    case _.D.Embed:
      return j(e.media, n);
    case _.D.Attachment:
      return M(e.media, n);
    case _.D.GenericMedia:
      return k(e.media, n);
    default:
      returnfalse
  }
}

function P(e, t) {
  var n, i, a, o;
  if (null == e) returnfalse;
  let l = m.Jn[e];
  if (null != l.devSettingKey && s.Ay.get(l.devSettingKey)) returntrue;
  switch (t.type) {
    case _.D.Embed:
      return (0, r.Lt)(null != (n = t.media.flags) ? n : 0, l.embedFlag);
    case _.D.Attachment:
      return (0, r.Lt)(null != (i = t.media.flags) ? i : 0, l.attachmentFlag);
    case _.D.GenericMedia:
      return (0, r.Lt)(null != (a = null == (o = t.media.contentScanMetadata) ? true : o.flags) ? a : 0, l.genericMediaFlag);
    default:
      returnfalse
  }
}

function D(e) {
  let t = m.LO.NONE;
  for (let n of e) switch (n) {
    case m.kn.EXPLICIT:
      t |= m.LO.EXPLICIT;
      break;
    case m.kn.GORE:
      t |= m.LO.GORE;
      break;
    case m.kn.SELF_HARM:
      t |= m.LO.SELF_HARM
  }
  return t
}

function x(e) {
  if (e === m.LO.NONE) return [];
  let t = [];
  for (let n of E())(e & n.bitmask) > 0 && t.push(n.harmType);
  return t
}

function L(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [c.A, d.A],
    [r, i] = n,
    a = r.getChannel(e),
    s = f.default.getCurrentUser();
  return null == s || t === s.id || null == a ? null : a.isDM() || a.isGroupDM() ? null != t && i.getFriendIDs().includes(t) ? _.v.FRIEND_DM : _.v.NON_FRIEND_DM : _.v.GUILD
}

function j(e, t) {
  var n, r, i, a, s, o, l;
  return !(0 === t.length || null == e || 0 === t.filter(t => !P(t, {
    type: _.D.Embed,
    media: e
  })).length || "video" in e && null != e.video && (null == (n = e.video) ? true : n.width) === 0 && (null == (r = e.video) ? true : r.height) === 0 || "thumbnail" in e && null != e.thumbnail && (null == (i = e.thumbnail) ? true : i.width) === 0 && (null == (a = e.thumbnail) ? true : a.height) === 0 || "image" in e && null != e.image && (null == (s = e.image) ? true : s.width) === 0 && (null == (o = e.image) ? true : o.height) === 0 || "images" in e && (null == (l = e.images) ? true : l.some(e => null != e && 0 === e.width && 0 === e.height))) && U(F(e), t)
}

function M(e, t) {
  var n;
  return 0 !== t.length && 0 !== t.filter(t => !P(t, {
    type: _.D.Attachment,
    media: e
  })).length && U(null != (n = e.content_scan_version) ? n : e.contentScanVersion, t)
}

function k(e, t) {
  var n;
  return 0 !== t.length && 0 !== t.filter(t => !P(t, {
    type: _.D.GenericMedia,
    media: e
  })).length && U(null == (n = e.contentScanMetadata) ? true : n.version, t)
}

function U(e, t) {
  let n = h.A.validContentScanVersion;
  return e !== g && (t.includes(m.kn.GORE) || t.includes(m.kn.SELF_HARM) ? null == e || e < n : null == e)
}

function G(e) {
  return null != e && [i.TO.BLOCK, i.TO.BLUR].includes(e)
}

function V(e) {
  var t, n;
  let r = null,
    i = null;
  if (null == e) return {
    channelId: r,
    authorId: i
  };
  if ("channel_id" in e && (r = e.channel_id), "messageReference" in e && (0, o.A)(e) && null != e.messageReference) {
    let n = u.A.getMessage(e.messageReference.channel_id, e.messageReference.message_id);
    null != n && (i = null == (t = n.author) ? true : t.id)
  } else "author" in e ? i = null == (n = e.author) ? true : n.id : "author_id" in e && (i = e.author_id);
  return {
    channelId: r,
    authorId: i
  }
}

function F(e) {
  return null != e.content_scan_version ? e.content_scan_version : null != e.contentScanVersion || null != e.contentScanVersion ? e.contentScanVersion : null
}