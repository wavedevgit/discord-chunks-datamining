/** Chunk was on 52974 **/
/** chunk id: 89196, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function n(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}
let a = {
  sentGifts: {}
};

function u(e, t) {
  return "".concat(e, ":").concat(t)
}
class c extends(l = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (a = e, this.cleanupExpiredGifts())
  }
  getState() {
    return a
  }
  hasSentGift(e, t) {
    let i = u(e, t),
      l = a.sentGifts[i];
    return !(null == l || new Date(l.expiresAt) < new Date)
  }
  getSentGift(e, t) {
    let i = u(e, t),
      l = a.sentGifts[i];
    return null == l || new Date(l.expiresAt) < new Date ? null : l
  }
  cleanupExpiredGifts() {
    let e = new Date;
    for (let [t, i] of Object.entries(a.sentGifts)) new Date(require.expiresAt) < module && delete a.sentGifts[exports]
  }
}
n(c, "displayName", "SentGiftsStore"), n(c, "persistKey", "SentGiftsStore");
let o = new c(Chunk570140.Z, {
  WISHLIST_GIFT_SENT: function(e) {
    let t = u(e.skuId, e.recipientId),
      i = new Date,
      l = new Date(i.getTime() + 1728e5);
    a.sentGifts[t] = {
      skuId: e.skuId,
      recipientId: e.recipientId,
      sentAt: i.toISOString(),
      expiresAt: l.toISOString()
    }
  }
})