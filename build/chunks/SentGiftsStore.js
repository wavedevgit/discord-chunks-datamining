/** Chunk was on web.js **/
/** chunk id: 89196, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
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

function l(e, t) {
  return "".concat(e, ":").concat(t)
}
class c extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (s = e, this.cleanupExpiredGifts())
  }
  getState() {
    return s
  }
  hasSentGift(e, t) {
    let n = l(e, t),
      r = s.sentGifts[n];
    return !(null == r || new Date(r.expiresAt) < new Date)
  }
  getSentGift(e, t) {
    let n = l(e, t),
      r = s.sentGifts[n];
    return null == r || new Date(r.expiresAt) < new Date ? null : r
  }
  cleanupExpiredGifts() {
    let e = new Date;
    for (let [t, n] of Object.entries(s.sentGifts)) new Date(n.expiresAt) < e && delete s.sentGifts[t]
  }
}

function u(e) {
  let t = l(e.skuId, e.recipientId),
    n = new Date,
    r = new Date(n.getTime() + 1728e5);
  s.sentGifts[t] = {
    skuId: e.skuId,
    recipientId: e.recipientId,
    sentAt: n.toISOString(),
    expiresAt: r.toISOString()
  }
}
o(c, "displayName", "SentGiftsStore"), o(c, "persistKey", "SentGiftsStore");
let d = new c(Chunk570140.Z, {
  WISHLIST_GIFT_SENT: u
})