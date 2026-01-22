/** Chunk was on 76443 **/
/** chunk id: 885617, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
});
var l, r, Chunk635377 = require("./635377.js"),
  a = require.n(Chunk635377),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk950762 = require("./950762.js"),
  Chunk967198 = require("./967198.js"),
  Chunk927813 = require("./927813.js");
let m = {},
  h = {},
  g = 0,
  f = new(a())({
    max: 5,
    maxAge: Chunk927813.A.Millis.HOUR
  });
class b extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.A)
  }
  isUploadingEmoji() {
    return g > 0
  }
  getEmojiRevision(e) {
    var t;
    return null != (t = m[e]) ? t : 0
  }
  getEmojis(e) {
    return h[e]
  }
  getEmojiRawAsset(e) {
    return f.get(e)
  }
}(l = "displayName") in b ? Object.defineProperty(b, l, {
  value: "GuildSettingsEmojiStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : b[l] = "GuildSettingsEmojiStore";
let j = new b(Chunk73153.h, {
  EMOJI_DELETE: function(e) {
    let {
      guildId: t,
      emojiId: n
    } = e;
    h[t] = h[t].filter(e => e.id !== n)
  },
  EMOJI_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      emojis: n
    } = e;
    h[t] = n.map(e => new o.A(e))
  },
  EMOJI_FETCH_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    h[t] = []
  },
  EMOJI_UPLOAD_START: function() {
    g++
  },
  EMOJI_UPLOAD_STOP: function() {
    g--
  },
  EMOJI_CACHE_RAW_EMOJI_ASSET: function(e) {
    let {
      emojiId: t,
      userImage: n
    } = e;
    f.set(t, n)
  },
  GUILD_EMOJIS_UPDATE: function(e) {
    var t;
    let {
      guildId: n
    } = e;
    m[n] = (null != (t = m[n]) ? t : 0) + 1
  }
})