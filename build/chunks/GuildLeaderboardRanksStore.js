/** Chunk was on web.js **/
/** chunk id: 235587, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk570140 = require("./570140.js"),
  Chunk709054 = require("./709054.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t, n) {
  return "".concat(e, ",").concat(t, ",").concat(n)
}
let d = () => ({
    currentLeaderboardRanks: {},
    prevLeaderboardRanks: {}
  }),
  f = d();

function _(e) {
  var t;
  let {
    leaderboardResponse: n,
    intervalOffset: r
  } = e;
  if (0 !== r) returnfalse;
  let {
    leaderboard: i
  } = n, o = u(i.guild_id, i.leaderboard_id, i.interval_start), l = {
    ranks: i.users.map(e => e.user_id),
    ttl: s.default.extractTimestamp(i.interval_end)
  }, c = f.currentLeaderboardRanks[o];
  if ((0, a.E)(l.ranks, null != (t = null == c ? true : c.ranks) ? t : [])) returnfalse;
  f.prevLeaderboardRanks[o] = c, f.currentLeaderboardRanks[o] = l
}

function p() {
  let e = Date.now();
  for (let [t, n] of Object.entries(f.prevLeaderboardRanks))(null == require || module > require.ttl) && delete f.prevLeaderboardRanks[exports];
  for (let [t, n] of Object.entries(f.currentLeaderboardRanks))(null == require || module > require.ttl) && delete f.currentLeaderboardRanks[exports]
}
class h extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    return f = c({}, f, null != e ? e : {}), p(), true
  }
  getState() {
    return f
  }
  getPrevLeaderboardRanks(e, t, n) {
    let r = u(e, t, n);
    return f.prevLeaderboardRanks[r]
  }
  getCurrentLeaderboardRanks(e, t, n) {
    let r = u(e, t, n);
    return f.currentLeaderboardRanks[r]
  }
  reset() {
    f = d()
  }
}
l(h, "displayName", "GuildLeaderboardRanksStore"), l(h, "persistKey", "GuildLeaderboardRanksStore");
let m = new h(Chunk570140.Z, {
  SET_GUILD_LEADERBOARD: _
})