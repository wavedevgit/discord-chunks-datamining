/** Chunk was on web.js **/
/** chunk id: 362790, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk961350 = require("./961350.js"),
  Chunk994500 = require("./994500.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = 10,
  f = 180 * Chunk927813.A.Millis.DAY,
  p = false;

function _() {
  return p !== (p = c.A.getFriendIDs().length >= d && o.default.extractTimestamp(l.default.getId()) < Date.now() - f)
}
class h extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.A, l.default)
  }
  isEligible() {
    return p
  }
}
u(h, "displayName", "PremiumPromoStore");
let m = new h(Chunk73153.h, {
  CONNECTION_OPEN: _
})