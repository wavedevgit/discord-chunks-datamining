/** Chunk was on web.js **/
/** chunk id: 415441, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk579473 = require("./579473.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk545965 = require("./545965.js");

function p(e) {
  var t, n, a;
  let {
    showVideo: p,
    imageAsset: _,
    videoAsset: h,
    imageSize: m,
    onLoadComplete: g,
    assetRef: E
  } = e, y = (0, o.bG)([l.A], () => l.A.useReducedMotion), b = null == _ || _.asset.isAnimated ? null : _.asset.url, O = null != h && h.asset.isAnimated ? h.asset.url : null, v = null == m ? true : m.width, A = null == m ? true : m.height, I = i.useMemo(() => {
    let e = null != v && null != A ? (0, u.Yt)(v, A) : null;
    return null != b ? (0, u.UX)(b, {
      format: "webp",
      width: null == e ? true : e.width,
      height: null == e ? true : e.height
    }) : null != O ? (0, u.WV)(O, null != e ? e : true) : null
  }, [b, O, v, A]);
  if (null == I) return null;
  let S = !y && null != h && null != O && p;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      alt: null != (t = null == _ ? true : _.alt) ? t : d.intl.string(d.t.P84bAD),
      className: null != (n = null == _ ? true : _.className) ? n : f.Sl,
      src: I,
      onLoad: g,
      ref: S ? true : E
    }), S && p && (0, r.jsx)(c.A, {
      autoPlay: true,
      loop: true,
      muted: true,
      preload: "auto",
      poster: I,
      playsInline: true,
      className: s()(h.className, f.Ki, {
        [f.R]: !p
      }),
      controls: false,
      onProgress: g,
      ref: E,
      children: (0, r.jsx)("source", {
        src: h.asset.url,
        type: null != (a = h.asset.mimetype) ? a : true
      })
    })]
  })
}