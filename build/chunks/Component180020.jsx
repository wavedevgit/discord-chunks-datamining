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
  } = e, v = p.Ay.canUsePremiumProfileCustomization(t), {
    analyticsLocations: A
  } = (0, l.Ay)(), {
    userDisplayNameStyles: I,
    guildDisplayNameStyles: S,
    pendingDisplayNameStyles: T,
    pendingErrors: C
  } = (0, _.B0)(t, n), [N, w] = (0, c.kn)([a.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE]), R = N === a.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE, P = (0, i.useCallback)(() => {
    w(g.i.TAKE_ACTION), f.default.track(m.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, u.L)({
      analyticsLocations: A,
      guildId: n
    })
  }, [A, w, n]), D = (0, i.useCallback)(() => {
    (0, o.dM)(null), f.default.track(m.HAw.DISPLAY_NAME_STYLES_REMOVED)
  }, []), x = (0, i.useCallback)(() => {
    (0, d.mZ)(null)
  }, []), L = true !== T || (null != n ? null != S : null != I), j = true !== T ? T : S;
  return (0, r.jsx)(h.A, {
    title: E.intl.string(y.default["86GtGH"]),
    titleIcon: R ? (0, r.jsx)(s.LpS, {
      text: E.intl.string(E.t.y2b7CA),
      className: b.A
    }) : true,
    className: O,
    showPremiumIcon: v,
    errors: C,
    children: (0, r.jsxs)("div", {
      className: b.N,
      children: [(0, r.jsx)(s.Button, {
        variant: "primary",
        size: "sm",
        text: E.intl.string(y.default.vJqrIg),
        onClick: P
      }), null == n && L && (0, r.jsx)(s.Button, {
        variant: "secondary",
        size: "sm",
        text: E.intl.string(y.default.ymq8WQ),
        onClick: D
      }), null != n && null != j && (0, r.jsx)(s.Button, {
        variant: "secondary",
        size: "sm",
        text: E.intl.string(y.default["j/KRxc"]),
        onClick: x
      })]
    })
  })
}