/** Chunk was on web.js **/
/** chunk id: 571474, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk314897 = require("./314897.js"),
  Chunk699516 = require("./699516.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = 10,
  f = 180 * Chunk70956.Z.Millis.DAY,
  p = false;

function _() {
  return p !== (p = c.Z.getFriendIDs().length >= d && s.default.extractTimestamp(l.default.getId()) < Date.now() - f)
}
class m extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(c.Z, l.default)
  }
  isEligible() {
    return p
  }
}
u(m, "displayName", "PremiumPromoStore");
let h = new m(Chunk570140.Z, {
  CONNECTION_OPEN: _
})