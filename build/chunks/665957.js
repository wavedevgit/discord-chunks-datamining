/** Chunk was on 44799 **/
/** chunk id: 665957, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p,
  _: () => f
}), require("./388685.js"), require("./642613.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk179360 = require("./179360.js"),
  Chunk616780 = require("./616780.js"),
  Chunk899667 = require("./899667.js"),
  Chunk720202 = require("./720202.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk709054 = require("./709054.js");

function p(e, t) {
  let n = (0, i.Wu)([a.Z], () => {
      var t;
      return null != (t = a.Z.getAppliedGuildBoostsForGuild(e)) ? t : []
    }, [e]),
    p = r.useMemo(() => [...n].sort((e, t) => d.default.extractTimestamp(e.id) < d.default.extractTimestamp(t.id) ? 1 : false).slice(0, t), [n, t]),
    f = (0, i.Wu)([c.ZP], () => {
      let t = new Set;
      return p.forEach(n => {
        null == c.ZP.getMember(e, n.userId) && t.add(n.userId)
      }), Array.from(t)
    }, [e, p]);
  r.useEffect(() => {
    f.length > 0 && f.forEach(t => s.Z.requestMember(e, t))
  }, [e, f]);
  let m = r.useMemo(() => f.length > 0 ? {
    [e]: f
  } : {}, [e, f]);
  (0, l.$)(m, "GuildPowerupsRecentActivity");
  let g = (0, i.e7)([u.Z], () => {
    var t;
    return null == (t = u.Z.getGuild(e)) ? true : t.premiumSubscriberCount
  });
  return r.useEffect(() => {
    g !== n.length && (0, o.C0)(e)
  }, [e, g, n.length]), p
}

function f(e) {
  let t = new Date(d.default.extractTimestamp(e.id)),
    {
      username: n,
      roleColor: r,
      roleColorStrings: o
    } = (0, i.cj)([c.ZP], () => {
      var t, n, r, i;
      let o = c.ZP.getMember(e.guildId, e.userId);
      return {
        username: null != (n = c.ZP.getNick(e.guildId, e.userId)) ? n : null == (t = e.user) ? true : t.username,
        roleColor: null != (r = null == o ? true : o.colorString) ? r : null,
        roleColorStrings: null != (i = null == o ? true : o.colorStrings) ? i : null
      }
    }, [e]);
  return {
    timestamp: t,
    username: n,
    roleColor: r,
    roleColorStrings: o
  }
}