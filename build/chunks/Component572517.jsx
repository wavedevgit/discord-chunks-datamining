/** Chunk was on 54433 **/
/** chunk id: 572517, original params: e,n,t (module,exports,require) **/
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
  var e;
  let n = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    t = (0, Chunk410030.ZP)(),
    x = (0, Chunk780384.wj)(require),
    h = (0, Chunk347896.Z)(),
    j = null == h ? true : h.planSelectionBanner,
    {
      claimableRewards: f
    } = (0, Chunk987209.wD)();
  if (null == j || null == f) return null;
  let m = null == (e = j.gradientConfig) ? true : module.call(j, {
      isDarkMode: x,
      isAndroid: false
    }),
    _ = (0, Chunk717401.Tl)(m);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk432483.promotionalFooterBanner,
    style: _,
    children: [(0, Chunk951288.jsx)(Chunk897942.Z, {
      claimableRewards: f,
      maxRewardImageSrc: j.getImageUrl(x, exports),
      size: Chunk481060.EFr.SIZE_40
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      className: Chunk432483.bannerText,
      children: j.desktopBannerText(f.length)
    })]
  })
}