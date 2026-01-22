/** Chunk was on web.js **/
/** chunk id: 69369, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = 6048e5,
  l = {
    installedDiscordPrivateBrowsingPerk: false,
    installedDate: null
  },
  c = e => {
    let {
      installedDiscordPrivateBrowsingPerk: t
    } = e;
    return l.installedDiscordPrivateBrowsingPerk = t, t ? l.installedDate = new Date().getTime() : l.installedDate = null, true
  };
class u extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (null != e) {
      let t = Date.now();
      null != e.installedDate && t - e.installedDate < o && (l.installedDiscordPrivateBrowsingPerk = e.installedDiscordPrivateBrowsingPerk, l.installedDate = e.installedDate)
    }
  }
  getState() {
    return l
  }
}
s(u, "displayName", "PrivateBrowsingPerkSettingsStore"), s(u, "persistKey", "PrivateBrowsingPerkSettingsStore");
let d = new u(Chunk73153.h, {
  PRIVATE_BROWSING_PERK_SETTINGS_INSTALL_DISCORD: c
})