/** Chunk was on web.js **/
/** chunk id: 314884, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk78839 = require("./78839.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = false,
  f = false,
  p = {};

function _() {
  f = true
}

function m(e) {
  let {
    guildBoostSlots: t
  } = e;
  p = {}, t.forEach(e => {
    p[e.id] = e
  }), f = false, d = true
}

function h(e) {
  let {
    guildBoostSlot: t
  } = e;
  p = u(l({}, p), {
    [t.id]: t
  })
}

function g() {
  p = {}, d = false, f = false
}

function E() {
  let e = {};
  for (let t of Object.values(p)) e[t.id] = t, t.subscription = o.Z.getSubscriptionById(t.subscriptionId);
  p = e
}
class b extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.syncWith([o.Z], E)
  }
  get hasFetched() {
    return d
  }
  get isFetching() {
    return f
  }
  get boostSlots() {
    return p
  }
  getGuildBoostSlot(e) {
    return p[e]
  }
}
s(b, "displayName", "GuildBoostSlotStore");
let y = new b(Chunk570140.Z, {
  GUILD_BOOST_SLOTS_FETCH: _,
  GUILD_BOOST_SLOTS_FETCH_SUCCESS: m,
  GUILD_BOOST_SLOT_UPDATE_SUCCESS: h,
  GUILD_BOOST_SLOT_CREATE: h,
  GUILD_BOOST_SLOT_UPDATE: h,
  LOGOUT: g
})