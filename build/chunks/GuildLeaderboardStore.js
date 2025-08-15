/** Chunk was on web.js **/
/** chunk id: 994752, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk664674 = require("./664674.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = false,
  c = new Map;

function u(e) {
  let {
    leaderboardResponse: t,
    intervalOffset: n
  } = e, {
    leaderboard: r
  } = t, {
    guild_id: i,
    leaderboard_id: a
  } = r, o = c.get(n);
  null == o && (o = new Map, c.set(n, o));
  let s = o.get(i);
  null == s && (s = new Map, o.set(i, s)), s.set(a, t)
}

function d() {
  c = new Map
}
class f extends(r = Chunk442837.ZP.Store) {
  getLeaderboards(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
    return null == (t = c.get(n)) ? true : t.get(e)
  }
  get(e, t) {
    var n;
    let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 0;
    return l ? o.Z : null == (n = this.getLeaderboardResponse(e, t, r)) ? true : n.leaderboard
  }
  getLeaderboardResponse(e, t) {
    var n, r;
    let i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 0;
    return null == (r = c.get(i)) || null == (n = r.get(e)) ? true : n.get(t)
  }
}
s(f, "displayName", "GuildLeaderboardStore");
let _ = new f(Chunk570140.Z, {
  CONNECTION_OPEN: d,
  SET_GUILD_LEADERBOARD: u
})