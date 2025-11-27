/** Chunk was on 1272 **/
/** chunk id: 5888, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h,
  p: () => o
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var o = ((r = {})[r.INIT = 0] = "INIT", r[r.FETCHING = 1] = "FETCHING", r[r.SUCCESS = 2] = "SUCCESS", r[r.ERROR = 3] = "ERROR", r);
let c = {},
  u = 0,
  d = {
    volume: 1,
    isMuted: false
  };

function p() {
  c = {}, u = 0
}
class f extends(i = Chunk442837.ZP.PersistedStore) {
  getState() {
    return d
  }
  initialize(e) {
    p(), null != e && (d = e)
  }
  getCheckpointData() {
    return c
  }
  getFetchState() {
    return u
  }
  get volume() {
    return d.volume
  }
  get isMuted() {
    return d.isMuted
  }
}
s(f, "displayName", "CheckpointStore"), s(f, "persistKey", "CheckpointStore");
let h = new f(Chunk570140.Z, {
  CONNECTION_OPEN: p,
  CHECKPOINT_FETCH_START: function() {
    u = 1
  },
  CHECKPOINT_FETCH_SUCCESS: function(e) {
    c = e.data, u = 2
  },
  CHECKPOINT_FETCH_FAILED: function() {
    u = 3
  },
  CHECKPOINT_SET_VOLUME: function(e) {
    d.volume = e.volume
  },
  CHECKPOINT_TOGGLE_MUTE: function() {
    d.isMuted = !d.isMuted
  }
})