/** Chunk was on 94072 **/
/** chunk id: 89196, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var n, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function s(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let o = {
  sentGifts: {}
};

function a(e, t) {
  return "".concat(e, ":").concat(t)
}
class c extends(n = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (o = e, this.cleanupExpiredGifts())
  }
  getState() {
    return o
  }
  hasSentGift(e, t) {
    let r = a(e, t),
      n = o.sentGifts[r];
    return !(null == n || new Date(n.expiresAt) < new Date)
  }
  getSentGift(e, t) {
    let r = a(e, t),
      n = o.sentGifts[r];
    return null == n || new Date(n.expiresAt) < new Date ? null : n
  }
  cleanupExpiredGifts() {
    let e = new Date;
    for (let [t, r] of Object.entries(o.sentGifts)) new Date(require.expiresAt) < module && delete o.sentGifts[exports]
  }
}
s(c, "displayName", "SentGiftsStore"), s(c, "persistKey", "SentGiftsStore");
let u = new c(Chunk570140.Z, {
  WISHLIST_GIFT_SENT: function(e) {
    let t = a(e.skuId, e.recipientId),
      r = new Date,
      n = new Date(r.getTime() + 1728e5);
    o.sentGifts[t] = {
      skuId: e.skuId,
      recipientId: e.recipientId,
      sentAt: r.toISOString(),
      expiresAt: n.toISOString()
    }
  }
})