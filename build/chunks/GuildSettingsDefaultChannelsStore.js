/** Chunk was on 58227 **/
/** chunk id: 889369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./642613.js");
var l, i, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45966 = require("./45966.js"),
  Chunk999382 = require("./999382.js"),
  Chunk981631 = require("./981631.js");
let m = false,
  g = null,
  f = new Set;

function h() {
  m = false, g = null, null != (g = Chunk999382.Z.getGuildId()) && Chunk999382.Z.getSection() === Chunk981631.pNK.ONBOARDING && (f = new Set(Chunk45966.Z.getDefaultChannelIds(g)))
}
class N extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk999382.Z, Chunk45966.Z)
  }
  hasChanges() {
    if (null == g) returnfalse;
    let e = Chunk45966.Z.getDefaultChannelIds(g).sort(),
      t = Array.from(f).sort();
    return !a().isEqual(module, exports)
  }
  get guildId() {
    return g
  }
  get submitting() {
    return m
  }
  get editedDefaultChannelIds() {
    return f
  }
}(i = "displayName") in N ? Object.defineProperty(N, i, {
  value: "GuildSettingsDefaultChannelsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : N[i] = "GuildSettingsDefaultChannelsStore";
let I = new N(Chunk570140.Z, {
  GUILD_SETTINGS_INIT: h,
  GUILD_SETTINGS_SET_SECTION: h,
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: h,
  GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: h,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: h,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function() {
    m = false
  },
  GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function(e) {
    let {
      channelId: t
    } = e;
    (f = new Set(f)).has(t) ? f.delete(t) : f.add(t)
  },
  GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function() {
    m = true
  }
})