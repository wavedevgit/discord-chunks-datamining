/** Chunk was on 73755 **/
/** chunk id: 360787, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./539854.js");
var i, r, Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk278323 = require("./278323.js"),
  Chunk158776 = require("./158776.js"),
  Chunk701488 = require("./701488.js");

function d(e, t) {
  return "".concat(e, ":").concat(t)
}
let p = {},
  h = {},
  f = new Chunk846519.sW(3e3, function() {
    let e = [];
    for (let [t, n] of Object.entries(h)) module.push(require), p[exports] = require, delete h[exports];
    0 !== module.length && Chunk278323.Z.subscribeActivities(module)
  });

function m(e) {
  let t = d(e.applicationId, e.partyId);
  return t in p || t in h
}

function g() {
  p = {}, h = {}
}
class b extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk158776.Z)
  }
  isSubscribed(e) {
    return m(e)
  }
}(r = "displayName") in b ? Object.defineProperty(b, r, {
  value: "PresenceSubscriptionsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : b[r] = "PresenceSubscriptionsStore";
let C = new b(Chunk570140.Z, {
  PRESENCE_SUBSCRIPTIONS_ADD: function(e) {
    let {
      subscription: t
    } = e, n = function() {
      let e = false,
        t = Date.now();
      for (let [n, i] of Object.entries(p)) i.expiresAt < t && (delete p[n], e = true);
      for (let [n, i] of Object.entries(h)) i.expiresAt < t && (delete h[n], e = true);
      return e
    }(), {
      userId: i,
      applicationId: r,
      partyId: l,
      messageId: a,
      channelId: o,
      inviteTime: s
    } = t;
    if (m(t) || s + u.$y < Date.now()) return n;
    let c = d(r, l),
      g = u.$y + Date.now();
    return h[c] = {
      userId: i,
      applicationId: r,
      partyId: l,
      messageId: a,
      channelId: o,
      expiresAt: g
    }, f.delay(), true
  },
  CONNECTION_OPEN: g,
  CONNECTION_RESUMED: g,
  LOGOUT: function() {
    p = {}, h = {}
  }
})