/** Chunk was on web.js **/
/** chunk id: 504211, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => a,
  X: () => o
});
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  a = function(e) {
    return e.STORE_MODAL = "store_modal", e.DETAILS_MODAL = "details_modal", e.STORE_EMBED = "store_embed", e.SKU_EMBED = "sku_embed", e
  }({});

function o(e, t, n) {
  r.default.track(i.rMx.STOREFRONT_COPY_LINK_CLICKED, {
    application_id: e,
    area: t,
    sku_id: n
  })
}