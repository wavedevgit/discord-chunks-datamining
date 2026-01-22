/** Chunk was on 86142 **/
/** chunk id: 565287, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Kz: () => b,
  rP: () => _
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk803306 = require("./803306.js"),
  Chunk49463 = require("./49463.js"),
  Chunk17372 = require("./17372.js"),
  Chunk369053 = require("./369053.js"),
  Chunk961350 = require("./961350.js"),
  Chunk974783 = require("./974783.jsx"),
  Chunk795101 = require("./795101.jsx"),
  Chunk309829 = require("./309829.jsx"),
  Chunk136643 = require("./136643.js");

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
Chunk311907.Ay.initialize();
var _ = ((r = {}).SELECTION = "selection", r.DSA = "dsa", r.TIDA = "tida", r);
let E = e => {
    let {
      transitionState: t,
      onClose: n
    } = e, [r, _] = s.useState(true), [b, v] = s.useState([]), [j, y] = s.useState("selection"), S = (0, l.bG)([f.default], () => f.default.isAuthenticated()), N = (0, l.bG)([u.A], () => u.A.hasLoadedExperiments), O = s.useCallback(() => {
      (0, h.OY)().then(e => {
        let {
          body: {
            capabilities: t
          }
        } = e;
        _(false), v(t)
      }).catch(() => {
        _(false), v([])
      })
    }, []);
    s.useEffect(() => {
      S ? (_(true), c.rQ({
        withAnalyticsToken: true
      }).then(() => O()).catch(() => _(false))) : O()
    }, [S, O]), s.useEffect(() => {
      (async () => {
        N || (await o.A.getLocationMetadata(), o.A.getExperiments())
      })()
    }, [N]);
    let I = b.filter(e => e !== d.tY.MEDIA_TAKEDOWN),
      T = b.includes(d.tY.MEDIA_TAKEDOWN),
      C = I.length > 0,
      R = C && T;
    s.useEffect(() => {
      !r && N && !R && (C ? y("dsa") : T && y("tida"))
    }, [r, N, R, C, T]), s.useEffect(() => {
      r || !N || C || T || n()
    }, [r, N, C, T, n]);
    let w = s.useCallback(e => {
        y(e)
      }, []),
      P = s.useCallback(() => {
        y("selection")
      }, []),
      L = s.useCallback(() => {
        (0, a.mMO)(() => Promise.resolve(e => (0, i.jsx)(E, x({}, e))), {
          dismissable: false
        })
      }, []),
      k = s.useCallback(e => null != e ? (0, i.jsx)(a.jlY, {
        className: A.q,
        "data-migration-pending": true,
        children: e
      }) : null, []);
    return (0, i.jsx)(a.EOs, {
      transitionState: t,
      parentComponent: "UnauthenticatedReportForm",
      "data-migration-pending": true,
      children: (0, i.jsx)(a.$mQ, {
        className: A.k,
        "data-migration-pending": true,
        children: r || !N ? (0, i.jsx)(a.BJc, {
          gap: 16,
          align: "center",
          justify: "center",
          style: {
            minHeight: "200px"
          },
          children: (0, i.jsx)(a.y$y, {})
        }) : (0, i.jsxs)(a.tN_, {
          width: "100%",
          activeSlide: j,
          centered: false,
          children: [(0, i.jsx)(a.q7S, {
            id: "selection",
            children: (0, i.jsx)(g.u, {
              onNavigate: w
            })
          }), (0, i.jsx)(a.q7S, {
            id: "dsa",
            children: (0, i.jsx)(p.c, {
              showBackButton: R,
              onBack: R ? P : true,
              dsaCapabilities: I,
              renderFooter: k,
              onClose: n,
              onReopen: L
            })
          }), (0, i.jsx)(a.q7S, {
            id: "tida",
            children: (0, i.jsx)(m.K, {
              showBackButton: R,
              onBack: R ? P : true,
              renderFooter: k,
              onClose: n,
              onReopen: L
            })
          })]
        })
      })
    })
  },
  b = () => (s.useEffect(() => {
    (0, a.mMO)(() => Promise.resolve(e => (0, i.jsx)(E, x({}, e))), {
      dismissable: false
    })
  }, []), null)