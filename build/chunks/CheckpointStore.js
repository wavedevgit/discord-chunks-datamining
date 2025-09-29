/** Chunk was on 1272 **/
/** chunk id: 5888, original params: e,t,n (module,exports,require) **/
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = {},
  s = 0;

function c() {
  o = {}, s = 0
}
class u extends(i = Chunk442837.ZP.Store) {
  initialize() {
    c()
  }
  getCheckpointData() {
    return o
  }
  getFetchState() {
    return s
  }
}(r = "displayName") in u ? Object.defineProperty(u, r, {
  value: "CheckpointStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : u[r] = "CheckpointStore", new u(Chunk570140.Z, {
  CONNECTION_OPEN: c,
  CHECKPOINT_FETCH_START: function() {
    s = 1
  },
  CHECKPOINT_FETCH_SUCCESS: function(e) {
    o = e.data, s = 2
  },
  CHECKPOINT_FETCH_FAILED: function() {
    s = 3
  }
})