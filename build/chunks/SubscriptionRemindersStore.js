/** Chunk was on 64935 **/
/** chunk id: 923349, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var r, i, Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272207 = require("./272207.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js");
let p = false;
class m extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(u.default)
  }
  shouldShowReactivateNotice() {
    let e = u.default.getCurrentUser();
    return !(0, d.TW)(e) && p
  }
}(r = "displayName") in m ? Object.defineProperty(m, r, {
  value: "SubscriptionRemindersStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : m[r] = "SubscriptionRemindersStore";
let f = new m(Chunk73153.h, {
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
    let {
      subscription: t
    } = e;
    if (null != t) {
      var n;
      let e = c.A.createFromServer(t);
      if (null == (0, d.EL)(e) || (null == (n = e.metadata) ? true : n.ended_at) == null) return;
      let r = a()(e.metadata.ended_at);
      a()().isBetween(r.clone().add(4, "days"), r.clone().add(11, "days")) && (p = true)
    }
  }
})