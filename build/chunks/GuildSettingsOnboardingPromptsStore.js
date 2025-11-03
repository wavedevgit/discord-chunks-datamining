/** Chunk was on 58227 **/
/** chunk id: 208665, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var l, r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45966 = require("./45966.js"),
  Chunk999382 = require("./999382.js"),
  Chunk981631 = require("./981631.js"),
  Chunk290511 = require("./290511.js");
let g = false,
  h = null,
  f = [],
  N = false,
  I = [];

function p() {
  g = false, h = null, I = [], N = false, null != (h = Chunk999382.Z.getGuildId()) && Chunk999382.Z.getSection() === Chunk981631.pNK.ONBOARDING && (f = Chunk45966.Z.getOnboardingPrompts(h), N = Chunk45966.Z.isAdvancedMode(h))
}
class O extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk999382.Z, Chunk45966.Z)
  }
  hasChanges() {
    return null != h && !a().isEqual(Chunk45966.Z.getOnboardingPrompts(h), f)
  }
  getChangedPrompts() {
    if (null == h) return [];
    let e = Chunk45966.Z.getOnboardingPrompts(h);
    return f.filter(t => {
      let n = e.find(e => e.id === t.id);
      return null == n || !a().isEqual(t, n)
    })
  }
  get guildId() {
    return h
  }
  get submitting() {
    return g
  }
  get errors() {
    return I
  }
  get editedOnboardingPrompts() {
    return f
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
    f = t
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