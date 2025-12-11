/** Chunk was on 17302 **/
/** chunk id: 762762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk905128 = require("./905128.js"),
  Chunk973772 = require("./973772.js"),
  Chunk535396 = require("./535396.js"),
  Chunk5238 = require("./5238.js");

function u(e, t, n) {
  let u = (0, i.e7)([o.Z], () => o.Z.getStateForGuild(e)),
    d = (0, a.ZP)(e, t);
  return r.useMemo(() => {
    var e, r;
    if (null == u || d.type === s.A3.LEVEL_ACTIVATED) return {
      disabled: true,
      reason: true
    };
    let {
      allPowerups: i,
      unlockedPowerups: o
    } = u, a = n ? null == (e = Object.values(o).find(e => {
      var n;
      return (null == (n = e.sku) ? true : n.dependent_sku_id) === t.skuId
    })) ? true : e.sku_id : t.dependencies.find(e => null == o[e]);
    return {
      disabled: null != a,
      reason: null != a && null != i[a] ? l.intl.formatToPlainString(n ? c.default.vCEBiS : c.default["1B8AZr"], {
        perk: null == (r = i[a]) ? true : r.title
      }) : true
    }
  }, [u, t.skuId, t.dependencies, n, d.type])
}