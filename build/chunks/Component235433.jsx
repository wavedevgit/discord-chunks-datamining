/** Chunk was on web.js **/
/** chunk id: 235433, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk594928 = require("./594928.js"),
  Chunk829716 = require("./829716.jsx"),
  Chunk18438 = require("./18438.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk150039 = require("./150039.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk905170 = require("./905170.js"),
  Chunk147164 = require("./147164.js");

function v(e) {
  let {
    user: t,
    guildId: n,
    className: v
  } = e, S = u.JH.useExperiment({
    location: "DisplayNameStylesSection"
  }).enabled, I = _.ZP.canUsePremiumProfileCustomization(t), {
    analyticsLocations: T
  } = (0, l.ZP)(), {
    userDisplayNameStyles: A,
    guildDisplayNameStyles: C,
    pendingDisplayNameStyles: N,
    pendingErrors: P
  } = (0, m.mD)(t, n), R = [];
  S && R.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE);
  let [D, w] = (0, c.US)(R), x = D === a.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE, L = (0, i.useCallback)(() => {
    w(E.L.TAKE_ACTION), p.default.track(g.rMx.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, d.I)({
      analyticsLocations: T,
      guildId: n
    })
  }, [T, w, n]), j = (0, i.useCallback)(() => {
    (0, s.NI)(null), p.default.track(g.rMx.DISPLAY_NAME_STYLES_REMOVED)
  }, []), M = (0, i.useCallback)(() => {
    (0, f.N_)(null)
  }, []), k = true !== N || (null != n ? null != C : null != A);
  if (!S && !k) return null;
  let U = true !== N ? N : C;
  return (0, r.jsx)(h.Z, {
    title: b.intl.string(y.default["86GtGH"]),
    titleIcon: x ? (0, r.jsx)(o.IGR, {
      text: b.intl.string(b.t.y2b7CA),
      className: O.newBadge
    }) : true,
    className: v,
    showPremiumIcon: I,
    errors: P,
    children: (0, r.jsxs)("div", {
      className: O.buttonsContainer,
      children: [S && (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "sm",
        text: b.intl.string(y.default.vJqrIg),
        onClick: L
      }), null == n && k && (0, r.jsx)(o.Button, {
        variant: "secondary",
        size: "sm",
        text: b.intl.string(y.default.ymq8WQ),
        onClick: j
      }), null != n && null != U && (0, r.jsx)(o.Button, {
        variant: "secondary",
        size: "sm",
        text: b.intl.string(y.default["j/KRxc"]),
        onClick: M
      })]
    })
  })
}