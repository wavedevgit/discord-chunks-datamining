/** Chunk was on 66181 **/
/** chunk id: 235433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk594928 = require("./594928.js"),
  Chunk829716 = require("./829716.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk693450 = require("./693450.js"),
  Chunk147164 = require("./147164.js");

function j(e) {
  let {
    user: t,
    className: n
  } = e, j = d.J.useExperiment({
    location: "DisplayNameStylesSection"
  }).enabled, E = p.ZP.canUsePremiumProfileCustomization(t), {
    analyticsLocations: C
  } = (0, o.ZP)(), O = null != t.displayNameStyles, v = [];
  j && v.push(s.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE);
  let [S, T] = (0, c.US)(v), N = S === s.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE, I = (0, r.useCallback)(() => {
    T(f.L.TAKE_ACTION), m.default.track(h.rMx.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, u.I)({
      analyticsLocations: C
    })
  }, [C, T]), y = (0, r.useCallback)(() => {
    (0, l.NI)(null), m.default.track(h.rMx.DISPLAY_NAME_STYLES_REMOVED)
  }, []);
  return j || O ? (0, i.jsx)(g.Z, {
    title: b.intl.string(x.default["86GtGB"]),
    titleIcon: N ? (0, i.jsx)(a.IGR, {
      text: b.intl.string(b.t.y2b7CA),
      className: _.newBadge
    }) : true,
    className: n,
    showPremiumIcon: E,
    children: (0, i.jsxs)("div", {
      className: _.buttonsContainer,
      children: [j && (0, i.jsx)(a.zxk, {
        variant: "primary",
        size: "sm",
        text: b.intl.string(x.default.vJqrIi),
        onClick: I
      }), O && (0, i.jsx)(a.zxk, {
        variant: "secondary",
        size: "sm",
        text: b.intl.string(x.default.ymq8WV),
        onClick: y
      })]
    })
  }) : null
}