/** Chunk was on web.js **/
/** chunk id: 607726, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = 6048e5,
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
class u extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      let t = Date.now();
      null != e.installedDate && t - e.installedDate < s && (l.installedDiscordPrivateBrowsingPerk = e.installedDiscordPrivateBrowsingPerk, l.installedDate = e.installedDate)
    }
  }
  getState() {
    return l
  }
}
a(u, "displayName", "PrivateBrowsingPerkSettingsStore"), a(u, "persistKey", "PrivateBrowsingPerkSettingsStore");
let d = new u(Chunk570140.Z, {
  PRIVATE_BROWSING_PERK_SETTINGS_INSTALL_DISCORD: c
})