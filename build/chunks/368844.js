/** Chunk was on web.js **/
/** chunk id: 368844, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ah: () => O,
  CB: () => w,
  aU: () => A,
  cp: () => D,
  eL: () => P,
  vg: () => R,
  zy: () => N
}), require("./953529.js"), require("./997841.js"), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk473749 = require("./473749.js"),
  Chunk95015 = require("./95015.js"),
  Chunk911969 = require("./911969.js"),
  Chunk292419 = require("./292419.js"),
  Chunk768494 = require("./768494.js"),
  Chunk406432 = require("./406432.js"),
  Chunk144140 = require("./144140.js"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js"),
  Chunk591759 = require("./591759.js"),
  Chunk981631 = require("./981631.js");

function E(e) {
  if (null == e) returnfalse;
  let {
    filename: t,
    height: n,
    width: r
  } = e;
  return (0, l.CO)(t) && null != n && n > 0 && null != r && r > 0
}

function b(e) {
  return null != e && null != e && (0, l.NU)(e.filename) && null != e.proxy_url
}

function y(e) {
  return E(e) || b(e)
}
var O = function(e) {
  return e.EMBED = "embed", e.ATTACHMENT = "attachment", e.COMPONENT = "component", e
}({});

function v(e) {
  var t, n;
  let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : u.x4.getSetting();
  if (!r) return [];
  let o = (null == e || null == (t = e.messageSnapshots[0]) ? true : t.moderatorReport) != null ? null == e || null == (n = e.messageSnapshots[0]) ? true : n.message.attachments : null == e ? true : e.attachments;
  return null == e || null == o ? [] : o.filter(y).map((e, t) => {
    var n;
    let {
      proxy_url: r,
      url: o,
      description: a,
      spoiler: s,
      flags: c,
      width: u,
      height: d,
      filename: f,
      content_scan_version: p
    } = e;
    if (null == u || null == d) return null;
    let _ = (0, l.NU)(f),
      m = null != e.flags && (0, i.yE)(e.flags, g.J0y.IS_THUMBNAIL),
      E = null != r ? r : o;
    if (_) {
      let e = h.Z.toURLSafe(r);
      if (null == e) return null;
      e.searchParams.append("format", "webp"), E = e.toString()
    }
    return {
      type: "attachment",
      src: E,
      width: u,
      height: d,
      spoiler: null != s && s,
      flags: c,
      contentScanVersion: p,
      alt: a,
      isVideo: _,
      isThumbnail: m,
      attachmentId: e.id,
      mediaIndex: t,
      srcIsAnimated: (0, i.yE)(null != (n = e.flags) ? n : 0, g.J0y.IS_ANIMATED)
    }
  }).filter(_.lm)
}

function S(e) {
  return v(e, u.x4.useSetting())
}

function I(e, t) {
  var n, r;
  let o = u.RS.useSetting(),
    a = u.NA.useSetting();
  if (null == e) return [];
  let s = (null == (n = e.messageSnapshots[0]) ? true : n.moderatorReport) != null ? null == (r = e.messageSnapshots[0]) ? true : r.message.embeds : e.embeds;
  return o && a && null != s ? s.map((e, n) => {
    var r;
    let o = null != (r = e.image) ? r : e.thumbnail;
    if (null == o && null != e.images && (o = e.images[0]), null != o && null != o.url) {
      let {
        height: r,
        proxyURL: a,
        url: s,
        width: c,
        flags: u
      } = o, d = null != a && (0, l.cb)(a);
      return {
        type: "embed",
        src: null != a && "" !== a ? a : s,
        height: r,
        width: c,
        spoiler: t,
        flags: e.flags,
        contentScanVersion: e.contentScanVersion,
        isVideo: d,
        mediaIndex: n,
        srcIsAnimated: (0, i.yE)(null != u ? u : 0, g.FoC.IS_ANIMATED)
      }
    }
  }).filter(_.lm) : []
}

function T(e) {
  let t = u.RS.useSetting();
  if (null == e) return [];
  let n = e.components;
  return t && null != n ? Array.from((0, a.kS)(n).values()).flatMap(e => {
    switch (e.type) {
      case o.re.THUMBNAIL:
        var t;
        return C(e.media, null != (t = e.spoiler) && t);
      case o.re.MEDIA_GALLERY:
        return e.items.map(e => {
          var t;
          return C(e.media, null != (t = e.spoiler) && t)
        })
    }
    return null
  }).filter(_.lm) : []
}

function C(e, t) {
  var n, r, o;
  let a = (0, s.hg)(e);
  return "INVALID" === a ? null : {
    type: "component",
    src: e.proxyUrl,
    height: null != (r = e.height) ? r : 0,
    width: null != (o = e.width) ? o : 0,
    spoiler: t,
    contentScanVersion: null == (n = e.contentScanMetadata) ? true : n.version,
    flags: 0,
    srcIsAnimated: (0, i.yE)(e.flags, s.hR.IS_ANIMATED),
    isVideo: "VIDEO" === a,
    mediaIndex: 0,
    srcUnfurledMediaItem: e
  }
}

function A(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = N(e, n);
  return r.useMemo(() => {
    if (null == t) return [];
    if (!t.isMediaChannel()) return i;
    {
      let e = i.find(e => e.isThumbnail);
      return null != e ? [e] : i
    }
  }, [t, i])
}

function N(e, t) {
  let n = S(e);
  return [...n, ...I(e, t), ...T(e)]
}

function P(e, t) {
  var n, r, i;
  let o = S(e),
    a = I(e, t),
    s = T(e);
  return null != (i = null != (r = null != (n = o[0]) ? n : a[0]) ? r : s[0]) ? i : null
}

function R(e, t) {
  let n = S(e),
    r = I(e, t),
    i = T(e);
  return null == n[0] && null == i[0] && null != r[0]
}

function w(e, t) {
  var n;
  let r = d.Z.getChannel(t);
  if (null == r) returnfalse;
  let i = f.Z.getMessage(r.id, m.default.castChannelIdAsMessageId(r.id));
  return null != i && e.length > 0 && null != e.find(e => e.isImage || e.isVideo) && r.isForumPost() && r.ownerId === (null == (n = p.default.getCurrentUser()) ? true : n.id) && 0 === c.Z.getCount(r.id) && (0 === i.attachments.length || null == i.attachments.find(e => E(e) || b(e)))
}

function D(e) {
  return e.reduce((e, t) => ({
    containsVideo: e.containsVideo || t.isVideo,
    containsGif: e.containsGif || (0, l.d$)(t.src)
  }), {
    containsVideo: false,
    containsGif: false
  })
}