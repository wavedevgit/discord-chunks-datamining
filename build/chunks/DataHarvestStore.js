/** Chunk was on 20501 **/
/** chunk id: 575356, original params: e,t,n (module,exports,require) **/
let i;
require.d(exports, {
  Z: () => u
});
var r, s, a, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let c = false;
class d extends(a = Chunk442837.ZP.Store) {
  get harvestType() {
    return i
  }
  get requestingHarvest() {
    return c
  }
}
s = "DataHarvestStore", (r = "displayName") in d ? Object.defineProperty(d, r, {
  value: s,
  enumerable: true,
  configurable: true,
  writable: true
}) : d[r] = s;
let u = new d(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    i = true
  },
  UPDATE_DATA_HARVEST_TYPE: function(e) {
    let {
      harvestType: t
    } = e;
    c = false, i = t
  },
  LOAD_DATA_HARVEST_TYPE_START: function() {
    c = true
  },
  LOAD_DATA_HARVEST_TYPE_FAILURE: function() {
    c = false
  },
  LOGOUT: function() {
    c = false, i = null
  }
})