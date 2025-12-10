/** Chunk was on web.js **/
/** chunk id: 549635, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dt: () => I,
  ZP: () => C,
  ze: () => S
}), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk95015 = require("./95015.js"),
  Chunk768494 = require("./768494.js"),
  Chunk124347 = require("./124347.jsx"),
  Chunk80966 = require("./80966.jsx"),
  Chunk296182 = require("./296182.js"),
  Chunk524444 = require("./524444.jsx"),
  Chunk52824 = require("./52824.js"),
  Chunk589530 = require("./589530.js"),
  Chunk591759 = require("./591759.js"),
  Chunk212459 = require("./212459.js"),
  Chunk116475 = require("./116475.jsx"),
  Chunk899359 = require("./899359.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = v(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function S(e, t) {
  return y(E({}, e), {
    type: (0, o.hg)(e),
    original: e.url,
    srcIsAnimated: (0, a.yE)(e.flags, o.hR.IS_ANIMATED),
    sourceMetadata: {
      message: t
    }
  })
}

function I(e) {
  let t = p.Z.toURLSafe(e);
  return null == t ? null : (t.searchParams.append("format", "webp"), t.toString())
}

function T(e) {
  let t, {
      media: n,
      obscured: i = false,
      maxWidth: a,
      maxHeight: o,
      onContextMenu: c
    } = e,
    {
      width: d,
      height: p,
      url: g,
      proxyUrl: b,
      alt: v,
      type: S,
      maxWidth: T,
      maxHeight: C
    } = n,
    N = O(n, ["width", "height", "url", "proxyUrl", "alt", "type", "maxWidth", "maxHeight"]),
    {
      zoomed: P
    } = (0, _.Y)(),
    R = A(P, g, b, n.contentType, n.originalContentType),
    w = null != d && 0 !== d && null != p && 0 !== p;
  if ("VIDEO" === S && w && null != b) {
    var D;
    let e = I(b);
    if (null == e) return null;
    let t = null != (D = n.renderLinkComponent) ? D : u.iT;
    return (0, r.jsx)(l.Z, y(E({}, N), {
      src: R,
      width: d,
      height: p,
      maxWidth: a,
      maxHeight: o,
      poster: e,
      naturalWidth: d,
      naturalHeight: p,
      volume: f.FC,
      autoMute: f.rs,
      onVolumeChange: f.jA,
      onMute: f.Zj,
      renderLinkComponent: t,
      autoPlay: !i,
      alt: v,
      onContextMenu: c,
      disableArrowKeySeek: true
    }))
  }
  return "IMAGE" === S && (t = w ? (0, r.jsx)(s.ZP, y(E({}, N), {
    src: R,
    width: d,
    height: p,
    maxWidth: a,
    maxHeight: o,
    useFullWidth: true,
    shouldLink: false,
    className: h.media,
    animated: !i && n.animated,
    autoPlay: !i,
    alt: v,
    onContextMenu: c
  })) : (0, r.jsx)("img", {
    src: R,
    alt: v,
    onContextMenu: c,
    className: h.dimensionlessImage,
    style: {
      maxWidth: a,
      maxHeight: o
    }
  })), null != t ? (0, r.jsx)(m.Z, {
    children: t
  }) : null
}
let C = Chunk473749.memo(T);

function A(e, t, n, r, i) {
  return e && p.Z.isDiscordAssetUrl(t, r, i) ? (0, c.s$)(t, r, i) : (0, d.q)({
    proxyURL: n,
    url: t
  })
}