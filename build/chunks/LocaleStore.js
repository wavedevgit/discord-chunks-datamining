/** Chunk was on web.js **/
/** chunk id: 773669, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => g
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk11057 = require("./11057.js"),
  Chunk77729 = require("./77729.js"),
  Chunk617617 = require("./617617.js"),
  Chunk985018 = require("./985018.jsx");

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
  if ((null === o.A || true === o.A || null == (e = o.A.app) ? true : e.getPreferredSystemLanguages) != null) {
    let e = await o.A.app.getPreferredSystemLanguages().then(e => e[0]);
    if (null != e && "" !== e) return e
  }
  return c.systemLocale
}
let f = Chunk985018.intl.currentLocale,
  p = Chunk985018.systemLocale;

function _() {
  var e, t;
  let n = null == (t = l.A.settings.localization) || null == (e = t.locale) ? true : e.value;
  return null != n && "" !== n && n !== f && (f = n, (0, s.Av)(f), true)
}

function h(e) {
  f = e.locale, (0, s.Av)(f)
}
d().then(e => {
  p = e
});
class m extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(l.A), _(), (0, s.Av)(f)
  }
  get locale() {
    return f
  }
  get systemLocale() {
    return p
  }
}
u(m, "displayName", "LocaleStore");
let g = new m(Chunk73153.h, {
  OVERLAY_INITIALIZE: _,
  CACHE_LOADED: _,
  CONNECTION_OPEN: _,
  USER_SETTINGS_PROTO_UPDATE: _,
  USER_SETTINGS_LOCALE_OVERRIDE: h
})