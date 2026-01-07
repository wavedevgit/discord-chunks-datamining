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
  Chunk831989 = require("./831989.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk706121 = require("./706121.js"),
  Chunk215656 = require("./215656.js");

function m() {
  let {
    analyticsLocations: e
  } = (0, s.ZP)();
  (0, l.Z)({
    name: i.ImpressionNames.CUSTOM_THEMES_PREVIEW_THEMES_BANNER,
    type: i.ImpressionTypes.VIEW,
    properties: {
      location_stack: e
    }
  });
  let t = () => {
    (0, u.DI)(u.Ln.PREVIEW_THEMES), (0, c.XO)(c.wh.CUSTOM_THEME, {
      from: c.tE.CLIENT_THEMES_EDITOR
    })
  };
  return (0, r.jsxs)("div", {
    className: p.container,
    children: [(0, r.jsxs)("div", {
      className: p.topContent,
      children: [(0, r.jsx)("img", {
        src: _.Z,
        className: p.bannerImage,
        alt: ""
      }), (0, r.jsxs)("div", {
        className: p.textContent,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: f.intl.string(d.default.XP4jzJ)
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: f.intl.string(d.default.MJYvmG)
        })]
      })]
    }), (0, r.jsx)(a.zxk, {
      variant: "secondary",
      size: "sm",
      text: f.intl.string(d.default.eGxkmm),
      onClick: t,
      fullWidth: true
    })]
  })
}