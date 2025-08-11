/** Chunk was on web.js **/
/** chunk id: 706454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => p
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk241601 = require("./241601.js"),
  Chunk581883 = require("./581883.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = Chunk388032.intl.currentLocale;

function d() {
  var e, t;
  let n = null == (t = Chunk581883.Z.settings.localization) || null == (e = exports.locale) ? true : module.value;
  return null != require && "" !== require && require !== u && (u = require, (0, Chunk241601._2)(u), true)
}

function f(e) {
  u = e.locale, (0, a._2)(u)
}
class _ extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk581883.Z), d(), (0, Chunk241601._2)(u)
  }
  get locale() {
    return u
  }
  get systemLocale() {
    return Chunk388032.systemLocale
  }
}
c(_, "displayName", "LocaleStore");
let p = new _(Chunk570140.Z, {
  OVERLAY_INITIALIZE: d,
  CACHE_LOADED: d,
  CONNECTION_OPEN: d,
  USER_SETTINGS_PROTO_UPDATE: d,
  USER_SETTINGS_LOCALE_OVERRIDE: f
})