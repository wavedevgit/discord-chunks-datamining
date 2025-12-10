/** Chunk was on web.js **/
/** chunk id: 81939, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => c,
  Z: () => u
}), require("./361932.js"), require("./187205.js"), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk321947 = require("./321947.js"),
  Chunk55563 = require("./55563.js"),
  Chunk417317 = require("./417317.js"),
  Chunk981631 = require("./981631.js");
let c = 6;

function u(e) {
  let {
    guildId: t,
    numWishlistItems: n = c
  } = e, u = (0, s.Z)({
    guildId: t,
    location: "Wishlist Items for Social Layer Storefront"
  }), d = r.useMemo(() => {
    if (null == u || null == u.storefront || "loading" === u.state || "partially-fetched" === u.state) return [];
    let e = u.storefront.pages.flatMap(e => {
        var t, n;
        return [...e.skuIds, ...null != (n = null == (t = e.sections) ? true : t.flatMap(e => e.skuIds)) ? n : []]
      }),
      t = [],
      r = new Set;
    for (let i of e)
      if (!r.has(i) && (t.push(i), r.add(i), t.length >= n)) break;
    return t
  }, [u, n]), f = (0, i.Wu)([o.Z], () => d.map(e => o.Z.get(e)).filter(e => null != e), [d]), p = r.useMemo(() => f.map(e => new a.Z({
    sku_id: e.id,
    sku_product_line: l.POd.SOCIAL_LAYER_GAME_ITEM,
    sku_name: e.name,
    sku: e
  })), [f]);
  return {
    loading: (null == u ? true : u.state) === "loading",
    wishlistItems: p,
    wishlistItemSkuIds: d
  }
}