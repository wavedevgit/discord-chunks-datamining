/** Chunk was on 7384 **/
/** chunk id: 575356, original params: e,t,n (module,exports,require) **/
let i;
require.d(exports, {
  Z: () => d
});
var r, s, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = false;
class c extends(s = Chunk442837.ZP.Store) {
  get harvestType() {
    return i
  }
  get requestingHarvest() {
    return o
  }
}(r = "displayName") in c ? Object.defineProperty(c, r, {
  value: "DataHarvestStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[r] = "DataHarvestStore";
let d = new c(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    i = true
  },
  UPDATE_DATA_HARVEST_TYPE: function(e) {
    let {
      harvestType: t
    } = e;
    o = false, i = t
  },
  LOAD_DATA_HARVEST_TYPE_START: function() {
    o = true
  },
  LOAD_DATA_HARVEST_TYPE_FAILURE: function() {
    o = false
  },
  LOGOUT: function() {
    o = false, i = null
  }
})