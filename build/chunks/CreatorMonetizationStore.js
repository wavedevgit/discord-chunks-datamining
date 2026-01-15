/** Chunk was on web.js **/
/** chunk id: 281320, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => c,
  Z: () => h
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = new Map,
  l = new Map;
var c = function(e) {
  return e[e.NOT_FETCHED = 0] = "NOT_FETCHED", e[e.FETCHING = 1] = "FETCHING", e[e.FETCHED = 2] = "FETCHED", e
}({});

function u() {
  s.clear(), l.clear()
}

function d(e) {
  let {
    guildId: t,
    priceTierType: n
  } = e;
  l.has(t) || l.set(t, new Map), l.get(t).set(n, 1)
}

function f(e) {
  let {
    guildId: t,
    priceTierType: n,
    priceTiers: r
  } = e;
  l.has(t) || l.set(t, new Map), l.get(t).set(n, 2), s.has(t) || s.set(t, new Map), s.get(t).set(n, r)
}

function p(e) {
  let {
    guildId: t,
    priceTierType: n
  } = e;
  l.has(t) || l.set(t, new Map), l.get(t).set(n, 2)
}
class _ extends(r = Chunk442837.ZP.Store) {
  getPriceTiersFetchStateForGuildAndType(e, t) {
    var n, r;
    return null != (r = null == (n = l.get(e)) ? true : n.get(t)) ? r : 0
  }
  getPriceTiersForGuildAndType(e, t) {
    var n;
    return null == (n = s.get(e)) ? true : n.get(t)
  }
}
o(_, "displayName", "CreatorMonetizationStore");
let h = new _(Chunk570140.Z, {
  CONNECTION_OPEN: u,
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH: d,
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: f,
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: p
})