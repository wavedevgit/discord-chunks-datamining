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
let h = false,
  I = null,
  g = [],
  N = false,
  S = [];

function f() {
  h = false, I = null, S = [], N = false, null != (I = Chunk999382.Z.getGuildId()) && Chunk999382.Z.getSection() === Chunk981631.pNK.ONBOARDING && (g = Chunk45966.Z.getOnboardingPrompts(I), N = Chunk45966.Z.isAdvancedMode(I))
}
class p extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk999382.Z, Chunk45966.Z)
  }
  hasChanges() {
    return null != I && !s().isEqual(Chunk45966.Z.getOnboardingPrompts(I), g)
  }
  get guildId() {
    return I
  }
  get submitting() {
    return h
  }
  get errors() {
    return S
  }
  get editedOnboardingPrompts() {
    return g
  }
  get advancedMode() {
    return N
  }
}(l = "displayName") in p ? Object.defineProperty(p, l, {
  value: "GuildSettingsOnboardingPromptsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : p[l] = "GuildSettingsOnboardingPromptsStore";
let E = new p(Chunk570140.Z, {
  GUILD_SETTINGS_INIT: f,
  GUILD_SETTINGS_SET_SECTION: f,
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: f,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: f,
  GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: f,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: f,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function(e) {
    var t;
    S = null != (t = e.errors) ? t : [], h = false
  },
  GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function(e) {
    let {
      prompts: t
    } = e;
    g = t
  },
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function() {
    h = true, S = []
  },
  GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function(e) {
    var t;
    S = null != (t = e.errors) ? t : []
  },
  GUILD_SETTINGS_ONBOARDING_SET_MODE: function(e) {
    let {
      mode: t
    } = e;
    N = t === m.Un.ONBOARDING_ADVANCED
  }
})