/** Chunk was on web.js **/
/** chunk id: 471613, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
});
var r, Chunk31775 = require("./31775.js"),
  a = require.n(Chunk31775),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk40572 = require("./40572.js"),
  Chunk914010 = require("./914010.js"),
  Chunk70956 = require("./70956.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = {},
  _ = {},
  p = 0,
  h = false,
  m = new(a())({
    max: 5,
    maxAge: Chunk70956.Z.Millis.HOUR
  });

function g(e) {
  let {
    guildId: t,
    emojis: n
  } = e;
  _[t] = n.map(e => new l.Z(e))
}

function E(e) {
  let {
    guildId: t
  } = e;
  _[t] = []
}

function b() {
  p++
}

function y() {
  p--
}

function O(e) {
  let {
    autoOpen: t
  } = e;
  h = t
}

function v(e) {
  var t;
  let {
    guildId: n
  } = e;
  f[n] = (null != (t = f[n]) ? t : 0) + 1
}

function I(e) {
  let {
    guildId: t,
    emojiId: n
  } = e;
  _[t] = _[t].filter(e => e.id !== n)
}

function T(e) {
  let {
    emojiId: t,
    userImage: n
  } = e;
  m.set(t, n)
}
class S extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk914010.Z)
  }
  isUploadingEmoji() {
    return p > 0
  }
  getEmojiRevision(e) {
    var t;
    return null != (t = f[e]) ? t : 0
  }
  getEmojis(e) {
    return _[e]
  }
  getEmojiFileInputAutoOpen() {
    return h
  }
  getEmojiRawAsset(e) {
    return m.get(e)
  }
}
d(S, "displayName", "GuildSettingsEmojiStore");
let A = new S(Chunk570140.Z, {
  EMOJI_DELETE: I,
  EMOJI_FETCH_SUCCESS: g,
  EMOJI_FETCH_FAILURE: E,
  EMOJI_UPLOAD_START: b,
  EMOJI_UPLOAD_STOP: y,
  EMOJI_FILE_INPUT_AUTO_OPEN: O,
  EMOJI_CACHE_RAW_EMOJI_ASSET: T,
  GUILD_EMOJIS_UPDATE: v
})