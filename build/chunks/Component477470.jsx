/** Chunk was on 39048 **/
/** chunk id: 477470, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk451988 = require("./451988.js"),
  Chunk397927 = require("./397927.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk863913 = require("./863913.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk209248 = require("./209248.js");
let m = function(e) {
  let {
    items: t,
    carouselClassName: n,
    paginationCaretClassName: l,
    intervalBetweenAutomaticItemRotations: m,
    renderItem: p
  } = e, f = i.useMemo(() => new a.IX, []), [h, b] = i.useState(d.f.LEFT), [x, j] = i.useState(0), [_, O] = i.useState(false), [v, y] = i.useState(false), A = i.useCallback((e, t) => {
    j(n => {
      let r = n + t;
      return r < 0 ? r = e.length - 1 : r > e.length - 1 && (r = 0), r
    })
  }, [j]), E = i.useCallback(() => {
    v || A(t, 1)
  }, [A, t, v]), N = i.useCallback(() => {
    v || A(t, false)
  }, [A, t, v]);
  return i.useEffect(() => {
    null != m && (_ ? _ && f.stop() : f.start(m, E))
  }, [_, f, m, E]), (0, r.jsxs)("div", {
    className: g.zr,
    onMouseEnter: () => O(true),
    onMouseLeave: () => O(false),
    children: [(0, r.jsx)(o.DUT, {
      className: s()(g.Sx, l),
      onClick: N,
      onMouseEnter: () => b(d.f.RIGHT),
      ignoreKeyPress: v,
      children: (0, r.jsx)(c.A, {
        direction: c.A.Directions.LEFT,
        height: 48,
        width: 48,
        "aria-label": u.intl.string(u.t.FAmEgm)
      })
    }), (0, r.jsx)(d.A, {
      step: x,
      direction: h,
      onAnimationStart: () => y(true),
      onAnimationEnd: () => y(false),
      className: s()(g.Dk, n),
      children: p(t[x])
    }), (0, r.jsx)(o.DUT, {
      className: s()(g.Sx, l),
      onClick: E,
      onMouseEnter: () => b(d.f.LEFT),
      ignoreKeyPress: v,
      children: (0, r.jsx)(c.A, {
        direction: c.A.Directions.RIGHT,
        height: 48,
        width: 48,
        "aria-label": u.intl.string(u.t.Fa8W1W)
      })
    })]
  })
}