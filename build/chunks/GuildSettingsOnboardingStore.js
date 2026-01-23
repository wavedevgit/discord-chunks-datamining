/** Chunk was on 47841 **/
/** chunk id: 287479, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js");
var r, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk591552 = require("./591552.js"),
  Chunk374084 = require("./374084.js"),
  Chunk555337 = require("./555337.js"),
  Chunk982832 = require("./982832.js"),
  Chunk660496 = require("./660496.js"),
  Chunk863694 = require("./863694.js"),
  Chunk352821 = require("./352821.js"),
  Chunk132514 = require("./132514.js"),
  Chunk655943 = require("./655943.js"),
  Chunk400812 = require("./400812.js"),
  Chunk72533 = require("./72533.js"),
  Chunk652215 = require("./652215.js");
let j = new Set,
  _ = Chunk400812.Hy.LANDING,
  O = null;

function v(e) {
  let {
    subsection: t
  } = e;
  if (c.A.getGuildId() === O) returnfalse;
  _ = t === x.nd0.SERVER_GUIDE ? b.Hy.HOME_SETTINGS : b.Hy.LANDING, O = c.A.getGuildId()
}
class y extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(a.A, g.A, f.A, p.A, m.A, d.A, c.A), this.syncWith([a.A, g.A, f.A, p.A, m.A, d.A], () => true)
  }
  isEducationUpsellDismissed(e) {
    return j.has(e)
  }
  getCurrentPage() {
    return _
  }
  hasChanges() {
    if (null == O) returnfalse;
    let e = a.A.isAdvancedMode(O);
    if (_ === b.Hy.DEFAULT_CHANNELS)
      if (e) return g.A.hasChanges() || f.A.hasChanges();
      else return g.A.hasChanges();
    return _ === b.Hy.CUSTOMIZATION_QUESTIONS ? f.A.hasChanges() || m.A.hasChanges() : _ === b.Hy.HOME_SETTINGS ? p.A.hasChanges() : _ === b.Hy.CONNECTIONS && m.A.hasChanges()
  }
  hasConfiguredAnythingForCurrentStep() {
    if (null == O) returnfalse;
    if (_ === b.Hy.SAFETY_CHECK) returntrue;
    if (_ === b.Hy.DEFAULT_CHANNELS) return g.A.editedDefaultChannelIds.size > 0;
    if (_ === b.Hy.CUSTOMIZATION_QUESTIONS) return f.A.editedOnboardingPrompts.length > 0 || m.A.getEditedConnections().length > 0;
    if (_ === b.Hy.HOME_SETTINGS) return !(0, o.jJ)(p.A.getSettings());
    if (_ === b.Hy.CONNECTIONS) return m.A.getEditedConnections().length > 0;
    returnfalse
  }
  hasErrors() {
    return _ === b.Hy.CUSTOMIZATION_QUESTIONS && null != f.A.errors.find(e => null != e)
  }
  showNotice() {
    if (null == O) returnfalse;
    if ((0, h.o)(O)) return this.hasChanges();
    let e = d.A.getCurrentPage();
    return (_ !== b.Hy.SAFETY_CHECK || e === u.C.OVERVIEW) && null != _ && _ !== b.Hy.LANDING
  }
  canCloseEarly() {
    return null == O || !this.hasErrors() && (!(0, h.o)(O) || !this.hasChanges())
  }
}(i = "displayName") in y ? Object.defineProperty(y, i, {
  value: "GuildSettingsOnboardingStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : y[i] = "GuildSettingsOnboardingStore";
let A = new y(Chunk73153.h, {
  GUILD_SETTINGS_INIT: v,
  GUILD_SETTINGS_SET_SECTION: v,
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