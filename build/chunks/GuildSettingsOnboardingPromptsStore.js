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
  g = null,
  I = [],
  N = false,
  f = [];

function S() {
  h = false, g = null, f = [], N = false, null != (g = Chunk999382.Z.getGuildId()) && Chunk999382.Z.getSection() === Chunk981631.pNK.ONBOARDING && (I = Chunk45966.Z.getOnboardingPrompts(g), N = Chunk45966.Z.isAdvancedMode(g))
}
class p extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk999382.Z, Chunk45966.Z)
  }
  hasChanges() {
    return null != g && !s().isEqual(Chunk45966.Z.getOnboardingPrompts(g), I)
  }
  getChangedPrompts() {
    if (null == g) return [];
    let e = Chunk45966.Z.getOnboardingPrompts(g);
    return I.filter(t => {
      let n = e.find(e => e.id === t.id);
      return null == n || !s().isEqual(t, n)
    })
  }
  get guildId() {
    return g
  }
  get submitting() {
    return h
  }
  get errors() {
    return f
  }
  get editedOnboardingPrompts() {
    return I
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
  GUILD_SETTINGS_INIT: S,
  GUILD_SETTINGS_SET_SECTION: S,
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: S,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: S,
  GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: S,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: S,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function(e) {
    var t;
    f = null != (t = e.errors) ? t : [], h = false
  },
  GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function(e) {
    let {
      prompts: t
    } = e;
    I = t
  },
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function() {
    h = true, f = []
  },
  GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function(e) {
    var t;
    f = null != (t = e.errors) ? t : []
  },
  GUILD_SETTINGS_ONBOARDING_SET_MODE: function(e) {
    let {
      mode: t
    } = e;
    N = t === m.Un.ONBOARDING_ADVANCED
  }
})