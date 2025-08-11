/** Chunk was on 99014 **/
/** chunk id: 762762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk905128 = require("./905128.js"),
  Chunk973772 = require("./973772.js"),
  Chunk535396 = require("./535396.js"),
  Chunk93841 = require("./93841.js");

function u(e, t, n) {
  let u = (0, o.e7)([a.Z], () => a.Z.getStateForGuild(e)),
    d = (0, s.ZP)(e, t);
  return r.useMemo(() => {
    var e, r;
    if (null == u || d.type === c.A3.LEVEL_ACTIVATED) return {
      disabled: true,
      reason: true
    };
    let {
      allPowerups: o,
      unlockedPowerups: a
    } = u, s = n ? null == (e = Object.values(a).find(e => {
      var n;
      return (null == (n = e.sku) ? true : n.dependent_sku_id) === t.skuId
    })) ? true : e.sku_id : t.dependencies.find(e => null == a[e]);
    return {
      disabled: null != s,
      reason: null != s && null != o[s] ? i.intl.formatToPlainString(n ? l.default.vCEBiY : l.default["1B8AZm"], {
        perk: null == (r = o[s]) ? true : r.title
      }) : true
    }
  }, [u, t.skuId, t.dependencies, n, d.type])
}