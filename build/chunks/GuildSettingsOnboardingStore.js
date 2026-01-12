/** Chunk was on 9536 **/
/** chunk id: 359191, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45966 = require("./45966.js"),
  Chunk734893 = require("./734893.js"),
  Chunk999382 = require("./999382.js"),
  Chunk392885 = require("./392885.js"),
  Chunk740903 = require("./740903.js"),
  Chunk889369 = require("./889369.js"),
  Chunk926958 = require("./926958.js"),
  Chunk969632 = require("./969632.js"),
  Chunk208665 = require("./208665.js"),
  Chunk84658 = require("./84658.js"),
  Chunk142961 = require("./142961.js"),
  Chunk981631 = require("./981631.js");
let j = new Set,
  v = Chunk84658.PG.LANDING,
  O = null;

function y(e) {
  let {
    subsection: t
  } = e;
  if (c.Z.getGuildId() === O) returnfalse;
  v = t === x.KsC.SERVER_GUIDE ? p.PG.HOME_SETTINGS : p.PG.LANDING, O = c.Z.getGuildId()
}
class C extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(s.Z, g.Z, b.Z, m.Z, f.Z, d.Z, c.Z), this.syncWith([s.Z, g.Z, b.Z, m.Z, f.Z, d.Z], () => true)
  }
  isEducationUpsellDismissed(e) {
    return j.has(e)
  }
  getCurrentPage() {
    return v
  }
  hasChanges() {
    if (null == O) returnfalse;
    let e = s.Z.isAdvancedMode(O);
    if (v === p.PG.DEFAULT_CHANNELS)
      if (e) return g.Z.hasChanges() || b.Z.hasChanges();
      else return g.Z.hasChanges();
    return v === p.PG.CUSTOMIZATION_QUESTIONS ? b.Z.hasChanges() || f.Z.hasChanges() : v === p.PG.HOME_SETTINGS ? m.Z.hasChanges() : v === p.PG.CONNECTIONS && f.Z.hasChanges()
  }
  hasConfiguredAnythingForCurrentStep() {
    if (null == O) returnfalse;
    if (v === p.PG.SAFETY_CHECK) returntrue;
    if (v === p.PG.DEFAULT_CHANNELS) return g.Z.editedDefaultChannelIds.size > 0;
    if (v === p.PG.CUSTOMIZATION_QUESTIONS) return b.Z.editedOnboardingPrompts.length > 0 || f.Z.getEditedConnections().length > 0;
    if (v === p.PG.HOME_SETTINGS) return !(0, o.av)(m.Z.getSettings());
    if (v === p.PG.CONNECTIONS) return f.Z.getEditedConnections().length > 0;
    returnfalse
  }
  hasErrors() {
    return v === p.PG.CUSTOMIZATION_QUESTIONS && null != b.Z.errors.find(e => null != e)
  }
  showNotice() {
    if (null == O) returnfalse;
    if ((0, h.C)(O)) return this.hasChanges();
    let e = d.Z.getCurrentPage();
    return (v !== p.PG.SAFETY_CHECK || e === u.u.OVERVIEW) && null != v && v !== p.PG.LANDING
  }
  canCloseEarly() {
    return null == O || !this.hasErrors() && (!(0, h.C)(O) || !this.hasChanges())
  }
}(i = "displayName") in C ? Object.defineProperty(C, i, {
  value: "GuildSettingsOnboardingStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : C[i] = "GuildSettingsOnboardingStore";
let N = new C(Chunk570140.Z, {
  GUILD_SETTINGS_INIT: y,
  GUILD_SETTINGS_SET_SECTION: y,
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
    j.add(t)
  }
})