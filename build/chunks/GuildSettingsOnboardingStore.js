/** Chunk was on 384 **/
/** chunk id: 359191, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
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
  _ = Chunk84658.PG.LANDING,
  v = null;

function O(e) {
  let {
    subsection: t
  } = e;
  if (c.Z.getGuildId() === v) returnfalse;
  _ = t === b.KsC.SERVER_GUIDE ? h.PG.HOME_SETTINGS : h.PG.LANDING, v = c.Z.getGuildId()
}
class C extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk45966.Z, Chunk889369.Z, Chunk208665.Z, Chunk969632.Z, Chunk926958.Z, Chunk392885.Z, Chunk999382.Z), this.syncWith([Chunk45966.Z, Chunk889369.Z, Chunk208665.Z, Chunk969632.Z, Chunk926958.Z, Chunk392885.Z], () => true)
  }
  isEducationUpsellDismissed(e) {
    return j.has(e)
  }
  getCurrentPage() {
    return _
  }
  hasChanges() {
    if (null == v) returnfalse;
    let e = Chunk45966.Z.isAdvancedMode(v);
    if (_ === Chunk84658.PG.DEFAULT_CHANNELS)
      if (module) return Chunk889369.Z.hasChanges() || Chunk208665.Z.hasChanges();
      else return Chunk889369.Z.hasChanges();
    return _ === Chunk84658.PG.CUSTOMIZATION_QUESTIONS ? Chunk208665.Z.hasChanges() || Chunk926958.Z.hasChanges() : _ === Chunk84658.PG.HOME_SETTINGS ? Chunk969632.Z.hasChanges() : _ === Chunk84658.PG.CONNECTIONS && Chunk926958.Z.hasChanges()
  }
  hasConfiguredAnythingForCurrentStep() {
    if (null == v) returnfalse;
    if (_ === Chunk84658.PG.SAFETY_CHECK) returntrue;
    if (_ === Chunk84658.PG.DEFAULT_CHANNELS) return Chunk889369.Z.editedDefaultChannelIds.size > 0;
    if (_ === Chunk84658.PG.CUSTOMIZATION_QUESTIONS) return Chunk208665.Z.editedOnboardingPrompts.length > 0 || Chunk926958.Z.getEditedConnections().length > 0;
    if (_ === Chunk84658.PG.HOME_SETTINGS) return !(0, Chunk734893.av)(Chunk969632.Z.getSettings());
    if (_ === Chunk84658.PG.CONNECTIONS) return Chunk926958.Z.getEditedConnections().length > 0;
    returnfalse
  }
  hasErrors() {
    return _ === Chunk84658.PG.CUSTOMIZATION_QUESTIONS && null != Chunk208665.Z.errors.find(e => null != e)
  }
  showNotice() {
    if (null == v) returnfalse;
    if ((0, Chunk142961.C)(v)) return this.hasChanges();
    let e = Chunk392885.Z.getCurrentPage();
    return (_ !== Chunk84658.PG.SAFETY_CHECK || module === Chunk740903.u.OVERVIEW) && null != _ && _ !== Chunk84658.PG.LANDING
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
let y = new C(Chunk570140.Z, {
  GUILD_SETTINGS_INIT: O,
  GUILD_SETTINGS_SET_SECTION: O,
  GUILD_SETTINGS_ONBOARDING_STEP: function(e) {
    let {
      step: t
    } = e;
    _ = t
  },
  GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function(e) {
    let {
      upsellType: t
    } = e;
    j.add(t)
  }
})