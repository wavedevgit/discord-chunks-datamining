/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => E
}), n(47120);
var r, i, s, a = n(442837),
  l = n(570140),
  o = n(45966),
  A = n(734893),
  c = n(999382),
  d = n(392885),
  u = n(740903),
  g = n(889369),
  f = n(969632),
  m = n(208665),
  p = n(84658),
  h = n(142961),
  C = n(981631);
let b = new Set,
  v = p.PG.LANDING,
  x = null;

function N(e) {
  let {
    subsection: t
  } = e;
  if (c.Z.getGuildId() === x) return !1;
  v = t === C.KsC.SERVER_GUIDE ? p.PG.HOME_SETTINGS : p.PG.LANDING, x = c.Z.getGuildId()
}
class j extends(r = a.ZP.Store) {
  initialize() {
    this.waitFor(o.Z, g.Z, m.Z, f.Z, d.Z), this.syncWith([o.Z, g.Z, m.Z, f.Z, d.Z], () => !0)
  }
  isEducationUpsellDismissed(e) {
    return b.has(e)
  }
  getCurrentPage() {
    return v
  }
  hasChanges() {
    if (null == x) return !1;
    let e = o.Z.isAdvancedMode(x);
    return v === p.PG.DEFAULT_CHANNELS ? e ? g.Z.hasChanges() || m.Z.hasChanges() : g.Z.hasChanges() : v === p.PG.CUSTOMIZATION_QUESTIONS ? m.Z.hasChanges() : v === p.PG.HOME_SETTINGS && f.Z.hasChanges()
  }
  hasConfiguredAnythingForCurrentStep() {
    return null != x && (v === p.PG.SAFETY_CHECK || (v === p.PG.DEFAULT_CHANNELS ? g.Z.editedDefaultChannelIds.size > 0 : v === p.PG.CUSTOMIZATION_QUESTIONS ? m.Z.editedOnboardingPrompts.length > 0 : v === p.PG.HOME_SETTINGS && !(0, A.av)(f.Z.getSettings())))
  }
  hasErrors() {
    return v === p.PG.CUSTOMIZATION_QUESTIONS && null != m.Z.errors.find(e => null != e)
  }
  showNotice() {
    if (null == x) return !1;
    if ((0, h.C)(x)) return this.hasChanges();
    let e = d.Z.getCurrentPage();
    return (v !== p.PG.SAFETY_CHECK || e === u.u.OVERVIEW) && null != v && v !== p.PG.LANDING
  }
  canCloseEarly() {
    return null == x || !this.hasErrors() && (!(0, h.C)(x) || !this.hasChanges())
  }
}
s = "GuildSettingsOnboardingStore", (i = "displayName") in j ? Object.defineProperty(j, i, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : j[i] = s;
let E = new j(l.Z, {
  GUILD_SETTINGS_INIT: N,
  GUILD_SETTINGS_SET_SECTION: N,
  GUILD_SETTINGS_ONBOARDING_STEP: function(e) {
    let {
      step: t
    } = e;
    v = t
  },
  GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function(e) {
    let {
      upsellType: t
    } = e;
    b.add(t)
  }
})