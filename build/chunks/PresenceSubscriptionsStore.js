/** Chunk was on 61344 **/
/** chunk id: 911411, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js"), require("./321073.js");
var l, r, Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk308368 = require("./308368.js"),
  Chunk290863 = require("./290863.js"),
  Chunk360469 = require("./360469.js");

function d(e, t) {
  return "".concat(e, ":").concat(t)
}
let h = {},
  p = {},
  f = new Chunk451988.J_(3e3, function() {
    let e = [];
    for (let [t, n] of Object.entries(p)) e.push(n), h[t] = n, delete p[t];
    0 !== e.length && o.A.subscribeActivities(e)
  });

function m(e) {
  let t = d(e.applicationId, e.partyId);
  return t in h || t in p
}

function g() {
  h = {}, p = {}
}
class A extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.A)
  }
  isSubscribed(e) {
    return m(e)
  }
}(r = "displayName") in A ? Object.defineProperty(A, r, {
  value: "PresenceSubscriptionsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : A[r] = "PresenceSubscriptionsStore";
let b = new A(Chunk73153.h, {
  PRESENCE_SUBSCRIPTIONS_ADD: function(e) {
    let {
      subscription: t
    } = e, n = function() {
      let e = false,
        t = Date.now();
      for (let [n, l] of Object.entries(h)) l.expiresAt < t && (delete h[n], e = true);
      for (let [n, l] of Object.entries(p)) l.expiresAt < t && (delete p[n], e = true);
      return e
    }(), {
      userId: l,
      applicationId: r,
      partyId: i,
      messageId: a,
      channelId: s,
      inviteTime: o
    } = t;
    if (m(t) || o + u.dm < Date.now()) return n;
    let c = d(r, i),
      g = u.dm + Date.now();
    return p[c] = {
      userId: l,
      applicationId: r,
      partyId: i,
      messageId: a,
      channelId: s,
      expiresAt: g
    }, f.delay(), true
  },
  CONNECTION_OPEN: g,
  CONNECTION_RESUMED: g,
  LOGOUT: function() {
    h = {}, p = {}
  }
})