/** Chunk was on web.js **/
/** chunk id: 579407, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => a,
  X: () => i
});
var Chunk4242 = require("./4242.js");

function i(e) {
  return "object" == typeof e && null != e && "nameplate" in e && "object" == typeof e.nameplate ? {
    nameplate: o(e.nameplate)
  } : null
}

function o(e) {
  if ("object" != typeof e || null == e || !("asset" in e) || "string" != typeof e.asset || !("label" in e) || "string" != typeof e.label || !("palette" in e) || "string" != typeof e.palette) return null;
  let t = {
    asset: e.asset,
    label: e.label,
    palette: e.palette
  };
  return "skuId" in e && "string" == typeof e.skuId && (t.skuId = e.skuId), "sku_id" in e && "string" == typeof e.sku_id && (t.skuId = e.sku_id), "expiresAt" in e && "number" == typeof e.expiresAt && (t.expiresAt = e.expiresAt), "expires_at" in e && "number" == typeof e.expires_at && (t.expiresAt = e.expires_at), t
}

function a(e) {
  return {
    src: e.asset,
    imgAlt: e.label,
    palette: (0, r.t1)(e.palette)
  }
}