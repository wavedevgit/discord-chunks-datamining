/** Chunk was on 89311 **/
/** chunk id: 296768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk812206 = require("./812206.js"),
  Chunk669764 = require("./669764.js"),
  Chunk810568 = require("./810568.js"),
  Chunk839392 = require("./839392.js"),
  Chunk774073 = require("./774073.js"),
  Chunk426482 = require("./426482.jsx"),
  Chunk644941 = require("./644941.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk456486 = require("./456486.js"),
  Chunk276145 = require("./276145.js");
let b = e => {
  let {
    game: t,
    onClose: n,
    trackClick: l
  } = e, r = (0, c.e7)([f.Z], () => f.Z.getApplication(t.applicationId));
  return (0, i.jsx)(d.u, {
    asContainer: true,
    text: t.name,
    children: (0, i.jsx)(u.P3F, {
      className: I.similarGameImageClickable,
      onClick: async () => {
        l(p.as.ClickSimilarGame, t.applicationId), (0, u.ZDy)(() => Promise.resolve(e => (0, i.jsx)(j.default, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({
          applicationId: t.applicationId,
          source: p.m1.SimilarGames
        }, e)))), await new Promise(e => setTimeout(e, 10)), n()
      },
      children: (0, i.jsx)(v.C, {
        game: t,
        application: r,
        className: I.similarGameImage,
        size: v.Z.SMALL
      })
    })
  })
};

function E(e) {
  let {
    applicationId: t,
    onClose: n,
    trackAction: r,
    similarGames: s,
    similarGamesError: d
  } = e, f = (0, c.e7)([x.Z, g.Z], () => {
    let e = true === x.Z.getSimilarGames(t) && null == x.Z.getSimilarGamesError(t),
      n = s.some(e => g.Z.isFetching(e));
    return e || n
  }), p = (0, c.Wu)([g.Z], () => s.map(e => g.Z.getGame(e)).filter(e => null != e).filter(e => (0, h.z6)(e.applicationId)).slice(0, 5));
  return (l.useEffect(() => {
    s.length > 0 && m.Z.getDetectableGamesSupplemental([t, ...s])
  }, [t, s]), f && null == d) ? (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      className: a()(I.loadingHeading, y.sectionHeader)
    }), (0, i.jsx)("div", {
      className: a()(y.row, y.gapLg),
      children: o().range(0, 5).map(e => (0, i.jsx)("div", {
        className: I.loadingArtwork
      }, e))
    })]
  }) : (f || 0 !== p.length) && null == d ? (0, i.jsxs)("div", {
    children: [(0, i.jsx)(u.Heading, {
      className: y.sectionHeader,
      variant: "text-md/semibold",
      color: "header-primary",
      children: O.intl.string(O.t["6rLyQB"])
    }), (0, i.jsx)("div", {
      className: I.similarGames,
      style: {},
      children: p.map(e => (0, i.jsx)(b, {
        game: e,
        onClose: n,
        trackClick: r
      }, e.applicationId))
    })]
  }) : null
}