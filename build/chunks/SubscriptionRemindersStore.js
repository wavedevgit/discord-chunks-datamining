/** Chunk was on web.js **/
/** chunk id: 616106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var r, Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk255078 = require("./255078.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js");

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
    let e = l.Z.createFromServer(t);
    if (null == (0, u.Af)(e) || (null == (n = e.metadata) ? true : n.ended_at) == null) return;
    let r = a()(e.metadata.ended_at);
    a()().isBetween(r.clone().add(4, "days"), r.clone().add(11, "days")) && (f = true)
  }
}
class _ extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(c.default)
  }
  shouldShowReactivateNotice() {
    let e = c.default.getCurrentUser();
    return !(0, u.I5)(e) && f
  }
}
d(_, "displayName", "SubscriptionRemindersStore");
let h = new _(Chunk570140.Z, {
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: p
})