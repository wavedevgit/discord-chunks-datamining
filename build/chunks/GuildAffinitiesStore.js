/** Chunk was on 66181 **/
/** chunk id: 165630, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./539854.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk381496 = require("./381496.js"),
  Chunk430824 = require("./430824.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = {},
  d = () => {
    c = {
      guildAffinitiesByGuildId: {},
      guildAffinities: [],
      lastFetched: 0
    }
  };
d();
class u extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (c = e), this.waitFor(l.Z)
  }
  getState() {
    return c
  }
  getGuildAffinity(e) {
    return c.guildAffinitiesByGuildId[e]
  }
  get affinities() {
    return c.guildAffinities
  }
  get hasRequestResolved() {
    return 0 !== c.lastFetched
  }
}
o(u, "displayName", "GuildAffinitiesStore"), o(u, "persistKey", "GuildAffinitiesStore");
let m = new u(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    return Date.now() - c.lastFetched > 864e5 && (0, Chunk381496.j)(), false
  },
  LOAD_GUILD_AFFINITIES_SUCCESS: function(e) {
    let {
      guildAffinities: t
    } = e;
    c.guildAffinities = [], c.guildAffinitiesByGuildId = {}, c.lastFetched = Date.now(), t.forEach((e, t) => {
      let {
        affinity: n,
        guild_id: i
      } = e, r = {
        score: n,
        guildId: i,
        index: t
      };
      c.guildAffinitiesByGuildId[i] = r, c.guildAffinities.push(r)
    })
  },
  LOGOUT: function() {
    d()
  }
})