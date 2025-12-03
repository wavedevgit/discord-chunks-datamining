/** Chunk was on web.js **/
/** chunk id: 607270, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk990547 = require("./990547.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk550385 = require("./550385.js"),
  Chunk799360 = require("./799360.js"),
  Chunk342386 = require("./342386.js"),
  Chunk771934 = require("./771934.js"),
  Chunk896591 = require("./896591.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk640744 = require("./640744.js"),
  Chunk758335 = require("./758335.js");

function g() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)();
  (0, Chunk213609.Z)({
    name: Chunk990547.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
    type: Chunk990547.ImpressionTypes.VIEW,
    properties: {
      location_stack: module
    }
  });
  let t = (0, Chunk799360.B)({
      "en-US": Chunk896591.default["f/cLEi"],
      "en-GB": Chunk896591.default["f/cLEi"]
    }, Chunk896591.default.CARxAC),
    n = () => {
      (0, Chunk771934.DI)(Chunk771934.Ln.APPEARANCE_SETTINGS), (0, Chunk550385.XO)(Chunk550385.wh.CUSTOM_THEME, {
        from: Chunk550385.tE.SETTING
      }), (0, Chunk342386.default)()
    };
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk640744.container,
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk640744.iconContainer,
      children: (0, Chunk54381.jsx)("img", {
        src: Chunk758335.Z,
        className: Chunk640744.bannerImage,
        alt: ""
      })
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk640744.textContent,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: exports
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        children: Chunk388032.intl.string(Chunk896591.default.nla4RG)
      })]
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk640744.buttonContainer,
      children: (0, Chunk54381.jsx)(Chunk159691.zxk, {
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t.uw9zI7),
        onClick: require
      })
    })]
  })
}