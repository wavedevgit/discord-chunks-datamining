/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => g
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  o = n(442837),
  c = n(210753),
  A = n(77498),
  d = n(388032),
  u = n(564918);
let g = function(e) {
  let {
    applicationId: t,
    imageContainerClassName: n,
    onClick: s,
    selected: g,
    locked: f = !1,
    otherGamesCount: m = 0
  } = e, p = (0, l.dQu)(l.TVs.colors.WHITE), {
    isFetching: h,
    coverImageUrl: C
  } = (0, c.$)(t, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), b = (0, o.e7)([A.Z], () => {
    var e, n;
    return null !== (n = null === (e = A.Z.getDetectableGame(t)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : ""
  }), v = i.useCallback(() => {
    null == s || s(t)
  }, [t, s]), x = i.useMemo(() => h ? null : null == C ? (0, r.jsx)("div", {
    className: u.gameUnknownImage,
    children: (0, r.jsx)(l.IMN, {
      size: "lg"
    })
  }) : (0, r.jsx)("img", {
    className: u.gameImage,
    alt: b,
    src: C
  }), [C, h, b]);
  return (0, r.jsxs)("div", {
    className: u.selectedGame,
    children: [(0, r.jsxs)(l.P3F, {
      onClick: v,
      className: a()(n, h ? u.gameImageLoading : void 0, u.gameImageBackground),
      children: [g && (0, r.jsx)("div", {
        className: u.checkBackground,
        children: (0, r.jsx)(l.owK, {
          size: "md",
          color: "currentColor",
          secondaryColor: p.hex(),
          className: a()(u.selectedGameCheck, {
            [u.selectedGameCheckLocked]: f
          })
        })
      }), x, m > 0 && (0, r.jsx)("div", {
        className: u.remainingGame,
        children: (0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: d.NW.format(d.t.F6iMs7, {
            count: m
          })
        })
      })]
    }), (0, r.jsxs)(l.Text, {
      className: u.gameName,
      variant: "text-xs/normal",
      color: "header-primary",
      children: [b, f && (0, r.jsx)(l.mBM, {
        size: "xxs"
      })]
    })]
  })
}