/** Chunk was on web.js **/
/** chunk id: 719718, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => c,
  A: () => T
});
var r, Chunk311907 = require("./311907.js"),
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

function l(e) {
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
var c = function(e) {
  return e[e.INIT = 0] = "INIT", e[e.FETCHING = 1] = "FETCHING", e[e.SUCCESS = 2] = "SUCCESS", e[e.ERROR = 3] = "ERROR", e
}({});
let u = {},
  d = 0,
  f = false,
  p = {
    volume: 1,
    isMuted: false,
    highestSlideSeen: Chunk532294.P7.WELCOME,
    hasSeenRewatchPopover: false
  },
  _ = l({}, p);

function h() {
  u = {}, d = 0, f = false
}

function m() {
  h(), _ = l({}, p)
}

function g() {
  d = 1
}

function E(e) {
  u = e.data, d = 2
}

function b() {
  d = 3
}

function y(e) {
  _.volume = e.volume
}

function O() {
  _.isMuted = !_.isMuted
}

function A(e) {
  _.highestSlideSeen = e.slide
}

function v() {
  f = true
}

function S() {
  _.hasSeenRewatchPopover = true
}
class I extends(r = Chunk311907.Ay.PersistedStore) {
  getState() {
    return _
  }
  initialize(e) {
    h(), null != e && (_ = l({}, _, e))
  }
  getCheckpointData() {
    return u
  }
  getFetchState() {
    return d
  }
  get volume() {
    return _.volume
  }
  get isMuted() {
    return _.isMuted
  }
  get highestSlideSeen() {
    return _.highestSlideSeen
  }
  get hasSeenRewatchPopover() {
    return _.hasSeenRewatchPopover
  }
  get hasOpenedCheckpointThisSession() {
    return f
  }
}
o(I, "displayName", "CheckpointStore"), o(I, "persistKey", "CheckpointStore");
let T = new I(Chunk73153.h, {
  CHECKPOINT_FETCH_START: g,
  CHECKPOINT_FETCH_SUCCESS: E,
  CHECKPOINT_FETCH_FAILED: b,
  CHECKPOINT_SET_VOLUME: y,
  CHECKPOINT_TOGGLE_MUTE: O,
  CHECKPOINT_SET_HIGHEST_SLIDE_SEEN: A,
  CHECKPOINT_AFTER_CLOSED: v,
  CHECKPOINT_SET_HAS_SEEN_REWATCH_POPOVER: S,
  LOGOUT: m
})