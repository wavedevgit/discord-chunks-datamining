/** Chunk was on 5606 **/
/** chunk id: 933392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./321073.js"), require("./896048.js"), require("./638769.js");
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk380098 = require("./380098.js");
let o = [];

function c(e) {
  let {
    payment: t
  } = e, n = a.A.createFromServer(t), r = o.findIndex(e => e.id === t.id);
  false === r ? (o.push(n), o.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : o[r] = n, o = [...o]
}
class d extends(r = Chunk311907.Ay.Store) {
  getPayment(e) {
    return o.find(t => t.id === e)
  }
  getPayments() {
    return o
  }
}(i = "displayName") in d ? Object.defineProperty(d, i, {
  value: "PaymentStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[i] = "PaymentStore";
let u = new d(Chunk73153.h, {
  BILLING_PAYMENTS_FETCH_SUCCESS: function(e) {
    let {
      payments: t
    } = e;
    for (let e of t) {
      let t = a.A.createFromServer(e),
        n = o.findIndex(t => t.id === e.id);
      false !== n ? o[n] = t : o.push(t)
    }
    o.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), o = [...o]
  },
  PAYMENT_UPDATE: c,
  BILLING_PAYMENT_FETCH_SUCCESS: c,
  LOGOUT: function() {
    o = []
  }
})