/** Chunk was on 62765 **/
/** chunk id: 512805, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk414079 = require("./414079.jsx"),
  Chunk980009 = require("./980009.js");

function c(e) {
  let {
    hasSetEmoji: t,
    onClick: n,
    children: i,
    className: c,
    buttonClassName: u
  } = e, [d, m] = r.useState(false), p = r.useCallback(() => {
    n(), m(false)
  }, [n, m]);
  return (0, l.jsxs)("div", {
    className: a()(o.k, c),
    onMouseEnter: () => {
      t ? m(true) : m(false)
    },
    onMouseLeave: () => {
      m(false)
    },
    children: [i, t && d ? (0, l.jsx)(s.A, {
      onClick: p,
      className: a()(o.D, u)
    }) : null]
  })
}