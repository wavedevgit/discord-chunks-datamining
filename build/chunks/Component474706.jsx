/** Chunk was on 75708 **/
/** chunk id: 474706, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk286961 = require("./286961.js"),
  Chunk897942 = require("./897942.jsx"),
  Chunk263562 = require("./263562.js");

function u() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    {
      claimableRewards: t
    } = (0, Chunk987209.wD)(),
    n = (0, Chunk286961.Z)(),
    u = null == require ? true : require.planSelection;
  return null == u || null == exports || 0 === exports.length ? null : (0, Chunk255367.jsxs)("div", {
    className: Chunk263562.container,
    children: [(0, Chunk255367.jsx)("div", {
      className: Chunk263562.avatar,
      children: (0, Chunk255367.jsx)(Chunk897942.Z, {
        maxRewardImageSrc: u.getImageUrl(true, module),
        claimableRewards: exports,
        size: Chunk481060.EFr.SIZE_48
      })
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk263562.textSection,
      children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        color: "text-primary",
        children: u.heading()
      }), null != u.subheading && exports.length > 1 && (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        className: Chunk263562.subheading,
        children: u.subheading(exports.length)
      })]
    })]
  })
}