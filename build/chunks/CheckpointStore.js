/** Chunk was on web.js **/
/** chunk id: 5888, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C,
  p: () => c
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk612776 = require("./612776.js");

function s(e, t, n) {
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
      s(e, t, n[t])
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
    highestSlideSeen: Chunk612776.yD.WELCOME,
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

function v(e) {
  _.highestSlideSeen = e.slide
}

function S() {
  f = true
}

function I() {
  _.hasSeenRewatchPopover = true
}
class T extends(r = Chunk442837.ZP.PersistedStore) {
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
s(T, "displayName", "CheckpointStore"), s(T, "persistKey", "CheckpointStore");
let C = new T(Chunk570140.Z, {
  CHECKPOINT_FETCH_START: g,
  CHECKPOINT_FETCH_SUCCESS: E,
  CHECKPOINT_FETCH_FAILED: b,
  CHECKPOINT_SET_VOLUME: y,
  CHECKPOINT_TOGGLE_MUTE: O,
  CHECKPOINT_SET_HIGHEST_SLIDE_SEEN: v,
  CHECKPOINT_AFTER_CLOSED: S,
  CHECKPOINT_SET_HAS_SEEN_REWATCH_POPOVER: I,
  LOGOUT: m
})