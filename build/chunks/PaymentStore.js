/** Chunk was on 30202 **/
/** chunk id: 818035, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./539854.js"), require("./388685.js"), require("./642613.js");
var i, r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk461655 = require("./461655.js");
let o = [];

function c(e) {
  let {
    payment: t
  } = e, n = l.Z.createFromServer(t), i = o.findIndex(e => e.id === t.id);
  false === i ? (o.push(n), o.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : o[i] = n, o = [...o]
}
class d extends(i = Chunk442837.ZP.Store) {
  getPayment(e) {
    return o.find(t => t.id === e)
  }
  getPayments() {
    return o
  }
}(r = "displayName") in d ? Object.defineProperty(d, r, {
  value: "PaymentStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[r] = "PaymentStore";
let u = new d(Chunk570140.Z, {
  BILLING_PAYMENTS_FETCH_SUCCESS: function(e) {
    let {
      payments: t
    } = e;
    for (let e of t) {
      let t = l.Z.createFromServer(e),
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