/** Chunk was on web.js **/
/** chunk id: 256265, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $2: () => D,
  Ky: () => w,
  L_: () => R,
  no: () => C,
  vV: () => O,
  xz: () => P,
  yC: () => N
}), require("./228524.js"), require("./938796.js"), require("./896048.js"), require("./114821.js"), require("./339614.js");
var Chunk64700 = require("./64700.js"),
  Chunk665260 = require("./665260.js"),
  Chunk155718 = require("./155718.js"),
  Chunk814890 = require("./814890.js"),
  Chunk731068 = require("./731068.js"),
  Chunk77350 = require("./77350.js"),
  Chunk456874 = require("./456874.js"),
  Chunk253932 = require("./253932.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk661191 = require("./661191.js"),
  Chunk998218 = require("./998218.js"),
  Chunk652215 = require("./652215.js");

function E(e) {
  if (null == e) returnfalse;
  let {
    filename: t,
    height: n,
    width: r
  } = e;
  return (0, l.u)(t) && null != n && n > 0 && null != r && r > 0
}

function y(e) {
  return null != e && null != e && (0, l.AE)(e.filename) && null != e.proxy_url
}

function b(e) {
  return E(e) || y(e)
}
var O = function(e) {
  return e.EMBED = "embed", e.ATTACHMENT = "attachment", e.COMPONENT = "component", e
}({});

function v(e) {
  var t, n;
  let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : u.X6.getSetting();
  if (!r) return [];
  let a = (null == e || null == (t = e.messageSnapshots[0]) ? true : t.moderatorReport) != null ? null == e || null == (n = e.messageSnapshots[0]) ? true : n.message.attachments : null == e ? true : e.attachments;
  return null == e || null == a ? [] : a.filter(b).map((e, t) => {
    var n;
    let {
      proxy_url: r,
      url: a,
      description: s,
      spoiler: o,
      flags: c,
      width: u,
      height: d,
      filename: f,
      content_scan_version: p
    } = e;
    if (null == u || null == d) return null;
    let _ = (0, l.AE)(f),
      h = null != e.flags && (0, i.Lt)(e.flags, g.sbO.IS_THUMBNAIL),
      E = null != r ? r : a;
    if (_) {
      let e = m.A.toURLSafe(r);
      if (null == e) return null;
      e.searchParams.append("format", "webp"), E = e.toString()
    }
    return {
      type: "attachment",
      src: E,
      width: u,
      height: d,
      spoiler: null != o && o,
      flags: c,
      contentScanVersion: p,
      alt: s,
      isVideo: _,
      isThumbnail: h,
      attachmentId: e.id,
      mediaIndex: t,
      srcIsAnimated: (0, i.Lt)(null != (n = e.flags) ? n : 0, g.sbO.IS_ANIMATED)
    }
  }).filter(_.Vq)
}

function A(e) {
  return v(e, u.X6.useSetting())
}

function I(e, t) {
  var n, r;
  let a = u.hD.useSetting(),
    s = u.rs.useSetting();
  if (null == e) return [];
  let o = (null == (n = e.messageSnapshots[0]) ? true : n.moderatorReport) != null ? null == (r = e.messageSnapshots[0]) ? true : r.message.embeds : e.embeds;
  return a && s && null != o ? o.map((e, n) => {
    var r;
    let a = null != (r = e.image) ? r : e.thumbnail;
    if (null == a && null != e.images && (a = e.images[0]), null != a && null != a.url) {
      let {
        height: r,
        proxyURL: s,
        url: o,
        width: c,
        flags: u
      } = a, d = null != s && (0, l.r1)(s);
      return {
        type: "embed",
        src: null != s && "" !== s ? s : o,
        height: r,
        width: c,
        spoiler: t,
        flags: e.flags,
        contentScanVersion: e.contentScanVersion,
        isVideo: d,
        mediaIndex: n,
        srcIsAnimated: (0, i.Lt)(null != u ? u : 0, g.qNw.IS_ANIMATED)
      }
    }
  }).filter(_.Vq) : []
}

function S(e) {
  let t = u.hD.useSetting();
  if (null == e) return [];
  let n = e.components;
  return t && null != n ? Array.from((0, s.p4)(n).values()).flatMap(e => {
    switch (e.type) {
      case a.I5.THUMBNAIL:
        var t;
        return T(e.media, null != (t = e.spoiler) && t);
      case a.I5.MEDIA_GALLERY:
        return e.items.map(e => {
          var t;
          return T(e.media, null != (t = e.spoiler) && t)
        })
    }
    return null
  }).filter(_.Vq) : []
}

function T(e, t) {
  var n, r, a;
  let s = (0, o.FE)(e);
  return "INVALID" === s ? null : {
    type: "component",
    src: e.proxyUrl,
    height: null != (n = e.height) ? n : 0,
    width: null != (r = e.width) ? r : 0,
    spoiler: t,
    contentScanVersion: null == (a = e.contentScanMetadata) ? true : a.version,
    flags: 0,
    srcIsAnimated: (0, i.Lt)(e.flags, o.e5.IS_ANIMATED),
    isVideo: "VIDEO" === s,
    mediaIndex: 0,
    srcUnfurledMediaItem: e
  }
}

function C(e, t) {
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
  return [...A(e), ...I(e, t), ...S(e)]
}

function w(e, t) {
  var n, r, i;
  let a = A(e),
    s = I(e, t),
    o = S(e);
  return null != (n = null != (r = null != (i = a[0]) ? i : s[0]) ? r : o[0]) ? n : null
}

function R(e, t) {
  let n = A(e),
    r = I(e, t),
    i = S(e);
  return null == n[0] && null == i[0] && null != r[0]
}

function P(e, t) {
  var n;
  let r = d.A.getChannel(t);
  if (null == r) returnfalse;
  let i = f.A.getMessage(r.id, h.default.castChannelIdAsMessageId(r.id));
  return null != i && e.length > 0 && null != e.find(e => e.isImage || e.isVideo) && r.isForumPost() && r.ownerId === (null == (n = p.default.getCurrentUser()) ? true : n.id) && 0 === c.A.getCount(r.id) && (0 === i.attachments.length || null == i.attachments.find(e => E(e) || y(e)))
}

function D(e) {
  return e.reduce((e, t) => ({
    containsVideo: e.containsVideo || t.isVideo,
    containsGif: e.containsGif || (0, l.ge)(t.src)
  }), {
    containsVideo: false,
    containsGif: false
  })
}