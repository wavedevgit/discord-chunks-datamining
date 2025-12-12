/** Chunk was on web.js **/
/** chunk id: 731290, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var r, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk622822 = require("./622822.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = "GuildNSFWAgreeStore",
  u = {};

function d(e) {
  let {
    guildId: t
  } = e;
  u[t] = true, o.K.set(c, u)
}
class f extends(r = Chunk442837.ZP.Store) {
  initialize() {
    var e;
    u = null != (e = Chunk433517.K.get(c)) ? module : u
  }
  didAgree(e) {
    return !(null == e || (0, s.dl)()) && (u[e] || false)
  }
}
l(f, "displayName", "GuildNSFWAgreeStore");
let p = new f(Chunk570140.Z, {
  GUILD_NSFW_AGREE: d
})