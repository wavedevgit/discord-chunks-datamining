/** Chunk was on 27978 **/
/** chunk id: 594961, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  KS: () => j,
  V4: () => E
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk232567 = require("./232567.js"),
  Chunk353926 = require("./353926.js"),
  Chunk82554 = require("./82554.js"),
  Chunk185625 = require("./185625.js"),
  Chunk314897 = require("./314897.js"),
  Chunk603237 = require("./603237.jsx"),
  Chunk720982 = require("./720982.jsx"),
  Chunk700511 = require("./700511.jsx"),
  Chunk738270 = require("./738270.js");

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
Chunk442837.ZP.initialize();
var E = ((r = {}).SELECTION = "selection", r.DSA = "dsa", r.TIDA = "tida", r);
let v = e => {
    let {
      transitionState: t,
      onClose: n
    } = e, [r, E] = s.useState(true), [j, b] = s.useState([]), [I, N] = s.useState("selection"), y = (0, l.e7)([g.default], () => g.default.isAuthenticated()), S = (0, l.e7)([u.Z], () => u.Z.hasLoadedExperiments), C = s.useCallback(() => {
      (0, h.Jj)().then(e => {
        let {
          body: {
            capabilities: t
          }
        } = e;
        E(false), b(t)
      }).catch(() => {
        E(false), b([])
      })
    }, []);
    s.useEffect(() => {
      y ? (E(true), c.k({
        withAnalyticsToken: true
      }).then(() => C()).catch(() => E(false))) : C()
    }, [y, C]), s.useEffect(() => {
      (async () => {
        S || (await o.Z.getLocationMetadata(), o.Z.getExperiments())
      })()
    }, [S]);
    let O = j.filter(e => e !== d.BM.MEDIA_TAKEDOWN),
      T = j.includes(d.BM.MEDIA_TAKEDOWN),
      A = O.length > 0,
      Z = A && T;
    s.useEffect(() => {
      !r && S && !Z && (A ? N("dsa") : T && N("tida"))
    }, [r, S, Z, A, T]), s.useEffect(() => {
      r || !S || A || T || n()
    }, [r, S, A, T, n]);
    let P = s.useCallback(e => {
        N(e)
      }, []),
      R = s.useCallback(() => {
        N("selection")
      }, []),
      L = s.useCallback(() => {
        (0, a.ZDy)(() => Promise.resolve(e => (0, i.jsx)(v, x({}, e))), {
          dismissable: false
        })
      }, []),
      D = s.useCallback(e => null != e ? (0, i.jsx)(a.mzw, {
        className: _.footer,
        "data-migration-pending": true,
        children: e
      }) : null, []);
    return (0, i.jsx)(a.Y0X, {
      transitionState: t,
      parentComponent: "UnauthenticatedReportForm",
      "data-migration-pending": true,
      children: (0, i.jsx)(a.hzk, {
        className: _.container,
        "data-migration-pending": true,
        children: r || !S ? (0, i.jsx)(a.Kqy, {
          gap: 16,
          align: "center",
          justify: "center",
          style: {
            minHeight: "200px"
          },
          children: (0, i.jsx)(a.$jN, {})
        }) : (0, i.jsxs)(a.MyZ, {
          width: "100%",
          activeSlide: I,
          centered: false,
          children: [(0, i.jsx)(a.Mi4, {
            id: "selection",
            children: (0, i.jsx)(p.d, {
              onNavigate: P
            })
          }), (0, i.jsx)(a.Mi4, {
            id: "dsa",
            children: (0, i.jsx)(m.n, {
              showBackButton: Z,
              onBack: Z ? R : true,
              dsaCapabilities: O,
              renderFooter: D,
              onClose: n,
              onReopen: L
            })
          }), (0, i.jsx)(a.Mi4, {
            id: "tida",
            children: (0, i.jsx)(f.e, {
              showBackButton: Z,
              onBack: Z ? R : true,
              renderFooter: D,
              onClose: n,
              onReopen: L
            })
          })]
        })
      })
    })
  },
  j = () => (Chunk473749.useEffect(() => {
    (0, Chunk481060.ZDy)(() => Promise.resolve(e => (0, i.jsx)(v, x({}, e))), {
      dismissable: false
    })
  }, []), null)