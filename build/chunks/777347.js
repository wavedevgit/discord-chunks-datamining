/** Chunk was on 88615 **/
/** chunk id: 777347, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p,
  U: () => m
}), require("./896048.js"), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk923408 = require("./923408.js"),
  Chunk80682 = require("./80682.js"),
  Chunk859241 = require("./859241.js"),
  Chunk256587 = require("./256587.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk661191 = require("./661191.js");

function p(e, t) {
  let n = (0, l.yK)([s.A], () => {
      var t;
      return null != (t = s.A.getAppliedGuildBoostsForGuild(e)) ? t : []
    }, [e]),
    p = r.useMemo(() => [...n].sort((e, t) => c.default.extractTimestamp(e.id) < c.default.extractTimestamp(t.id) ? 1 : false).slice(0, t), [n, t]),
    m = (0, l.yK)([u.Ay], () => {
      let t = new Set;
      return p.forEach(n => {
        null == u.Ay.getMember(e, n.userId) && t.add(n.userId)
      }), Array.from(t)
    }, [e, p]);
  r.useEffect(() => {
    m.length > 0 && m.forEach(t => a.A.requestMember(e, t))
  }, [e, m]);
  let f = r.useMemo(() => m.length > 0 ? {
    [e]: m
  } : {}, [e, m]);
  (0, o.E)(f, "GuildPowerupsRecentActivity");
  let v = (0, l.bG)([d.A], () => {
    var t;
    return null == (t = d.A.getGuild(e)) ? true : t.premiumSubscriberCount
  });
  return r.useEffect(() => {
    v !== n.length && (0, i.VU)(e)
  }, [e, v, n.length]), p
}

function m(e) {
  let t = new Date(c.default.extractTimestamp(e.id)),
    {
      username: n,
      roleColor: r,
      roleColorStrings: i
    } = (0, l.cf)([u.Ay], () => {
      var t, n, r, l;
      let i = u.Ay.getMember(e.guildId, e.userId);
      return {
        username: null != (t = u.Ay.getNick(e.guildId, e.userId)) ? t : null == (l = e.user) ? true : l.username,
        roleColor: null != (n = null == i ? true : i.colorString) ? n : null,
        roleColorStrings: null != (r = null == i ? true : i.colorStrings) ? r : null
      }
    }, [e]);
  return {
    timestamp: t,
    username: n,
    roleColor: r,
    roleColorStrings: i
  }
}