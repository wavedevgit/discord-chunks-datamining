/** Chunk was on web.js **/
/** chunk id: 111085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
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

function l(e, t) {
  return "".concat(e, ":").concat(t)
}
class c extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (o = e, this.cleanupExpiredGifts())
  }
  getState() {
    return o
  }
  hasSentGift(e, t) {
    let n = l(e, t),
      r = o.sentGifts[n];
    return !(null == r || new Date(r.expiresAt) < new Date)
  }
  getSentGift(e, t) {
    let n = l(e, t),
      r = o.sentGifts[n];
    return null == r || new Date(r.expiresAt) < new Date ? null : r
  }
  cleanupExpiredGifts() {
    let e = new Date;
    for (let [t, n] of Object.entries(o.sentGifts)) new Date(n.expiresAt) < e && delete o.sentGifts[t]
  }
}

function u(e) {
  let t = l(e.skuId, e.recipientId),
    n = new Date,
    r = new Date(n.getTime() + 1728e5);
  o.sentGifts[t] = {
    skuId: e.skuId,
    recipientId: e.recipientId,
    sentAt: n.toISOString(),
    expiresAt: r.toISOString()
  }
}
s(c, "displayName", "SentGiftsStore"), s(c, "persistKey", "SentGiftsStore");
let d = new c(Chunk73153.h, {
  WISHLIST_GIFT_SENT: u
})