/** Chunk was on 77033 **/
/** chunk id: 323540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => s
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk393238 = require("./393238.js"),
  Chunk533785 = require("./533785.jsx"),
  Chunk174260 = require("./174260.jsx"),
  Chunk329353 = require("./329353.js");

function s(e) {
  var t;
  let {
    applicationId: n,
    guildId: s,
    page: u
  } = e, {
    ref: g,
    width: f
  } = (0, i.ZP)(), [p, m] = r.useMemo(() => (null == u ? true : u.skuIds) == null || (null == u ? true : u.skuIds.length) === 0 ? [
    [],
    []
  ] : (null == u ? true : u.leaderboard) == null || null == f || f <= 516 ? [
    [], null == u ? true : u.skuIds
  ] : [null == u ? true : u.skuIds.slice(0, 2), null == u ? true : u.skuIds.slice(2)], [u, f]);
  return null == u ? null : (0, a.jsx)(l.zJl, {
    children: (0, a.jsxs)("section", {
      ref: g,
      className: c.container,
      children: [(0, a.jsx)(d.t, {
        leaderboard: u.leaderboard
      }), (0, a.jsx)(o.Z, {
        applicationId: n,
        guildId: s,
        skuIds: p,
        isWide: true
      }), (0, a.jsx)(o.Z, {
        applicationId: n,
        guildId: s,
        skuIds: m
      }), null == (t = u.sections) ? true : t.map((e, t) => {
        var r;
        return (0, a.jsx)(o.Z, {
          guildId: s,
          applicationId: n,
          sectionTitle: null != (r = e.title) ? r : true,
          skuIds: e.skuIds
        }, "".concat(e.title, "-").concat(t))
      })]
    })
  })
}