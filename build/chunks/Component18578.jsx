/** Chunk was on web.js **/
/** chunk id: 18578, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk475595 = require("./475595.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk819838 = require("./819838.js");

function p(e) {
  var t, n, a;
  let {
    showVideo: p,
    imageAsset: _,
    videoAsset: m,
    imageSize: h,
    onLoadComplete: g,
    assetRef: E
  } = e, b = (0, s.e7)([l.Z], () => l.Z.useReducedMotion), y = null == _ || _.asset.isAnimated ? null : _.asset.url, O = null != m && m.asset.isAnimated ? m.asset.url : null, v = null == h ? true : h.width, S = null == h ? true : h.height, I = i.useMemo(() => {
    let e = null != v && null != S ? (0, u.nK)(v, S) : null;
    return null != y ? (0, u.sN)(y, {
      format: "webp",
      width: null == e ? true : e.width,
      height: null == e ? true : e.height
    }) : null != O ? (0, u.f0)(O, null != e ? e : true) : null
  }, [y, O, v, S]);
  if (null == I) return null;
  let T = !b && null != m && null != O && p;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      alt: null != (t = null == _ ? true : _.alt) ? t : d.intl.string(d.t.P84bAD),
      className: null != (n = null == _ ? true : _.className) ? n : f.image,
      src: I,
      onLoad: g,
      ref: T ? true : E
    }), T && p && (0, r.jsx)(c.Z, {
      autoPlay: true,
      loop: true,
      muted: true,
      preload: "auto",
      poster: I,
      playsInline: true,
      className: o()(m.className, f.video, {
        [f.hidden]: !p
      }),
      controls: false,
      onProgress: g,
      ref: E,
      children: (0, r.jsx)("source", {
        src: m.asset.url,
        type: null != (a = m.asset.mimetype) ? a : true
      })
    })]
  })
}