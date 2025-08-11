/** Chunk was on 22988 **/
/** chunk id: 44550, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var r, i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let o = null,
  c = 0,
  d = null,
  u = null,
  m = false;
class g extends(l = Chunk442837.ZP.Store) {
  hasChanges() {
    return o !== d
  }
  showNotice() {
    return this.hasChanges()
  }
  get vanityURLCode() {
    return o
  }
  get originalVanityURLCode() {
    return d
  }
  get vanityURLUses() {
    return c
  }
  hasError() {
    return null != u
  }
  get errorDetails() {
    return u
  }
  get fetchedVanityURL() {
    return m
  }
}
i = "GuildSettingsVanityURLStore", (r = "displayName") in g ? Object.defineProperty(g, r, {
  value: i,
  enumerable: true,
  configurable: true,
  writable: true
}) : g[r] = i;
let p = new g(Chunk570140.Z, {
  GUILD_SETTINGS_SET_VANITY_URL: function(e) {
    var t, n;
    d = o = null != (t = e.code) ? t : "", c = e.uses, u = null != (n = e.error) ? n : null, m = true
  },
  GUILD_SETTINGS_CLOSE: function() {
    d = o = null, c = 0, u = null, m = false
  },
  GUILD_SETTINGS_VANITY_URL_RESET: function() {
    o = d, c = 0, u = null
  },
  GUILD_SETTINGS_VANITY_URL_SET: function(e) {
    o = e.code, c = 0
  },
  GUILD_SETTINGS_VANITY_URL_ERROR: function(e) {
    u = e.error
  }
})