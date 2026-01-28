/** Chunk was on 5606 **/
/** chunk id: 10077, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => u,
  c: () => c
}), require("./638769.js"), require("./896048.js");
var r, Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk253932 = require("./253932.js"),
  Chunk71393 = require("./71393.js"),
  Chunk711014 = require("./711014.js"),
  c = ((r = {}).SERVER_ORDER = "server-order", r.RECENTLY_JOINED = "recently-joined", r.ACTIVITY_SHARING_ON = "activity-sharing-on", r.ACTIVITY_SHARING_OFF = "activity-sharing-off", r);
let d = {
  "recently-joined": e => e.concat().sort((e, t) => null == e.joinedAt ? false : null == t.joinedAt ? 1 : e.joinedAt === t.joinedAt ? 0 : new Date(t.joinedAt).getTime() - new Date(e.joinedAt).getTime()),
  "activity-sharing-on": (e, t) => e.concat().sort((e, n) => {
    let r = t.includes(e.id),
      i = t.includes(n.id);
    return !r && i ? false : r && !i ? 1 : 0
  }),
  "activity-sharing-off": (e, t) => e.concat().sort((e, n) => {
    let r = t.includes(e.id),
      i = t.includes(n.id);
    return r && !i ? false : !r && i ? 1 : 0
  }),
  "server-order": e => e
};

function u() {
  let [e, t] = (0, i.useState)(""), [n, r] = (0, i.useState)("server-order"), c = (0, l.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()), u = (0, l.bG)([a.A], () => a.A.getGuilds()), p = c.map(e => u[e]), _ = s.Pw.useSetting(), [m, g] = (0, i.useState)(_), f = async e => {
    g(e);
    try {
      await s.Pw.updateSetting(e)
    } catch (e) {
      g(_)
    }
  }, b = 0 !== m.length, [h, A] = (0, i.useState)(() => d[n](p, _)), E = h.map(e => u[e.id]).filter(Boolean);
  return {
    guilds: "" === e ? E : E.filter(t => t.name.toLowerCase().includes(e.toLowerCase())),
    sortOrder: n,
    searchQuery: e,
    setSortOrder: e => {
      A(d[e](p, _)), r(e)
    },
    setSearchQuery: t,
    onToggleActivityRestrictedGuild: e => {
      let {
        checked: t,
        guildId: n
      } = e, r = new Set(m);
      t ? r.delete(n) : r.add(n), f([...r])
    },
    isActivityRestricted: e => m.includes(e),
    hasActivityRestrictedGuilds: b,
    onToggleAllActivityRestrictedGuilds: () => {
      b ? f([]) : f(c)
    },
    numTotalGuilds: c.length,
    numActivityRestrictedGuilds: m.length
  }
}