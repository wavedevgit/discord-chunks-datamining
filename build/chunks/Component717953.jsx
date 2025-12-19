/** Chunk was on web.js **/
/** chunk id: 717953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk266454 = require("./266454.js"),
  Chunk581883 = require("./581883.js"),
  Chunk36982 = require("./36982.js"),
  Chunk583901 = require("./583901.jsx"),
  Chunk576157 = require("./576157.js"),
  Chunk831989 = require("./831989.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk485492 = require("./485492.js");

function O() {
  return (0, Chunk54381.jsxs)("svg", {
    className: Chunk485492.newRing,
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

function v(e) {
  let {
    isDisabled: t,
    onSelect: n
  } = e, a = (0, l.e7)([_.Z], () => {
    var e, t;
    return null == (t = _.Z.settings.appearance) || null == (e = t.clientThemeSettings) ? true : e.customUserThemeSettings
  }), {
    shouldShowNewBadge: v,
    markNewBadgeAsDismissed: S
  } = (0, g.w)(), I = (0, p.Nj)(c.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), T = (0, f.ZP)(), C = (0, d.wjy)(T) ? y.darkOverlay : y.lightOverlay, A = null != a && null != a.colors && a.colors.length > 0, N = (0, l.e7)([m.Z], () => m.Z.getSavedCustomTheme()), P = A, R = A || null != N, w = i.useMemo(() => {
    let e, t;
    if (A) e = a.colors, t = a.gradientAngle;
    else {
      if (null === N) return;
      e = N.colors, t = N.gradient_angle
    }
    let n = e[0];
    return e.length > 1 && (n = "linear-gradient(".concat(t, "deg, ").concat(e.join(", "), ")")), {
      background: "var(--background-gradient), ".concat(n)
    }
  }, [A, a, N]), D = R ? u.Z.unsafe_rawColors.WHITE.css : true, x = i.useCallback(() => {
    v && S(), null == n || n()
  }, [v, S, n]);
  return (0, r.jsxs)("div", {
    className: y.badgeContainer,
    children: [(0, r.jsxs)(h.S4, {
      onSelect: t ? true : x,
      isSelected: false,
      showSelectionCircle: P,
      name: b.intl.string(E.default.KSBBpC),
      className: o()(y.container, R && C, t && y.disabled),
      showBadge: false,
      showLockedBadge: false,
      style: w,
      children: [!I && !R && (0, r.jsx)(O, {}), (0, r.jsx)("div", {
        className: y.borderOverlay
      }), (0, r.jsx)(s.V3v, {
        color: D,
        className: y.paletteIcon
      })]
    }), v && (0, r.jsx)(d.IGR, {
      className: y.newBadge,
      text: b.intl.string(b.t.y2b7CA),
      color: u.Z.unsafe_rawColors.RED_430.css
    })]
  })
}