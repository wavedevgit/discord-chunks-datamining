/** Chunk was on web.js **/
/** chunk id: 33052, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk347896 = require("./347896.js"),
  Chunk717401 = require("./717401.js"),
  Chunk897942 = require("./897942.jsx"),
  Chunk897159 = require("./897159.js");

function f() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    {
      claimableRewards: n
    } = (0, Chunk987209.wD)(),
    f = (0, Chunk347896.Z)(),
    _ = null == f ? true : f.planSelection;
  if (null == _ || null == require || 0 === require.length) return null;
  let p = (0, Chunk717401.Yr)(null == (e = _.getBannerImageUrl) ? true : module.call(_)),
    h = (0, Chunk717401.Tl)(_.gradientConfig, 180);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk897159.promotionalGiftMessage,
    style: null != p ? p : h,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk897159.promotionalTextSection,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/semibold",
        color: "always-white",
        children: _.heading()
      }), null != _.subheading && (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        children: _.subheading(require.length)
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk897159.avatar,
      children: (0, Chunk951288.jsx)(Chunk897942.Z, {
        maxRewardImageSrc: _.getImageUrl(true, exports),
        claimableRewards: require,
        size: Chunk481060.EFr.SIZE_80
      })
    })]
  })
}