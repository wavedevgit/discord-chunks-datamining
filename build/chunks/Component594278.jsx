/** Chunk was on 9536 **/
/** chunk id: 594278, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk81543 = require("./81543.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk248803 = require("./248803.js");
let f = function(e) {
  let {
    items: t,
    carouselClassName: n,
    paginationCaretClassName: l,
    intervalBetweenAutomaticItemRotations: f,
    renderItem: m
  } = e, b = i.useMemo(() => new s.Xp, []), [p, h] = i.useState(d.n.LEFT), [x, j] = i.useState(0), [v, O] = i.useState(false), [C, y] = i.useState(false), N = i.useCallback((e, t) => {
    j(n => {
      let r = n + t;
      return r < 0 ? r = e.length - 1 : r > e.length - 1 && (r = 0), r
    })
  }, [j]), E = i.useCallback(() => {
    C || N(t, 1)
  }, [N, t, C]), I = i.useCallback(() => {
    C || N(t, false)
  }, [N, t, C]);
  return i.useEffect(() => {
    null != f && (v ? v && b.stop() : b.start(f, E))
  }, [v, b, f, E]), (0, r.jsxs)("div", {
    className: g.root,
    onMouseEnter: () => O(true),
    onMouseLeave: () => O(false),
    children: [(0, r.jsx)(o.P3F, {
      className: a()(g.carouselCaret, l),
      onClick: I,
      onMouseEnter: () => h(d.n.RIGHT),
      ignoreKeyPress: C,
      children: (0, r.jsx)(c.Z, {
        direction: c.Z.Directions.LEFT,
        height: 48,
        width: 48,
        "aria-label": u.intl.string(u.t.FAmEgm)
      })
    }), (0, r.jsx)(d.Z, {
      step: x,
      direction: p,
      onAnimationStart: () => y(true),
      onAnimationEnd: () => y(false),
      className: a()(g.carousel, n),
      children: m(t[x])
    }), (0, r.jsx)(o.P3F, {
      className: a()(g.carouselCaret, l),
      onClick: E,
      onMouseEnter: () => h(d.n.LEFT),
      ignoreKeyPress: C,
      children: (0, r.jsx)(c.Z, {
        direction: c.Z.Directions.RIGHT,
        height: 48,
        width: 48,
        "aria-label": u.intl.string(u.t.Fa8W1W)
      })
    })]
  })
}