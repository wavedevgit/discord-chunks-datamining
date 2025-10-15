/** Chunk was on 34134 **/
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
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk574570 = require("./574570.js");

function v(e) {
  for (var a = 1; a < arguments.length; a++) {
    var r = null != arguments[a] ? arguments[a] : {},
      i = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), i.forEach(function(a) {
      var i;
      i = r[a], a in e ? Object.defineProperty(e, a, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[a] = i
    })
  }
  return e
}
let y = e => {
  let {
    game: a
  } = e, r = (0, s.e7)([d.Z], () => d.Z.getApplication(a.applicationId));
  return (0, i.jsx)(_.aML, {
    text: a.name,
    children: e => {
      var t, n;
      return (0, i.jsx)(_.P3F, (t = v({}, e), n = n = {
        className: h.gameClickable,
        onClick: () => {
          (0, _.ZDy)(() => Promise.resolve(e => (0, i.jsx)(k.default, v({
            applicationId: a.applicationId,
            source: b.m1.GameSheet
          }, e))))
        },
        children: (0, i.jsx)(w.C, {
          game: a,
          application: r,
          className: h.coverArt,
          size: w.Z.SMALL
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, a) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          r.push.apply(r, i)
        }
        return r
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  })
};

function j(e) {
  let {
    applications: a,
    onClose: r,
    transitionState: n
  } = e;
  (0, p.Z)(a), t.useEffect(() => {
    a.length > 1 && m.Z.getDetectableGamesSupplemental(a)
  }, [a]);
  let c = (0, s.e7)([f.Z], () => a.some(e => f.Z.isFetching(e))),
    _ = (0, s.e7)([f.Z], () => a.some(e => f.Z.didFetchingFail(e))),
    d = (0, s.Wu)([f.Z], () => a.map(e => f.Z.getGame(e)).filter(e => null != e).filter(e => (0, u.z6)(e.applicationId)).slice(0, 10));
  return c && !_ ? (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      className: o()(h.loadingHeading, h.sectionHeader)
    }), (0, i.jsx)("div", {
      className: o()(h.row, h.gapLg),
      children: l().range(0, a.length).map(e => (0, i.jsx)("div", {
        className: h.loadingArtwork
      }, e))
    })]
  }) : !c && 0 === d.length || _ ? null : (0, i.jsx)(g.Modal, {
    title: I.intl.string(I.t["D+DkEH"]),
    transitionState: n,
    onClose: r,
    actions: [],
    children: (0, i.jsx)("div", {
      className: h.container,
      children: d.map(e => (0, i.jsx)(y, {
        game: e
      }, e.applicationId))
    })
  })
}