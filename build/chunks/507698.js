/** Chunk was on web.js **/
/** chunk id: 507698, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Xq: () => i,
  bS: () => a,
  kn: () => o,
  uZ: () => s
});
var Chunk735438 = require("./735438.js");
let i = e => {
    if ("object" != typeof e || null == e || !("asset" in e) || "string" != typeof e.asset) return null;
    let t = {
      asset: e.asset
    };
    return "sku_id" in e && "string" == typeof e.sku_id && (t.skuId = e.sku_id), "skuId" in e && "string" == typeof e.skuId && (t.skuId = e.skuId), "expires_at" in e && "number" == typeof e.expires_at && (t.expiresAt = e.expires_at), "expiresAt" in e && "number" == typeof e.expiresAt && (t.expiresAt = e.expiresAt), t
  },
  a = e => (null == e ? true : e.expiresAt) != null && 1e3 * e.expiresAt < Date.now(),
  o = (e, t) => null == e || null == t ? e === t : (0, r.isEqual)(i(e), i(t)),
  s = (e, t) => {
    var n;
    return null != t && !a(null == e ? true : e.avatarDecoration) && (null == e || null == (n = e.avatarDecoration) ? true : n.asset) != null
  }