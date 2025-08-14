/** Chunk was on 47238 **/
/** chunk id: 474706, original params: e,r,n (module,exports,require) **/
require.d(exports, {
  f: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk347896 = require("./347896.js"),
  Chunk897942 = require("./897942.jsx"),
  Chunk487276 = require("./487276.js");

function c() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    {
      claimableRewards: r
    } = (0, Chunk987209.wD)(),
    n = (0, Chunk347896.Z)(),
    c = null == require ? true : require.planSelection;
  return null == c || null == exports || 0 === exports.length ? null : (0, Chunk255367.jsxs)("div", {
    className: Chunk487276.container,
    children: [(0, Chunk255367.jsx)("div", {
      className: Chunk487276.avatar,
      children: (0, Chunk255367.jsx)(Chunk897942.Z, {
        maxRewardImageSrc: c.getImageUrl(true, module),
        claimableRewards: exports,
        size: Chunk481060.EFr.SIZE_48
      })
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk487276.textSection,
      children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        color: "text-primary",
        children: c.heading()
      }), null != c.subheading && exports.length > 1 && (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        className: Chunk487276.subheading,
        children: c.subheading(exports.length)
      })]
    })]
  })
}