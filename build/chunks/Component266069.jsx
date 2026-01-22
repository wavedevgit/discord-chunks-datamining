/** Chunk was on 97492 **/
/** chunk id: 266069, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk242919 = require("./242919.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk519501 = require("./519501.js"),
  Chunk658122 = require("./658122.js");

function b(e) {
  let {
    label: t,
    icon: n,
    setStatus: i,
    isFavorited: b,
    onFavoriteClick: g
  } = e, [m, A] = l.useState(false), y = (0, s.bG)([d.A], () => d.A.getFavoritedStatuses().length >= d.x), O = null != g, j = l.useCallback(e => {
    e.stopPropagation(), null == g || g()
  }, [g]), v = b ? u.Gg5 : u.yA2;
  return (0, r.jsxs)(u.DUT, {
    onClick: i,
    onMouseEnter: () => {
      A(true)
    },
    onMouseLeave: () => {
      A(false)
    },
    className: a()(h.item, h.labelContainer, p.kL),
    children: [(0, r.jsx)("div", {
      children: n
    }), (0, r.jsx)(u.Text, {
      variant: "text-md/normal",
      className: p.rv,
      children: t
    }), m && O && (0, r.jsx)(c.m_, {
      text: y && !b ? f.intl.string(f.t.YSDH9n) : true,
      children: (0, r.jsx)(u.DUT, {
        className: a()(p.ff, p.wB),
        onClick: j,
        children: (0, r.jsx)(v, {
          className: p.ut,
          color: b ? o.A.colors.ICON_FEEDBACK_WARNING : "currentColor"
        })
      })
    })]
  })
}