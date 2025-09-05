/** Chunk was on 40826 **/
/** chunk id: 429352, original params: e,a,r (module,exports,require) **/
require.d(exports, {
  default: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk669764 = require("./669764.js"),
  Chunk810568 = require("./810568.js"),
  Chunk774073 = require("./774073.js"),
  Chunk426482 = require("./426482.jsx"),
  Chunk644941 = require("./644941.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk83406 = require("./83406.js");

function y(e) {
  for (var a = 1; a < arguments.length; a++) {
    var r = null != arguments[a] ? arguments[a] : {},
      t = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), t.forEach(function(a) {
      var t;
      t = r[a], a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[a] = t
    })
  }
  return e
}
let h = e => {
  let {
    game: a
  } = e, r = (0, g.e7)([p.Z], () => p.Z.getApplication(a.applicationId));
  return (0, t.jsx)(_.ua7, {
    text: a.name,
    children: e => {
      var i, n;
      return (0, t.jsx)(_.P3F, (i = y({}, e), n = n = {
        className: v.gameClickable,
        onClick: () => {
          (0, _.ZDy)(() => Promise.resolve(e => (0, t.jsx)(w.default, y({
            applicationId: a.applicationId,
            source: b.m1.QuestBar
          }, e))))
        },
        children: (0, t.jsx)(k.C, {
          game: a,
          application: r,
          className: v.coverArt,
          size: k.Z.SMALL
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(n)) : (function(e, a) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r.push.apply(r, t)
        }
        return r
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(n, e))
      }), i))
    }
  })
};

function j(e) {
  let {
    applications: a,
    onClose: r,
    transitionState: n
  } = e;
  (0, d.Z)(a), i.useEffect(() => {
    a.length > 1 && m.Z.getDetectableGamesSupplemental(a)
  }, [a]);
  let c = (0, g.e7)([f.Z], () => a.some(e => f.Z.isFetching(e))),
    _ = (0, g.e7)([f.Z], () => a.some(e => f.Z.didFetchingFail(e))),
    p = (0, g.Wu)([f.Z], () => a.map(e => f.Z.getGame(e)).filter(e => null != e).filter(e => (0, u.z6)(e.applicationId)).slice(0, 10));
  return c && !_ ? (0, t.jsxs)("div", {
    children: [(0, t.jsx)("div", {
      className: o()(v.loadingHeading, v.sectionHeader)
    }), (0, t.jsx)("div", {
      className: o()(v.row, v.gapLg),
      children: l().range(0, a.length).map(e => (0, t.jsx)("div", {
        className: v.loadingArtwork
      }, e))
    })]
  }) : !c && 0 === p.length || _ ? null : (0, t.jsx)(s.Modal, {
    title: I.intl.string(I.t["D+DkEB"]),
    transitionState: n,
    onClose: r,
    actions: [],
    children: (0, t.jsx)("div", {
      className: v.container,
      children: p.map(e => (0, t.jsx)(h, {
        game: e
      }, e.applicationId))
    })
  })
}