/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => f
});
var r, i, s, a = n(442837),
  l = n(570140);
let o = null,
  A = 0,
  c = null,
  d = null,
  u = !1;
class g extends(s = a.ZP.Store) {
  hasChanges() {
    return o !== c
  }
  showNotice() {
    return this.hasChanges()
  }
  get vanityURLCode() {
    return o
  }
  get originalVanityURLCode() {
    return c
  }
  get vanityURLUses() {
    return A
  }
  hasError() {
    return null != d
  }
  get errorDetails() {
    return d
  }
  get fetchedVanityURL() {
    return u
  }
}
i = "GuildSettingsVanityURLStore", (r = "displayName") in g ? Object.defineProperty(g, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : g[r] = i;
let f = new g(l.Z, {
  GUILD_SETTINGS_SET_VANITY_URL: function(e) {
    var t, n;
    c = o = null !== (t = e.code) && void 0 !== t ? t : "", A = e.uses, d = null !== (n = e.error) && void 0 !== n ? n : null, u = !0
  },
  GUILD_SETTINGS_CLOSE: function() {
    c = o = null, A = 0, d = null, u = !1
  },
  GUILD_SETTINGS_VANITY_URL_RESET: function() {
    o = c, A = 0, d = null
  },
  GUILD_SETTINGS_VANITY_URL_SET: function(e) {
    o = e.code, A = 0
  },
  GUILD_SETTINGS_VANITY_URL_ERROR: function(e) {
    d = e.error
  }
})