/** Chunk was on web.js **/
/** chunk id: 575691, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  Z: () => i
});
class i {
  constructor(e, t) {
    r(this, "skuId", true), r(this, "skuFeatures", true), this.skuId = e, this.skuFeatures = t
  }
}