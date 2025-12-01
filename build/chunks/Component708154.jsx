/** Chunk was on web.js **/
/** chunk id: 708154, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk990547 = require("./990547.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk550385 = require("./550385.js"),
  Chunk771934 = require("./771934.js"),
  Chunk896591 = require("./896591.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk574876 = require("./574876.js"),
  Chunk758335 = require("./758335.js");

function m() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)();
  (0, Chunk213609.Z)({
    name: Chunk990547.ImpressionNames.CUSTOM_THEMES_PREVIEW_THEMES_BANNER,
    type: Chunk990547.ImpressionTypes.VIEW,
    properties: {
      location_stack: module
    }
  });
  let t = () => {
    (0, Chunk771934.DI)(Chunk771934.Ln.PREVIEW_THEMES), (0, Chunk550385.XO)(Chunk550385.wh.CUSTOM_THEME, {
      from: Chunk550385.tE.CLIENT_THEMES_EDITOR
    })
  };
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk574876.container,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk574876.topContent,
      children: [(0, Chunk54381.jsx)("img", {
        src: Chunk758335.Z,
        className: Chunk574876.bannerImage,
        alt: ""
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk574876.textContent,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/semibold",
          color: "text-primary",
          children: Chunk388032.intl.string(Chunk896591.default.XP4jzJ)
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "text-tertiary",
          children: Chunk388032.intl.string(Chunk896591.default.MJYvmG)
        })]
      })]
    }), (0, Chunk54381.jsx)(Chunk159691.zxk, {
      variant: "secondary",
      size: "sm",
      text: Chunk388032.intl.string(Chunk896591.default.eGxkmm),
      onClick: exports,
      fullWidth: true
    })]
  })
}