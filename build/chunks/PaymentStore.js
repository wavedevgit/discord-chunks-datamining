/** Chunk was on web.js **/
/** chunk id: 933392, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./321073.js"), require("./896048.js"), require("./638769.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk380098 = require("./380098.js");

function o(e, t, n) {
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
    let t = s.A.createFromServer(e),
      n = l.findIndex(t => t.id === e.id);
    false !== n ? l[n] = t : l.push(t)
  }
  l.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), l = [...l]
}

function u(e) {
  let {
    payment: t
  } = e, n = s.A.createFromServer(t), r = l.findIndex(e => e.id === t.id);
  false === r ? (l.push(n), l.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : l[r] = n, l = [...l]
}

function d() {
  l = []
}
class f extends(r = Chunk311907.Ay.Store) {
  getPayment(e) {
    return l.find(t => t.id === e)
  }
  getPayments() {
    return l
  }
}
o(f, "displayName", "PaymentStore");
let p = new f(Chunk73153.h, {
  BILLING_PAYMENTS_FETCH_SUCCESS: c,
  PAYMENT_UPDATE: u,
  BILLING_PAYMENT_FETCH_SUCCESS: u,
  LOGOUT: d
})