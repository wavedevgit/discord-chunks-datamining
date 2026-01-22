/** Chunk was on web.js **/
/** chunk id: 650048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var r, Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

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
class _ extends(r = Chunk311907.Ay.PersistedStore) {
  initialize() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : c;
    u = null != e ? e : c
  }
  get defaultRoute() {
    return o.BVt.ME
  }
  get lastNonVoiceRoute() {
    var e;
    return null != (e = u.lastViewedNonVoicePath) ? e : o.BVt.ME
  }
  get fallbackRoute() {
    return o.BVt.ME
  }
  getState() {
    return u
  }
}
l(_, "displayName", "DefaultRouteStore"), l(_, "persistKey", "DefaultRouteStore"), l(_, "migrations", [() => {
  let e = a.w.get(d, null);
  return a.w.remove(d), {
    lastViewedPath: e
  }
}]);
let h = new _(Chunk73153.h, {
  SAVE_LAST_ROUTE: f,
  SAVE_LAST_NON_VOICE_ROUTE: p
})