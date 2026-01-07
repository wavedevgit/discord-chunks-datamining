/** Chunk was on 58227 **/
/** chunk id: 208665, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var l, i, Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45966 = require("./45966.js"),
  Chunk999382 = require("./999382.js"),
  Chunk981631 = require("./981631.js"),
  Chunk290511 = require("./290511.js");
let g = false,
  f = null,
  h = [],
  N = false,
  I = [];

function p() {
  g = false, f = null, I = [], N = false, null != (f = d.Z.getGuildId()) && d.Z.getSection() === u.pNK.ONBOARDING && (h = c.Z.getOnboardingPrompts(f), N = c.Z.isAdvancedMode(f))
}
class O extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(d.Z, c.Z)
  }
  hasChanges() {
    return null != f && !s().isEqual(c.Z.getOnboardingPrompts(f), h)
  }
  getChangedPrompts() {
    if (null == f) return [];
    let e = c.Z.getOnboardingPrompts(f);
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
let E = new O(Chunk570140.Z, {
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
    N = t === m.Un.ONBOARDING_ADVANCED
  }
})