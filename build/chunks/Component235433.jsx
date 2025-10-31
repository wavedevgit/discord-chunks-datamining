/** Chunk was on web.js **/
/** chunk id: 235433, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
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
  Chunk18438 = require("./18438.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk150039 = require("./150039.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk352609 = require("./352609.js"),
  Chunk147164 = require("./147164.js");

function v(e) {
  let {
    user: t,
    guildId: n,
    className: v
  } = e, I = u.JH.useExperiment({
    location: "DisplayNameStylesSection"
  }).enabled, T = p.ZP.canUsePremiumProfileCustomization(t), {
    analyticsLocations: S
  } = (0, l.ZP)(), {
    userDisplayNameStyles: A,
    guildDisplayNameStyles: C,
    pendingDisplayNameStyles: N,
    pendingErrors: R
  } = (0, h.mD)(t, n), P = [];
  I && P.push(a.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE);
  let [w, D] = (0, c.US)(P), x = w === a.z.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE, L = (0, i.useCallback)(() => {
    D(E.L.TAKE_ACTION), _.default.track(g.rMx.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, d.I)({
      analyticsLocations: S,
      guildId: n
    })
  }, [S, D, n]), M = (0, i.useCallback)(() => {
    (0, s.NI)(null), _.default.track(g.rMx.DISPLAY_NAME_STYLES_REMOVED)
  }, []), k = (0, i.useCallback)(() => {
    (0, f.N_)(null)
  }, []), j = true !== N || (null != n ? null != C : null != A);
  if (!I && !j) return null;
  let U = true !== N ? N : C;
  return (0, r.jsx)(m.Z, {
    title: b.intl.string(y.default["86GtGH"]),
    titleIcon: x ? (0, r.jsx)(o.IGR, {
      text: b.intl.string(b.t.y2b7CA),
      className: O.newBadge
    }) : true,
    className: v,
    showPremiumIcon: T,
    errors: R,
    children: (0, r.jsxs)("div", {
      className: O.buttonsContainer,
      children: [I && (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "sm",
        text: b.intl.string(y.default.vJqrIg),
        onClick: L
      }), null == n && j && (0, r.jsx)(o.Button, {
        variant: "secondary",
        size: "sm",
        text: b.intl.string(y.default.ymq8WQ),
        onClick: M
      }), null != n && null != U && (0, r.jsx)(o.Button, {
        variant: "secondary",
        size: "sm",
        text: b.intl.string(y.default["j/KRxc"]),
        onClick: k
      })]
    })
  })
}