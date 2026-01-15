/** Chunk was on web.js **/
/** chunk id: 151851, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk350810 = require("./350810.js"),
  Chunk579806 = require("./579806.js"),
  Chunk358221 = require("./358221.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk754347 = require("./754347.jsx"),
  Chunk428548 = require("./428548.jsx"),
  Chunk718759 = require("./718759.jsx"),
  Chunk679219 = require("./679219.jsx"),
  Chunk835225 = require("./835225.jsx"),
  Chunk939039 = require("./939039.jsx"),
  Chunk117795 = require("./117795.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk94879 = require("./94879.js");
let S = "#ffffff",
  I = e => y.ZP.close(e),
  T = e => y.ZP.minimize(e),
  C = (e, t) => {
    (0, b.isMac)() && !t.altKey ? y.ZP.fullscreen(e) : y.ZP.maximize(e)
  },
  A = e => {
    let {
      children: t,
      windowKey: n,
      themeOverride: i,
      hasOpenLayer: o
    } = e, l = (0, r.jsx)(s.P3F, {
      className: v.winButtonClose,
      onClick: () => I(n),
      "aria-label": O.intl.string(O.t.ZdNUj2),
      tabIndex: false,
      children: (0, r.jsx)(p.Z, {})
    }), c = (0, r.jsx)(s.P3F, {
      className: v.winButtonMinMax,
      onClick: e => C(n, e),
      "aria-label": O.intl.string(O.t.G1u0hK),
      tabIndex: false,
      children: (0, r.jsx)(h.Z, {})
    }), u = (0, r.jsx)(s.P3F, {
      className: v.winButtonMinMax,
      onClick: () => T(n),
      "aria-label": O.intl.string(O.t.CxOC4U),
      tabIndex: false,
      children: (0, r.jsx)(g.Z, {})
    }), d = (0, r.jsxs)(r.Fragment, {
      children: [l, c, u]
    });
    return (0, r.jsx)(s.f6W, {
      theme: i,
      children: e => (0, r.jsxs)("div", {
        className: a()(v.typeWindows, e, {
          [v.withBackgroundOverride]: !o
        }),
        children: [(0, r.jsx)("div", {
          className: v.wordmarkWindows,
          children: (0, r.jsx)(f.Z, {})
        }), t, d]
      })
    })
  },
  N = e => {
    let {
      focused: t,
      windowKey: n,
      frame: i,
      themeOverride: o,
      hasOpenLayer: l,
      children: u
    } = e;
    return (0, r.jsx)(s.f6W, {
      theme: o,
      children: e => (0, r.jsxs)(s.P3F, {
        className: a()(i ? v.typeMacOSWithFrame : v.typeMacOS, t ? v.focused : v.unfocused, e, {
          [v.withBackgroundOverride]: !l
        }),
        onDoubleClick: () => y.ZP.maximize(n),
        tabIndex: false,
        children: [c.Z.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? u : (0, r.jsxs)("div", {
          className: v.macButtons,
          children: [(0, r.jsx)(s.P3F, {
            className: v.macButtonClose,
            onClick: () => I(n),
            "aria-label": O.intl.string(O.t.ZdNUj2),
            tabIndex: false,
            children: (0, r.jsx)(_.Z, {
              color: "#4c0000"
            })
          }), (0, r.jsx)(s.P3F, {
            className: v.macButtonMinimize,
            onClick: () => T(n),
            "aria-label": O.intl.string(O.t.CxOC4U),
            tabIndex: false,
            children: (0, r.jsx)(E.Z, {
              color: "#975500"
            })
          }), (0, r.jsx)(s.P3F, {
            className: v.macButtonMaximize,
            onClick: e => C(n, e),
            "aria-label": O.intl.string(O.t["2nM3Pk"]),
            tabIndex: false,
            children: (0, r.jsx)(m.Z, {
              color: "#006500"
            })
          })]
        }), i ? (0, r.jsx)("div", {
          className: v.wordmarkMacOS,
          children: (0, r.jsx)(f.Z, {
            color: S
          })
        }) : null]
      })
    })
  };

function P(e) {
  let {
    focused: t,
    type: n,
    windowKey: i,
    macOSFrame: a = false,
    themeOverride: s
  } = e, c = (0, d.bp)(), f = (0, o.e7)([u.Z], () => u.Z.isFullscreenInContext(c)), p = (0, l.Z)();
  if (f) return null;
  switch (n) {
    case b.PlatformTypes.WINDOWS:
      return (0, r.jsx)(A, {
        windowKey: i,
        themeOverride: s,
        hasOpenLayer: p
      });
    case b.PlatformTypes.OSX:
      return (0, r.jsx)(N, {
        focused: t,
        windowKey: i,
        frame: a,
        themeOverride: s,
        hasOpenLayer: p
      });
    default:
      return null
  }
}