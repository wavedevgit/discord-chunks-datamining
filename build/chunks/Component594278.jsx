/** Chunk was on 384 **/
/** chunk id: 594278, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  } = e, f = i.useMemo(() => new s.Xp, []), [h, b] = i.useState(d.n.LEFT), [x, j] = i.useState(0), [_, v] = i.useState(false), [O, C] = i.useState(false), y = i.useCallback((e, t) => {
    j(n => {
      let r = n + t;
      return r < 0 ? r = e.length - 1 : r > e.length - 1 && (r = 0), r
    })
  }, [j]), N = i.useCallback(() => {
    O || y(t, 1)
  }, [y, t, O]), E = i.useCallback(() => {
    O || y(t, false)
  }, [y, t, O]);
  return i.useEffect(() => {
    null != m && (_ ? _ && f.stop() : f.start(m, N))
  }, [_, f, m, N]), (0, r.jsxs)("div", {
    className: g.root,
    onMouseEnter: () => v(true),
    onMouseLeave: () => v(false),
    children: [(0, r.jsx)(o.P3F, {
      className: a()(g.carouselCaret, l),
      onClick: E,
      onMouseEnter: () => b(d.n.RIGHT),
      ignoreKeyPress: O,
      children: (0, r.jsx)(c.Z, {
        direction: c.Z.Directions.LEFT,
        height: 48,
        width: 48,
        "aria-label": u.intl.string(u.t.FAmEgm)
      })
    }), (0, r.jsx)(d.Z, {
      step: x,
      direction: h,
      onAnimationStart: () => C(true),
      onAnimationEnd: () => C(false),
      className: a()(g.carousel, n),
      children: p(t[x])
    }), (0, r.jsx)(o.P3F, {
      className: a()(g.carouselCaret, l),
      onClick: N,
      onMouseEnter: () => b(d.n.LEFT),
      ignoreKeyPress: O,
      children: (0, r.jsx)(c.Z, {
        direction: c.Z.Directions.RIGHT,
        height: 48,
        width: 48,
        "aria-label": u.intl.string(u.t.Fa8W1W)
      })
    })]
  })
}