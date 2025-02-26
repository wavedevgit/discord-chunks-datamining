/** Chunk was on 71567 **/
"use strict";
n.d(t, {
  Z: () => m
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  o = n(442837),
  c = n(210753),
  d = n(77498),
  u = n(955016);

function m(e) {
  let {
    applicationId: t,
    selected: n,
    onClick: s
  } = e, {
    isFetching: m,
    coverImageUrl: g
  } = (0, c.$)(t, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), p = (0, o.e7)([d.Z], () => {
    var e, n;
    return null !== (n = null === (e = d.Z.getDetectableGame(t)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : ""
  }), h = i.useCallback(() => {
    null == s || s(t)
  }, [t, s]), f = i.useMemo(() => m ? null : null == g ? (0, r.jsx)("div", {
    className: u.gameUnknownImage,
    children: (0, r.jsx)(l.IMN, {
      size: "lg"
    })
  }) : (0, r.jsx)("img", {
    className: u.gameImage,
    alt: p,
    src: g
  }), [g, m, p]);
  return (0, r.jsxs)("div", {
    className: a()(u.selectedGame, {
      [u.dimmed]: !n
    }),
    children: [(0, r.jsxs)(l.P3F, {
      onClick: h,
      className: a()(u.gameImageBackground, {
        [u.gameImageLoading]: m
      }),
      children: [n && (0, r.jsx)("div", {
        className: u.checkBackground,
        children: (0, r.jsx)(l.XZJ, {
          displayOnly: !0,
          value: n
        })
      }), f]
    }), (0, r.jsx)(l.Text, {
      className: u.gameName,
      variant: "text-xs/medium",
      color: "header-primary",
      children: p
    })]
  })
}