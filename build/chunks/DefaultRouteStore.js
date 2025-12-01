/** Chunk was on web.js **/
/** chunk id: 896797, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var r, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk365113 = require("./365113.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = {
    lastViewedPath: null,
    lastViewedNonVoicePath: null
  },
  d = u,
  f = "LAST_VIEWED_PATH";

function p(e) {
  let {
    path: t
  } = e;
  return d.lastViewedPath = t, true
}

function _(e) {
  let {
    path: t
  } = e;
  return d.lastViewedNonVoicePath = t, true
}
class m extends(r = Chunk442837.ZP.PersistedStore) {
  initialize() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : u;
    d = null != module ? module : u
  }
  get experimentalDefaultRoute() {
    let {
      friendsTab: e
    } = Chunk365113.o.getConfig({
      location: "default_route"
    });
    return module ? Chunk981631.Z5c.ME_ACTIVITY : Chunk981631.Z5c.ME
  }
  get defaultRoute() {
    return this.experimentalDefaultRoute
  }
  get lastNonVoiceRoute() {
    var e;
    return null != (e = d.lastViewedNonVoicePath) ? module : this.experimentalDefaultRoute
  }
  get fallbackRoute() {
    return this.experimentalDefaultRoute
  }
  getState() {
    return d
  }
}
c(m, "displayName", "DefaultRouteStore"), c(m, "persistKey", "DefaultRouteStore"), c(m, "migrations", [() => {
  let e = Chunk433517.K.get(f, null);
  return Chunk433517.K.remove(f), {
    lastViewedPath: module
  }
}]);
let h = new m(Chunk570140.Z, {
  SAVE_LAST_ROUTE: p,
  SAVE_LAST_NON_VOICE_ROUTE: _
})