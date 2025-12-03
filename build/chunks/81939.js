/** Chunk was on 76334 **/
/** chunk id: 81939, original params: e,i,t (module,exports,require) **/
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
    guildId: i,
    numWishlistItems: t = c
  } = e, d = (0, s.Z)({
    guildId: i,
    location: "Wishlist Items for Social Layer Storefront"
  }), u = n.useMemo(() => {
    if (null == d || null == d.storefront || "loading" === d.state || "partially-fetched" === d.state) return [];
    let e = d.storefront.pages.flatMap(e => {
        var i, t;
        return [...e.skuIds, ...null != (t = null == (i = e.sections) ? true : i.flatMap(e => e.skuIds)) ? t : []]
      }),
      i = [],
      n = new Set;
    for (let r of e)
      if (!n.has(r) && (i.push(r), n.add(r), i.length >= t)) break;
    return i
  }, [d, t]), m = (0, r.Wu)([l.Z], () => u.map(e => l.Z.get(e)).filter(e => null != e), [u]), _ = n.useMemo(() => m.map(e => new a.Z({
    sku_id: e.id,
    sku_product_line: o.POd.SOCIAL_LAYER_GAME_ITEM,
    sku_name: e.name,
    sku: e
  })), [m]);
  return {
    loading: (null == d ? true : d.state) === "loading",
    wishlistItems: _,
    wishlistItemSkuIds: u
  }
}