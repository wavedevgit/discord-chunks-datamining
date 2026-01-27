/** Chunk was on 86142 **/
/** chunk id: 565287, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Kz: () => v,
  rP: () => x
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

function A(e) {
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
var x = ((r = {}).SELECTION = "selection", r.DSA = "dsa", r.TIDA = "tida", r);
let E = e => {
    let {
      transitionState: t,
      onClose: n
    } = e, [r, x] = s.useState(true), [v, y] = s.useState([]), [b, j] = s.useState("selection"), O = (0, l.bG)([p.default], () => p.default.isAuthenticated()), I = (0, l.bG)([u.A], () => u.A.hasLoadedExperiments), S = s.useCallback(() => {
      (0, h.OY)().then(e => {
        let {
          body: {
            capabilities: t
          }
        } = e;
        x(false), y(t)
      }).catch(() => {
        x(false), y([])
      })
    }, []);
    s.useEffect(() => {
      O ? (x(true), c.rQ({
        withAnalyticsToken: true
      }).then(() => S()).catch(() => x(false))) : S()
    }, [O, S]), s.useEffect(() => {
      (async () => {
        I || (await o.A.getLocationMetadata(), o.A.getExperiments())
      })()
    }, [I]);
    let N = v.filter(e => e !== d.tY.MEDIA_TAKEDOWN),
      C = v.includes(d.tY.MEDIA_TAKEDOWN),
      T = N.length > 0,
      R = T && C;
    s.useEffect(() => {
      !r && I && !R && (T ? j("dsa") : C && j("tida"))
    }, [r, I, R, T, C]), s.useEffect(() => {
      r || !I || T || C || n()
    }, [r, I, T, C, n]);
    let w = s.useCallback(e => {
        j(e)
      }, []),
      P = s.useCallback(() => {
        j("selection")
      }, []),
      k = s.useCallback(() => {
        (0, a.mMO)(() => Promise.resolve(e => (0, i.jsx)(E, A({}, e))), {
          dismissable: false
        })
      }, []),
      L = s.useCallback(e => null != e ? (0, i.jsx)(a.jlY, {
        className: m.q,
        "data-migration-pending": true,
        children: e
      }) : null, []);
    return (0, i.jsx)(a.EOs, {
      transitionState: t,
      parentComponent: "UnauthenticatedReportForm",
      "data-migration-pending": true,
      children: (0, i.jsx)(a.$mQ, {
        className: m.k,
        "data-migration-pending": true,
        children: r || !I ? (0, i.jsx)(a.BJc, {
          gap: 16,
          align: "center",
          justify: "center",
          style: {
            minHeight: "200px"
          },
          children: (0, i.jsx)(a.y$y, {})
        }) : (0, i.jsxs)(a.tN_, {
          width: "100%",
          activeSlide: b,
          centered: false,
          children: [(0, i.jsx)(a.q7S, {
            id: "selection",
            children: (0, i.jsx)(f.u, {
              onNavigate: w
            })
          }), (0, i.jsx)(a.q7S, {
            id: "dsa",
            children: (0, i.jsx)(g.c, {
              showBackButton: R,
              onBack: R ? P : true,
              dsaCapabilities: N,
              renderFooter: L,
              onClose: n,
              onReopen: k
            })
          }), (0, i.jsx)(a.q7S, {
            id: "tida",
            children: (0, i.jsx)(_.K, {
              showBackButton: R,
              onBack: R ? P : true,
              renderFooter: L,
              onClose: n,
              onReopen: k
            })
          })]
        })
      })
    })
  },
  v = () => (s.useEffect(() => {
    (0, a.mMO)(() => Promise.resolve(e => (0, i.jsx)(E, A({}, e))), {
      dismissable: false
    })
  }, []), null)