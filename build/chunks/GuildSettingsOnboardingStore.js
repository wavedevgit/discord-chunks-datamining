/** Chunk was on 60458 **/
/** chunk id: 359191, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var r, i, l, Chunk442837 = require("./442837.js"),
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
let j = new Set,
  v = Chunk84658.PG.LANDING,
  _ = null;

function O(e) {
  let {
    subsection: t
  } = e;
  if (d.Z.getGuildId() === _) returnfalse;
  v = t === x.KsC.SERVER_GUIDE ? f.PG.HOME_SETTINGS : f.PG.LANDING, _ = d.Z.getGuildId()
}
class y extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk45966.Z, Chunk889369.Z, Chunk208665.Z, Chunk969632.Z, Chunk392885.Z), this.syncWith([Chunk45966.Z, Chunk889369.Z, Chunk208665.Z, Chunk969632.Z, Chunk392885.Z], () => true)
  }
  isEducationUpsellDismissed(e) {
    return j.has(e)
  }
  getCurrentPage() {
    return v
  }
  hasChanges() {
    if (null == _) returnfalse;
    let e = Chunk45966.Z.isAdvancedMode(_);
    if (v === Chunk84658.PG.DEFAULT_CHANNELS)
      if (module) return Chunk889369.Z.hasChanges() || Chunk208665.Z.hasChanges();
      else return Chunk889369.Z.hasChanges();
    return v === Chunk84658.PG.CUSTOMIZATION_QUESTIONS ? Chunk208665.Z.hasChanges() : v === Chunk84658.PG.HOME_SETTINGS && Chunk969632.Z.hasChanges()
  }
  hasConfiguredAnythingForCurrentStep() {
    return null != _ && (v === Chunk84658.PG.SAFETY_CHECK || (v === Chunk84658.PG.DEFAULT_CHANNELS ? Chunk889369.Z.editedDefaultChannelIds.size > 0 : v === Chunk84658.PG.CUSTOMIZATION_QUESTIONS ? Chunk208665.Z.editedOnboardingPrompts.length > 0 : v === Chunk84658.PG.HOME_SETTINGS && !(0, Chunk734893.av)(Chunk969632.Z.getSettings())))
  }
  hasErrors() {
    return v === Chunk84658.PG.CUSTOMIZATION_QUESTIONS && null != Chunk208665.Z.errors.find(e => null != e)
  }
  showNotice() {
    if (null == _) returnfalse;
    if ((0, Chunk142961.C)(_)) return this.hasChanges();
    let e = Chunk392885.Z.getCurrentPage();
    return (v !== Chunk84658.PG.SAFETY_CHECK || module === Chunk740903.u.OVERVIEW) && null != v && v !== Chunk84658.PG.LANDING
  }
  canCloseEarly() {
    return null == _ || !this.hasErrors() && (!(0, Chunk142961.C)(_) || !this.hasChanges())
  }
}
l = "GuildSettingsOnboardingStore", (i = "displayName") in y ? Object.defineProperty(y, i, {
  value: l,
  enumerable: true,
  configurable: true,
  writable: true
}) : y[i] = l;
let C = new y(Chunk570140.Z, {
  GUILD_SETTINGS_INIT: O,
  GUILD_SETTINGS_SET_SECTION: O,
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