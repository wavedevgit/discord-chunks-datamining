/** Chunk was on web.js **/
/** chunk id: 864106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FG: () => a,
  ad: () => l,
  fO: () => o,
  sr: () => s
});
var Chunk392711 = require("./392711.js"),
  Chunk215023 = require("./215023.js");
let a = e => {
    if ("object" != typeof e || null == e || !("asset" in e) || "string" != typeof e.asset) return null;
    let t = {
      asset: e.asset
    };
    return "sku_id" in e && "string" == typeof e.sku_id && (t.skuId = e.sku_id), "skuId" in e && "string" == typeof e.skuId && (t.skuId = e.skuId), "expires_at" in e && "number" == typeof e.expires_at && (t.expiresAt = e.expires_at), "expiresAt" in e && "number" == typeof e.expiresAt && (t.expiresAt = e.expiresAt), t
  },
  o = e => (null == e ? true : e.expiresAt) != null && 1e3 * e.expiresAt + i.Cm < Date.now(),
  s = (e, t) => null == e || null == t ? e === t : (0, r.isEqual)(a(e), a(t)),
  l = (e, t) => {
    var n;
    return null != t && !o(null == e ? true : e.avatarDecoration) && (null == e || null == (n = e.avatarDecoration) ? true : n.asset) != null
  }