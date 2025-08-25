/** Chunk was on web.js **/
/** chunk id: 864106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FG: () => a,
  ad: () => c,
  ae: () => o,
  fO: () => s,
  sr: () => l
}), require("./35282.js");
var Chunk392711 = require("./392711.js"),
  Chunk215023 = require("./215023.js");
let o = e => e.split("_", 2).includes("a"),
  a = e => {
    if ("object" != typeof e || null == e || !("asset" in e) || "string" != typeof e.asset) return null;
    let t = {
      asset: e.asset
    };
    return "sku_id" in e && "string" == typeof e.sku_id && (t.skuId = e.sku_id), "skuId" in e && "string" == typeof e.skuId && (t.skuId = e.skuId), "expires_at" in e && "number" == typeof e.expires_at && (t.expiresAt = e.expires_at), "expiresAt" in e && "number" == typeof e.expiresAt && (t.expiresAt = e.expiresAt), t
  },
  s = e => (null == e ? true : e.expiresAt) != null && 1e3 * e.expiresAt + i.Cm < Date.now(),
  l = (e, t) => null == e || null == t ? e === t : (0, r.isEqual)(a(e), a(t)),
  c = (e, t) => {
    var n;
    return null != t && !s(null == e ? true : e.avatarDecoration) && (null == e || null == (n = e.avatarDecoration) ? true : n.asset) != null
  }