/** Chunk was on web.js **/
/** chunk id: 582322, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk942857 = require("./942857.js"),
  Chunk77729 = require("./77729.js"),
  Chunk313961 = require("./313961.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk85563 = require("./85563.jsx"),
  Chunk130412 = require("./130412.jsx"),
  Chunk239466 = require("./239466.jsx"),
  Chunk155545 = require("./155545.jsx"),
  Chunk797820 = require("./797820.jsx"),
  Chunk561155 = require("./561155.jsx"),
  Chunk803102 = require("./803102.jsx"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk551580 = require("./551580.js");
let v = "#ffffff",
  S = e => y.Ay.close(e),
  I = e => y.Ay.minimize(e),
  T = (e, t) => {
    (0, b.isMac)() && !t.altKey ? y.Ay.fullscreen(e) : y.Ay.maximize(e)
  },
  C = e => {
    let {
      children: t,
      windowKey: n,
      themeOverride: i,
      hasOpenLayer: s
    } = e, l = (0, r.jsx)(o.DUT, {
      className: A.d1,
      onClick: () => S(n),
      "aria-label": O.intl.string(O.t.ZdNUj2),
      tabIndex: false,
      children: (0, r.jsx)(p.A, {})
    }), c = (0, r.jsx)(o.DUT, {
      className: A.T0,
      onClick: e => T(n, e),
      "aria-label": O.intl.string(O.t.G1u0hK),
      tabIndex: false,
      children: (0, r.jsx)(h.A, {})
    }), u = (0, r.jsx)(o.DUT, {
      className: A.T0,
      onClick: () => I(n),
      "aria-label": O.intl.string(O.t.CxOC4U),
      tabIndex: false,
      children: (0, r.jsx)(g.A, {})
    }), d = (0, r.jsxs)(r.Fragment, {
      children: [l, c, u]
    });
    return (0, r.jsx)(o.NPJ, {
      theme: i,
      children: e => (0, r.jsxs)("div", {
        className: a()(A._B, e, {
          [A.N_]: !s
        }),
        children: [(0, r.jsx)("div", {
          className: A.X1,
          children: (0, r.jsx)(f.A, {})
        }), t, d]
      })
    })
  },
  N = e => {
    let {
      focused: t,
      windowKey: n,
      frame: i,
      themeOverride: s,
      hasOpenLayer: l,
      children: u
    } = e;
    return (0, r.jsx)(o.NPJ, {
      theme: s,
      children: e => (0, r.jsxs)(o.DUT, {
        className: a()(i ? A.zY : A.kE, t ? A.in : A.Vn, e, {
          [A.N_]: !l
        }),
        onDoubleClick: () => y.Ay.maximize(n),
        tabIndex: false,
        children: [c.A.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? u : (0, r.jsxs)("div", {
          className: A.lY,
          children: [(0, r.jsx)(o.DUT, {
            className: A.gV,
            onClick: () => S(n),
            "aria-label": O.intl.string(O.t.ZdNUj2),
            tabIndex: false,
            children: (0, r.jsx)(_.A, {
              color: "#4c0000"
            })
          }), (0, r.jsx)(o.DUT, {
            className: A.wv,
            onClick: () => I(n),
            "aria-label": O.intl.string(O.t.CxOC4U),
            tabIndex: false,
            children: (0, r.jsx)(E.A, {
              color: "#975500"
            })
          }), (0, r.jsx)(o.DUT, {
            className: A.KH,
            onClick: e => T(n, e),
            "aria-label": O.intl.string(O.t["2nM3Pk"]),
            tabIndex: false,
            children: (0, r.jsx)(m.A, {
              color: "#006500"
            })
          })]
        }), i ? (0, r.jsx)("div", {
          className: A.Th,
          children: (0, r.jsx)(f.A, {
            color: v
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
    macOSFrame: a = false,
    themeOverride: o
  } = e, c = (0, d.Us)(), f = (0, s.bG)([u.A], () => u.A.isFullscreenInContext(c)), p = (0, l.A)();
  if (f) return null;
  switch (n) {
    case b.PlatformTypes.WINDOWS:
      return (0, r.jsx)(C, {
        windowKey: i,
        themeOverride: o,
        hasOpenLayer: p
      });
    case b.PlatformTypes.OSX:
      return (0, r.jsx)(N, {
        focused: t,
        windowKey: i,
        frame: a,
        themeOverride: o,
        hasOpenLayer: p
      });
    default:
      return null
  }
}