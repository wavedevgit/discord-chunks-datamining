/** Chunk was on 54400 **/
/** chunk id: 572517, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk347896 = require("./347896.js"),
  Chunk717401 = require("./717401.js"),
  Chunk897942 = require("./897942.jsx"),
  Chunk432483 = require("./432483.js");

function h() {
  var e, t;
  let n = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    h = (0, Chunk410030.ZP)(),
    f = (0, Chunk780384.wj)(h),
    b = (0, Chunk347896.Z)(),
    g = null == b ? true : b.planSelectionBanner,
    {
      claimableRewards: v
    } = (0, Chunk987209.wD)();
  if (null == g || null == v) return null;
  let S = null == (e = g.getBackgroundImageUrl) ? true : module.call(g, f),
    y = (0, Chunk717401.Yr)(S),
    x = null == (t = g.gradientConfig) ? true : exports.call(g, {
      isDarkMode: f,
      isAndroid: false
    }),
    P = (0, Chunk717401.Tl)(x, {
      colorStops: [0, 12, 100]
    }),
    j = (0, Chunk717401.$q)(y, P, {
      backgroundSize: "cover, auto",
      backgroundPosition: "right center, 0% 0%"
    });
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk432483.promotionalFooterBanner,
    style: j,
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk432483.avatar,
      children: (0, Chunk54381.jsx)(Chunk897942.Z, {
        claimableRewards: v,
        maxRewardImageSrc: g.getImageUrl(f, require),
        size: Chunk481060.EFr.SIZE_40,
        imageScaling: 1.25
      })
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      className: Chunk432483.bannerText,
      color: "always-white",
      children: g.desktopBannerText(v.length)
    })]
  })
}