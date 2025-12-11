/** Chunk was on 82477 **/
/** chunk id: 89196, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = {
  sentGifts: {}
};

function s(e, t) {
  return "".concat(e, ":").concat(t)
}
class c extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (o = e, this.cleanupExpiredGifts())
  }
  getState() {
    return o
  }
  hasSentGift(e, t) {
    let n = s(e, t),
      r = o.sentGifts[n];
    return !(null == r || new Date(r.expiresAt) < new Date)
  }
  getSentGift(e, t) {
    let n = s(e, t),
      r = o.sentGifts[n];
    return null == r || new Date(r.expiresAt) < new Date ? null : r
  }
  cleanupExpiredGifts() {
    let e = new Date;
    for (let [t, n] of Object.entries(o.sentGifts)) new Date(require.expiresAt) < module && delete o.sentGifts[exports]
  }
}
a(c, "displayName", "SentGiftsStore"), a(c, "persistKey", "SentGiftsStore");
let u = new c(Chunk570140.Z, {
  WISHLIST_GIFT_SENT: function(e) {
    let t = s(e.skuId, e.recipientId),
      n = new Date,
      r = new Date(n.getTime() + 1728e5);
    o.sentGifts[t] = {
      skuId: e.skuId,
      recipientId: e.recipientId,
      sentAt: n.toISOString(),
      expiresAt: r.toISOString()
    }
  }
})