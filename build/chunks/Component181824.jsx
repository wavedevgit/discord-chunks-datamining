/** Chunk was on web.js **/
/** chunk id: 181824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk110259 = require("./110259.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk793943 = require("./793943.js"),
  Chunk996254 = require("./996254.js"),
  Chunk12901 = require("./12901.js"),
  Chunk738419 = require("./738419.js"),
  Chunk520650 = require("./520650.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk996554 = require("./996554.js"),
  Chunk114149 = require("./114149.js");

function g() {
  let {
    analyticsLocations: e
  } = (0, o.Ay)();
  (0, l.A)({
    name: i.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
    type: i.ImpressionTypes.VIEW,
    properties: {
      location_stack: e
    }
  });
  let t = (0, u.X)({
      "en-US": p.default["f/cLEi"],
      "en-GB": p.default["f/cLEi"]
    }, p.default.CARxAC),
    n = () => {
      (0, f.b0)(f.G8.APPEARANCE_SETTINGS), (0, c.nf)(c.HP.CUSTOM_THEME, {
        from: c.xv.SETTING
      }), (0, d.default)()
    };
  return (0, r.jsxs)("div", {
    className: h.kL,
    children: [(0, r.jsx)("div", {
      className: h.zc,
      children: (0, r.jsx)("img", {
        src: m.A,
        className: h._e,
        alt: ""
      })
    }), (0, r.jsxs)("div", {
      className: h.P_,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: t
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: _.intl.string(p.default.nla4RG)
      })]
    }), (0, r.jsx)("div", {
      className: h.UD,
      children: (0, r.jsx)(a.$nd, {
        variant: "primary",
        text: _.intl.string(_.t.uw9zI7),
        onClick: n
      })
    })]
  })
}