/** Chunk was on web.js **/
/** chunk id: 717953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk44315 = require("./44315.js"),
  Chunk266454 = require("./266454.js"),
  Chunk581883 = require("./581883.js"),
  Chunk36982 = require("./36982.js"),
  Chunk583901 = require("./583901.jsx"),
  Chunk576157 = require("./576157.js"),
  Chunk231338 = require("./231338.js"),
  Chunk994838 = require("./994838.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk617385 = require("./617385.js");

function v() {
  return (0, Chunk54381.jsxs)("svg", {
    className: Chunk617385.newRing,
    width: "68",
    height: "68",
    viewBox: "0 0 68 68",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, Chunk54381.jsx)("rect", {
      x: "4",
      y: "4",
      width: "60",
      height: "60",
      rx: "8",
      stroke: "url(#paint0_linear_1368_16544)",
      strokeWidth: "2"
    }), (0, Chunk54381.jsx)("defs", {
      children: (0, Chunk54381.jsxs)("linearGradient", {
        id: "paint0_linear_1368_16544",
        x1: "33.875",
        y1: "2",
        x2: "33.875",
        y2: "65.75",
        gradientUnits: "userSpaceOnUse",
        children: [(0, Chunk54381.jsx)("stop", {
          stopColor: "#B473F5"
        }), (0, Chunk54381.jsx)("stop", {
          offset: "1",
          stopColor: "#E292AA"
        })]
      })
    })]
  })
}

function I(e) {
  let {
    isDisabled: t,
    onSelect: n
  } = e, a = (0, l.e7)([p.Z], () => {
    var e, t;
    return null == (t = p.Z.settings.appearance) || null == (e = t.clientThemeSettings) ? true : e.customUserThemeSettings
  }), {
    shouldShowNewBadge: I,
    markNewBadgeAsDismissed: T
  } = (0, g.w)(), S = (0, _.Nj)(c.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), A = (0, d.ZP)(), C = (0, u.wjy)(A) ? O.darkOverlay : O.lightOverlay, N = null != a && null != a.colors && a.colors.length > 0, R = (0, l.e7)([h.Z], () => h.Z.getSavedCustomTheme()), P = N, D = N || null != R, w = i.useMemo(() => {
    let e, t;
    if (N) e = a.colors, t = a.gradientAngle;
    else {
      if (null === R) return;
      e = R.colors, t = R.gradient_angle
    }
    let n = e[0];
    return e.length > 1 && (n = "linear-gradient(".concat(t, "deg, ").concat(e.join(", "), ")")), {
      background: "var(--background-gradient), ".concat(n)
    }
  }, [N, a, R]), L = (0, f.Sl)(E.Il.WHITE).hex, x = (0, f.Sl)(E.Il.RED_430).hex, M = D ? L : true, j = i.useCallback(() => {
    I && T(), null == n || n()
  }, [I, T, n]);
  return (0, r.jsxs)("div", {
    className: O.badgeContainer,
    children: [(0, r.jsxs)(m.S4, {
      onSelect: t ? true : j,
      isSelected: false,
      showSelectionCircle: P,
      name: y.intl.string(b.default.KSBBpC),
      className: o()(O.container, D && C, t && O.disabled),
      showBadge: false,
      showLockedBadge: false,
      style: w,
      children: [!S && !D && (0, r.jsx)(v, {}), (0, r.jsx)("div", {
        className: O.borderOverlay
      }), (0, r.jsx)(s.V3v, {
        color: M,
        className: O.paletteIcon
      })]
    }), I && (0, r.jsx)(u.IGR, {
      className: O.newBadge,
      text: y.intl.string(y.t.y2b7CA),
      color: x
    })]
  })
}