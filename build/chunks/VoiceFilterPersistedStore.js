/** Chunk was on web.js **/
/** chunk id: 28075, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk736666 = require("./736666.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = {
  lastInitAttemptMayHaveCrashed: false
};
class c extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (l = e)
  }
  getState() {
    return l
  }
  getLastInitAttemptMayHaveCrashed() {
    return l.lastInitAttemptMayHaveCrashed
  }
}

function u(e) {
  let {
    state: t
  } = e;
  switch (t) {
    case s.R.LOADING:
      l.lastInitAttemptMayHaveCrashed = true;
      break;
    case s.R.LOADED:
    case s.R.FAILED:
    case s.R.UNSUPPORTED:
      l.lastInitAttemptMayHaveCrashed = false
  }
}
o(c, "displayName", "VoiceFilterPersistedStore"), o(c, "persistKey", "VoiceFilterPersistedStore");
let d = new c(Chunk73153.h, {
  VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE: u
})