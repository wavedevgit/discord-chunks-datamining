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
  Chunk487276 = require("./487276.js");

function f() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    {
      claimableRewards: t
    } = (0, Chunk987209.wD)(),
    n = (0, Chunk347896.Z)(),
    f = null == require ? true : require.planSelection,
    _ = (0, Chunk717401.Tl)(null == f ? true : f.gradientConfig);
  return null == f || null == exports || 0 === exports.length ? null : (0, Chunk951288.jsxs)("div", {
    className: Chunk487276.container,
    style: _,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk487276.textSection,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        color: "text-primary",
        children: f.heading()
      }), null != f.subheading && exports.length > 1 && (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        className: Chunk487276.subheading,
        children: f.subheading(exports.length)
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk487276.avatar,
      children: (0, Chunk951288.jsx)(Chunk897942.Z, {
        maxRewardImageSrc: f.getImageUrl(true, module),
        claimableRewards: exports,
        size: Chunk481060.EFr.SIZE_48
      })
    })]
  })
}