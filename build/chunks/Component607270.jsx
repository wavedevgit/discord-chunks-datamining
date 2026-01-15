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
  Chunk831989 = require("./831989.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk302461 = require("./302461.js"),
  Chunk215656 = require("./215656.js");

function g() {
  let {
    analyticsLocations: e
  } = (0, s.ZP)();
  (0, l.Z)({
    name: i.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
    type: i.ImpressionTypes.VIEW,
    properties: {
      location_stack: e
    }
  });
  let t = (0, u.B)({
      "en-US": p.default["f/cLEi"],
      "en-GB": p.default["f/cLEi"]
    }, p.default.CARxAC),
    n = () => {
      (0, f.DI)(f.Ln.APPEARANCE_SETTINGS), (0, c.XO)(c.wh.CUSTOM_THEME, {
        from: c.tE.SETTING
      }), (0, d.default)()
    };
  return (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)("div", {
      className: h.iconContainer,
      children: (0, r.jsx)("img", {
        src: m.Z,
        className: h.bannerImage,
        alt: ""
      })
    }), (0, r.jsxs)("div", {
      className: h.textContent,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: t
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: _.intl.string(p.default.nla4RG)
      })]
    }), (0, r.jsx)("div", {
      className: h.buttonContainer,
      children: (0, r.jsx)(a.zxk, {
        variant: "primary",
        text: _.intl.string(_.t.uw9zI7),
        onClick: n
      })
    })]
  })
}