/** Chunk was on 41849 (ec201fdaa2dc80fc.js) **/
r.d(t, {
  Z: () => P
}), r(47120);
var n = r(200651),
  a = r(192379),
  o = r(120356),
  i = r.n(o),
  s = r(392711),
  l = r.n(s),
  c = r(442837),
  u = r(481060),
  d = r(224706),
  p = r(812206),
  m = r(669764),
  f = r(810568),
  g = r(839392),
  b = r(774073),
  _ = r(426482),
  h = r(644941),
  O = r(388032),
  y = r(384370),
  v = r(31087);

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}
let x = e => {
  let {
    game: t,
    onClose: r,
    trackClick: a
  } = e, o = (0, c.e7)([p.Z], () => p.Z.getApplication(t.applicationId));
  return (0, n.jsx)(u.ua7, {
    text: t.name,
    children: e => {
      var i, s;
      return (0, n.jsx)(u.P3F, (i = j({}, e), s = s = {
        className: v.similarGameImageClickable,
        onClick: async () => {
          a(f.as.ClickSimilarGame, t.applicationId), (0, u.ZDy)(() => Promise.resolve(e => (0, n.jsx)(h.default, j({
            applicationId: t.applicationId,
            source: f.m1.SimilarGames
          }, e)))), await new Promise(e => setTimeout(e, 10)), r()
        },
        children: (0, n.jsx)(_.C, {
          game: t,
          application: o,
          className: v.similarGameImage,
          size: _.Z.SMALL
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
      }), i))
    }
  })
};

function P(e) {
  let {
    applicationId: t,
    onClose: r,
    trackAction: o,
    similarGames: s,
    similarGamesError: p
  } = e, f = (0, c.e7)([g.Z, m.Z], () => {
    let e = void 0 === g.Z.getSimilarGames(t) && null == g.Z.getSimilarGamesError(t),
      r = s.some(e => m.Z.isFetching(e));
    return e || r
  }), _ = (0, c.Wu)([m.Z], () => s.map(e => m.Z.getGame(e)).filter(e => null != e).filter(e => (0, b.z6)(e.applicationId)).slice(0, 5));
  return (a.useEffect(() => {
    s.length > 0 && d.Z.getDetectableGamesSupplemental([t, ...s])
  }, [t, s]), f && null == p) ? (0, n.jsxs)("div", {
    children: [(0, n.jsx)("div", {
      className: i()(v.loadingHeading, y.sectionHeader)
    }), (0, n.jsx)("div", {
      className: i()(y.row, y.gapLg),
      children: l().range(0, 5).map(e => (0, n.jsx)("div", {
        className: v.loadingArtwork
      }, e))
    })]
  }) : (f || 0 !== _.length) && null == p ? (0, n.jsxs)("div", {
    children: [(0, n.jsx)(u.X6q, {
      className: y.sectionHeader,
      variant: "text-md/semibold",
      color: "header-primary",
      children: O.NW.string(O.t["6rLyQE"])
    }), (0, n.jsx)("div", {
      className: v.similarGames,
      style: {},
      children: _.map(e => (0, n.jsx)(x, {
        game: e,
        onClose: r,
        trackClick: o
      }, e.applicationId))
    })]
  }) : null
}