/** Chunk was on 90948 **/
/** chunk id: 918338, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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

function m(e) {
  let {
    quest: t,
    isInteracting: n,
    hideAssets: r,
    imageSize: m,
    containerClassName: f,
    imageClassName: x,
    assetRef: _
  } = e, g = a.useMemo(() => (0, l.tW)(t, l.fY.HERO_IMAGE), [t]), v = a.useMemo(() => (0, l.tW)(t, l.fY.HERO_VIDEO), [t]), {
    onAssetLoadComplete: h
  } = a.useContext(d.M);
  return (0, i.jsx)("div", {
    className: s()(u.l1, f),
    children: !r && (0, i.jsx)(o.N, {
      imageAsset: null != g ? {
        asset: g,
        assetId: "QuestTileBanner",
        alt: c.intl.string(c.t.jnijWz),
        className: s()(u.LO, x)
      } : true,
      videoAsset: null != v ? {
        asset: v,
        assetId: "QuestTileBanner_heroAnimated",
        className: u.G9
      } : true,
      showVideo: n,
      imageSize: m,
      onLoadComplete: h,
      assetRef: _
    })
  })
}