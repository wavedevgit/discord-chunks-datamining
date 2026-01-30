/** Chunk was on 2827 **/
/** chunk id: 197305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./321073.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk213012 = require("./213012.js"),
  Chunk71393 = require("./71393.js");

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
class u extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (c = e), this.waitFor(a.A)
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
let _ = new u(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    return Date.now() - c.lastFetched > 864e5 && (0, s.I)(), false
  },
  LOAD_GUILD_AFFINITIES_SUCCESS: function(e) {
    let {
      guildAffinities: t
    } = e;
    c.guildAffinities = [], c.guildAffinitiesByGuildId = {}, c.lastFetched = Date.now(), t.forEach((e, t) => {
      let {
        affinity: n,
        guild_id: r
      } = e, i = {
        score: n,
        guildId: r,
        index: t
      };
      c.guildAffinitiesByGuildId[r] = i, c.guildAffinities.push(i)
    })
  },
  LOGOUT: function() {
    d()
  }
})