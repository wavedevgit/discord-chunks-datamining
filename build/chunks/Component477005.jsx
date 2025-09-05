/** Chunk was on web.js **/
/** chunk id: 477005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk974390 = require("./974390.js"),
  Chunk475595 = require("./475595.js"),
  Chunk18578 = require("./18578.jsx"),
  Chunk251360 = require("./251360.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk178833 = require("./178833.js");

function p(e) {
  let {
    quest: t,
    isInteracting: n,
    hideAssets: a,
    imageSize: p,
    containerClassName: h,
    imageClassName: m
  } = e, g = i.useMemo(() => (0, l.fh)(t, l.eC.HERO_IMAGE), [t]), E = i.useMemo(() => (0, l.fh)(t, l.eC.HERO_VIDEO), [t]), b = (0, s.h)(t, d.dr.QUEST_HOME_DESKTOP), {
    onAssetLoadComplete: y
  } = i.useContext(u.k), O = !b && n;
  return (0, r.jsx)("div", {
    className: o()(_.heroAssetCont, h),
    children: !a && (0, r.jsx)(c.K, {
      imageAsset: null != g ? {
        asset: g,
        assetId: "QuestTileBanner",
        alt: f.intl.string(f.t.jnijW1),
        className: o()(_.heroAsset, m)
      } : true,
      videoAsset: null != E ? {
        asset: E,
        assetId: "QuestTileBanner_heroAnimated",
        className: _.heroAssetVideo
      } : true,
      showVideo: O,
      imageSize: p,
      onLoadComplete: y
    })
  })
}