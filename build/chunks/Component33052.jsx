/** Chunk was on 94136 **/
/** chunk id: 33052, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  K: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk347896 = require("./347896.js"),
  Chunk717401 = require("./717401.js"),
  Chunk897942 = require("./897942.jsx"),
  Chunk897159 = require("./897159.js");

function m() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    {
      claimableRewards: t
    } = (0, Chunk987209.wD)(),
    i = (0, Chunk347896.Z)(),
    m = null == require ? true : require.planSelection;
  if (null == m || null == exports || 0 === exports.length) return null;
  let C = (0, Chunk717401.Tl)(m.gradientConfig);
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk897159.promotionalGiftMessage,
    style: C,
    children: [(0, Chunk255367.jsxs)("div", {
      className: Chunk897159.promotionalTextSection,
      children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
        className: Chunk897159.promotionalGiftMessageText,
        variant: "text-sm/semibold",
        children: m.heading()
      }), null != m.subheading && exports.length > 1 && (0, Chunk255367.jsx)(Chunk481060.Text, {
        className: Chunk897159.promotionalGiftMessageText,
        variant: "text-sm/normal",
        children: m.subheading(exports.length)
      })]
    }), (0, Chunk255367.jsx)("div", {
      className: Chunk897159.avatar,
      children: (0, Chunk255367.jsx)(Chunk897942.Z, {
        maxRewardImageSrc: m.getImageUrl(true, module),
        claimableRewards: exports,
        size: Chunk481060.EFr.SIZE_80
      })
    })]
  })
}