/** Chunk was on 50796 **/
/** chunk id: 863694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js"), require("./638769.js");
var l, r, Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk591552 = require("./591552.js"),
  Chunk555337 = require("./555337.js"),
  Chunk652215 = require("./652215.js");
let m = false,
  g = null,
  f = new Set;

function h() {
  m = false, g = null, null != (g = d.A.getGuildId()) && d.A.getSection() === u.BEX.ONBOARDING && (f = new Set(c.A.getDefaultChannelIds(g)))
}
class N extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(d.A, c.A)
  }
  hasChanges() {
    if (null == g) returnfalse;
    let e = c.A.getDefaultChannelIds(g).sort(),
      t = Array.from(f).sort();
    return !s().isEqual(e, t)
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
}(r = "displayName") in N ? Object.defineProperty(N, r, {
  value: "GuildSettingsDefaultChannelsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : N[r] = "GuildSettingsDefaultChannelsStore";
let I = new N(Chunk73153.h, {
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