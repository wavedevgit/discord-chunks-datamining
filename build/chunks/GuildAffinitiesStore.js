/** Chunk was on web.js **/
/** chunk id: 197305, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./321073.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk213012 = require("./213012.js"),
  Chunk71393 = require("./71393.js");

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
  return Date.now() - u.lastFetched > c && (0, s.I)(), false
}

function _() {
  d()
}
d();
class h extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (u = e), this.waitFor(o.A)
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
let m = new h(Chunk73153.h, {
  CONNECTION_OPEN: p,
  LOAD_GUILD_AFFINITIES_SUCCESS: f,
  LOGOUT: _
})