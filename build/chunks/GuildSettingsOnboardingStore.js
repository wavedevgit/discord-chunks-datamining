/** Chunk was on 64982 **/
/** chunk id: 359191, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var r, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45966 = require("./45966.js"),
  Chunk734893 = require("./734893.js"),
  Chunk999382 = require("./999382.js"),
  Chunk392885 = require("./392885.js"),
  Chunk740903 = require("./740903.js"),
  Chunk889369 = require("./889369.js"),
  Chunk969632 = require("./969632.js"),
  Chunk208665 = require("./208665.js"),
  Chunk84658 = require("./84658.js"),
  Chunk142961 = require("./142961.js"),
  Chunk981631 = require("./981631.js");
let x = new Set,
  j = Chunk84658.PG.LANDING,
  v = null;

function _(e) {
  let {
    subsection: t
  } = e;
  if (c.Z.getGuildId() === v) returnfalse;
  j = t === b.KsC.SERVER_GUIDE ? f.PG.HOME_SETTINGS : f.PG.LANDING, v = c.Z.getGuildId()
}
class C extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk45966.Z, Chunk889369.Z, Chunk969632.Z, Chunk208665.Z, Chunk392885.Z, Chunk999382.Z), this.syncWith([Chunk45966.Z, Chunk889369.Z, Chunk208665.Z, Chunk969632.Z, Chunk392885.Z], () => true)
  }
  isEducationUpsellDismissed(e) {
    return x.has(e)
  }
  getCurrentPage() {
    return j
  }
  hasChanges() {
    if (null == v) returnfalse;
    let e = Chunk45966.Z.isAdvancedMode(v);
    if (j === Chunk84658.PG.DEFAULT_CHANNELS)
      if (module) return Chunk889369.Z.hasChanges() || Chunk208665.Z.hasChanges();
      else return Chunk889369.Z.hasChanges();
    return j === Chunk84658.PG.CUSTOMIZATION_QUESTIONS ? Chunk208665.Z.hasChanges() : j === Chunk84658.PG.HOME_SETTINGS && Chunk969632.Z.hasChanges()
  }
  hasConfiguredAnythingForCurrentStep() {
    return null != v && (j === Chunk84658.PG.SAFETY_CHECK || (j === Chunk84658.PG.DEFAULT_CHANNELS ? Chunk889369.Z.editedDefaultChannelIds.size > 0 : j === Chunk84658.PG.CUSTOMIZATION_QUESTIONS ? Chunk208665.Z.editedOnboardingPrompts.length > 0 : j === Chunk84658.PG.HOME_SETTINGS && !(0, Chunk734893.av)(Chunk969632.Z.getSettings())))
  }
  hasErrors() {
    return j === Chunk84658.PG.CUSTOMIZATION_QUESTIONS && null != Chunk208665.Z.errors.find(e => null != e)
  }
  showNotice() {
    if (null == v) returnfalse;
    if ((0, Chunk142961.C)(v)) return this.hasChanges();
    let e = Chunk392885.Z.getCurrentPage();
    return (j !== Chunk84658.PG.SAFETY_CHECK || module === Chunk740903.u.OVERVIEW) && null != j && j !== Chunk84658.PG.LANDING
  }
  canCloseEarly() {
    return null == v || !this.hasErrors() && (!(0, Chunk142961.C)(v) || !this.hasChanges())
  }
}(i = "displayName") in C ? Object.defineProperty(C, i, {
  value: "GuildSettingsOnboardingStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : C[i] = "GuildSettingsOnboardingStore";
let O = new C(Chunk570140.Z, {
  GUILD_SETTINGS_INIT: _,
  GUILD_SETTINGS_SET_SECTION: _,
  GUILD_SETTINGS_ONBOARDING_STEP: function(e) {
    let {
      step: t
    } = e;
    j = t
  },
  GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function(e) {
    let {
      upsellType: t
    } = e;
    x.add(t)
  }
})