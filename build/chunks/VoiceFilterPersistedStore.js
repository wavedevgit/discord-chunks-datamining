/** Chunk was on web.js **/
/** chunk id: 420439, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk750180 = require("./750180.js");

function s(e, t, n) {
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
class c extends(r = Chunk442837.ZP.PersistedStore) {
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
    case o.O.LOADING:
      l.lastInitAttemptMayHaveCrashed = true;
      break;
    case o.O.LOADED:
    case o.O.FAILED:
    case o.O.UNSUPPORTED:
      l.lastInitAttemptMayHaveCrashed = false
  }
}
s(c, "displayName", "VoiceFilterPersistedStore"), s(c, "persistKey", "VoiceFilterPersistedStore");
let d = new c(Chunk570140.Z, {
  VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE: u
})