/** Chunk was on 3205 **/
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
  d = n(81543),
  u = n(388032),
  m = n(155147);
let g = function(e) {
  let {
    items: t,
    carouselClassName: n,
    paginationCaretClassName: s,
    intervalBetweenAutomaticItemRotations: g,
    renderItem: p
  } = e, h = i.useMemo(() => new l.Xp, []), [f, b] = i.useState(d.n.LEFT), [x, j] = i.useState(0), [N, v] = i.useState(!1), [_, O] = i.useState(!1), y = i.useCallback((e, t) => {
    j(n => {
      let r = n + t;
      return r < 0 ? r = e.length - 1 : r > e.length - 1 && (r = 0), r
    })
  }, [j]), C = i.useCallback(() => {
    !_ && y(t, 1)
  }, [y, t, _]), I = i.useCallback(() => {
    !_ && y(t, -1)
  }, [y, t, _]);
  return i.useEffect(() => {
    null != g && (N ? N && h.stop() : h.start(g, C))
  }, [N, h, g, C]), (0, r.jsxs)("div", {
    className: m.root,
    onMouseEnter: () => v(!0),
    onMouseLeave: () => v(!1),
    children: [(0, r.jsx)(o.P3F, {
      className: a()(m.carouselCaret, s),
      onClick: I,
      onMouseEnter: () => b(d.n.RIGHT),
      ignoreKeyPress: _,
      children: (0, r.jsx)(c.Z, {
        direction: c.Z.Directions.LEFT,
        height: 48,
        width: 48,
        "aria-label": u.NW.string(u.t.FAmEgo)
      })
    }), (0, r.jsx)(d.Z, {
      step: x,
      direction: f,
      onAnimationStart: () => O(!0),
      onAnimationEnd: () => O(!1),
      className: a()(m.carousel, n),
      children: p(t[x])
    }), (0, r.jsx)(o.P3F, {
      className: a()(m.carouselCaret, s),
      onClick: C,
      onMouseEnter: () => b(d.n.LEFT),
      ignoreKeyPress: _,
      children: (0, r.jsx)(c.Z, {
        direction: c.Z.Directions.RIGHT,
        height: 48,
        width: 48,
        "aria-label": u.NW.string(u.t.Fa8W1d)
      })
    })]
  })
}