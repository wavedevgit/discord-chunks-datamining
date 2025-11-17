/** Chunk was on 9924 **/
/** chunk id: 707113, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442748 = require("./442748.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk201070 = require("./201070.js"),
  Chunk893966 = require("./893966.js"),
  Chunk472596 = require("./472596.js"),
  Chunk598948 = require("./598948.jsx"),
  Chunk428936 = require("./428936.jsx"),
  Chunk41586 = require("./41586.jsx"),
  Chunk243194 = require("./243194.js");

function f(e) {
  let {
    guild: t
  } = e, n = (0, d.$j)(t.id), r = (0, c.q_F)({
    height: 3 * !!n,
    config: s.config.stiff
  });
  return (0, l.jsx)("div", {
    className: h.loaderContainer,
    children: (0, l.jsx)(s.animated.div, {
      className: h.loaderBar,
      style: r
    })
  })
}

function g(e) {
  let {
    guild: t,
    className: n,
    onPageChange: i,
    onMemberSelect: s
  } = e, g = t.id, p = (0, o.e7)([u.Z], () => u.Z.getEstimatedMemberSearchCountByGuildId(g), [g]), v = (0, d.$j)(g), C = (0, d.M3)(g), _ = r.useCallback(e => {
    null != e && (null == s || s(e))
  }, [s]), S = (0, m.xb)(C, v, p), T = r.useRef(null), E = r.useRef(null), N = r.useCallback(() => {
    var e;
    null == (e = T.current) || e.resetSearchText()
  }, []);
  return (0, l.jsx)("div", {
    className: a()(h.mainTableContainer, n),
    children: (0, l.jsxs)(c.Den, {
      className: h.horizatonalScroller,
      ref: E,
      orientation: "horizontal",
      children: [(0, l.jsx)(b.Z, {
        guild: t,
        ref: T
      }), (0, l.jsx)(f, {
        guild: t
      }), (0, l.jsx)(x.Z, {
        guild: t,
        onSelectRow: _,
        searchState: S,
        onResetForNewMembers: N
      }), S !== m.po.SUCCESS_STILL_INDEXING && (0, l.jsx)(j.Z, {
        guildId: t.id,
        onPageChange: i
      })]
    })
  })
}