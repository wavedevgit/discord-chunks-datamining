/** Chunk was on web.js **/
/** chunk id: 608214, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => T,
  FX: () => v,
  VZ: () => S
}), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk665260 = require("./665260.js"),
  Chunk731068 = require("./731068.js"),
  Chunk619517 = require("./619517.jsx"),
  Chunk248643 = require("./248643.jsx"),
  Chunk803316 = require("./803316.js"),
  Chunk652176 = require("./652176.jsx"),
  Chunk644447 = require("./644447.js"),
  Chunk587481 = require("./587481.js"),
  Chunk998218 = require("./998218.js"),
  Chunk454290 = require("./454290.js"),
  Chunk504149 = require("./504149.jsx"),
  Chunk112576 = require("./112576.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = A(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function v(e, t) {
  return y(E({}, e), {
    type: (0, s.FE)(e),
    original: e.url,
    srcIsAnimated: (0, a.Lt)(e.flags, s.e5.IS_ANIMATED),
    sourceMetadata: {
      message: t
    }
  })
}

function S(e) {
  let t = p.A.toURLSafe(e);
  return null == t ? null : (t.searchParams.append("format", "webp"), t.toString())
}

function I(e) {
  let t, {
      media: n,
      obscured: i = false,
      maxWidth: a,
      maxHeight: s,
      onContextMenu: c
    } = e,
    {
      width: d,
      height: p,
      url: g,
      proxyUrl: b,
      alt: A,
      type: v,
      maxWidth: I,
      maxHeight: T
    } = n,
    N = O(n, ["width", "height", "url", "proxyUrl", "alt", "type", "maxWidth", "maxHeight"]),
    {
      zoomed: R
    } = (0, _.Q)(),
    w = C(R, g, b, n.contentType, n.originalContentType),
    P = null != d && 0 !== d && null != p && 0 !== p;
  if ("VIDEO" === v && P && null != b) {
    var D;
    let e = S(b);
    if (null == e) return null;
    let t = null != (D = n.renderLinkComponent) ? D : u.bU;
    return (0, r.jsx)(l.A, y(E({}, N), {
      src: w,
      width: d,
      height: p,
      maxWidth: a,
      maxHeight: s,
      poster: e,
      naturalWidth: d,
      naturalHeight: p,
      volume: f.v1,
      autoMute: f.uj,
      onVolumeChange: f.ls,
      onMute: f.y5,
      renderLinkComponent: t,
      autoPlay: !i,
      alt: A,
      onContextMenu: c,
      disableArrowKeySeek: true
    }))
  }
  return "IMAGE" === v && (t = P ? (0, r.jsx)(o.Ay, y(E({}, N), {
    src: w,
    width: d,
    height: p,
    maxWidth: a,
    maxHeight: s,
    useFullWidth: true,
    shouldLink: false,
    className: m.$_,
    animated: !i && n.animated,
    autoPlay: !i,
    alt: A,
    onContextMenu: c
  })) : (0, r.jsx)("img", {
    src: w,
    alt: A,
    onContextMenu: c,
    className: m.xx,
    style: {
      maxWidth: a,
      maxHeight: s
    }
  })), null != t ? (0, r.jsx)(h.A, {
    children: t
  }) : null
}
let T = Chunk64700.memo(I);

function C(e, t, n, r, i) {
  return e && p.A.isDiscordAssetUrl(t, r, i) ? (0, c.XW)(t, r, i) : (0, d.E)({
    proxyURL: n,
    url: t
  })
}