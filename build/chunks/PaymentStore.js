/** Chunk was on 20501 **/
/** chunk id: 818035, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./539854.js"), require("./388685.js"), require("./642613.js");
var i, r, s, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk461655 = require("./461655.js");
let c = [];

function d(e) {
  let {
    payment: t
  } = e, n = o.Z.createFromServer(t), i = c.findIndex(e => e.id === t.id);
  false === i ? (c.push(n), c.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : c[i] = n, c = [...c]
}
class u extends(i = Chunk442837.ZP.Store) {
  getPayment(e) {
    return c.find(t => t.id === e)
  }
  getPayments() {
    return c
  }
}
s = "PaymentStore", (r = "displayName") in u ? Object.defineProperty(u, r, {
  value: s,
  enumerable: true,
  configurable: true,
  writable: true
}) : u[r] = s;
let m = new u(Chunk570140.Z, {
  BILLING_PAYMENTS_FETCH_SUCCESS: function(e) {
    let {
      payments: t
    } = e;
    for (let e of t) {
      let t = o.Z.createFromServer(e),
        n = c.findIndex(t => t.id === e.id);
      false !== n ? c[n] = t : c.push(t)
    }
    c.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), c = [...c]
  },
  PAYMENT_UPDATE: d,
  BILLING_PAYMENT_FETCH_SUCCESS: d,
  LOGOUT: function() {
    c = []
  }
})