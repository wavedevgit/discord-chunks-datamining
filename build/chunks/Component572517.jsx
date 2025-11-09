/** Chunk was on 4125 **/
/** chunk id: 572517, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk347896 = require("./347896.js"),
  Chunk717401 = require("./717401.js"),
  Chunk897942 = require("./897942.jsx"),
  Chunk947007 = require("./947007.js");

function f() {
  var e, t;
  let n = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    f = (0, Chunk410030.ZP)(),
    h = (0, Chunk780384.wj)(f),
    x = (0, Chunk347896.Z)(),
    m = null == x ? true : x.planSelectionBanner,
    {
      claimableRewards: _
    } = (0, Chunk987209.wD)();
  if (null == m || null == _) return null;
  let j = null == (e = m.getBackgroundImageUrl) ? true : module.call(m, h),
    g = (0, Chunk717401.Yr)(j),
    b = null == (t = m.gradientConfig) ? true : exports.call(m, {
      isDarkMode: h,
      isAndroid: false
    }),
    y = (0, Chunk717401.Tl)(b, {
      colorStops: [0, 12, 100]
    }),
    L = (0, Chunk717401.$q)(g, y);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk947007.promotionalFooterBanner,
    style: L,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk947007.avatar,
      children: (0, Chunk951288.jsx)(Chunk897942.Z, {
        claimableRewards: _,
        maxRewardImageSrc: m.getImageUrl(h, require),
        size: Chunk481060.EFr.SIZE_40,
        imageScaling: 1.25
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      className: Chunk947007.bannerText,
      color: "always-white",
      children: m.desktopBannerText(_.length)
    })]
  })
}