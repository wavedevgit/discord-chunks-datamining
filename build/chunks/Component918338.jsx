/** Chunk was on 92917 **/
/** chunk id: 918338, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk579473 = require("./579473.js"),
  Chunk415441 = require("./415441.jsx"),
  Chunk516226 = require("./516226.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk347564 = require("./347564.js");

function p(e) {
  let {
    quest: t,
    isInteracting: n,
    hideAssets: l,
    imageSize: p,
    containerClassName: m,
    imageClassName: f,
    assetRef: g
  } = e, h = i.useMemo(() => (0, s.tW)(t, s.fY.HERO_IMAGE), [t]), _ = i.useMemo(() => (0, s.tW)(t, s.fY.HERO_VIDEO), [t]), {
    onAssetLoadComplete: b
  } = i.useContext(c.M);
  return (0, r.jsx)("div", {
    className: a()(d.l1, m),
    children: !l && (0, r.jsx)(o.N, {
      imageAsset: null != h ? {
        asset: h,
        assetId: "QuestTileBanner",
        alt: u.intl.string(u.t.jnijWz),
        className: a()(d.LO, f)
      } : true,
      videoAsset: null != _ ? {
        asset: _,
        assetId: "QuestTileBanner_heroAnimated",
        className: d.G9
      } : true,
      showVideo: n,
      imageSize: p,
      onLoadComplete: b,
      assetRef: g
    })
  })
}