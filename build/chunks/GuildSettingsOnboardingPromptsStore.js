/** Chunk was on 58227 **/
/** chunk id: 208665, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var l, i, r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45966 = require("./45966.js"),
  Chunk999382 = require("./999382.js"),
  Chunk981631 = require("./981631.js"),
  Chunk290511 = require("./290511.js");
let I = false,
  g = null,
  N = [],
  f = false,
  S = [];

function p() {
  I = false, g = null, S = [], f = false, null != (g = Chunk999382.Z.getGuildId()) && Chunk999382.Z.getSection() === Chunk981631.pNK.ONBOARDING && (N = Chunk45966.Z.getOnboardingPrompts(g), f = Chunk45966.Z.isAdvancedMode(g))
}
class E extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk999382.Z, Chunk45966.Z)
  }
  hasChanges() {
    return null != g && !a().isEqual(Chunk45966.Z.getOnboardingPrompts(g), N)
  }
  get guildId() {
    return g
  }
  get submitting() {
    return I
  }
  get errors() {
    return S
  }
  get editedOnboardingPrompts() {
    return N
  }
  get advancedMode() {
    return f
  }
}
i = "GuildSettingsOnboardingPromptsStore", (l = "displayName") in E ? Object.defineProperty(E, l, {
  value: i,
  enumerable: true,
  configurable: true,
  writable: true
}) : E[l] = i;
let T = new E(Chunk570140.Z, {
  GUILD_SETTINGS_INIT: p,
  GUILD_SETTINGS_SET_SECTION: p,
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: p,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: p,
  GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: p,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: p,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function(e) {
    var t;
    S = null != (t = e.errors) ? t : [], I = false
  },
  GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function(e) {
    let {
      prompts: t
    } = e;
    N = t
  },
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function() {
    I = true, S = []
  },
  GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function(e) {
    var t;
    S = null != (t = e.errors) ? t : []
  },
  GUILD_SETTINGS_ONBOARDING_SET_MODE: function(e) {
    let {
      mode: t
    } = e;
    f = t === h.Un.ONBOARDING_ADVANCED
  }
})