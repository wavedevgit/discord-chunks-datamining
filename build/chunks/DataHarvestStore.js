/** Chunk was on 9207 **/
/** chunk id: 975648, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  A: () => d
});
var i, l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let o = false;
class c extends(l = Chunk311907.Ay.Store) {
  get harvestType() {
    return r
  }
  get requestingHarvest() {
    return o
  }
}(i = "displayName") in c ? Object.defineProperty(c, i, {
  value: "DataHarvestStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[i] = "DataHarvestStore";
let d = new c(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    r = true
  },
  UPDATE_DATA_HARVEST_TYPE: function(e) {
    let {
      harvestType: t
    } = e;
    o = false, r = t
  },
  LOAD_DATA_HARVEST_TYPE_START: function() {
    o = true
  },
  LOAD_DATA_HARVEST_TYPE_FAILURE: function() {
    o = false
  },
  LOGOUT: function() {
    o = false, r = null
  }
})