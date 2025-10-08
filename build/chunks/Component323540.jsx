/** Chunk was on 77033 **/
/** chunk id: 323540, original params: e,t,n (module,exports,require) **/
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
  var t;
  let {
    applicationId: n,
    guildId: u,
    page: g
  } = e, {
    ref: f,
    width: p
  } = (0, i.ZP)(), [m, b] = r.useMemo(() => (null == g ? true : g.skuIds) == null || (null == g ? true : g.skuIds.length) === 0 ? [
    [],
    []
  ] : (null == g ? true : g.leaderboard) == null || null == p || p <= 516 ? [
    [], null == g ? true : g.skuIds
  ] : p < 1104 ? [null == g ? true : g.skuIds.slice(0, 1), null == g ? true : g.skuIds.slice(1)] : [null == g ? true : g.skuIds.slice(0, 2), null == g ? true : g.skuIds.slice(2)], [g, p]);
  return null == g ? null : (0, a.jsx)(l.zJl, {
    children: (0, a.jsxs)("section", {
      ref: f,
      className: s.container,
      children: [(0, a.jsx)(d.t, {
        leaderboard: g.leaderboard
      }), (0, a.jsx)(c.Z, {
        applicationId: n,
        guildId: u,
        skuIds: m,
        variant: o.Z.MEDIUM
      }), (0, a.jsx)(c.Z, {
        applicationId: n,
        guildId: u,
        skuIds: b
      }), null == (t = g.sections) ? true : t.map((e, t) => {
        var r;
        return (0, a.jsx)(c.Z, {
          guildId: u,
          applicationId: n,
          sectionTitle: null != (r = e.title) ? r : true,
          skuIds: e.skuIds
        }, "".concat(e.title, "-").concat(t))
      })]
    })
  })
}