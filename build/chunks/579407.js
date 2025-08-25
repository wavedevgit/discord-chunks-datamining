/** Chunk was on web.js **/
/** chunk id: 579407, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EU: () => a,
  Xm: () => i
});
var Chunk4242 = require("./4242.js");

function i(e) {
  return null == e ? null : {
    nameplate: o(e.nameplate)
  }
}

function o(e) {
  return null == e ? null : {
    asset: e.asset,
    skuId: e.sku_id,
    expiresAt: e.expires_at,
    label: e.label,
    palette: e.palette
  }
}

function a(e) {
  return {
    src: e.asset,
    imgAlt: e.label,
    palette: (0, r.t1)(e.palette)
  }
}