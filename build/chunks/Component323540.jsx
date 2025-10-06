/** Chunk was on 77033 **/
/** chunk id: 323540, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  $: () => s
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk393238 = require("./393238.js"),
  Chunk533785 = require("./533785.jsx"),
  Chunk174260 = require("./174260.jsx"),
  Chunk371160 = require("./371160.js");

function s(e) {
  var n;
  let {
    applicationId: t,
    page: s
  } = e, {
    ref: u,
    width: g
  } = (0, i.ZP)(), [f, m] = l.useMemo(() => (null == s ? true : s.skuIds) == null || (null == s ? true : s.skuIds.length) === 0 ? [
    [],
    []
  ] : (null == s ? true : s.leaderboard) == null || null == g || g <= 516 ? [
    [], null == s ? true : s.skuIds
  ] : [null == s ? true : s.skuIds.slice(0, 2), null == s ? true : s.skuIds.slice(2)], [s, g]);
  return null == s ? null : (0, a.jsx)(r.zJl, {
    children: (0, a.jsxs)("section", {
      ref: u,
      className: c.container,
      children: [(0, a.jsx)(d.t, {
        leaderboard: s.leaderboard
      }), (0, a.jsx)(o.Z, {
        applicationId: t,
        skuIds: f,
        isWide: true
      }), (0, a.jsx)(o.Z, {
        applicationId: t,
        skuIds: m
      }), null == (n = s.sections) ? true : n.map((e, n) => {
        var l;
        return (0, a.jsx)(o.Z, {
          applicationId: t,
          sectionTitle: null != (l = e.title) ? l : true,
          skuIds: e.skuIds
        }, "".concat(e.title, "-").concat(n))
      })]
    })
  })
}