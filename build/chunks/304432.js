/** Chunk was on 7384 **/
/** chunk id: 304432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => u,
  W: () => c
}), require("./642613.js"), require("./388685.js");
var i, Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk695346 = require("./695346.js"),
  Chunk430824 = require("./430824.js"),
  Chunk771845 = require("./771845.js"),
  c = ((i = {}).SERVER_ORDER = "server-order", i.RECENTLY_JOINED = "recently-joined", i.ACTIVITY_SHARING_ON = "activity-sharing-on", i.ACTIVITY_SHARING_OFF = "activity-sharing-off", i);
let d = {
  "recently-joined": e => e.concat().sort((e, t) => null == e.joinedAt ? false : null == t.joinedAt ? 1 : e.joinedAt === t.joinedAt ? 0 : new Date(t.joinedAt).getTime() - new Date(e.joinedAt).getTime()),
  "activity-sharing-on": (e, t) => e.concat().sort((e, n) => {
    let i = t.includes(e.id),
      r = t.includes(n.id);
    return !i && r ? false : i && !r ? 1 : 0
  }),
  "activity-sharing-off": (e, t) => e.concat().sort((e, n) => {
    let i = t.includes(e.id),
      r = t.includes(n.id);
    return i && !r ? false : !i && r ? 1 : 0
  }),
  "server-order": e => e
};

function u() {
  let [e, t] = (0, Chunk73800.useState)(""), [n, i] = (0, Chunk73800.useState)("server-order"), c = (0, Chunk442837.e7)([Chunk771845.ZP], () => Chunk771845.ZP.getFlattenedGuildIds()), u = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuilds()), m = c.map(e => u[e]), p = Chunk695346.CW.useSetting(), [g, h] = (0, Chunk73800.useState)(p), f = async e => {
    h(e);
    try {
      await a.CW.updateSetting(e)
    } catch (e) {
      h(p)
    }
  }, b = 0 !== g.length, [x, _] = (0, Chunk73800.useState)(() => d[require](m, p)), j = x.map(e => u[e.id]).filter(Boolean);
  return {
    guilds: "" === module ? j : j.filter(t => t.name.toLowerCase().includes(e.toLowerCase())),
    sortOrder: require,
    searchQuery: module,
    setSortOrder: e => {
      _(d[e](m, p)), i(e)
    },
    setSearchQuery: exports,
    onToggleActivityRestrictedGuild: e => {
      let {
        checked: t,
        guildId: n
      } = e, i = new Set(g);
      t ? i.delete(n) : i.add(n), f([...i])
    },
    isActivityRestricted: e => g.includes(e),
    hasActivityRestrictedGuilds: b,
    onToggleAllActivityRestrictedGuilds: () => {
      b ? f([]) : f(c)
    },
    numTotalGuilds: c.length,
    numActivityRestrictedGuilds: g.length
  }
}