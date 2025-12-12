/** Chunk was on 9536 **/
/** chunk id: 392885, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk999382 = require("./999382.js"),
  Chunk740903 = require("./740903.js"),
  Chunk981631 = require("./981631.js");
let d = Chunk740903.u.OVERVIEW,
  u = null;

function g(e) {
  let {
    subsection: t
  } = e;
  switch (t) {
    case c.KsC.SAFETY_AUTOMOD:
      d = o.u.AUTOMOD;
      break;
    case c.KsC.SAFETY_DM_AND_SPAM_PROTECTION:
      d = o.u.DM_AND_SPAM_PROTECTION;
      break;
    case c.KsC.SAFETY_CAPTCHA_AND_RAID_PROTECTION:
      d = o.u.CAPTCHA_AND_RAID_PROTECTION;
      break;
    case c.KsC.SAFETY_PERMISSIONS:
      d = o.u.PERMISSIONS;
      break;
    case c.KsC.SAFETY_OVERVIEW:
    default:
      d = o.u.OVERVIEW
  }
}
class f extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk999382.Z)
  }
  getCurrentPage() {
    return d
  }
}(r = "displayName") in f ? Object.defineProperty(f, r, {
  value: "GuildSettingsSafetyStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : f[r] = "GuildSettingsSafetyStore";
let m = new f(Chunk570140.Z, {
  GUILD_SETTINGS_INIT: function() {
    if (Chunk999382.Z.getGuildId() === u) returnfalse;
    u = Chunk999382.Z.getGuildId()
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