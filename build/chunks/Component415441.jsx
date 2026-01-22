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
  } = e, b = (0, o.bG)([l.A], () => l.A.useReducedMotion), y = null == _ || _.asset.isAnimated ? null : _.asset.url, O = null != h && h.asset.isAnimated ? h.asset.url : null, A = null == m ? true : m.width, v = null == m ? true : m.height, S = i.useMemo(() => {
    let e = null != A && null != v ? (0, u.Yt)(A, v) : null;
    return null != y ? (0, u.UX)(y, {
      format: "webp",
      width: null == e ? true : e.width,
      height: null == e ? true : e.height
    }) : null != O ? (0, u.WV)(O, null != e ? e : true) : null
  }, [y, O, A, v]);
  if (null == S) return null;
  let I = !b && null != h && null != O && p;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      alt: null != (t = null == _ ? true : _.alt) ? t : d.intl.string(d.t.P84bAD),
      className: null != (n = null == _ ? true : _.className) ? n : f.Sl,
      src: S,
      onLoad: g,
      ref: I ? true : E
    }), I && p && (0, r.jsx)(c.A, {
      autoPlay: true,
      loop: true,
      muted: true,
      preload: "auto",
      poster: S,
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