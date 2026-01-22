/** Chunk was on web.js **/
/** chunk id: 180020, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk631670 = require("./631670.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk379848 = require("./379848.jsx"),
  Chunk259065 = require("./259065.jsx"),
  Chunk159001 = require("./159001.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk919395 = require("./919395.js"),
  Chunk128450 = require("./128450.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk927961 = require("./927961.js"),
  Chunk109046 = require("./109046.js");

function O(e) {
  let {
    user: t,
    guildId: n,
    className: O
  } = e, A = p.Ay.canUsePremiumProfileCustomization(t), {
    analyticsLocations: v
  } = (0, l.Ay)(), {
    userDisplayNameStyles: S,
    guildDisplayNameStyles: I,
    pendingDisplayNameStyles: T,
    pendingErrors: C
  } = (0, _.B0)(t, n), [N, R] = (0, c.kn)([a.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE]), w = N === a.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE, P = (0, i.useCallback)(() => {
    R(g.i.TAKE_ACTION), f.default.track(m.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, u.L)({
      analyticsLocations: v,
      guildId: n
    })
  }, [v, R, n]), D = (0, i.useCallback)(() => {
    (0, o.dM)(null), f.default.track(m.HAw.DISPLAY_NAME_STYLES_REMOVED)
  }, []), x = (0, i.useCallback)(() => {
    (0, d.mZ)(null)
  }, []), L = true !== T || (null != n ? null != I : null != S), j = true !== T ? T : I;
  return (0, r.jsx)(h.A, {
    title: E.intl.string(b.default["86GtGH"]),
    titleIcon: w ? (0, r.jsx)(s.LpS, {
      text: E.intl.string(E.t.y2b7CA),
      className: y.A
    }) : true,
    className: O,
    showPremiumIcon: A,
    errors: C,
    children: (0, r.jsxs)("div", {
      className: y.N,
      children: [(0, r.jsx)(s.Button, {
        variant: "primary",
        size: "sm",
        text: E.intl.string(b.default.vJqrIg),
        onClick: P
      }), null == n && L && (0, r.jsx)(s.Button, {
        variant: "secondary",
        size: "sm",
        text: E.intl.string(b.default.ymq8WQ),
        onClick: D
      }), null != n && null != j && (0, r.jsx)(s.Button, {
        variant: "secondary",
        size: "sm",
        text: E.intl.string(b.default["j/KRxc"]),
        onClick: x
      })]
    })
  })
}