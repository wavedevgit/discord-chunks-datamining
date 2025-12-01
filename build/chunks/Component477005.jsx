/** Chunk was on web.js **/
/** chunk id: 477005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk475595 = require("./475595.js"),
  Chunk18578 = require("./18578.jsx"),
  Chunk251360 = require("./251360.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk178833 = require("./178833.js");

function f(e) {
  let {
    quest: t,
    isInteracting: n,
    hideAssets: a,
    imageSize: f,
    containerClassName: p,
    imageClassName: _,
    assetRef: m
  } = e, h = i.useMemo(() => (0, s.fh)(t, s.eC.HERO_IMAGE), [t]), g = i.useMemo(() => (0, s.fh)(t, s.eC.HERO_VIDEO), [t]), {
    onAssetLoadComplete: E
  } = i.useContext(c.k);
  return (0, r.jsx)("div", {
    className: o()(d.heroAssetCont, p),
    children: !a && (0, r.jsx)(l.K, {
      imageAsset: null != h ? {
        asset: h,
        assetId: "QuestTileBanner",
        alt: u.intl.string(u.t.jnijWz),
        className: o()(d.heroAsset, _)
      } : true,
      videoAsset: null != g ? {
        asset: g,
        assetId: "QuestTileBanner_heroAnimated",
        className: d.heroAssetVideo
      } : true,
      showVideo: n,
      imageSize: f,
      onLoadComplete: E,
      assetRef: m
    })
  })
}