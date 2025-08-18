/** Chunk was on 91173 **/
/** chunk id: 616106, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var r, i, Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk255078 = require("./255078.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js");
let p = false;
class m extends(i = Chunk442837.ZP.Store) {
  shouldShowReactivateNotice() {
    let e = Chunk594174.default.getCurrentUser();
    return !(0, Chunk74538.I5)(module) && p
  }
}(r = "displayName") in m ? Object.defineProperty(m, r, {
  value: "SubscriptionRemindersStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : m[r] = "SubscriptionRemindersStore";
let f = new m(Chunk570140.Z, {
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
    let {
      subscription: t
    } = e;
    if (null != t) {
      var n;
      let e = c.Z.createFromServer(t);
      if (null == (0, d.Af)(e) || (null == (n = e.metadata) ? true : n.ended_at) == null) return;
      let r = o()(e.metadata.ended_at);
      o()().isBetween(r.clone().add(4, "days"), r.clone().add(11, "days")) && (p = true)
    }
  }
})