/** Chunk was on web.js **/
/** chunk id: 474529, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk110259 = require("./110259.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk793943 = require("./793943.js"),
  Chunk738419 = require("./738419.js"),
  Chunk520650 = require("./520650.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk61305 = require("./61305.js"),
  Chunk114149 = require("./114149.js");

function h() {
  let {
    analyticsLocations: e
  } = (0, o.Ay)();
  (0, l.A)({
    name: i.ImpressionNames.CUSTOM_THEMES_PREVIEW_THEMES_BANNER,
    type: i.ImpressionTypes.VIEW,
    properties: {
      location_stack: e
    }
  });
  let t = () => {
    (0, u.b0)(u.G8.PREVIEW_THEMES), (0, c.nf)(c.HP.CUSTOM_THEME, {
      from: c.xv.CLIENT_THEMES_EDITOR
    })
  };
  return (0, r.jsxs)("div", {
    className: p.kL,
    children: [(0, r.jsxs)("div", {
      className: p.r$,
      children: [(0, r.jsx)("img", {
        src: _.A,
        className: p._e,
        alt: ""
      }), (0, r.jsxs)("div", {
        className: p.P_,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: f.intl.string(d.default.XP4jzJ)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: f.intl.string(d.default.MJYvmG)
        })]
      })]
    }), (0, r.jsx)(a.$nd, {
      variant: "secondary",
      size: "sm",
      text: f.intl.string(d.default.eGxkmm),
      onClick: t,
      fullWidth: true
    })]
  })
}