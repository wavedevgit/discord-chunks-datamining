/** Chunk was on web.js **/
/** chunk id: 304432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => u,
  W: () => l
}), require("./642613.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk695346 = require("./695346.js"),
  Chunk430824 = require("./430824.js"),
  Chunk771845 = require("./771845.js"),
  l = function(e) {
    return e.SERVER_ORDER = "server-order", e.RECENTLY_JOINED = "recently-joined", e.ACTIVITY_SHARING_ON = "activity-sharing-on", e.ACTIVITY_SHARING_OFF = "activity-sharing-off", e
  }({});
let c = {
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
  let [e, t] = (0, r.useState)(""), [n, l] = (0, r.useState)("server-order"), u = (0, i.e7)([s.ZP], () => s.ZP.getFlattenedGuildIds()), d = (0, i.e7)([o.Z], () => o.Z.getGuilds()), f = u.map(e => d[e]), p = a.CW.useSetting(), [_, m] = (0, r.useState)(p), h = async e => {
    m(e);
    try {
      await a.CW.updateSetting(e)
    } catch (e) {
      m(p)
    }
  }, g = e => {
    let {
      checked: t,
      guildId: n
    } = e, r = new Set(_);
    t ? r.delete(n) : r.add(n), h([...r])
  }, E = e => _.includes(e), b = 0 !== _.length, y = () => {
    b ? h([]) : h(u)
  }, [O, v] = (0, r.useState)(() => c[n](f, p)), S = O.map(e => d[e.id]).filter(Boolean);
  return {
    guilds: "" === e ? S : S.filter(t => t.name.toLowerCase().includes(e.toLowerCase())),
    sortOrder: n,
    searchQuery: e,
    setSortOrder: e => {
      v(c[e](f, p)), l(e)
    },
    setSearchQuery: t,
    onToggleActivityRestrictedGuild: g,
    isActivityRestricted: E,
    hasActivityRestrictedGuilds: b,
    onToggleAllActivityRestrictedGuilds: y,
    numTotalGuilds: u.length,
    numActivityRestrictedGuilds: _.length
  }
}