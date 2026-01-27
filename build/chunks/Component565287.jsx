/** Chunk was on 86142 **/
/** chunk id: 565287, original params: e,t,n (module,exports,require) **/
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
    } = e, [r, x] = s.useState(true), [v, b] = s.useState([]), [y, j] = s.useState("selection"), I = (0, l.bG)([p.default], () => p.default.isAuthenticated()), O = (0, l.bG)([d.A], () => d.A.hasLoadedExperiments), S = s.useCallback(() => {
      (0, h.OY)().then(e => {
        let {
          body: {
            capabilities: t
          }
        } = e;
        x(false), b(t)
      }).catch(() => {
        x(false), b([])
      })
    }, []);
    s.useEffect(() => {
      I ? (x(true), c.rQ({
        withAnalyticsToken: true
      }).then(() => S()).catch(() => x(false))) : S()
    }, [I, S]), s.useEffect(() => {
      (async () => {
        O || (await o.A.getLocationMetadata(), o.A.getExperiments())
      })()
    }, [O]);
    let N = v.filter(e => e !== u.tY.MEDIA_TAKEDOWN),
      C = v.includes(u.tY.MEDIA_TAKEDOWN),
      T = N.length > 0,
      R = T && C;
    s.useEffect(() => {
      !r && O && !R && (T ? j("dsa") : C && j("tida"))
    }, [r, O, R, T, C]), s.useEffect(() => {
      r || !O || T || C || n()
    }, [r, O, T, C, n]);
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
        children: r || !O ? (0, i.jsx)(a.BJc, {
          gap: 16,
          align: "center",
          justify: "center",
          style: {
            minHeight: "200px"
          },
          children: (0, i.jsx)(a.y$y, {})
        }) : (0, i.jsxs)(a.tN_, {
          width: "100%",
          activeSlide: y,
          centered: false,
          children: [(0, i.jsx)(a.q7S, {
            id: "selection",
            children: (0, i.jsx)(_.u, {
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
            children: (0, i.jsx)(f.K, {
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