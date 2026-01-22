/** Chunk was on 50796 **/
/** chunk id: 655943, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
});
var l, r, Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk591552 = require("./591552.js"),
  Chunk555337 = require("./555337.js"),
  Chunk652215 = require("./652215.js"),
  Chunk539916 = require("./539916.js");
let g = false,
  f = null,
  h = [],
  N = false,
  I = [];

function p() {
  g = false, f = null, I = [], N = false, null != (f = d.A.getGuildId()) && d.A.getSection() === u.BEX.ONBOARDING && (h = c.A.getOnboardingPrompts(f), N = c.A.isAdvancedMode(f))
}
class O extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(d.A, c.A)
  }
  hasChanges() {
    return null != f && !s().isEqual(c.A.getOnboardingPrompts(f), h)
  }
  getChangedPrompts() {
    if (null == f) return [];
    let e = c.A.getOnboardingPrompts(f);
    return h.filter(t => {
      let n = e.find(e => e.id === t.id);
      return null == n || !s().isEqual(t, n)
    })
  }
  get guildId() {
    return f
  }
  get submitting() {
    return g
  }
  get errors() {
    return I
  }
  get editedOnboardingPrompts() {
    return h
  }
  get advancedMode() {
    return N
  }
}(l = "displayName") in O ? Object.defineProperty(O, l, {
  value: "GuildSettingsOnboardingPromptsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : O[l] = "GuildSettingsOnboardingPromptsStore";
let S = new O(Chunk73153.h, {
  GUILD_SETTINGS_INIT: p,
  GUILD_SETTINGS_SET_SECTION: p,
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: p,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: p,
  GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: p,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: p,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function(e) {
    var t;
    I = null != (t = e.errors) ? t : [], g = false
  },
  GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function(e) {
    let {
      prompts: t
    } = e;
    h = t
  },
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function() {
    g = true, I = []
  },
  GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function(e) {
    var t;
    I = null != (t = e.errors) ? t : []
  },
  GUILD_SETTINGS_ONBOARDING_SET_MODE: function(e) {
    let {
      mode: t
    } = e;
    N = t === m.SD.ONBOARDING_ADVANCED
  }
})