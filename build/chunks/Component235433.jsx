/** Chunk was on web.js **/
/** chunk id: 235433, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
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
  Chunk62222 = require("./62222.js"),
  Chunk714892 = require("./714892.js");

function y(e) {
  let {
    user: t,
    className: n
  } = e, y = u.J.useExperiment({
    location: "DisplayNameStylesSection"
  }).enabled, O = _.ZP.canUsePremiumProfileCustomization(t), {
    analyticsLocations: v
  } = (0, l.ZP)(), I = null != t.displayNameStyles, T = [];
  y && T.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE);
  let [S, A] = (0, c.US)(T), C = S === a.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE, N = (0, i.useCallback)(() => {
    A(m.L.TAKE_ACTION), f.default.track(h.rMx.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, d.I)({
      analyticsLocations: v
    })
  }, [v, A]), R = (0, i.useCallback)(() => {
    (0, s.NI)(null), f.default.track(h.rMx.DISPLAY_NAME_STYLES_REMOVED)
  }, []);
  return y || I ? (0, r.jsx)(p.Z, {
    title: g.intl.string(E.default["86GtGB"]),
    titleIcon: C ? (0, r.jsx)(o.IGR, {
      text: g.intl.string(g.t.y2b7CA),
      className: b.newBadge
    }) : true,
    className: n,
    showPremiumIcon: O,
    children: (0, r.jsxs)("div", {
      className: b.buttonsContainer,
      children: [y && (0, r.jsx)(o.zxk, {
        variant: "primary",
        size: "sm",
        text: g.intl.string(E.default.vJqrIi),
        onClick: N
      }), I && (0, r.jsx)(o.zxk, {
        variant: "secondary",
        size: "sm",
        text: g.intl.string(E.default.ymq8WV),
        onClick: R
      })]
    })
  }) : null
}