/** Chunk was on 89311 **/
/** chunk id: 296768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
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
  Chunk452379 = require("./452379.js"),
  Chunk325253 = require("./325253.js");
let O = e => {
  let {
    game: t,
    onClose: n,
    trackClick: i
  } = e, r = (0, c.e7)([f.Z], () => f.Z.getApplication(t.applicationId));
  return (0, a.jsx)(d.u, {
    asContainer: true,
    text: t.name,
    children: (0, a.jsx)(u.P3F, {
      className: y.similarGameImageClickable,
      onClick: async () => {
        i(p.as.ClickSimilarGame, t.applicationId), (0, u.ZDy)(() => Promise.resolve(e => (0, a.jsx)(j.default, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              a = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), a.forEach(function(t) {
              var a;
              a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = a
            })
          }
          return e
        }({
          applicationId: t.applicationId,
          source: p.m1.SimilarGames
        }, e)))), await new Promise(e => setTimeout(e, 10)), n()
      },
      children: (0, a.jsx)(h.C, {
        game: t,
        application: r,
        className: y.similarGameImage,
        size: h.Z.SMALL
      })
    })
  })
};

function w(e) {
  let {
    applicationId: t,
    onClose: n,
    trackAction: r,
    similarGames: o,
    similarGamesError: d
  } = e, f = (0, c.e7)([x.Z, g.Z], () => {
    let e = true === x.Z.getSimilarGames(t) && null == x.Z.getSimilarGamesError(t),
      n = o.some(e => g.Z.isFetching(e));
    return e || n
  }), p = (0, c.Wu)([g.Z], () => o.map(e => g.Z.getGame(e)).filter(e => null != e).filter(e => (0, v.z6)(e.applicationId)).slice(0, 5));
  return (i.useEffect(() => {
    o.length > 0 && m.Z.getDetectableGamesSupplemental([t, ...o])
  }, [t, o]), f && null == d) ? (0, a.jsxs)("div", {
    children: [(0, a.jsx)("div", {
      className: l()(y.loadingHeading, I.sectionHeader)
    }), (0, a.jsx)("div", {
      className: l()(I.row, I.gapLg),
      children: s().range(0, 5).map(e => (0, a.jsx)("div", {
        className: y.loadingArtwork
      }, e))
    })]
  }) : (f || 0 !== p.length) && null == d ? (0, a.jsxs)("div", {
    children: [(0, a.jsx)(u.Heading, {
      className: I.sectionHeader,
      variant: "text-md/semibold",
      color: "text-strong",
      children: b.intl.string(b.t["6rLyQB"])
    }), (0, a.jsx)("div", {
      className: y.similarGames,
      style: {},
      children: p.map(e => (0, a.jsx)(O, {
        game: e,
        onClose: n,
        trackClick: r
      }, e.applicationId))
    })]
  }) : null
}