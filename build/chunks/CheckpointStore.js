/** Chunk was on 20941 **/
/** chunk id: 719718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => u,
  A: () => x
});
var r, l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk532294 = require("./532294.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}
var u = ((r = {})[r.INIT = 0] = "INIT", r[r.FETCHING = 1] = "FETCHING", r[r.SUCCESS = 2] = "SUCCESS", r[r.ERROR = 3] = "ERROR", r);
let d = {},
  m = 0,
  f = false,
  p = {
    volume: 1,
    isMuted: false,
    highestSlideSeen: Chunk532294.P7.WELCOME,
    hasSeenRewatchPopover: false
  },
  h = c({}, p);

function b() {
  d = {}, m = 0, f = false
}
class g extends(l = Chunk311907.Ay.PersistedStore) {
  getState() {
    return h
  }
  initialize(e) {
    b(), null != e && (h = c({}, h, e))
  }
  getCheckpointData() {
    return d
  }
  getFetchState() {
    return m
  }
  get volume() {
    return h.volume
  }
  get isMuted() {
    return h.isMuted
  }
  get highestSlideSeen() {
    return h.highestSlideSeen
  }
  get hasSeenRewatchPopover() {
    return h.hasSeenRewatchPopover
  }
  get hasOpenedCheckpointThisSession() {
    return f
  }
}
o(g, "displayName", "CheckpointStore"), o(g, "persistKey", "CheckpointStore");
let x = new g(Chunk73153.h, {
  CHECKPOINT_FETCH_START: function() {
    m = 1
  },
  CHECKPOINT_FETCH_SUCCESS: function(e) {
    d = e.data, m = 2
  },
  CHECKPOINT_FETCH_FAILED: function() {
    m = 3
  },
  CHECKPOINT_SET_VOLUME: function(e) {
    h.volume = e.volume
  },
  CHECKPOINT_TOGGLE_MUTE: function() {
    h.isMuted = !h.isMuted
  },
  CHECKPOINT_SET_HIGHEST_SLIDE_SEEN: function(e) {
    h.highestSlideSeen = e.slide
  },
  CHECKPOINT_AFTER_CLOSED: function() {
    f = true
  },
  CHECKPOINT_SET_HAS_SEEN_REWATCH_POPOVER: function() {
    h.hasSeenRewatchPopover = true
  },
  LOGOUT: function() {
    b(), h = c({}, p)
  }
})