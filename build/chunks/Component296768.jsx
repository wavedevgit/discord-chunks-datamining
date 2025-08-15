/** Chunk was on 89311 **/
/** chunk id: 296768, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
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
  Chunk226788 = require("./226788.js"),
  Chunk414642 = require("./414642.js");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}
let _ = e => {
  let {
    game: t,
    onClose: r,
    trackClick: a
  } = e, i = (0, c.e7)([m.Z], () => m.Z.getApplication(t.applicationId));
  return (0, n.jsx)(u.ua7, {
    text: t.name,
    children: e => {
      var l, o;
      return (0, n.jsx)(u.P3F, (l = y({}, e), o = o = {
        className: O.similarGameImageClickable,
        onClick: async () => {
          a(g.as.ClickSimilarGame, t.applicationId), (0, u.ZDy)(() => Promise.resolve(e => (0, n.jsx)(h.default, y({
            applicationId: t.applicationId,
            source: g.m1.SimilarGames
          }, e)))), await new Promise(e => setTimeout(e, 10)), r()
        },
        children: (0, n.jsx)(v.C, {
          game: t,
          application: i,
          className: O.similarGameImage,
          size: v.Z.SMALL
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
      }), l))
    }
  })
};

function I(e) {
  let {
    applicationId: t,
    onClose: r,
    trackAction: i,
    similarGames: o,
    similarGamesError: m
  } = e, g = (0, c.e7)([p.Z, f.Z], () => {
    let e = true === p.Z.getSimilarGames(t) && null == p.Z.getSimilarGamesError(t),
      r = o.some(e => f.Z.isFetching(e));
    return e || r
  }), v = (0, c.Wu)([f.Z], () => o.map(e => f.Z.getGame(e)).filter(e => null != e).filter(e => (0, x.z6)(e.applicationId)).slice(0, 5));
  return (a.useEffect(() => {
    o.length > 0 && d.Z.getDetectableGamesSupplemental([t, ...o])
  }, [t, o]), g && null == m) ? (0, n.jsxs)("div", {
    children: [(0, n.jsx)("div", {
      className: l()(O.loadingHeading, b.sectionHeader)
    }), (0, n.jsx)("div", {
      className: l()(b.row, b.gapLg),
      children: s().range(0, 5).map(e => (0, n.jsx)("div", {
        className: O.loadingArtwork
      }, e))
    })]
  }) : (g || 0 !== v.length) && null == m ? (0, n.jsxs)("div", {
    children: [(0, n.jsx)(u.X6q, {
      className: b.sectionHeader,
      variant: "text-md/semibold",
      color: "header-primary",
      children: j.intl.string(j.t["6rLyQE"])
    }), (0, n.jsx)("div", {
      className: O.similarGames,
      style: {},
      children: v.map(e => (0, n.jsx)(_, {
        game: e,
        onClose: r,
        trackClick: i
      }, e.applicationId))
    })]
  }) : null
}