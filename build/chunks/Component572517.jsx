/** Chunk was on 63024 **/
/** chunk id: 572517, original params: e,r,n (module,exports,require) **/
require.d(exports, {
  c: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk717401 = require("./717401.js"),
  Chunk286961 = require("./286961.js"),
  Chunk897942 = require("./897942.jsx"),
  Chunk288978 = require("./288978.js");

function _() {
  var e;
  let r = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    n = (0, Chunk410030.ZP)(),
    _ = (0, Chunk780384.wj)(require),
    x = (0, Chunk286961.Z)(),
    f = null == x ? true : x.planSelectionBanner,
    {
      claimableRewards: m
    } = (0, Chunk987209.wD)();
  if (null == f || null == m) return null;
  let h = null == (e = f.gradientConfig) ? true : module.call(f, {
      isDarkMode: _,
      isAndroid: false
    }),
    j = (0, Chunk717401.Tl)(h);
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk288978.promotionalFooterBanner,
    style: j,
    children: [(0, Chunk255367.jsx)(Chunk897942.Z, {
      claimableRewards: m,
      maxRewardImageSrc: f.getImageUrl(_, exports),
      size: Chunk481060.EFr.SIZE_40
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      className: Chunk288978.bannerText,
      children: f.desktopBannerText(m.length)
    })]
  })
}