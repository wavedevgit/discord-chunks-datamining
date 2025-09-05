/** Chunk was on 54052 **/
/** chunk id: 44550, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let s = null,
  o = 0,
  c = null,
  d = null,
  u = false;
class m extends(i = Chunk442837.ZP.Store) {
  hasChanges() {
    return s !== c
  }
  showNotice() {
    return this.hasChanges()
  }
  get vanityURLCode() {
    return s
  }
  get originalVanityURLCode() {
    return c
  }
  get vanityURLUses() {
    return o
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
}(r = "displayName") in m ? Object.defineProperty(m, r, {
  value: "GuildSettingsVanityURLStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : m[r] = "GuildSettingsVanityURLStore";
let g = new m(Chunk570140.Z, {
  GUILD_SETTINGS_SET_VANITY_URL: function(e) {
    var t, n;
    c = s = null != (t = e.code) ? t : "", o = e.uses, d = null != (n = e.error) ? n : null, u = true
  },
  GUILD_SETTINGS_CLOSE: function() {
    c = s = null, o = 0, d = null, u = false
  },
  GUILD_SETTINGS_VANITY_URL_RESET: function() {
    s = c, o = 0, d = null
  },
  GUILD_SETTINGS_VANITY_URL_SET: function(e) {
    s = e.code, o = 0
  },
  GUILD_SETTINGS_VANITY_URL_ERROR: function(e) {
    d = e.error
  }
})