/** Chunk was on 47841 **/
/** chunk id: 477470, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
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
let g = function(e) {
  let {
    items: t,
    carouselClassName: n,
    paginationCaretClassName: l,
    intervalBetweenAutomaticItemRotations: g,
    renderItem: b
  } = e, m = i.useMemo(() => new a.IX, []), [p, x] = i.useState(d.f.LEFT), [h, j] = i.useState(0), [O, y] = i.useState(false), [v, A] = i.useState(false), E = i.useCallback((e, t) => {
    j(n => {
      let r = n + t;
      return r < 0 ? r = e.length - 1 : r > e.length - 1 && (r = 0), r
    })
  }, [j]), N = i.useCallback(() => {
    v || E(t, 1)
  }, [E, t, v]), _ = i.useCallback(() => {
    v || E(t, false)
  }, [E, t, v]);
  return i.useEffect(() => {
    null != g && (O ? O && m.stop() : m.start(g, N))
  }, [O, m, g, N]), (0, r.jsxs)("div", {
    className: f.zr,
    onMouseEnter: () => y(true),
    onMouseLeave: () => y(false),
    children: [(0, r.jsx)(c.DUT, {
      className: s()(f.Sx, l),
      onClick: _,
      onMouseEnter: () => x(d.f.RIGHT),
      ignoreKeyPress: v,
      children: (0, r.jsx)(o.A, {
        direction: o.A.Directions.LEFT,
        height: 48,
        width: 48,
        "aria-label": u.intl.string(u.t.FAmEgm)
      })
    }), (0, r.jsx)(d.A, {
      step: h,
      direction: p,
      onAnimationStart: () => A(true),
      onAnimationEnd: () => A(false),
      className: s()(f.Dk, n),
      children: b(t[h])
    }), (0, r.jsx)(c.DUT, {
      className: s()(f.Sx, l),
      onClick: N,
      onMouseEnter: () => x(d.f.LEFT),
      ignoreKeyPress: v,
      children: (0, r.jsx)(o.A, {
        direction: o.A.Directions.RIGHT,
        height: 48,
        width: 48,
        "aria-label": u.intl.string(u.t.Fa8W1W)
      })
    })]
  })
}