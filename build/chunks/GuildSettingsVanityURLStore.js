/** Chunk was on 39048 **/
/** chunk id: 737331, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
});
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let a = null,
  o = 0,
  c = null,
  d = null,
  u = false;
class g extends(i = Chunk311907.Ay.Store) {
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
    return null != d
  }
  get errorDetails() {
    return d
  }
  get fetchedVanityURL() {
    return u
  }
}(r = "displayName") in g ? Object.defineProperty(g, r, {
  value: "GuildSettingsVanityURLStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : g[r] = "GuildSettingsVanityURLStore";
let m = new g(Chunk73153.h, {
  GUILD_SETTINGS_SET_VANITY_URL: function(e) {
    var t, n;
    c = a = null != (t = e.code) ? t : "", o = e.uses, d = null != (n = e.error) ? n : null, u = true
  },
  GUILD_SETTINGS_CLOSE: function() {
    c = a = null, o = 0, d = null, u = false
  },
  GUILD_SETTINGS_VANITY_URL_RESET: function() {
    a = c, o = 0, d = null
  },
  GUILD_SETTINGS_VANITY_URL_SET: function(e) {
    a = e.code, o = 0
  },
  GUILD_SETTINGS_VANITY_URL_ERROR: function(e) {
    d = e.error
  }
})