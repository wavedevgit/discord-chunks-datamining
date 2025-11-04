/** Chunk was on 1272 **/
/** chunk id: 5888, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f,
  p: () => s
});
var r, i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  s = ((r = {})[r.INIT = 0] = "INIT", r[r.FETCHING = 1] = "FETCHING", r[r.SUCCESS = 2] = "SUCCESS", r[r.ERROR = 3] = "ERROR", r);
let c = {},
  u = 0;

function d() {
  c = {}, u = 0
}
class p extends(l = Chunk442837.ZP.Store) {
  initialize() {
    d()
  }
  getCheckpointData() {
    return c
  }
  getFetchState() {
    return u
  }
}(i = "displayName") in p ? Object.defineProperty(p, i, {
  value: "CheckpointStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : p[i] = "CheckpointStore";
let f = new p(Chunk570140.Z, {
  CONNECTION_OPEN: d,
  CHECKPOINT_FETCH_START: function() {
    u = 1
  },
  CHECKPOINT_FETCH_SUCCESS: function(e) {
    c = e.data, u = 2
  },
  CHECKPOINT_FETCH_FAILED: function() {
    u = 3
  }
})