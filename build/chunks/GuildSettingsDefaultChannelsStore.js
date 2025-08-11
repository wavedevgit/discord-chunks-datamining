/** Chunk was on 58227 **/
/** chunk id: 889369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./642613.js");
var l, i, r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45966 = require("./45966.js"),
  Chunk999382 = require("./999382.js"),
  Chunk981631 = require("./981631.js");
let h = false,
  I = null,
  g = new Set;

function N() {
  h = false, I = null, null != (I = Chunk999382.Z.getGuildId()) && Chunk999382.Z.getSection() === Chunk981631.pNK.ONBOARDING && (g = new Set(Chunk45966.Z.getDefaultChannelIds(I)))
}
class f extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk999382.Z, Chunk45966.Z)
  }
  hasChanges() {
    if (null == I) returnfalse;
    let e = Chunk45966.Z.getDefaultChannelIds(I).sort(),
      t = Array.from(g).sort();
    return !a().isEqual(module, exports)
  }
  get guildId() {
    return I
  }
  get submitting() {
    return h
  }
  get editedDefaultChannelIds() {
    return g
  }
}
r = "GuildSettingsDefaultChannelsStore", (i = "displayName") in f ? Object.defineProperty(f, i, {
  value: r,
  enumerable: true,
  configurable: true,
  writable: true
}) : f[i] = r;
let S = new f(Chunk570140.Z, {
  GUILD_SETTINGS_INIT: N,
  GUILD_SETTINGS_SET_SECTION: N,
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: N,
  GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: N,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: N,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function() {
    h = false
  },
  GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function(e) {
    let {
      channelId: t
    } = e;
    (g = new Set(g)).has(t) ? g.delete(t) : g.add(t)
  },
  GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function() {
    h = true
  }
})