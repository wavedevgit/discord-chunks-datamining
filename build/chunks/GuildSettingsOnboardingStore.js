/** Chunk was on 47841 **/
/** chunk id: 287479, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => E
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
  O = Chunk400812.Hy.LANDING,
  y = null;

function v(e) {
  let {
    subsection: t
  } = e;
  if (o.A.getGuildId() === y) returnfalse;
  O = t === h.nd0.SERVER_GUIDE ? p.Hy.HOME_SETTINGS : p.Hy.LANDING, y = o.A.getGuildId()
}
class A extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(a.A, f.A, m.A, b.A, g.A, d.A, o.A), this.syncWith([a.A, f.A, m.A, b.A, g.A, d.A], () => true)
  }
  isEducationUpsellDismissed(e) {
    return j.has(e)
  }
  getCurrentPage() {
    return O
  }
  hasChanges() {
    if (null == y) returnfalse;
    let e = a.A.isAdvancedMode(y);
    if (O === p.Hy.DEFAULT_CHANNELS)
      if (e) return f.A.hasChanges() || m.A.hasChanges();
      else return f.A.hasChanges();
    return O === p.Hy.CUSTOMIZATION_QUESTIONS ? m.A.hasChanges() || g.A.hasChanges() : O === p.Hy.HOME_SETTINGS ? b.A.hasChanges() : O === p.Hy.CONNECTIONS && g.A.hasChanges()
  }
  hasConfiguredAnythingForCurrentStep() {
    if (null == y) returnfalse;
    if (O === p.Hy.SAFETY_CHECK) returntrue;
    if (O === p.Hy.DEFAULT_CHANNELS) return f.A.editedDefaultChannelIds.size > 0;
    if (O === p.Hy.CUSTOMIZATION_QUESTIONS) return m.A.editedOnboardingPrompts.length > 0 || g.A.getEditedConnections().length > 0;
    if (O === p.Hy.HOME_SETTINGS) return !(0, c.jJ)(b.A.getSettings());
    if (O === p.Hy.CONNECTIONS) return g.A.getEditedConnections().length > 0;
    returnfalse
  }
  hasErrors() {
    return O === p.Hy.CUSTOMIZATION_QUESTIONS && null != m.A.errors.find(e => null != e)
  }
  showNotice() {
    if (null == y) returnfalse;
    if ((0, x.o)(y)) return this.hasChanges();
    let e = d.A.getCurrentPage();
    return (O !== p.Hy.SAFETY_CHECK || e === u.C.OVERVIEW) && null != O && O !== p.Hy.LANDING
  }
  canCloseEarly() {
    return null == y || !this.hasErrors() && (!(0, x.o)(y) || !this.hasChanges())
  }
}(i = "displayName") in A ? Object.defineProperty(A, i, {
  value: "GuildSettingsOnboardingStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : A[i] = "GuildSettingsOnboardingStore";
let E = new A(Chunk73153.h, {
  GUILD_SETTINGS_INIT: v,
  GUILD_SETTINGS_SET_SECTION: v,
  GUILD_SETTINGS_ONBOARDING_STEP: function(e) {
    let {
      step: t
    } = e;
    O = t
  },
  GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function(e) {
    let {
      upsellType: t
    } = e;
    j.add(t)
  }
})