/** Chunk was on 78376 **/
/** chunk id: 959443, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f() {
  let {
    analyticsLocations: e
  } = (0, a.Ay)();
  (0, o.A)({
    name: i.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
    type: i.ImpressionTypes.VIEW,
    properties: {
      location_stack: e
    }
  });
  let t = (0, d.X)({
    "en-US": p.default["f/cLEi"],
    "en-GB": p.default["f/cLEi"]
  }, p.default.CARxAC);
  return (0, r.jsxs)("div", {
    className: g.kL,
    children: [(0, r.jsx)("div", {
      className: g.zc,
      children: (0, r.jsx)("img", {
        src: A.A,
        className: g._e,
        alt: ""
      })
    }), (0, r.jsxs)("div", {
      className: g.P_,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: t
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: m.intl.string(p.default.nla4RG)
      })]
    }), (0, r.jsx)("div", {
      className: g.UD,
      children: (0, r.jsx)(l.$nd, {
        variant: "primary",
        text: m.intl.string(m.t.uw9zI7),
        onClick: () => {
          (0, _.b0)(_.G8.APPEARANCE_SETTINGS), (0, c.nf)(c.HP.CUSTOM_THEME, {
            from: c.xv.SETTING
          }), (0, u.default)()
        }
      })
    })]
  })
}