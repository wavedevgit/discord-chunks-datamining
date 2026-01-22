/** Chunk was on 47841 **/
/** chunk id: 737331, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let a = null,
  c = 0,
  o = null,
  d = null,
  u = false;
class f extends(i = Chunk311907.Ay.Store) {
  hasChanges() {
    return a !== o
  }
  showNotice() {
    return this.hasChanges()
  }
  get vanityURLCode() {
    return a
  }
  get originalVanityURLCode() {
    return o
  }
  get vanityURLUses() {
    return c
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
}(r = "displayName") in f ? Object.defineProperty(f, r, {
  value: "GuildSettingsVanityURLStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : f[r] = "GuildSettingsVanityURLStore";
let g = new f(Chunk73153.h, {
  GUILD_SETTINGS_SET_VANITY_URL: function(e) {
    var t, n;
    o = a = null != (t = e.code) ? t : "", c = e.uses, d = null != (n = e.error) ? n : null, u = true
  },
  GUILD_SETTINGS_CLOSE: function() {
    o = a = null, c = 0, d = null, u = false
  },
  GUILD_SETTINGS_VANITY_URL_RESET: function() {
    a = o, c = 0, d = null
  },
  GUILD_SETTINGS_VANITY_URL_SET: function(e) {
    a = e.code, c = 0
  },
  GUILD_SETTINGS_VANITY_URL_ERROR: function(e) {
    d = e.error
  }
})