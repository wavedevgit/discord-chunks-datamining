/** Chunk was on 384 **/
/** chunk id: 566084, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = null,
  o = 0,
  c = null,
  u = null,
  d = false;
class g extends(i = Chunk442837.ZP.Store) {
  hasChanges() {
    return a !== c
  }
  showNotice() {
    return this.hasChanges()
  }
  get vanityURLCode() {
    return a
  }
  get originalVanityURLCode() {
    return c
  }
  get vanityURLUses() {
    return o
  }
  hasError() {
    return null != u
  }
  get errorDetails() {
    return u
  }
  get fetchedVanityURL() {
    return d
  }
}(r = "displayName") in g ? Object.defineProperty(g, r, {
  value: "GuildSettingsVanityURLStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : g[r] = "GuildSettingsVanityURLStore";
let m = new g(Chunk570140.Z, {
  GUILD_SETTINGS_SET_VANITY_URL: function(e) {
    var t, n;
    c = a = null != (t = e.code) ? t : "", o = e.uses, u = null != (n = e.error) ? n : null, d = true
  },
  GUILD_SETTINGS_CLOSE: function() {
    c = a = null, o = 0, u = null, d = false
  },
  GUILD_SETTINGS_VANITY_URL_RESET: function() {
    a = c, o = 0, u = null
  },
  GUILD_SETTINGS_VANITY_URL_SET: function(e) {
    a = e.code, o = 0
  },
  GUILD_SETTINGS_VANITY_URL_ERROR: function(e) {
    u = e.error
  }
})