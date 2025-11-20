/** Chunk was on 77033 **/
/** chunk id: 323540, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  $: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk393238 = require("./393238.js"),
  Chunk840724 = require("./840724.jsx"),
  Chunk533785 = require("./533785.jsx"),
  Chunk171524 = require("./171524.jsx"),
  Chunk822458 = require("./822458.jsx"),
  Chunk329353 = require("./329353.js");

function p(e) {
  var n, l;
  let {
    applicationId: p,
    guildId: g,
    page: I
  } = e, {
    ref: x,
    width: m
  } = (0, r.ZP)(), [h, f] = i.useMemo(() => {
    if ((null == I ? true : I.skuIds) == null || (null == I ? true : I.skuIds.length) === 0) return [
      [],
      []
    ];
    let e = Math.round(null != m ? m : 0);
    return (null == I ? true : I.leaderboard) == null || null == e || e <= 516 || e < 1104 ? [
      [], null == I ? true : I.skuIds
    ] : [null == I ? true : I.skuIds.slice(0, 2), null == I ? true : I.skuIds.slice(2)]
  }, [I, m]);
  return null == I ? null : (0, t.jsx)(a.zJl, {
    children: (0, t.jsxs)("section", {
      ref: x,
      className: u.container,
      children: [(0, t.jsx)(s.n, {
        applicationId: p,
        backgroundImageAssetId: null == (n = I.leaderboard) ? true : n.backgroundImageAssetId
      }), (0, t.jsx)(d.t, {
        leaderboard: I.leaderboard
      }), (0, t.jsx)(c.Z, {
        applicationId: p,
        guildId: g,
        skuIds: h,
        variant: o.Z.MEDIUM
      }), (0, t.jsx)(c.Z, {
        applicationId: p,
        guildId: g,
        skuIds: f
      }), null == (l = I.sections) ? true : l.map((e, n) => {
        var l;
        return (0, t.jsx)(c.Z, {
          guildId: g,
          applicationId: p,
          sectionTitle: null != (l = e.title) ? l : true,
          skuIds: e.skuIds
        }, "".concat(e.title, "-").concat(n))
      })]
    })
  })
}