/** Chunk was on web.js **/
/** chunk id: 674525, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = [];

function l(e) {
  let {
    eligibleGuilds: t
  } = e;
  s = t
}
class c extends(r = Chunk442837.ZP.Store) {
  getEligibleGuildsForNagActivate() {
    return s
  }
}
a(c, "displayName", "CreatorMonetizationMarketingStore");
let u = new c(Chunk570140.Z, {
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: l
})