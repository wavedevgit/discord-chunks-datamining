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

function C(e) {
  let {
    subsection: t
  } = e;
  if (c.Z.getGuildId() === O) returnfalse;
  v = t === x.KsC.SERVER_GUIDE ? b.PG.HOME_SETTINGS : b.PG.LANDING, O = c.Z.getGuildId()
}
class y extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk45966.Z, Chunk889369.Z, Chunk208665.Z, Chunk969632.Z, Chunk926958.Z, Chunk392885.Z, Chunk999382.Z), this.syncWith([Chunk45966.Z, Chunk889369.Z, Chunk208665.Z, Chunk969632.Z, Chunk926958.Z, Chunk392885.Z], () => true)
  }
  isEducationUpsellDismissed(e) {
    return j.has(e)
  }
  getCurrentPage() {
    return v
  }
  hasChanges() {
    if (null == O) returnfalse;
    let e = Chunk45966.Z.isAdvancedMode(O);
    if (v === Chunk84658.PG.DEFAULT_CHANNELS)
      if (module) return Chunk889369.Z.hasChanges() || Chunk208665.Z.hasChanges();
      else return Chunk889369.Z.hasChanges();
    return v === Chunk84658.PG.CUSTOMIZATION_QUESTIONS ? Chunk208665.Z.hasChanges() || Chunk926958.Z.hasChanges() : v === Chunk84658.PG.HOME_SETTINGS ? Chunk969632.Z.hasChanges() : v === Chunk84658.PG.CONNECTIONS && Chunk926958.Z.hasChanges()
  }
  hasConfiguredAnythingForCurrentStep() {
    if (null == O) returnfalse;
    if (v === Chunk84658.PG.SAFETY_CHECK) returntrue;
    if (v === Chunk84658.PG.DEFAULT_CHANNELS) return Chunk889369.Z.editedDefaultChannelIds.size > 0;
    if (v === Chunk84658.PG.CUSTOMIZATION_QUESTIONS) return Chunk208665.Z.editedOnboardingPrompts.length > 0 || Chunk926958.Z.getEditedConnections().length > 0;
    if (v === Chunk84658.PG.HOME_SETTINGS) return !(0, Chunk734893.av)(Chunk969632.Z.getSettings());
    if (v === Chunk84658.PG.CONNECTIONS) return Chunk926958.Z.getEditedConnections().length > 0;
    returnfalse
  }
  hasErrors() {
    return v === Chunk84658.PG.CUSTOMIZATION_QUESTIONS && null != Chunk208665.Z.errors.find(e => null != e)
  }
  showNotice() {
    if (null == O) returnfalse;
    if ((0, Chunk142961.C)(O)) return this.hasChanges();
    let e = Chunk392885.Z.getCurrentPage();
    return (v !== Chunk84658.PG.SAFETY_CHECK || module === Chunk740903.u.OVERVIEW) && null != v && v !== Chunk84658.PG.LANDING
  }
  canCloseEarly() {
    return null == O || !this.hasErrors() && (!(0, Chunk142961.C)(O) || !this.hasChanges())
  }
}(i = "displayName") in y ? Object.defineProperty(y, i, {
  value: "GuildSettingsOnboardingStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : y[i] = "GuildSettingsOnboardingStore";
let N = new y(Chunk570140.Z, {
  GUILD_SETTINGS_INIT: C,
  GUILD_SETTINGS_SET_SECTION: C,
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