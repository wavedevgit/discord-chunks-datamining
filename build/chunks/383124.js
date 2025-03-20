/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => u
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  o = n(442837),
  A = n(210753),
  c = n(77498),
  d = n(488558);

function u(e) {
  let {
    applicationId: t,
    selected: n,
    onClick: s,
    disabled: u
  } = e, {
    isFetching: g,
    coverImageUrl: f
  } = (0, A.$)(t, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), m = (0, o.e7)([c.Z], () => {
    var e, n;
    return null !== (n = null === (e = c.Z.getDetectableGame(t)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : ""
  }), p = i.useCallback(() => {
    null == s || s(t)
  }, [t, s]), h = i.useMemo(() => g ? null : null == f ? (0, r.jsx)("div", {
    className: d.gameUnknownImage,
    children: (0, r.jsx)(l.IMN, {
      size: "lg"
    })
  }) : (0, r.jsx)("img", {
    className: d.gameImage,
    alt: m,
    src: f
  }), [f, g, m]);
  return (0, r.jsxs)("div", {
    className: a()(d.selectedGame, {
      [d.dimmed]: !n,
      [d.disabled]: u
    }),
    children: [(0, r.jsxs)(l.P3F, {
      "aria-disabled": u,
      tabIndex: u ? -1 : 0,
      onClick: u ? void 0 : p,
      className: a()(d.gameImageBackground, {
        [d.gameImageLoading]: g,
        [d.disabled]: u
      }),
      children: [n && (0, r.jsx)("div", {
        className: d.checkBackground,
        children: (0, r.jsx)(l.XZJ, {
          displayOnly: !0,
          value: n
        })
      }), h]
    }), (0, r.jsx)(l.Text, {
      className: d.gameName,
      variant: "text-xs/medium",
      color: "header-primary",
      children: m
    })]
  })
}