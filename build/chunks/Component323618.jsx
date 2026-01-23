/** Chunk was on web.js **/
/** chunk id: 323618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk934551 = require("./934551.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk826673 = require("./826673.js"),
  Chunk617617 = require("./617617.js"),
  Chunk74396 = require("./74396.js"),
  Chunk653523 = require("./653523.jsx"),
  Chunk62504 = require("./62504.js"),
  Chunk520650 = require("./520650.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk387376 = require("./387376.js");

function O() {
  return (0, r.jsxs)("svg", {
    className: b.JR,
    width: "68",
    height: "68",
    viewBox: "0 0 68 68",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, r.jsx)("rect", {
      x: "4",
      y: "4",
      width: "60",
      height: "60",
      rx: "8",
      stroke: "url(#paint0_linear_1368_16544)",
      strokeWidth: "2"
    }), (0, r.jsx)("defs", {
      children: (0, r.jsxs)("linearGradient", {
        id: "paint0_linear_1368_16544",
        x1: "33.875",
        y1: "2",
        x2: "33.875",
        y2: "65.75",
        gradientUnits: "userSpaceOnUse",
        children: [(0, r.jsx)("stop", {
          stopColor: "#B473F5"
        }), (0, r.jsx)("stop", {
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
  } = e, a = (0, l.bG)([_.A], () => {
    var e, t;
    return null == (t = _.A.settings.appearance) || null == (e = t.clientThemeSettings) ? true : e.customUserThemeSettings
  }), {
    shouldShowNewBadge: v,
    markNewBadgeAsDismissed: A
  } = (0, g.L)(), I = (0, p.JZ)(c.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT), S = (0, f.Ay)(), T = (0, d.Mwr)(S) ? b.Xu : b.VO, C = null != a && null != a.colors && a.colors.length > 0, N = (0, l.bG)([h.A], () => h.A.getSavedCustomTheme()), w = C, R = C || null != N, P = i.useMemo(() => {
    let e, t;
    if (C) e = a.colors, t = a.gradientAngle;
    else {
      if (null === N) return;
      e = N.colors, t = N.gradient_angle
    }
    let n = e[0];
    return e.length > 1 && (n = "linear-gradient(".concat(t, "deg, ").concat(e.join(", "), ")")), {
      background: "var(--background-gradient), ".concat(n)
    }
  }, [C, a, N]), D = R ? u.A.unsafe_rawColors.WHITE.css : true, x = i.useCallback(() => {
    v && A(), null == n || n()
  }, [v, A, n]);
  return (0, r.jsxs)("div", {
    className: b.fC,
    children: [(0, r.jsxs)(m.S4, {
      onSelect: t ? true : x,
      isSelected: false,
      showSelectionCircle: w,
      name: y.intl.string(E.default.KSBBpC),
      className: s()(b.kL, R && T, t && b.r9),
      showBadge: false,
      showLockedBadge: false,
      style: P,
      children: [!I && !R && (0, r.jsx)(O, {}), (0, r.jsx)("div", {
        className: b.JU
      }), (0, r.jsx)(o.PaintPaletteIcon, {
        color: D,
        className: b.vL
      })]
    }), v && (0, r.jsx)(d.LpS, {
      className: b.Ad,
      text: y.intl.string(y.t.y2b7CA),
      color: u.A.unsafe_rawColors.RED_430.css
    })]
  })
}