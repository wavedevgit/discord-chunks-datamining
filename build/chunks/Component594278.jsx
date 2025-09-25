/** Chunk was on 27087 **/
/** chunk id: 594278, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk81543 = require("./81543.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk297646 = require("./297646.js");
let g = function(e) {
  let {
    items: t,
    carouselClassName: n,
    paginationCaretClassName: l,
    intervalBetweenAutomaticItemRotations: g,
    renderItem: p
  } = e, f = i.useMemo(() => new a.Xp, []), [h, b] = i.useState(d.n.LEFT), [x, j] = i.useState(0), [v, _] = i.useState(false), [O, y] = i.useState(false), C = i.useCallback((e, t) => {
    j(n => {
      let r = n + t;
      return r < 0 ? r = e.length - 1 : r > e.length - 1 && (r = 0), r
    })
  }, [j]), N = i.useCallback(() => {
    O || C(t, 1)
  }, [C, t, O]), E = i.useCallback(() => {
    O || C(t, false)
  }, [C, t, O]);
  return i.useEffect(() => {
    null != g && (v ? v && f.stop() : f.start(g, N))
  }, [v, f, g, N]), (0, r.jsxs)("div", {
    className: m.root,
    onMouseEnter: () => _(true),
    onMouseLeave: () => _(false),
    children: [(0, r.jsx)(o.P3F, {
      className: s()(m.carouselCaret, l),
      onClick: E,
      onMouseEnter: () => b(d.n.RIGHT),
      ignoreKeyPress: O,
      children: (0, r.jsx)(c.Z, {
        direction: c.Z.Directions.LEFT,
        height: 48,
        width: 48,
        "aria-label": u.intl.string(u.t.FAmEgo)
      })
    }), (0, r.jsx)(d.Z, {
      step: x,
      direction: h,
      onAnimationStart: () => y(true),
      onAnimationEnd: () => y(false),
      className: s()(m.carousel, n),
      children: p(t[x])
    }), (0, r.jsx)(o.P3F, {
      className: s()(m.carouselCaret, l),
      onClick: N,
      onMouseEnter: () => b(d.n.LEFT),
      ignoreKeyPress: O,
      children: (0, r.jsx)(c.Z, {
        direction: c.Z.Directions.RIGHT,
        height: 48,
        width: 48,
        "aria-label": u.intl.string(u.t.Fa8W1d)
      })
    })]
  })
}