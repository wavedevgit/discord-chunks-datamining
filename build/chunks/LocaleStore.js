/** Chunk was on web.js **/
/** chunk id: 706454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => g
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk241601 = require("./241601.js"),
  Chunk579806 = require("./579806.js"),
  Chunk581883 = require("./581883.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
async function d() {
  var e;
  if ((null === Chunk579806.Z || true === Chunk579806.Z || null == (e = Chunk579806.Z.app) ? true : module.getPreferredSystemLanguages) != null) {
    let e = await Chunk579806.Z.app.getPreferredSystemLanguages().then(e => e[0]);
    if (null != module && "" !== module) return module
  }
  return Chunk388032.systemLocale
}
let f = Chunk388032.intl.currentLocale,
  _ = Chunk388032.systemLocale;

function p() {
  var e, t;
  let n = null == (t = Chunk581883.Z.settings.localization) || null == (e = exports.locale) ? true : module.value;
  return null != require && "" !== require && require !== f && (f = require, (0, Chunk241601._2)(f), true)
}

function h(e) {
  f = e.locale, (0, o._2)(f)
}
d().then(e => {
  _ = e
});
class m extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk581883.Z), p(), (0, Chunk241601._2)(f)
  }
  get locale() {
    return f
  }
  get systemLocale() {
    return _
  }
}
u(m, "displayName", "LocaleStore");
let g = new m(Chunk570140.Z, {
  OVERLAY_INITIALIZE: p,
  CACHE_LOADED: p,
  CONNECTION_OPEN: p,
  USER_SETTINGS_PROTO_UPDATE: p,
  USER_SETTINGS_LOCALE_OVERRIDE: h
})