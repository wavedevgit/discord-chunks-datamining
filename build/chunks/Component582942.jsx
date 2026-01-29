/** Chunk was on 13530 **/
/** chunk id: 582942, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk544420 = require("./544420.js"),
  Chunk587895 = require("./587895.js"),
  Chunk524799 = require("./524799.js"),
  Chunk409626 = require("./409626.js"),
  Chunk422069 = require("./422069.js"),
  Chunk611656 = require("./611656.js"),
  Chunk459746 = require("./459746.jsx"),
  Chunk225732 = require("./225732.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk851822 = require("./851822.js"),
  Chunk799864 = require("./799864.js");
let N = e => {
  let {
    game: t,
    onClose: l,
    trackClick: i
  } = e, a = (0, c.bG)([x.A], () => x.A.getApplication(t.applicationId));
  return (0, n.jsx)(d.m, {
    asContainer: true,
    text: t.name,
    children: (0, n.jsx)(u.DUT, {
      className: A.fS,
      onClick: async () => {
        i(g.Ws.ClickSimilarGame, t.applicationId), (0, u.mMO)(() => Promise.resolve(e => (0, n.jsx)(v.default, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(l);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
              return Object.getOwnPropertyDescriptor(l, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = l[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({
          applicationId: t.applicationId,
          source: g.Ob.SimilarGames
        }, e)))), await new Promise(e => setTimeout(e, 10)), l()
      },
      children: (0, n.jsx)(j.A, {
        game: t,
        application: a,
        className: A.n1,
        size: j.w.SMALL
      })
    })
  })
};

function O(e) {
  let {
    applicationId: t,
    onClose: l,
    trackAction: a,
    similarGames: s,
    similarGamesError: d
  } = e, x = (0, c.bG)([h.A, f.A], () => {
    let e = true === h.A.getSimilarGames(t) && null == h.A.getSimilarGamesError(t),
      l = s.some(e => f.A.isFetching(e));
    return e || l
  }), g = (0, c.yK)([f.A], () => s.map(e => f.A.getGame(e)).filter(e => null != e).filter(e => (0, p.oS)(e.applicationId)).slice(0, 5));
  return (i.useEffect(() => {
    s.length > 0 && m.A.getDetectableGamesSupplemental([t, ...s])
  }, [t, s]), x && null == d) ? (0, n.jsxs)("div", {
    children: [(0, n.jsx)("div", {
      className: r()(A.vM, y.bV)
    }), (0, n.jsx)("div", {
      className: r()(y.nM, y.iH),
      children: o().range(0, 5).map(e => (0, n.jsx)("div", {
        className: A.nn
      }, e))
    })]
  }) : (x || 0 !== g.length) && null == d ? (0, n.jsxs)("div", {
    children: [(0, n.jsx)(u.Heading, {
      className: y.bV,
      variant: "text-md/semibold",
      color: "text-strong",
      children: b.intl.string(b.t["6rLyQB"])
    }), (0, n.jsx)("div", {
      className: A.D$,
      children: g.map(e => (0, n.jsx)(N, {
        game: e,
        onClose: l,
        trackClick: a
      }, e.applicationId))
    })]
  }) : null
}