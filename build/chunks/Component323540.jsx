/** Chunk was on 77033 **/
/** chunk id: 323540, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  $: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk393238 = require("./393238.js"),
  Chunk840724 = require("./840724.jsx"),
  Chunk533785 = require("./533785.jsx"),
  Chunk822458 = require("./822458.jsx"),
  Chunk329353 = require("./329353.js");

function u(e) {
  var n;
  let {
    applicationId: l,
    guildId: u,
    page: p
  } = e, {
    ref: g,
    width: I
  } = (0, o.ZP)(), [x, h] = i.useMemo(() => (null == p ? true : p.skuIds) == null || (null == p ? true : p.skuIds.length) === 0 ? [
    [],
    []
  ] : (null == p ? true : p.leaderboard) == null || null == I || I <= 516 || I < 1104 ? [
    [], null == p ? true : p.skuIds
  ] : [null == p ? true : p.skuIds.slice(0, 2), null == p ? true : p.skuIds.slice(2)], [p, I]);
  return null == p ? null : (0, t.jsx)(a.zJl, {
    children: (0, t.jsxs)("section", {
      ref: g,
      className: c.container,
      children: [(0, t.jsx)(d.t, {
        leaderboard: p.leaderboard
      }), (0, t.jsx)(s.Z, {
        applicationId: l,
        guildId: u,
        skuIds: x,
        variant: r.Z.MEDIUM
      }), (0, t.jsx)(s.Z, {
        applicationId: l,
        guildId: u,
        skuIds: h
      }), null == (n = p.sections) ? true : n.map((e, n) => {
        var i;
        return (0, t.jsx)(s.Z, {
          guildId: u,
          applicationId: l,
          sectionTitle: null != (i = e.title) ? i : true,
          skuIds: e.skuIds
        }, "".concat(e.title, "-").concat(n))
      })]
    })
  })
}