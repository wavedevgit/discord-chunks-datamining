/** Chunk was on 37786 **/
/** chunk id: 572517, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => _
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

function _() {
  var e, t;
  let n = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    _ = (0, Chunk410030.ZP)(),
    h = (0, Chunk780384.wj)(_),
    f = (0, Chunk347896.Z)(),
    x = null == f ? true : f.planSelectionBanner,
    {
      claimableRewards: m
    } = (0, Chunk987209.wD)();
  if (null == x || null == m) return null;
  let j = null == (e = x.getBackgroundImageUrl) ? true : module.call(x, h),
    b = (0, Chunk717401.Yr)(j),
    g = null == (t = x.gradientConfig) ? true : exports.call(x, {
      isDarkMode: h,
      isAndroid: false
    }),
    L = (0, Chunk717401.Tl)(g);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk947007.promotionalFooterBanner,
    style: null != b ? b : L,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk947007.avatar,
      children: (0, Chunk951288.jsx)(Chunk897942.Z, {
        claimableRewards: m,
        maxRewardImageSrc: x.getImageUrl(h, require),
        size: Chunk481060.EFr.SIZE_40,
        imageScaling: 2
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      className: Chunk947007.bannerText,
      color: "always-white",
      children: x.desktopBannerText(m.length)
    })]
  })
}