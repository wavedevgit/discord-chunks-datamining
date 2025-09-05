/** Chunk was on 58227 **/
/** chunk id: 889369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./642613.js");
var l, i, Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45966 = require("./45966.js"),
  Chunk999382 = require("./999382.js"),
  Chunk981631 = require("./981631.js");
let m = false,
  h = null,
  g = new Set;

function I() {
  m = false, h = null, null != (h = Chunk999382.Z.getGuildId()) && Chunk999382.Z.getSection() === Chunk981631.pNK.ONBOARDING && (g = new Set(Chunk45966.Z.getDefaultChannelIds(h)))
}
class N extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk999382.Z, Chunk45966.Z)
  }
  hasChanges() {
    if (null == h) returnfalse;
    let e = Chunk45966.Z.getDefaultChannelIds(h).sort(),
      t = Array.from(g).sort();
    return !s().isEqual(module, exports)
  }
  get guildId() {
    return h
  }
  get submitting() {
    return m
  }
  get editedDefaultChannelIds() {
    return g
  }
}(i = "displayName") in N ? Object.defineProperty(N, i, {
  value: "GuildSettingsDefaultChannelsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : N[i] = "GuildSettingsDefaultChannelsStore";
let f = new N(Chunk570140.Z, {
  GUILD_SETTINGS_INIT: I,
  GUILD_SETTINGS_SET_SECTION: I,
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: I,
  GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: I,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: I,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function() {
    m = false
  },
  GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function(e) {
    let {
      channelId: t
    } = e;
    (g = new Set(g)).has(t) ? g.delete(t) : g.add(t)
  },
  GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function() {
    m = true
  }
})