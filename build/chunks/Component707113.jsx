/** Chunk was on 9924 **/
/** chunk id: 707113, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk261616 = require("./261616.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk201070 = require("./201070.js"),
  Chunk893966 = require("./893966.js"),
  Chunk472596 = require("./472596.js"),
  Chunk598948 = require("./598948.jsx"),
  Chunk428936 = require("./428936.jsx"),
  Chunk41586 = require("./41586.jsx"),
  Chunk461914 = require("./461914.js");

function f(e) {
  let {
    guild: t
  } = e, n = (0, d.$j)(t.id), r = (0, c.q_F)({
    height: 3 * !!n,
    config: s.config.stiff
  });
  return (0, l.jsx)("div", {
    className: b.loaderContainer,
    children: (0, l.jsx)(s.animated.div, {
      className: b.loaderBar,
      style: r
    })
  })
}

function v(e) {
  let {
    guild: t,
    className: n,
    onPageChange: i,
    onMemberSelect: s
  } = e, v = t.id, g = (0, o.e7)([u.Z], () => u.Z.getEstimatedMemberSearchCountByGuildId(v), [v]), p = (0, d.$j)(v), C = (0, d.M3)(v), _ = r.useCallback(e => {
    null != e && (null == s || s(e))
  }, [s]), T = (0, m.xb)(C, p, g), E = r.useRef(null), N = r.useRef(null), S = r.useCallback(() => {
    var e;
    null == (e = E.current) || e.resetSearchText()
  }, []);
  return (0, l.jsx)("div", {
    className: a()(b.mainTableContainer, n),
    children: (0, l.jsxs)(c.Den, {
      className: b.horizatonalScroller,
      ref: N,
      orientation: "horizontal",
      children: [(0, l.jsx)(h.Z, {
        guild: t,
        ref: E
      }), (0, l.jsx)(f, {
        guild: t
      }), (0, l.jsx)(x.Z, {
        guild: t,
        onSelectRow: _,
        searchState: T,
        onResetForNewMembers: S
      }), T !== m.po.SUCCESS_STILL_INDEXING && (0, l.jsx)(j.Z, {
        guildId: t.id,
        onPageChange: i
      })]
    })
  })
}