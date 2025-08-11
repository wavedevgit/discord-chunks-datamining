/** Chunk was on web.js **/
/** chunk id: 549635, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dt: () => T,
  ZP: () => A,
  ze: () => I
}), require("./997841.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk986261 = require("./986261.js");

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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function I(e, t) {
  return y(E({}, e), {
    type: (0, o.hg)(e),
    original: e.url,
    srcIsAnimated: (0, d.yE)(e.flags, o.hR.IS_ANIMATED),
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
      maxWidth: o,
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
    C = O(n, ["width", "height", "url", "proxyUrl", "alt", "type", "maxWidth", "maxHeight"]),
    {
      zoomed: R
    } = (0, p.Y)(),
    P = N(R, g, b),
    w = null != d && 0 !== d && null != _ && 0 !== _;
  if ("VIDEO" === I && w && null != b) {
    var D;
    let e = T(b);
    if (null == e) return null;
    let t = null != (D = n.renderLinkComponent) ? D : c.iT;
    return (0, r.jsx)(s.Z, y(E({}, C), {
      src: P,
      width: d,
      height: _,
      maxWidth: o,
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
  return "IMAGE" === I && (t = w ? (0, r.jsx)(a.ZP, y(E({}, C), {
    src: P,
    width: d,
    height: _,
    maxWidth: o,
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
      maxWidth: o,
      maxHeight: l
    }
  })), null != t ? (0, r.jsx)(h.Z, {
    children: t
  }) : null
}
let A = Chunk73800.memo(S);

function N(e, t, n) {
  return e && _.Z.isDiscordAssetUrl(t) ? (0, l.s$)(t) : (0, u.q)({
    proxyURL: n,
    url: t
  })
}