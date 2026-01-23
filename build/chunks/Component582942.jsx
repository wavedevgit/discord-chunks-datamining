/** Chunk was on 13530 **/
/** chunk id: 582942, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
let A = e => {
  let {
    game: t,
    onClose: n,
    trackClick: r
  } = e, i = (0, c.bG)([f.A], () => f.A.getApplication(t.applicationId));
  return (0, l.jsx)(u.m, {
    asContainer: true,
    text: t.name,
    children: (0, l.jsx)(d.DUT, {
      className: O.fS,
      onClick: async () => {
        r(x.Ws.ClickSimilarGame, t.applicationId), (0, d.mMO)(() => Promise.resolve(e => (0, l.jsx)(v.default, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
            })
          }
          return e
        }({
          applicationId: t.applicationId,
          source: x.Ob.SimilarGames
        }, e)))), await new Promise(e => setTimeout(e, 10)), n()
      },
      children: (0, l.jsx)(h.A, {
        game: t,
        application: i,
        className: O.n1,
        size: h.w.SMALL
      })
    })
  })
};

function _(e) {
  let {
    applicationId: t,
    onClose: n,
    trackAction: i,
    similarGames: s,
    similarGamesError: u
  } = e, f = (0, c.bG)([p.A, g.A], () => {
    let e = true === p.A.getSimilarGames(t) && null == p.A.getSimilarGamesError(t),
      n = s.some(e => g.A.isFetching(e));
    return e || n
  }), x = (0, c.yK)([g.A], () => s.map(e => g.A.getGame(e)).filter(e => null != e).filter(e => (0, j.oS)(e.applicationId)).slice(0, 5));
  return (r.useEffect(() => {
    s.length > 0 && m.A.getDetectableGamesSupplemental([t, ...s])
  }, [t, s]), f && null == u) ? (0, l.jsxs)("div", {
    children: [(0, l.jsx)("div", {
      className: a()(O.vM, y.bV)
    }), (0, l.jsx)("div", {
      className: a()(y.nM, y.iH),
      children: o().range(0, 5).map(e => (0, l.jsx)("div", {
        className: O.nn
      }, e))
    })]
  }) : (f || 0 !== x.length) && null == u ? (0, l.jsxs)("div", {
    children: [(0, l.jsx)(d.Heading, {
      className: y.bV,
      variant: "text-md/semibold",
      color: "text-strong",
      children: b.intl.string(b.t["6rLyQB"])
    }), (0, l.jsx)("div", {
      className: O.D$,
      style: {},
      children: x.map(e => (0, l.jsx)(A, {
        game: e,
        onClose: n,
        trackClick: i
      }, e.applicationId))
    })]
  }) : null
}