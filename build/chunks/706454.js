/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.r(t), n.d(t, {
  default: () => p
});
var r, i = n(442837),
  o = n(570140),
  a = n(241601),
  s = n(581883);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = n(388032).NW.currentLocale;

function u() {
  var e, t;
  let n = null === (t = s.Z.settings.localization) || void 0 === t ? void 0 : null === (e = t.locale) || void 0 === e ? void 0 : e.value;
  return null != n && "" !== n && n !== c && (c = n, (0, a._2)(c), !0)
}

function d(e) {
  c = e.locale, (0, a._2)(c)
}
class f extends(r = i.ZP.Store) {
  initialize() {
    this.waitFor(s.Z), u(), (0, a._2)(c)
  }
  get locale() {
    return c
  }
}
l(f, "displayName", "LocaleStore");
let p = new f(o.Z, {
  OVERLAY_INITIALIZE: u,
  CACHE_LOADED: u,
  CONNECTION_OPEN: u,
  USER_SETTINGS_PROTO_UPDATE: u,
  USER_SETTINGS_LOCALE_OVERRIDE: d
})