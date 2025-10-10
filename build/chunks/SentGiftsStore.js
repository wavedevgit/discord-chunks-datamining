/** Chunk was on 36073 **/
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
let l = {
  sentGifts: {}
};

function c(e, t) {
  return "".concat(e, ":").concat(t)
}
class s extends(n = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (l = e, this.cleanupExpiredGifts())
  }
  getState() {
    return l
  }
  hasSentGift(e, t) {
    let r = c(e, t),
      n = l.sentGifts[r];
    return !(null == n || new Date(n.expiresAt) < new Date)
  }
  getSentGift(e, t) {
    let r = c(e, t),
      n = l.sentGifts[r];
    return null == n || new Date(n.expiresAt) < new Date ? null : n
  }
  cleanupExpiredGifts() {
    let e = new Date;
    for (let [t, r] of Object.entries(l.sentGifts)) new Date(require.expiresAt) < module && delete l.sentGifts[exports]
  }
}
o(s, "displayName", "SentGiftsStore"), o(s, "persistKey", "SentGiftsStore");
let u = new s(Chunk570140.Z, {
  WISHLIST_GIFT_SENT: function(e) {
    let t = c(e.skuId, e.recipientId),
      r = new Date,
      n = new Date(r.getTime() + 1728e5);
    l.sentGifts[t] = {
      skuId: e.skuId,
      recipientId: e.recipientId,
      sentAt: r.toISOString(),
      expiresAt: n.toISOString()
    }
  }
})