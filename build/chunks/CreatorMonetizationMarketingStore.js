/** Chunk was on web.js **/
/** chunk id: 662427, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
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
let o = [];

function l(e) {
  let {
    eligibleGuilds: t
  } = e;
  o = t
}
class c extends(r = Chunk311907.Ay.Store) {
  getEligibleGuildsForNagActivate() {
    return o
  }
}
s(c, "displayName", "CreatorMonetizationMarketingStore");
let u = new c(Chunk73153.h, {
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: l
})