/** Chunk was on 7384 **/
/** chunk id: 235433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk594928 = require("./594928.js"),
  Chunk829716 = require("./829716.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk693450 = require("./693450.js"),
  Chunk147164 = require("./147164.js");

function b(e) {
  let {
    user: t,
    className: n
  } = e, b = o.J.useExperiment({
    location: "DisplayNameStylesSection"
  }).enabled, x = u.ZP.canUsePremiumProfileCustomization(t), {
    analyticsLocations: _
  } = (0, l.ZP)(), j = null != t.displayNameStyles, E = (0, r.useCallback)(() => {
    d.default.track(p.rMx.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, c.I)({
      analyticsLocations: _
    })
  }, [_]), C = (0, r.useCallback)(() => {
    (0, a.NI)(null), d.default.track(p.rMx.DISPLAY_NAME_STYLES_REMOVED)
  }, []);
  return b || j ? (0, i.jsx)(m.Z, {
    title: g.intl.string(h.default["86GtGB"]),
    className: n,
    showPremiumIcon: x,
    children: (0, i.jsxs)("div", {
      className: f.buttonsContainer,
      children: [b && (0, i.jsx)(s.zxk, {
        variant: "primary",
        size: "sm",
        text: g.intl.string(h.default.vJqrIi),
        onClick: E
      }), j && (0, i.jsx)(s.zxk, {
        variant: "secondary",
        size: "sm",
        text: g.intl.string(h.default.ymq8WV),
        onClick: C
      })]
    })
  }) : null
}