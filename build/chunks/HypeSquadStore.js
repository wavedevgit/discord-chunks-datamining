/** Chunk was on 66181 **/
/** chunk id: 674985, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var i, r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");
let c = null;
class d extends(r = Chunk442837.ZP.Store) {
  getHouseMembership() {
    return c
  }
}(i = "displayName") in d ? Object.defineProperty(d, i, {
  value: "HypeSquadStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[i] = "HypeSquadStore";
let u = new d(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    let e = Chunk594174.default.getCurrentUser();
    null != module && (module.hasFlag(Chunk981631.xW$.HYPESQUAD_ONLINE_HOUSE_1) ? c = Chunk981631.gkr.HOUSE_1 : module.hasFlag(Chunk981631.xW$.HYPESQUAD_ONLINE_HOUSE_2) ? c = Chunk981631.gkr.HOUSE_2 : module.hasFlag(Chunk981631.xW$.HYPESQUAD_ONLINE_HOUSE_3) && (c = Chunk981631.gkr.HOUSE_3))
  },
  HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS: function() {
    c = null
  },
  HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS: function(e) {
    c = e.houseID
  }
})