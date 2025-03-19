/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => g
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(846519),
  o = n(481060),
  c = n(259580),
  A = n(81543),
  d = n(388032),
  u = n(155147);
let g = function(e) {
  let {
    items: t,
    carouselClassName: n,
    paginationCaretClassName: s,
    intervalBetweenAutomaticItemRotations: g,
    renderItem: f
  } = e, m = i.useMemo(() => new l.Xp, []), [p, h] = i.useState(A.n.LEFT), [C, b] = i.useState(0), [v, x] = i.useState(!1), [N, j] = i.useState(!1), E = i.useCallback((e, t) => {
    b(n => {
      let r = n + t;
      return r < 0 ? r = e.length - 1 : r > e.length - 1 && (r = 0), r
    })
  }, [b]), I = i.useCallback(() => {
    !N && E(t, 1)
  }, [E, t, N]), O = i.useCallback(() => {
    !N && E(t, -1)
  }, [E, t, N]);
  return i.useEffect(() => {
    null != g && (v ? v && m.stop() : m.start(g, I))
  }, [v, m, g, I]), (0, r.jsxs)("div", {
    className: u.root,
    onMouseEnter: () => x(!0),
    onMouseLeave: () => x(!1),
    children: [(0, r.jsx)(o.P3F, {
      className: a()(u.carouselCaret, s),
      onClick: O,
      onMouseEnter: () => h(A.n.RIGHT),
      ignoreKeyPress: N,
      children: (0, r.jsx)(c.Z, {
        direction: c.Z.Directions.LEFT,
        height: 48,
        width: 48,
        "aria-label": d.NW.string(d.t.FAmEgo)
      })
    }), (0, r.jsx)(A.Z, {
      step: C,
      direction: p,
      onAnimationStart: () => j(!0),
      onAnimationEnd: () => j(!1),
      className: a()(u.carousel, n),
      children: f(t[C])
    }), (0, r.jsx)(o.P3F, {
      className: a()(u.carouselCaret, s),
      onClick: I,
      onMouseEnter: () => h(A.n.LEFT),
      ignoreKeyPress: N,
      children: (0, r.jsx)(c.Z, {
        direction: c.Z.Directions.RIGHT,
        height: 48,
        width: 48,
        "aria-label": d.NW.string(d.t.Fa8W1d)
      })
    })]
  })
}