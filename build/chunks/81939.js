/** Chunk was on 76334 **/
/** chunk id: 81939, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  W: () => c,
  Z: () => d
}), require("./361932.js"), require("./187205.js"), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk321947 = require("./321947.js"),
  Chunk55563 = require("./55563.js"),
  Chunk417317 = require("./417317.js"),
  Chunk981631 = require("./981631.js");
let c = 6;

function d(e) {
  let {
    guildId: t,
    numWishlistItems: i = c
  } = e, d = (0, s.Z)({
    guildId: t
  }), u = n.useMemo(() => {
    if (null == d || null == d.storefront || "loading" === d.state || "partially-fetched" === d.state) return [];
    let e = d.storefront.pages.flatMap(e => {
        var t, i;
        return [...e.skuIds, ...null != (i = null == (t = e.sections) ? true : t.flatMap(e => e.skuIds)) ? i : []]
      }),
      t = [],
      n = new Set;
    for (let r of e)
      if (!n.has(r) && (t.push(r), n.add(r), t.length >= i)) break;
    return t
  }, [d, i]), m = (0, r.Wu)([a.Z], () => u.map(e => a.Z.get(e)).filter(e => null != e), [u]), h = n.useMemo(() => m.map(e => new l.Z({
    sku_id: e.id,
    sku_product_line: o.POd.SOCIAL_LAYER_GAME_ITEM,
    sku_name: e.name,
    sku: e
  })), [m]);
  return {
    loading: (null == d ? true : d.state) === "loading",
    wishlistItems: h,
    wishlistItemSkuIds: u
  }
}