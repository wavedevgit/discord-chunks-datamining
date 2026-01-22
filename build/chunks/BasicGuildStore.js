/** Chunk was on web.js **/
/** chunk id: 958340, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
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
let o = 0,
  l = {};

function c(e) {
  return l[e.guildId] = {
    type: "loading"
  }, false
}

function u(e) {
  l[e.guildId] = e.guildInfo, o++
}

function d(e) {
  return l[e.guildId] = {
    type: "failed"
  }, false
}
class f extends(r = Chunk311907.Ay.Store) {
  getGuild(e) {
    let t = l[e];
    if (null != t && !("type" in t)) return t
  }
  isGuildFetching(e) {
    let t = l[e];
    return null != t && "type" in t && "loading" === t.type
  }
  getGuildOrStatus(e) {
    return l[e]
  }
  getVersion() {
    return o
  }
}
s(f, "displayName", "BasicGuildStore");
let p = new f(Chunk73153.h, {
  BASIC_GUILD_FETCH: c,
  BASIC_GUILD_FETCH_SUCCESS: u,
  BASIC_GUILD_FETCH_FAILURE: d
})