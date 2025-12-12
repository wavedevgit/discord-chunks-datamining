/** Chunk was on web.js **/
/** chunk id: 474706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk347896 = require("./347896.js"),
  Chunk717401 = require("./717401.js"),
  Chunk897942 = require("./897942.jsx"),
  Chunk402550 = require("./402550.js");

function f() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    {
      claimableRewards: n
    } = (0, Chunk987209.wD)(),
    f = (0, Chunk347896.Z)(),
    p = null == f ? true : f.planSelection,
    _ = (0, Chunk717401.Tl)(null == p ? true : p.gradientConfig, {
      reverse: true
    }),
    m = null == p || null == (e = p.getBannerImageUrl) ? true : module.call(p);
  return null == p || null == require || 0 === require.length ? null : (0, Chunk54381.jsxs)("div", {
    className: Chunk402550.container,
    style: _,
    children: [null != m && (0, Chunk54381.jsx)("div", {
      className: Chunk402550.bannerImage,
      style: {
        backgroundImage: "url(".concat(m, ")")
      }
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk402550.textSection,
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/bold",
        color: "always-white",
        children: p.heading()
      }), null != p.subheading && (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        color: "always-white",
        children: p.subheading(require.length)
      })]
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk402550.avatar,
      children: (0, Chunk54381.jsx)(Chunk897942.Z, {
        maxRewardImageSrc: p.getImageUrl(true, exports),
        claimableRewards: require,
        size: Chunk481060.EFr.SIZE_48,
        imageScaling: exports ? 1.9 : 2.4
      })
    })]
  })
}