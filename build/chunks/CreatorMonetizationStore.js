/** Chunk was on web.js **/
/** chunk id: 697627, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h,
  e: () => c
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = new Map,
  l = new Map;
var c = function(e) {
  return e[e.NOT_FETCHED = 0] = "NOT_FETCHED", e[e.FETCHING = 1] = "FETCHING", e[e.FETCHED = 2] = "FETCHED", e
}({});

function u() {
  o.clear(), l.clear()
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
  l.has(t) || l.set(t, new Map), l.get(t).set(n, 2), o.has(t) || o.set(t, new Map), o.get(t).set(n, r)
}

function p(e) {
  let {
    guildId: t,
    priceTierType: n
  } = e;
  l.has(t) || l.set(t, new Map), l.get(t).set(n, 2)
}
class _ extends(r = Chunk311907.Ay.Store) {
  getPriceTiersFetchStateForGuildAndType(e, t) {
    var n, r;
    return null != (n = null == (r = l.get(e)) ? true : r.get(t)) ? n : 0
  }
  getPriceTiersForGuildAndType(e, t) {
    var n;
    return null == (n = o.get(e)) ? true : n.get(t)
  }
}
s(_, "displayName", "CreatorMonetizationStore");
let h = new _(Chunk73153.h, {
  CONNECTION_OPEN: u,
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH: d,
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: f,
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: p
})