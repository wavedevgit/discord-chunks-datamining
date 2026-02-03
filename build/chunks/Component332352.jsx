/** Chunk was on 99583 **/
/** chunk id: 332352, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk92674 = require("./92674.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk343969 = require("./343969.js"),
  Chunk266047 = require("./266047.js"),
  Chunk189552 = require("./189552.js"),
  Chunk508160 = require("./508160.jsx"),
  Chunk749060 = require("./749060.jsx"),
  Chunk374963 = require("./374963.jsx"),
  Chunk663282 = require("./663282.js");

function f(e) {
  let {
    guild: t
  } = e, l = (0, d.Ms)(t.id), r = (0, c.zhh)({
    height: 3 * !!l,
    config: a.config.stiff
  });
  return (0, n.jsx)("div", {
    className: h.NQ,
    children: (0, n.jsx)(a.animated.div, {
      className: h.b0,
      style: r
    })
  })
}

function g(e) {
  let {
    guild: t,
    className: l,
    onPageChange: i,
    onMemberSelect: a
  } = e, g = t.id, v = (0, o.bG)([u.A], () => u.A.getEstimatedMemberSearchCountByGuildId(g), [g]), _ = (0, d.Ms)(g), A = (0, d.Wl)(g), p = r.useCallback(e => {
    null != e && (null == a || a(e))
  }, [a]), T = (0, x.ii)(A, _, v), E = r.useRef(null), S = r.useRef(null), y = r.useCallback(() => {
    var e;
    null == (e = E.current) || e.resetSearchText()
  }, []);
  return (0, n.jsx)("div", {
    className: s()(h.FV, l),
    children: (0, n.jsxs)(c.T7Y, {
      className: h.A0,
      ref: S,
      orientation: "horizontal",
      children: [(0, n.jsx)(b.A, {
        guild: t,
        ref: E
      }), (0, n.jsx)(f, {
        guild: t
      }), (0, n.jsx)(m.A, {
        guild: t,
        onSelectRow: p,
        searchState: T,
        onResetForNewMembers: y
      }), T !== x.IY.SUCCESS_STILL_INDEXING && (0, n.jsx)(j.A, {
        guildId: t.id,
        onPageChange: i
      })]
    })
  })
}