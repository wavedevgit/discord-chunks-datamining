/** Chunk was on web.js **/
/** chunk id: 818035, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./539854.js"), require("./388685.js"), require("./642613.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk461655 = require("./461655.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = [];

function c(e) {
  let {
    payments: t
  } = e;
  for (let e of t) {
    let t = o.Z.createFromServer(e),
      n = l.findIndex(t => t.id === e.id);
    false !== n ? l[n] = t : l.push(t)
  }
  l.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), l = [...l]
}

function u(e) {
  let {
    payment: t
  } = e, n = o.Z.createFromServer(t), r = l.findIndex(e => e.id === t.id);
  false === r ? (l.push(n), l.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : l[r] = n, l = [...l]
}

function d() {
  l = []
}
class f extends(r = Chunk442837.ZP.Store) {
  getPayment(e) {
    return l.find(t => t.id === e)
  }
  getPayments() {
    return l
  }
}
s(f, "displayName", "PaymentStore");
let p = new f(Chunk570140.Z, {
  BILLING_PAYMENTS_FETCH_SUCCESS: c,
  PAYMENT_UPDATE: u,
  BILLING_PAYMENT_FETCH_SUCCESS: u,
  LOGOUT: d
})