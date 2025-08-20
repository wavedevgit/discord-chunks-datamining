/** Chunk was on 89311 **/
/** chunk id: 296768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
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
let I = e => {
  let {
    game: t,
    onClose: n,
    trackClick: i
  } = e, l = (0, c.e7)([m.Z], () => m.Z.getApplication(t.applicationId));
  return (0, r.jsx)(u.ua7, {
    text: t.name,
    children: e => {
      var a, s;
      return (0, r.jsx)(u.P3F, (a = y({}, e), s = s = {
        className: b.similarGameImageClickable,
        onClick: async () => {
          i(f.as.ClickSimilarGame, t.applicationId), (0, u.ZDy)(() => Promise.resolve(e => (0, r.jsx)(h.default, y({
            applicationId: t.applicationId,
            source: f.m1.SimilarGames
          }, e)))), await new Promise(e => setTimeout(e, 10)), n()
        },
        children: (0, r.jsx)(j.C, {
          game: t,
          application: l,
          className: b.similarGameImage,
          size: j.Z.SMALL
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e))
      }), a))
    }
  })
};

function P(e) {
  let {
    applicationId: t,
    onClose: n,
    trackAction: l,
    similarGames: s,
    similarGamesError: m
  } = e, f = (0, c.e7)([g.Z, p.Z], () => {
    let e = true === g.Z.getSimilarGames(t) && null == g.Z.getSimilarGamesError(t),
      n = s.some(e => p.Z.isFetching(e));
    return e || n
  }), j = (0, c.Wu)([p.Z], () => s.map(e => p.Z.getGame(e)).filter(e => null != e).filter(e => (0, x.z6)(e.applicationId)).slice(0, 5));
  return (i.useEffect(() => {
    s.length > 0 && d.Z.getDetectableGamesSupplemental([t, ...s])
  }, [t, s]), f && null == m) ? (0, r.jsxs)("div", {
    children: [(0, r.jsx)("div", {
      className: a()(b.loadingHeading, O.sectionHeader)
    }), (0, r.jsx)("div", {
      className: a()(O.row, O.gapLg),
      children: o().range(0, 5).map(e => (0, r.jsx)("div", {
        className: b.loadingArtwork
      }, e))
    })]
  }) : (f || 0 !== j.length) && null == m ? (0, r.jsxs)("div", {
    children: [(0, r.jsx)(u.X6q, {
      className: O.sectionHeader,
      variant: "text-md/semibold",
      color: "header-primary",
      children: v.intl.string(v.t["6rLyQE"])
    }), (0, r.jsx)("div", {
      className: b.similarGames,
      style: {},
      children: j.map(e => (0, r.jsx)(I, {
        game: e,
        onClose: n,
        trackClick: l
      }, e.applicationId))
    })]
  }) : null
}