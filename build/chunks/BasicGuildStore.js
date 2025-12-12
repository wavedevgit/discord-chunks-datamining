/** Chunk was on web.js **/
/** chunk id: 356264, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
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
let s = 0,
  l = {};

function c(e) {
  return l[e.guildId] = {
    type: "loading"
  }, false
}

function u(e) {
  l[e.guildId] = e.guildInfo, s++
}

function d(e) {
  return l[e.guildId] = {
    type: "failed"
  }, false
}
class f extends(r = Chunk442837.ZP.Store) {
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
    return s
  }
}
a(f, "displayName", "BasicGuildStore");
let p = new f(Chunk570140.Z, {
  BASIC_GUILD_FETCH: c,
  BASIC_GUILD_FETCH_SUCCESS: u,
  BASIC_GUILD_FETCH_FAILURE: d
})