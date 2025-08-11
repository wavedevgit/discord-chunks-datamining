/** Chunk was on 75708 **/
/** chunk id: 235433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk594928 = require("./594928.js"),
  Chunk922626 = require("./922626.js"),
  Chunk829716 = require("./829716.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk698282 = require("./698282.js"),
  Chunk401609 = require("./401609.js");

function b(e) {
  let {
    user: t,
    className: n
  } = e, b = l.J.useExperiment({
    location: "DisplayNameStylesSection"
  }).enabled, x = u.ZP.canUsePremiumProfileCustomization(t), {
    analyticsLocations: _
  } = (0, a.ZP)(), j = null != t.displayNameStyles, {
    handleApplyDisplayNameStyles: E,
    isApplying: C
  } = (0, o.Z)({}), O = (0, r.useCallback)(() => {
    d.default.track(p.rMx.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, c.I)({
      analyticsLocations: _
    })
  }, [_]), v = (0, r.useCallback)(() => {
    E(null), d.default.track(p.rMx.DISPLAY_NAME_STYLES_REMOVED)
  }, [E]);
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
        onClick: O
      }), j && (0, i.jsx)(s.zxk, {
        variant: "secondary",
        size: "sm",
        text: g.intl.string(h.default.ymq8WV),
        onClick: v,
        loading: C
      })]
    })
  }) : null
}