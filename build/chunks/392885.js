/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => m
});
var r, i, s, a = n(442837),
  l = n(570140),
  o = n(999382),
  c = n(740903),
  A = n(981631);
let d = c.u.OVERVIEW,
  u = null;

function g(e) {
  let {
    subsection: t
  } = e;
  switch (t) {
    case A.KsC.SAFETY_AUTOMOD:
      d = c.u.AUTOMOD;
      break;
    case A.KsC.SAFETY_DM_AND_SPAM_PROTECTION:
      d = c.u.DM_AND_SPAM_PROTECTION;
      break;
    case A.KsC.SAFETY_CAPTCHA_AND_RAID_PROTECTION:
      d = c.u.CAPTCHA_AND_RAID_PROTECTION;
      break;
    case A.KsC.SAFETY_PERMISSIONS:
      d = c.u.PERMISSIONS;
      break;
    case A.KsC.SAFETY_OVERVIEW:
    default:
      d = c.u.OVERVIEW
  }
}
class f extends(s = a.ZP.Store) {
  getCurrentPage() {
    return d
  }
}
i = "GuildSettingsSafetyStore", (r = "displayName") in f ? Object.defineProperty(f, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : f[r] = i;
let m = new f(l.Z, {
  GUILD_SETTINGS_INIT: function() {
    if (o.Z.getGuildId() === u) return !1;
    u = o.Z.getGuildId()
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