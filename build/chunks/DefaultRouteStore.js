/** Chunk was on web.js **/
/** chunk id: 896797, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var r, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = {
    lastViewedPath: null,
    lastViewedNonVoicePath: null
  },
  u = c,
  d = "LAST_VIEWED_PATH";

function f(e) {
  let {
    path: t
  } = e;
  return u.lastViewedPath = t, true
}

function p(e) {
  let {
    path: t
  } = e;
  return u.lastViewedNonVoicePath = t, true
}
class _ extends(r = Chunk442837.ZP.PersistedStore) {
  initialize() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : c;
    u = null != e ? e : c
  }
  get defaultRoute() {
    return s.Z5c.ME
  }
  get lastNonVoiceRoute() {
    var e;
    return null != (e = u.lastViewedNonVoicePath) ? e : s.Z5c.ME
  }
  get fallbackRoute() {
    return s.Z5c.ME
  }
  getState() {
    return u
  }
}
l(_, "displayName", "DefaultRouteStore"), l(_, "persistKey", "DefaultRouteStore"), l(_, "migrations", [() => {
  let e = a.K.get(d, null);
  return a.K.remove(d), {
    lastViewedPath: e
  }
}]);
let m = new _(Chunk570140.Z, {
  SAVE_LAST_ROUTE: f,
  SAVE_LAST_NON_VOICE_ROUTE: p
})