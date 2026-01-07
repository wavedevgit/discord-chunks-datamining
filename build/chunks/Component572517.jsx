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
  let n = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
    h = (0, s.ZP)(),
    f = (0, i.wj)(h),
    g = (0, c.Z)(),
    y = null == g ? true : g.planSelectionBanner,
    {
      claimableRewards: j
    } = (0, u.wD)();
  if (null == y || null == j) return null;
  let v = null == (e = y.getBackgroundImageUrl) ? true : e.call(y, f),
    b = (0, d.Yr)(v),
    O = null == (t = y.gradientConfig) ? true : t.call(y, {
      isDarkMode: f,
      isAndroid: false
    }),
    S = (0, d.Tl)(O, {
      colorStops: [0, 12, 100]
    }),
    x = (0, d.$q)(b, S, {
      backgroundSize: "cover, auto",
      backgroundPosition: "right center, 0% 0%"
    });
  return (0, r.jsxs)("div", {
    className: m.promotionalFooterBanner,
    style: x,
    children: [(0, r.jsx)("div", {
      className: m.avatar,
      children: (0, r.jsx)(p.Z, {
        claimableRewards: j,
        maxRewardImageSrc: y.getImageUrl(f, n),
        size: a.EFr.SIZE_40,
        imageScaling: 1.25
      })
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/medium",
      className: m.bannerText,
      color: "always-white",
      children: y.desktopBannerText(j.length)
    })]
  })
}