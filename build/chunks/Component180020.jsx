/** Chunk was on 5606 **/
/** chunk id: 180020, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
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

function x(e) {
  let {
    user: t,
    guildId: n,
    className: x
  } = e, O = _.Ay.canUsePremiumProfileCustomization(t), {
    analyticsLocations: C
  } = (0, o.Ay)(), {
    userDisplayNameStyles: y,
    guildDisplayNameStyles: j,
    pendingDisplayNameStyles: T,
    pendingErrors: v
  } = (0, m.B0)(t, n), [S, I] = (0, c.kn)([l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE]), N = S === l.M.DISPLAY_NAME_STYLES_NEW_BADGE_PROFILE_PAGE, P = (0, i.useCallback)(() => {
    I(b.i.TAKE_ACTION), p.default.track(f.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, d.L)({
      analyticsLocations: C,
      guildId: n
    })
  }, [C, I, n]), R = (0, i.useCallback)(() => {
    (0, a.dM)(null), p.default.track(f.HAw.DISPLAY_NAME_STYLES_REMOVED)
  }, []), D = (0, i.useCallback)(() => {
    (0, u.mZ)(null)
  }, []), w = true !== T || (null != n ? null != j : null != y);
  return (0, r.jsx)(g.A, {
    title: h.intl.string(A.default["86GtGH"]),
    titleIcon: N ? (0, r.jsx)(s.LpS, {
      text: h.intl.string(h.t.y2b7CA),
      className: E.A
    }) : true,
    className: x,
    showPremiumIcon: O,
    errors: v,
    children: (0, r.jsxs)("div", {
      className: E.N,
      children: [(0, r.jsx)(s.Button, {
        variant: "primary",
        size: "sm",
        text: h.intl.string(A.default.vJqrIg),
        onClick: P
      }), null == n && w && (0, r.jsx)(s.Button, {
        variant: "secondary",
        size: "sm",
        text: h.intl.string(A.default.ymq8WQ),
        onClick: R
      }), null != n && null != (true !== T ? T : j) && (0, r.jsx)(s.Button, {
        variant: "secondary",
        size: "sm",
        text: h.intl.string(A.default["j/KRxc"]),
        onClick: D
      })]
    })
  })
}