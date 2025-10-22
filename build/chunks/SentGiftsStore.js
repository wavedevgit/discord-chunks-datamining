/** Chunk was on 37786 **/
/** chunk id: 89196, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {
  sentGifts: {}
};

function o(e, t) {
  return "".concat(e, ":").concat(t)
}
class d extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (s = e, this.cleanupExpiredGifts())
  }
  getState() {
    return s
  }
  hasSentGift(e, t) {
    let n = o(e, t),
      r = s.sentGifts[n];
    return !(null == r || new Date(r.expiresAt) < new Date)
  }
  getSentGift(e, t) {
    let n = o(e, t),
      r = s.sentGifts[n];
    return null == r || new Date(r.expiresAt) < new Date ? null : r
  }
  cleanupExpiredGifts() {
    let e = new Date;
    for (let [t, n] of Object.entries(s.sentGifts)) new Date(require.expiresAt) < module && delete s.sentGifts[exports]
  }
}
l(d, "displayName", "SentGiftsStore"), l(d, "persistKey", "SentGiftsStore");
let c = new d(Chunk570140.Z, {
  WISHLIST_GIFT_SENT: function(e) {
    let t = o(e.skuId, e.recipientId),
      n = new Date,
      r = new Date(n.getTime() + 1728e5);
    s.sentGifts[t] = {
      skuId: e.skuId,
      recipientId: e.recipientId,
      sentAt: n.toISOString(),
      expiresAt: r.toISOString()
    }
  }
})