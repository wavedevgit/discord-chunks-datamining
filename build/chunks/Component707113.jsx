/** Chunk was on 9924 **/
/** chunk id: 707113, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk201070 = require("./201070.js"),
  Chunk893966 = require("./893966.js"),
  Chunk472596 = require("./472596.js"),
  Chunk598948 = require("./598948.jsx"),
  Chunk428936 = require("./428936.jsx"),
  Chunk41586 = require("./41586.jsx"),
  Chunk803767 = require("./803767.js");

function h(e) {
  let {
    guild: t
  } = e, n = (0, d.$j)(t.id), r = (0, c.q_F)({
    height: 3 * !!n,
    config: s.config.stiff
  });
  return (0, l.jsx)("div", {
    className: f.loaderContainer,
    children: (0, l.jsx)(s.animated.div, {
      className: f.loaderBar,
      style: r
    })
  })
}

function g(e) {
  let {
    guild: t,
    className: n,
    onPageChange: a,
    onMemberSelect: s
  } = e, g = t.id, p = (0, o.e7)([u.Z], () => u.Z.getEstimatedMemberSearchCountByGuildId(g), [g]), v = (0, d.$j)(g), C = (0, d.M3)(g), T = r.useCallback(e => {
    null != e && (null == s || s(e))
  }, [s]), S = (0, m.xb)(C, v, p), E = r.useRef(null), N = r.useRef(null), O = r.useCallback(() => {
    var e;
    null == (e = E.current) || e.resetSearchText()
  }, []);
  return (0, l.jsx)("div", {
    className: i()(f.mainTableContainer, n),
    children: (0, l.jsxs)(c.Den, {
      className: f.horizatonalScroller,
      ref: N,
      orientation: "horizontal",
      children: [(0, l.jsx)(j.Z, {
        guild: t,
        ref: E
      }), (0, l.jsx)(h, {
        guild: t
      }), (0, l.jsx)(x.Z, {
        guild: t,
        onSelectRow: T,
        searchState: S,
        onResetForNewMembers: O
      }), S !== m.po.SUCCESS_STILL_INDEXING && (0, l.jsx)(b.Z, {
        guildId: t.id,
        onPageChange: a
      })]
    })
  })
}