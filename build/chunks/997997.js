/** Chunk was on web.js **/
/** chunk id: 997997, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => a,
  K: () => s
});
var Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  a = function(e) {
    return e.STORE_MODAL = "store_modal", e.DETAILS_MODAL = "details_modal", e.STORE_EMBED = "store_embed", e.SKU_EMBED = "sku_embed", e
  }({});

function s(e, t, n) {
  r.default.track(i.HAw.STOREFRONT_COPY_LINK_CLICKED, {
    application_id: e,
    area: t,
    sku_id: n
  })
}