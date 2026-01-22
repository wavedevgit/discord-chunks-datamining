/** Chunk was on web.js **/
/** chunk id: 419709, original params: e,t,n (module,exports,re quire) **/
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
  T: () => i
});
class i {
  static fromServer(e) {
    return new i(e)
  }
  constructor(e) {
    r(this, "discountId", true), r(this, "amount", true), r(this, "expiresAt", true), this.discountId = e.discount_id, this.amount = e.amount, this.expiresAt = null != e.expires_at ? new Date(e.expires_at) : true
  }
}