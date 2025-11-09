/** Chunk was on web.js **/
/** chunk id: 474706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk347896 = require("./347896.js"),
  Chunk717401 = require("./717401.js"),
  Chunk897942 = require("./897942.jsx"),
  Chunk49271 = require("./49271.js");

function f() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    {
      claimableRewards: n
    } = (0, Chunk987209.wD)(),
    f = (0, Chunk347896.Z)(),
    _ = null == f ? true : f.planSelection,
    p = (0, Chunk717401.Tl)(null == _ ? true : _.gradientConfig, {
      reverse: true
    }),
    h = null == _ || null == (e = _.getBannerImageUrl) ? true : module.call(_);
  return null == _ || null == require || 0 === require.length ? null : (0, Chunk951288.jsxs)("div", {
    className: Chunk49271.container,
    style: p,
    children: [null != h && (0, Chunk951288.jsx)("div", {
      className: Chunk49271.bannerImage,
      style: {
        backgroundImage: "url(".concat(h, ")")
      }
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk49271.textSection,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        color: "always-white",
        children: _.heading()
      }), null != _.subheading && (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        color: "always-white",
        children: _.subheading(require.length)
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk49271.avatar,
      children: (0, Chunk951288.jsx)(Chunk897942.Z, {
        maxRewardImageSrc: _.getImageUrl(true, exports),
        claimableRewards: require,
        size: Chunk481060.EFr.SIZE_48,
        imageScaling: 2.4
      })
    })]
  })
}