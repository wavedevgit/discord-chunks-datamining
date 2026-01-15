/** Chunk was on web.js **/
/** chunk id: 165630, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./539854.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk381496 = require("./381496.js"),
  Chunk430824 = require("./430824.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = 864e5,
  u = {},
  d = () => {
    u = {
      guildAffinitiesByGuildId: {},
      guildAffinities: [],
      lastFetched: 0
    }
  };

function f(e) {
  let {
    guildAffinities: t
  } = e;
  u.guildAffinities = [], u.guildAffinitiesByGuildId = {}, u.lastFetched = Date.now(), t.forEach((e, t) => {
    let {
      affinity: n,
      guild_id: r
    } = e, i = {
      score: n,
      guildId: r,
      index: t
    };
    u.guildAffinitiesByGuildId[r] = i, u.guildAffinities.push(i)
  })
}

function p() {
  return Date.now() - u.lastFetched > c && (0, o.j)(), false
}

function _() {
  d()
}
d();
class h extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (u = e), this.waitFor(s.Z)
  }
  getState() {
    return u
  }
  getGuildAffinity(e) {
    return u.guildAffinitiesByGuildId[e]
  }
  get affinities() {
    return u.guildAffinities
  }
  get hasRequestResolved() {
    return 0 !== u.lastFetched
  }
}
l(h, "displayName", "GuildAffinitiesStore"), l(h, "persistKey", "GuildAffinitiesStore");
let m = new h(Chunk570140.Z, {
  CONNECTION_OPEN: p,
  LOAD_GUILD_AFFINITIES_SUCCESS: f,
  LOGOUT: _
})