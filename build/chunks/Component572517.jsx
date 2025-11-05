/** Chunk was on 54400 **/
/** chunk id: 572517, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => x
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
  Chunk432483 = require("./432483.js");

function x() {
  var e, t;
  let n = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    x = (0, Chunk410030.ZP)(),
    h = (0, Chunk780384.wj)(x),
    f = (0, Chunk347896.Z)(),
    _ = null == f ? true : f.planSelectionBanner,
    {
      claimableRewards: m
    } = (0, Chunk987209.wD)();
  if (null == _ || null == m) return null;
  let j = null == (e = _.getBackgroundImageUrl) ? true : module.call(_, h),
    g = (0, Chunk717401.Yr)(j),
    b = null == (t = _.gradientConfig) ? true : exports.call(_, {
      isDarkMode: h,
      isAndroid: false
    }),
    y = (0, Chunk717401.Tl)(b);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk432483.promotionalFooterBanner,
    style: null != g ? g : y,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk432483.avatar,
      children: (0, Chunk951288.jsx)(Chunk897942.Z, {
        claimableRewards: m,
        maxRewardImageSrc: _.getImageUrl(h, require),
        size: Chunk481060.EFr.SIZE_40,
        imageScaling: 2
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      className: Chunk432483.bannerText,
      color: "always-white",
      children: _.desktopBannerText(m.length)
    })]
  })
}