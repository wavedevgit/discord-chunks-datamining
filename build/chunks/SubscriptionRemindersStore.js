/** Chunk was on web.js **/
/** chunk id: 923349, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var r, Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272207 = require("./272207.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = false;

function p(e) {
  let {
    subscription: t
  } = e;
  if (null != t) {
    var n;
    let e = l.A.createFromServer(t);
    if (null == (0, u.EL)(e) || (null == (n = e.metadata) ? true : n.ended_at) == null) return;
    let r = a()(e.metadata.ended_at);
    a()().isBetween(r.clone().add(4, "days"), r.clone().add(11, "days")) && (f = true)
  }
}
class _ extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.default)
  }
  shouldShowReactivateNotice() {
    let e = c.default.getCurrentUser();
    return !(0, u.TW)(e) && f
  }
}
d(_, "displayName", "SubscriptionRemindersStore");
let h = new _(Chunk73153.h, {
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: p
})