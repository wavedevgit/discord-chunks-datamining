/** Chunk was on 4493 **/
r.d(t, {
  Z: () => P
}), r(47120);
var n = r(200651),
  a = r(192379),
  i = r(120356),
  o = r.n(i),
  l = r(392711),
  s = r.n(l),
  c = r(442837),
  u = r(481060),
  d = r(224706),
  p = r(812206),
  m = r(669764),
  f = r(810568),
  g = r(839392),
  _ = r(774073),
  b = r(426482),
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
  } = e, i = (0, c.e7)([p.Z], () => p.Z.getApplication(t.applicationId));
  return (0, n.jsx)(u.ua7, {
    text: t.name,
    children: e => {
      var o, l;
      return (0, n.jsx)(u.P3F, (o = j({}, e), l = l = {
        className: v.similarGameImageClickable,
        onClick: async () => {
          a(f.as.ClickSimilarGame, t.applicationId), (0, u.ZDy)(() => Promise.resolve(e => (0, n.jsx)(h.default, j({
            applicationId: t.applicationId,
            source: f.m1.SimilarGames
          }, e)))), await new Promise(e => setTimeout(e, 10)), r()
        },
        children: (0, n.jsx)(b.C, {
          game: t,
          application: i,
          className: v.similarGameImage,
          size: b.Z.SMALL
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(l, e))
      }), o))
    }
  })
};

function P(e) {
  let {
    applicationId: t,
    onClose: r,
    trackAction: i,
    similarGames: l,
    similarGamesError: p
  } = e, f = (0, c.e7)([g.Z, m.Z], () => {
    let e = void 0 === g.Z.getSimilarGames(t) && null == g.Z.getSimilarGamesError(t),
      r = l.some(e => m.Z.isFetching(e));
    return e || r
  }), b = (0, c.Wu)([m.Z], () => l.map(e => m.Z.getGame(e)).filter(e => null != e).filter(e => (0, _.z6)(e.applicationId)).slice(0, 5));
  return (a.useEffect(() => {
    l.length > 0 && d.Z.getDetectableGamesSupplemental([t, ...l])
  }, [t, l]), f && null == p) ? (0, n.jsxs)("div", {
    children: [(0, n.jsx)("div", {
      className: o()(v.loadingHeading, y.sectionHeader)
    }), (0, n.jsx)("div", {
      className: o()(y.row, y.gapLg),
      children: s().range(0, 5).map(e => (0, n.jsx)("div", {
        className: v.loadingArtwork
      }, e))
    })]
  }) : (f || 0 !== b.length) && null == p ? (0, n.jsxs)("div", {
    children: [(0, n.jsx)(u.X6q, {
      className: y.sectionHeader,
      variant: "text-md/semibold",
      color: "header-primary",
      children: O.NW.string(O.t["6rLyQE"])
    }), (0, n.jsx)("div", {
      className: v.similarGames,
      style: {},
      children: b.map(e => (0, n.jsx)(x, {
        game: e,
        onClose: r,
        trackClick: i
      }, e.applicationId))
    })]
  }) : null
}