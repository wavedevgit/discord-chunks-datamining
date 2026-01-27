/** Chunk was on 77870 **/
/** chunk id: 911411, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js"), require("./321073.js");
var r, l, Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk308368 = require("./308368.js"),
  Chunk290863 = require("./290863.js"),
  Chunk360469 = require("./360469.js");

function d(e, t) {
  return "".concat(e, ":").concat(t)
}
let p = {},
  h = {},
  f = new Chunk451988.J_(3e3, function() {
    let e = [];
    for (let [t, n] of Object.entries(h)) e.push(n), p[t] = n, delete h[t];
    0 !== e.length && o.A.subscribeActivities(e)
  });

function g(e) {
  let t = d(e.applicationId, e.partyId);
  return t in p || t in h
}

function m() {
  p = {}, h = {}
}
class b extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.A)
  }
  isSubscribed(e) {
    return g(e)
  }
}(l = "displayName") in b ? Object.defineProperty(b, l, {
  value: "PresenceSubscriptionsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : b[l] = "PresenceSubscriptionsStore";
let A = new b(Chunk73153.h, {
  PRESENCE_SUBSCRIPTIONS_ADD: function(e) {
    let {
      subscription: t
    } = e, n = function() {
      let e = false,
        t = Date.now();
      for (let [n, r] of Object.entries(p)) r.expiresAt < t && (delete p[n], e = true);
      for (let [n, r] of Object.entries(h)) r.expiresAt < t && (delete h[n], e = true);
      return e
    }(), {
      userId: r,
      applicationId: l,
      partyId: i,
      messageId: s,
      channelId: a,
      inviteTime: o
    } = t;
    if (g(t) || o + u.dm < Date.now()) return n;
    let c = d(l, i),
      m = u.dm + Date.now();
    return h[c] = {
      userId: r,
      applicationId: l,
      partyId: i,
      messageId: s,
      channelId: a,
      expiresAt: m
    }, f.delay(), true
  },
  CONNECTION_OPEN: m,
  CONNECTION_RESUMED: m,
  LOGOUT: function() {
    p = {}, h = {}
  }
})