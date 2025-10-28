/** Chunk was on 94758 **/
/** chunk id: 89196, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var n, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function l(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let a = {
  sentGifts: {}
};

function o(e, t) {
  return "".concat(e, ":").concat(t)
}
class c extends(n = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (a = e, this.cleanupExpiredGifts())
  }
  getState() {
    return a
  }
  hasSentGift(e, t) {
    let r = o(e, t),
      n = a.sentGifts[r];
    return !(null == n || new Date(n.expiresAt) < new Date)
  }
  getSentGift(e, t) {
    let r = o(e, t),
      n = a.sentGifts[r];
    return null == n || new Date(n.expiresAt) < new Date ? null : n
  }
  cleanupExpiredGifts() {
    let e = new Date;
    for (let [t, r] of Object.entries(a.sentGifts)) new Date(require.expiresAt) < module && delete a.sentGifts[exports]
  }
}
l(c, "displayName", "SentGiftsStore"), l(c, "persistKey", "SentGiftsStore");
let u = new c(Chunk570140.Z, {
  WISHLIST_GIFT_SENT: function(e) {
    let t = o(e.skuId, e.recipientId),
      r = new Date,
      n = new Date(r.getTime() + 1728e5);
    a.sentGifts[t] = {
      skuId: e.skuId,
      recipientId: e.recipientId,
      sentAt: r.toISOString(),
      expiresAt: n.toISOString()
    }
  }
})