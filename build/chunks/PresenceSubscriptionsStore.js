/** Chunk was on 81985 **/
/** chunk id: 360787, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./539854.js");
var r, i, Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk278323 = require("./278323.js"),
  Chunk158776 = require("./158776.js"),
  Chunk701488 = require("./701488.js");

function d(e, t) {
  return "".concat(e, ":").concat(t)
}
let p = {},
  f = {},
  h = new Chunk846519.sW(3e3, function() {
    let e = [];
    for (let [t, n] of Object.entries(f)) e.push(n), p[t] = n, delete f[t];
    0 !== e.length && s.Z.subscribeActivities(e)
  });

function g(e) {
  let t = d(e.applicationId, e.partyId);
  return t in p || t in f
}

function m() {
  p = {}, f = {}
}
class b extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(c.Z)
  }
  isSubscribed(e) {
    return g(e)
  }
}(i = "displayName") in b ? Object.defineProperty(b, i, {
  value: "PresenceSubscriptionsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : b[i] = "PresenceSubscriptionsStore";
let y = new b(Chunk570140.Z, {
  PRESENCE_SUBSCRIPTIONS_ADD: function(e) {
    let {
      subscription: t
    } = e, n = function() {
      let e = false,
        t = Date.now();
      for (let [n, r] of Object.entries(p)) r.expiresAt < t && (delete p[n], e = true);
      for (let [n, r] of Object.entries(f)) r.expiresAt < t && (delete f[n], e = true);
      return e
    }(), {
      userId: r,
      applicationId: i,
      partyId: l,
      messageId: a,
      channelId: o,
      inviteTime: s
    } = t;
    if (g(t) || s + u.$y < Date.now()) return n;
    let c = d(i, l),
      m = u.$y + Date.now();
    return f[c] = {
      userId: r,
      applicationId: i,
      partyId: l,
      messageId: a,
      channelId: o,
      expiresAt: m
    }, h.delay(), true
  },
  CONNECTION_OPEN: m,
  CONNECTION_RESUMED: m,
  LOGOUT: function() {
    p = {}, f = {}
  }
})