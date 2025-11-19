/** Chunk was on 34740 **/
/** chunk id: 81939, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./539854.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk321947 = require("./321947.js"),
  Chunk55563 = require("./55563.js"),
  Chunk417317 = require("./417317.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let {
    guildId: t
  } = e, n = (0, o.Z)({
    guildId: t
  }), c = i.useMemo(() => {
    if (null == n || null == n.storefront || (null == n ? true : n.loading)) return [];
    let e = [];
    for (let i of n.storefront.pages) {
      var t;
      if (e.push(...i.skuIds), e.length >= 6) break;
      for (let n of null != (t = i.sections) ? t : [])
        if (e.push(...n.skuIds), e.length >= 6) break
    }
    return e.slice(0, 6)
  }, [n]), u = (0, r.Wu)([a.Z], () => c.map(e => a.Z.get(e)).filter(e => null != e), [c]), d = i.useMemo(() => u.map(e => new l.Z({
    sku_id: e.id,
    sku_product_line: s.POd.SOCIAL_LAYER_GAME_ITEM,
    sku_name: e.name,
    sku: e
  })), [u]);
  return {
    loading: null == n || (null == n ? true : n.loading),
    wishlistItems: d,
    wishlistItemSkuIds: c
  }
}