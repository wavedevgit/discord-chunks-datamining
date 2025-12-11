/** Chunk was on 23242 **/
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
  Chunk325117 = require("./325117.js");

function h() {
  var e, t;
  let n = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    h = (0, Chunk410030.ZP)(),
    f = (0, Chunk780384.wj)(h),
    g = (0, Chunk347896.Z)(),
    v = null == g ? true : g.planSelectionBanner,
    {
      claimableRewards: j
    } = (0, Chunk987209.wD)();
  if (null == v || null == j) return null;
  let y = null == (e = v.getBackgroundImageUrl) ? true : module.call(v, f),
    b = (0, Chunk717401.Yr)(y),
    S = null == (t = v.gradientConfig) ? true : exports.call(v, {
      isDarkMode: f,
      isAndroid: false
    }),
    x = (0, Chunk717401.Tl)(S, {
      colorStops: [0, 12, 100]
    }),
    P = (0, Chunk717401.$q)(b, x, {
      backgroundSize: "cover, auto",
      backgroundPosition: "right center, 0% 0%"
    });
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk325117.promotionalFooterBanner,
    style: P,
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk325117.avatar,
      children: (0, Chunk54381.jsx)(Chunk897942.Z, {
        claimableRewards: j,
        maxRewardImageSrc: v.getImageUrl(f, require),
        size: Chunk481060.EFr.SIZE_40,
        imageScaling: 1.25
      })
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      className: Chunk325117.bannerText,
      color: "always-white",
      children: v.desktopBannerText(j.length)
    })]
  })
}