/** Chunk was on 75708 **/
/** chunk id: 674985, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var i, r, s, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");
let d = null;
class u extends(s = Chunk442837.ZP.Store) {
  getHouseMembership() {
    return d
  }
}
r = "HypeSquadStore", (i = "displayName") in u ? Object.defineProperty(u, i, {
  value: r,
  enumerable: true,
  configurable: true,
  writable: true
}) : u[i] = r;
let m = new u(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    let e = Chunk594174.default.getCurrentUser();
    null != module && (module.hasFlag(Chunk981631.xW$.HYPESQUAD_ONLINE_HOUSE_1) ? d = Chunk981631.gkr.HOUSE_1 : module.hasFlag(Chunk981631.xW$.HYPESQUAD_ONLINE_HOUSE_2) ? d = Chunk981631.gkr.HOUSE_2 : module.hasFlag(Chunk981631.xW$.HYPESQUAD_ONLINE_HOUSE_3) && (d = Chunk981631.gkr.HOUSE_3))
  },
  HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS: function() {
    d = null
  },
  HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS: function(e) {
    d = e.houseID
  }
})