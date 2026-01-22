/** Chunk was on web.js **/
/** chunk id: 354430, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = {
    topEmojisByGuildId: {}
  },
  l = o,
  c = {};

function u() {
  l = o, c = {}
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
class p extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    l = null != e ? e : o
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
s(p, "displayName", "TopEmojiStore"), s(p, "persistKey", "TopEmojiStore");
let _ = new p(Chunk73153.h, {
  LOGOUT: u,
  TOP_EMOJIS_FETCH: d,
  TOP_EMOJIS_FETCH_SUCCESS: f
})