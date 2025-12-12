/** Chunk was on web.js **/
/** chunk id: 396352, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {
    topEmojisByGuildId: {}
  },
  l = s,
  c = {};

function u() {
  l = s, c = {}
}

function d(e) {
  let {
    guildId: t
  } = e;
  c[t] = true
}

function f(e) {
  let {
    guildId: t,
    topEmojisMetadata: n
  } = e;
  l.topEmojisByGuildId[t] = n.map(e => e.emojiId), c[t] = false
}
class p extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    l = null != e ? e : s
  }
  getState() {
    return l
  }
  getTopEmojiIdsByGuildId(e) {
    return l.topEmojisByGuildId[e]
  }
  getIsFetching(e) {
    return c[e]
  }
}
a(p, "displayName", "TopEmojiStore"), a(p, "persistKey", "TopEmojiStore");
let _ = new p(Chunk570140.Z, {
  LOGOUT: u,
  TOP_EMOJIS_FETCH: d,
  TOP_EMOJIS_FETCH_SUCCESS: f
})