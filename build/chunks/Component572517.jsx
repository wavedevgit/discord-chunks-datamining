/** Chunk was on 4125 **/
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
  Chunk947007 = require("./947007.js");

function x() {
  var e, t;
  let n = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    x = (0, Chunk410030.ZP)(),
    _ = (0, Chunk780384.wj)(x),
    h = (0, Chunk347896.Z)(),
    f = null == h ? true : h.planSelectionBanner,
    {
      claimableRewards: m
    } = (0, Chunk987209.wD)();
  if (null == f || null == m) return null;
  let j = null == (e = f.getBackgroundImageUrl) ? true : module.call(f, _),
    L = (0, Chunk717401.Yr)(j),
    g = null == (t = f.gradientConfig) ? true : exports.call(f, {
      isDarkMode: _,
      isAndroid: false
    }),
    b = (0, Chunk717401.Tl)(g);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk947007.promotionalFooterBanner,
    style: null != L ? L : b,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk947007.avatar,
      children: (0, Chunk951288.jsx)(Chunk897942.Z, {
        claimableRewards: m,
        maxRewardImageSrc: f.getImageUrl(_, require),
        size: Chunk481060.EFr.SIZE_40,
        imageScaling: 2
      })
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      className: Chunk947007.bannerText,
      color: "always-white",
      children: f.desktopBannerText(m.length)
    })]
  })
}