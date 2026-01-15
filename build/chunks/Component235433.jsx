/** Chunk was on web.js **/
/** chunk id: 235433, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk829716 = require("./829716.jsx"),
  Chunk18438 = require("./18438.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk150039 = require("./150039.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk143525 = require("./143525.js"),
  Chunk399477 = require("./399477.js");

function O(e) {
  let {
    user: t,
    guildId: n,
    className: O
  } = e, v = p.ZP.canUsePremiumProfileCustomization(t), {
    analyticsLocations: S
  } = (0, l.ZP)(), {
    userDisplayNameStyles: I,
    guildDisplayNameStyles: T,
    pendingDisplayNameStyles: C,
    pendingErrors: A
  } = (0, _.mD)(t, n), [N, P] = (0, c.US)([a.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE]), w = N === a.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE, R = (0, i.useCallback)(() => {
    P(g.L.TAKE_ACTION), f.default.track(m.rMx.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, u.I)({
      analyticsLocations: S,
      guildId: n
    })
  }, [S, P, n]), D = (0, i.useCallback)(() => {
    (0, s.NI)(null), f.default.track(m.rMx.DISPLAY_NAME_STYLES_REMOVED)
  }, []), x = (0, i.useCallback)(() => {
    (0, d.N_)(null)
  }, []), L = true !== C || (null != n ? null != T : null != I), j = true !== C ? C : T;
  return (0, r.jsx)(h.Z, {
    title: E.intl.string(b.default["86GtGH"]),
    titleIcon: w ? (0, r.jsx)(o.IGR, {
      text: E.intl.string(E.t.y2b7CA),
      className: y.newBadge
    }) : true,
    className: O,
    showPremiumIcon: v,
    errors: A,
    children: (0, r.jsxs)("div", {
      className: y.buttonsContainer,
      children: [(0, r.jsx)(o.Button, {
        variant: "primary",
        size: "sm",
        text: E.intl.string(b.default.vJqrIg),
        onClick: R
      }), null == n && L && (0, r.jsx)(o.Button, {
        variant: "secondary",
        size: "sm",
        text: E.intl.string(b.default.ymq8WQ),
        onClick: D
      }), null != n && null != j && (0, r.jsx)(o.Button, {
        variant: "secondary",
        size: "sm",
        text: E.intl.string(b.default["j/KRxc"]),
        onClick: x
      })]
    })
  })
}