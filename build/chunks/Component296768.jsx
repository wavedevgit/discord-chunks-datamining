/** Chunk was on 89311 **/
/** chunk id: 296768, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
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
let P = e => {
  let {
    game: t,
    onClose: r,
    trackClick: i
  } = e, l = (0, c.e7)([m.Z], () => m.Z.getApplication(t.applicationId));
  return (0, n.jsx)(u.ua7, {
    text: t.name,
    children: e => {
      var a, s;
      return (0, n.jsx)(u.P3F, (a = y({}, e), s = s = {
        className: b.similarGameImageClickable,
        onClick: async () => {
          i(f.as.ClickSimilarGame, t.applicationId), (0, u.ZDy)(() => Promise.resolve(e => (0, n.jsx)(v.default, y({
            applicationId: t.applicationId,
            source: f.m1.SimilarGames
          }, e)))), await new Promise(e => setTimeout(e, 10)), r()
        },
        children: (0, n.jsx)(x.C, {
          game: t,
          application: l,
          className: b.similarGameImage,
          size: x.Z.SMALL
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e))
      }), a))
    }
  })
};

function w(e) {
  let {
    applicationId: t,
    onClose: r,
    trackAction: l,
    similarGames: s,
    similarGamesError: m
  } = e, f = (0, c.e7)([g.Z, p.Z], () => {
    let e = true === g.Z.getSimilarGames(t) && null == g.Z.getSimilarGamesError(t),
      r = s.some(e => p.Z.isFetching(e));
    return e || r
  }), x = (0, c.Wu)([p.Z], () => s.map(e => p.Z.getGame(e)).filter(e => null != e).filter(e => (0, j.z6)(e.applicationId)).slice(0, 5));
  return (i.useEffect(() => {
    s.length > 0 && d.Z.getDetectableGamesSupplemental([t, ...s])
  }, [t, s]), f && null == m) ? (0, n.jsxs)("div", {
    children: [(0, n.jsx)("div", {
      className: a()(b.loadingHeading, O.sectionHeader)
    }), (0, n.jsx)("div", {
      className: a()(O.row, O.gapLg),
      children: o().range(0, 5).map(e => (0, n.jsx)("div", {
        className: b.loadingArtwork
      }, e))
    })]
  }) : (f || 0 !== x.length) && null == m ? (0, n.jsxs)("div", {
    children: [(0, n.jsx)(u.X6q, {
      className: O.sectionHeader,
      variant: "text-md/semibold",
      color: "header-primary",
      children: h.intl.string(h.t["6rLyQE"])
    }), (0, n.jsx)("div", {
      className: b.similarGames,
      style: {},
      children: x.map(e => (0, n.jsx)(P, {
        game: e,
        onClose: r,
        trackClick: l
      }, e.applicationId))
    })]
  }) : null
}