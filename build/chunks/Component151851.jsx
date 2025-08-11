/** Chunk was on web.js **/
/** chunk id: 151851, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk350810 = require("./350810.js"),
  Chunk579806 = require("./579806.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk358221 = require("./358221.js"),
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
  Chunk445561 = require("./445561.js");
let I = "#ffffff",
  T = e => y.ZP.close(e),
  S = e => y.ZP.minimize(e),
  A = (e, t) => {
    (0, b.isMac)() && !t.altKey ? y.ZP.fullscreen(e) : y.ZP.maximize(e)
  },
  N = e => {
    let {
      children: t,
      windowKey: n,
      themeOverride: i,
      hasOpenLayer: a
    } = e, l = (0, r.jsx)(s.P3F, {
      className: v.winButtonClose,
      onClick: () => T(n),
      "aria-label": O.intl.string(O.t.ZdNUj4),
      tabIndex: false,
      children: (0, r.jsx)(_.Z, {})
    }), c = (0, r.jsx)(s.P3F, {
      className: v.winButtonMinMax,
      onClick: e => A(n, e),
      "aria-label": O.intl.string(O.t.G1u0hI),
      tabIndex: false,
      children: (0, r.jsx)(h.Z, {})
    }), u = (0, r.jsx)(s.P3F, {
      className: v.winButtonMinMax,
      onClick: () => S(n),
      "aria-label": O.intl.string(O.t.CxOC4e),
      tabIndex: false,
      children: (0, r.jsx)(g.Z, {})
    }), d = (0, r.jsxs)(r.Fragment, {
      children: [l, c, u]
    });
    return (0, r.jsx)(s.f6W, {
      theme: i,
      children: e => (0, r.jsxs)("div", {
        className: o()(v.typeWindows, e, {
          [v.withBackgroundOverride]: !a
        }),
        children: [(0, r.jsx)("div", {
          className: v.wordmarkWindows,
          children: (0, r.jsx)(f.Z, {})
        }), t, d]
      })
    })
  },
  C = e => {
    let {
      focused: t,
      windowKey: n,
      frame: i,
      themeOverride: a,
      hasOpenLayer: l,
      children: u
    } = e;
    return (0, r.jsx)(s.f6W, {
      theme: a,
      children: e => (0, r.jsxs)(s.P3F, {
        className: o()(i ? v.typeMacOSWithFrame : v.typeMacOS, t ? v.focused : v.unfocused, e, {
          [v.withBackgroundOverride]: !l
        }),
        onDoubleClick: () => y.ZP.maximize(n),
        tabIndex: false,
        children: [c.Z.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? u : (0, r.jsxs)("div", {
          className: v.macButtons,
          children: [(0, r.jsx)(s.P3F, {
            className: v.macButtonClose,
            onClick: () => T(n),
            "aria-label": O.intl.string(O.t.ZdNUj4),
            tabIndex: false,
            children: (0, r.jsx)(p.Z, {
              color: "#4c0000"
            })
          }), (0, r.jsx)(s.P3F, {
            className: v.macButtonMinimize,
            onClick: () => S(n),
            "aria-label": O.intl.string(O.t.CxOC4e),
            tabIndex: false,
            children: (0, r.jsx)(E.Z, {
              color: "#975500"
            })
          }), (0, r.jsx)(s.P3F, {
            className: v.macButtonMaximize,
            onClick: e => A(n, e),
            "aria-label": O.intl.string(O.t["2nM3Pj"]),
            tabIndex: false,
            children: (0, r.jsx)(m.Z, {
              color: "#006500"
            })
          })]
        }), i ? (0, r.jsx)("div", {
          className: v.wordmarkMacOS,
          children: (0, r.jsx)(f.Z, {
            color: I
          })
        }) : null]
      })
    })
  };

function R(e) {
  let {
    focused: t,
    type: n,
    windowKey: i,
    macOSFrame: o = false,
    themeOverride: s
  } = e, c = (0, u.bp)(), f = (0, a.e7)([d.Z], () => d.Z.isFullscreenInContext(c)), _ = (0, l.Z)();
  if (f) return null;
  switch (n) {
    case b.PlatformTypes.WINDOWS:
      return (0, r.jsx)(N, {
        windowKey: i,
        themeOverride: s,
        hasOpenLayer: _
      });
    case b.PlatformTypes.OSX:
      return (0, r.jsx)(C, {
        focused: t,
        windowKey: i,
        frame: o,
        themeOverride: s,
        hasOpenLayer: _
      });
    default:
      return null
  }
}