/** Chunk was on 5533 **/
/** chunk id: 392885, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var r, i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk999382 = require("./999382.js"),
  Chunk740903 = require("./740903.js"),
  Chunk981631 = require("./981631.js");
let u = Chunk740903.u.OVERVIEW,
  m = null;

function g(e) {
  let {
    subsection: t
  } = e;
  switch (t) {
    case d.KsC.SAFETY_AUTOMOD:
      u = c.u.AUTOMOD;
      break;
    case d.KsC.SAFETY_DM_AND_SPAM_PROTECTION:
      u = c.u.DM_AND_SPAM_PROTECTION;
      break;
    case d.KsC.SAFETY_CAPTCHA_AND_RAID_PROTECTION:
      u = c.u.CAPTCHA_AND_RAID_PROTECTION;
      break;
    case d.KsC.SAFETY_PERMISSIONS:
      u = c.u.PERMISSIONS;
      break;
    case d.KsC.SAFETY_OVERVIEW:
    default:
      u = c.u.OVERVIEW
  }
}
class p extends(l = Chunk442837.ZP.Store) {
  getCurrentPage() {
    return u
  }
}
i = "GuildSettingsSafetyStore", (r = "displayName") in p ? Object.defineProperty(p, r, {
  value: i,
  enumerable: true,
  configurable: true,
  writable: true
}) : p[r] = i;
let h = new p(Chunk570140.Z, {
  GUILD_SETTINGS_INIT: function() {
    if (Chunk999382.Z.getGuildId() === m) returnfalse;
    m = Chunk999382.Z.getGuildId()
  },
  GUILD_SETTINGS_SET_SECTION: g,
  GUILD_SETTINGS_SAFETY_SET_SUBSECTION: g,
  GUILD_SETTINGS_SAFETY_PAGE: function(e) {
    let {
      page: t
    } = e;
    u = t
  }
})