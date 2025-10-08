/** Chunk was on 64982 **/
/** chunk id: 594278, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
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
  Chunk858063 = require("./858063.js");
let m = function(e) {
  let {
    items: t,
    carouselClassName: n,
    paginationCaretClassName: l,
    intervalBetweenAutomaticItemRotations: m,
    renderItem: p
  } = e, f = i.useMemo(() => new a.Xp, []), [h, x] = i.useState(d.n.LEFT), [b, j] = i.useState(0), [_, v] = i.useState(false), [C, O] = i.useState(false), y = i.useCallback((e, t) => {
    j(n => {
      let r = n + t;
      return r < 0 ? r = e.length - 1 : r > e.length - 1 && (r = 0), r
    })
  }, [j]), N = i.useCallback(() => {
    C || y(t, 1)
  }, [y, t, C]), E = i.useCallback(() => {
    C || y(t, false)
  }, [y, t, C]);
  return i.useEffect(() => {
    null != m && (_ ? _ && f.stop() : f.start(m, N))
  }, [_, f, m, N]), (0, r.jsxs)("div", {
    className: g.root,
    onMouseEnter: () => v(true),
    onMouseLeave: () => v(false),
    children: [(0, r.jsx)(o.P3F, {
      className: s()(g.carouselCaret, l),
      onClick: E,
      onMouseEnter: () => x(d.n.RIGHT),
      ignoreKeyPress: C,
      children: (0, r.jsx)(c.Z, {
        direction: c.Z.Directions.LEFT,
        height: 48,
        width: 48,
        "aria-label": u.intl.string(u.t.FAmEgo)
      })
    }), (0, r.jsx)(d.Z, {
      step: b,
      direction: h,
      onAnimationStart: () => O(true),
      onAnimationEnd: () => O(false),
      className: s()(g.carousel, n),
      children: p(t[b])
    }), (0, r.jsx)(o.P3F, {
      className: s()(g.carouselCaret, l),
      onClick: N,
      onMouseEnter: () => x(d.n.LEFT),
      ignoreKeyPress: C,
      children: (0, r.jsx)(c.Z, {
        direction: c.Z.Directions.RIGHT,
        height: 48,
        width: 48,
        "aria-label": u.intl.string(u.t.Fa8W1d)
      })
    })]
  })
}