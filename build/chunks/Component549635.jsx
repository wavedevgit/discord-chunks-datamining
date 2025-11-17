/** Chunk was on web.js **/
/** chunk id: 549635, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dt: () => T,
  ZP: () => A,
  ze: () => I
}), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk768494 = require("./768494.js"),
  Chunk124347 = require("./124347.jsx"),
  Chunk80966 = require("./80966.jsx"),
  Chunk296182 = require("./296182.js"),
  Chunk524444 = require("./524444.jsx"),
  Chunk52824 = require("./52824.js"),
  Chunk630388 = require("./630388.js"),
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

function I(e, t) {
  return y(E({}, e), {
    type: (0, a.hg)(e),
    original: e.url,
    srcIsAnimated: (0, d.yE)(e.flags, a.hR.IS_ANIMATED),
    sourceMetadata: {
      message: t
    }
  })
}

function T(e) {
  let t = _.Z.toURLSafe(e);
  return null == t ? null : (t.searchParams.append("format", "webp"), t.toString())
}

function S(e) {
  let t, {
      media: n,
      obscured: i = false,
      maxWidth: a,
      maxHeight: l,
      onContextMenu: u
    } = e,
    {
      width: d,
      height: _,
      url: g,
      proxyUrl: b,
      alt: v,
      type: I,
      maxWidth: S,
      maxHeight: A
    } = n,
    N = O(n, ["width", "height", "url", "proxyUrl", "alt", "type", "maxWidth", "maxHeight"]),
    {
      zoomed: R
    } = (0, p.Y)(),
    P = C(R, g, b, n.contentType, n.originalContentType),
    D = null != d && 0 !== d && null != _ && 0 !== _;
  if ("VIDEO" === I && D && null != b) {
    var w;
    let e = T(b);
    if (null == e) return null;
    let t = null != (w = n.renderLinkComponent) ? w : c.iT;
    return (0, r.jsx)(s.Z, y(E({}, N), {
      src: P,
      width: d,
      height: _,
      maxWidth: a,
      maxHeight: l,
      poster: e,
      naturalWidth: d,
      naturalHeight: _,
      volume: f.FC,
      autoMute: f.rs,
      onVolumeChange: f.jA,
      onMute: f.Zj,
      renderLinkComponent: t,
      autoPlay: !i,
      alt: v,
      onContextMenu: u,
      disableArrowKeySeek: true
    }))
  }
  return "IMAGE" === I && (t = D ? (0, r.jsx)(o.ZP, y(E({}, N), {
    src: P,
    width: d,
    height: _,
    maxWidth: a,
    maxHeight: l,
    useFullWidth: true,
    shouldLink: false,
    className: m.media,
    animated: !i && n.animated,
    autoPlay: !i,
    alt: v,
    onContextMenu: u
  })) : (0, r.jsx)("img", {
    src: P,
    alt: v,
    onContextMenu: u,
    className: m.dimensionlessImage,
    style: {
      maxWidth: a,
      maxHeight: l
    }
  })), null != t ? (0, r.jsx)(h.Z, {
    children: t
  }) : null
}
let A = Chunk473749.memo(S);

function C(e, t, n, r, i) {
  return e && _.Z.isDiscordAssetUrl(t, r, i) ? (0, l.s$)(t, r, i) : (0, u.q)({
    proxyURL: n,
    url: t
  })
}