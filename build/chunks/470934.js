/** Chunk was on 97492 **/
/** chunk id: 470934, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk645619 = require("./645619.js"),
  Chunk998418 = require("./998418.js"),
  Chunk568065 = require("./568065.js"),
  Chunk333354 = require("./333354.js");

function u(e, t, n) {
  let u = (0, l.bG)([s.A], () => s.A.getStateForGuild(e)),
    d = (0, a.Ay)(e, t);
  return r.useMemo(() => {
    var e, r;
    if (null == u || d.type === o.b_.LEVEL_ACTIVATED) return {
      disabled: true,
      reason: true
    };
    let {
      allPowerups: l,
      unlockedPowerups: s
    } = u, a = n ? null == (e = Object.values(s).find(e => {
      var n;
      return (null == (n = e.sku) ? true : n.dependent_sku_id) === t.skuId
    })) ? true : e.sku_id : t.dependencies.find(e => null == s[e]);
    return {
      disabled: null != a,
      reason: null != a && null != l[a] ? i.intl.formatToPlainString(n ? c.default.vCEBiS : c.default["1B8AZr"], {
        perk: null == (r = l[a]) ? true : r.title
      }) : true
    }
  }, [u, t.skuId, t.dependencies, n, d.type])
}