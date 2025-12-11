/** Chunk was on 74330 **/
/** chunk id: 89196, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var n, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let s = {
  sentGifts: {}
};

function c(e, t) {
  return "".concat(e, ":").concat(t)
}
class a extends(n = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (s = e, this.cleanupExpiredGifts())
  }
  getState() {
    return s
  }
  hasSentGift(e, t) {
    let r = c(e, t),
      n = s.sentGifts[r];
    return !(null == n || new Date(n.expiresAt) < new Date)
  }
  getSentGift(e, t) {
    let r = c(e, t),
      n = s.sentGifts[r];
    return null == n || new Date(n.expiresAt) < new Date ? null : n
  }
  cleanupExpiredGifts() {
    let e = new Date;
    for (let [t, r] of Object.entries(s.sentGifts)) new Date(require.expiresAt) < module && delete s.sentGifts[exports]
  }
}
o(a, "displayName", "SentGiftsStore"), o(a, "persistKey", "SentGiftsStore");
let u = new a(Chunk570140.Z, {
  WISHLIST_GIFT_SENT: function(e) {
    let t = c(e.skuId, e.recipientId),
      r = new Date,
      n = new Date(r.getTime() + 1728e5);
    s.sentGifts[t] = {
      skuId: e.skuId,
      recipientId: e.recipientId,
      sentAt: r.toISOString(),
      expiresAt: n.toISOString()
    }
  }
})