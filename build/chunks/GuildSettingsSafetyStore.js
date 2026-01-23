/** Chunk was on 47841 **/
/** chunk id: 982832, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
});
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk555337 = require("./555337.js"),
  Chunk660496 = require("./660496.js"),
  Chunk652215 = require("./652215.js");
let d = Chunk660496.C.OVERVIEW,
  u = null;

function g(e) {
  let {
    subsection: t
  } = e;
  switch (t) {
    case c.nd0.SAFETY_AUTOMOD:
      d = o.C.AUTOMOD;
      break;
    case c.nd0.SAFETY_DM_AND_SPAM_PROTECTION:
      d = o.C.DM_AND_SPAM_PROTECTION;
      break;
    case c.nd0.SAFETY_CAPTCHA_AND_RAID_PROTECTION:
      d = o.C.CAPTCHA_AND_RAID_PROTECTION;
      break;
    case c.nd0.SAFETY_PERMISSIONS:
      d = o.C.PERMISSIONS;
      break;
    case c.nd0.SAFETY_OVERVIEW:
    default:
      d = o.C.OVERVIEW
  }
}
class m extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(a.A)
  }
  getCurrentPage() {
    return d
  }
}(r = "displayName") in m ? Object.defineProperty(m, r, {
  value: "GuildSettingsSafetyStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : m[r] = "GuildSettingsSafetyStore";
let p = new m(Chunk73153.h, {
  GUILD_SETTINGS_INIT: function() {
    if (a.A.getGuildId() === u) returnfalse;
    u = a.A.getGuildId()
  },
  GUILD_SETTINGS_SET_SECTION: g,
  GUILD_SETTINGS_SAFETY_SET_SUBSECTION: g,
  GUILD_SETTINGS_SAFETY_PAGE: function(e) {
    let {
      page: t
    } = e;
    d = t
  }
})