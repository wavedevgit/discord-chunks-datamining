/** Chunk was on web.js **/
/** chunk id: 616106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var r, Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
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
    let r = o()(e.metadata.ended_at);
    o()().isBetween(r.clone().add(4, "days"), r.clone().add(11, "days")) && (f = true)
  }
}
class _ extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default)
  }
  shouldShowReactivateNotice() {
    let e = Chunk594174.default.getCurrentUser();
    return !(0, Chunk74538.I5)(module) && f
  }
}
d(_, "displayName", "SubscriptionRemindersStore");
let m = new _(Chunk570140.Z, {
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: p
})