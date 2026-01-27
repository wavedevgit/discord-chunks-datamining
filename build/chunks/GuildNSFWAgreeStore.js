/** Chunk was on web.js **/
/** chunk id: 517019, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var r, Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk323073 = require("./323073.js");

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
  u[t] = true, a.w.set(c, u)
}
class f extends(r = Chunk311907.Ay.Store) {
  initialize() {
    var e;
    u = null != (e = a.w.get(c)) ? e : u
  }
  didAgree(e) {
    return !(null == e || (0, s.r9)()) && (u[e] || false)
  }
}
l(f, "displayName", "GuildNSFWAgreeStore");
let p = new f(Chunk73153.h, {
  GUILD_NSFW_AGREE: d
})