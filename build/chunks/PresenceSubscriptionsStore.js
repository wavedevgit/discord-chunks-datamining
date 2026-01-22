/** Chunk was on 97492 **/
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
let f = {},
  p = {},
  h = new Chunk451988.J_(3e3, function() {
    let e = [];
    for (let [t, n] of Object.entries(p)) e.push(n), f[t] = n, delete p[t];
    0 !== e.length && o.A.subscribeActivities(e)
  });

function b(e) {
  let t = d(e.applicationId, e.partyId);
  return t in f || t in p
}

function g() {
  f = {}, p = {}
}
class m extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.A)
  }
  isSubscribed(e) {
    return b(e)
  }
}(l = "displayName") in m ? Object.defineProperty(m, l, {
  value: "PresenceSubscriptionsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : m[l] = "PresenceSubscriptionsStore";
let A = new m(Chunk73153.h, {
  PRESENCE_SUBSCRIPTIONS_ADD: function(e) {
    let {
      subscription: t
    } = e, n = function() {
      let e = false,
        t = Date.now();
      for (let [n, r] of Object.entries(f)) r.expiresAt < t && (delete f[n], e = true);
      for (let [n, r] of Object.entries(p)) r.expiresAt < t && (delete p[n], e = true);
      return e
    }(), {
      userId: r,
      applicationId: l,
      partyId: i,
      messageId: a,
      channelId: s,
      inviteTime: o
    } = t;
    if (b(t) || o + u.dm < Date.now()) return n;
    let c = d(l, i),
      g = u.dm + Date.now();
    return p[c] = {
      userId: r,
      applicationId: l,
      partyId: i,
      messageId: a,
      channelId: s,
      expiresAt: g
    }, h.delay(), true
  },
  CONNECTION_OPEN: g,
  CONNECTION_RESUMED: g,
  LOGOUT: function() {
    f = {}, p = {}
  }
})