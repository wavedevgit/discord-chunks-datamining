/** Chunk was on web.js **/
/** chunk id: 918338, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk579473 = require("./579473.js"),
  Chunk415441 = require("./415441.jsx"),
  Chunk516226 = require("./516226.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk347564 = require("./347564.js");

function f(e) {
  let {
    quest: t,
    isInteracting: n,
    hideAssets: a,
    imageSize: f,
    containerClassName: p,
    imageClassName: _,
    assetRef: h
  } = e, m = i.useMemo(() => (0, o.tW)(t, o.fY.HERO_IMAGE), [t]), g = i.useMemo(() => (0, o.tW)(t, o.fY.HERO_VIDEO), [t]), {
    onAssetLoadComplete: E
  } = i.useContext(c.M);
  return (0, r.jsx)("div", {
    className: s()(d.l1, p),
    children: !a && (0, r.jsx)(l.N, {
      imageAsset: null != m ? {
        asset: m,
        assetId: "QuestTileBanner",
        alt: u.intl.string(u.t.jnijWz),
        className: s()(d.LO, _)
      } : true,
      videoAsset: null != g ? {
        asset: g,
        assetId: "QuestTileBanner_heroAnimated",
        className: d.G9
      } : true,
      showVideo: n,
      imageSize: f,
      onLoadComplete: E,
      assetRef: h
    })
  })
}