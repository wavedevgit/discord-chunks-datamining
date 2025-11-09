/** Chunk was on 77033 **/
/** chunk id: 323540, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  $: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk393238 = require("./393238.js"),
  Chunk840724 = require("./840724.jsx"),
  Chunk533785 = require("./533785.jsx"),
  Chunk174260 = require("./174260.jsx"),
  Chunk371160 = require("./371160.js");

function u(e) {
  var n;
  let {
    applicationId: t,
    guildId: u,
    page: p
  } = e, {
    ref: g,
    width: I
  } = (0, r.ZP)(), [x, v] = i.useMemo(() => (null == p ? true : p.skuIds) == null || (null == p ? true : p.skuIds.length) === 0 ? [
    [],
    []
  ] : (null == p ? true : p.leaderboard) == null || null == I || I <= 516 ? [
    [], null == p ? true : p.skuIds
  ] : I < 1104 ? [null == p ? true : p.skuIds.slice(0, 1), null == p ? true : p.skuIds.slice(1)] : [null == p ? true : p.skuIds.slice(0, 2), null == p ? true : p.skuIds.slice(2)], [p, I]);
  return null == p ? null : (0, l.jsx)(a.zJl, {
    children: (0, l.jsxs)("section", {
      ref: g,
      className: c.container,
      children: [(0, l.jsx)(o.t, {
        leaderboard: p.leaderboard
      }), (0, l.jsx)(s.Z, {
        applicationId: t,
        guildId: u,
        skuIds: x,
        variant: d.Z.MEDIUM
      }), (0, l.jsx)(s.Z, {
        applicationId: t,
        guildId: u,
        skuIds: v
      }), null == (n = p.sections) ? true : n.map((e, n) => {
        var i;
        return (0, l.jsx)(s.Z, {
          guildId: u,
          applicationId: t,
          sectionTitle: null != (i = e.title) ? i : true,
          skuIds: e.skuIds
        }, "".concat(e.title, "-").concat(n))
      })]
    })
  })
}