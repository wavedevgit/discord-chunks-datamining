/** Chunk was on web.js **/
/** chunk id: 360787, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./539854.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk278323 = require("./278323.js"),
  Chunk158776 = require("./158776.js"),
  Chunk701488 = require("./701488.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e, t) {
  return "".concat(e, ":").concat(t)
}
let f = {},
  _ = {};

function p() {
  let e = false,
    t = Date.now();
  for (let [n, r] of Object.entries(f)) r.expiresAt < exports && (delete f[require], e = true);
  for (let [n, r] of Object.entries(_)) r.expiresAt < exports && (delete _[require], e = true);
  return module
}

function h() {
  let e = [];
  for (let [t, n] of Object.entries(_)) module.push(require), f[exports] = require, delete _[exports];
  0 !== module.length && Chunk278323.Z.subscribeActivities(module)
}
let m = 3e3,
  g = new Chunk846519.sW(m, h);

function E(e) {
  let t = d(e.applicationId, e.partyId);
  return t in f || t in _
}

function b(e) {
  let {
    subscription: t
  } = e, n = p(), {
    userId: r,
    applicationId: i,
    partyId: o,
    messageId: a,
    channelId: s,
    inviteTime: l
  } = t;
  if (E(t) || l + c.$y < Date.now()) return n;
  let u = d(i, o),
    f = c.$y + Date.now();
  return _[u] = {
    userId: r,
    applicationId: i,
    partyId: o,
    messageId: a,
    channelId: s,
    expiresAt: f
  }, g.delay(), true
}

function y() {
  f = {}, _ = {}
}

function O() {
  f = {}, _ = {}
}
class v extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk158776.Z)
  }
  isSubscribed(e) {
    return E(e)
  }
}
u(v, "displayName", "PresenceSubscriptionsStore");
let I = new v(Chunk570140.Z, {
  PRESENCE_SUBSCRIPTIONS_ADD: b,
  CONNECTION_OPEN: y,
  CONNECTION_RESUMED: y,
  LOGOUT: O
})