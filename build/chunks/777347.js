/** Chunk was on 88615 **/
/** chunk id: 777347, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => f,
  U: () => p
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

function f(e, t) {
  let l = (0, n.yK)([o.A], () => {
      var t;
      return null != (t = o.A.getAppliedGuildBoostsForGuild(e)) ? t : []
    }, [e]),
    f = r.useMemo(() => [...l].sort((e, t) => c.default.extractTimestamp(e.id) < c.default.extractTimestamp(t.id) ? 1 : false).slice(0, t), [l, t]),
    p = (0, n.yK)([u.Ay], () => {
      let t = new Set;
      return f.forEach(l => {
        null == u.Ay.getMember(e, l.userId) && t.add(l.userId)
      }), Array.from(t)
    }, [e, f]);
  r.useEffect(() => {
    p.length > 0 && p.forEach(t => a.A.requestMember(e, t))
  }, [e, p]);
  let m = r.useMemo(() => p.length > 0 ? {
    [e]: p
  } : {}, [e, p]);
  (0, s.E)(m, "GuildPowerupsRecentActivity");
  let v = (0, n.bG)([d.A], () => {
    var t;
    return null == (t = d.A.getGuild(e)) ? true : t.premiumSubscriberCount
  });
  return r.useEffect(() => {
    v !== l.length && (0, i.VU)(e)
  }, [e, v, l.length]), f
}

function p(e) {
  let t = new Date(c.default.extractTimestamp(e.id)),
    {
      username: l,
      roleColor: r,
      roleColorStrings: i
    } = (0, n.cf)([u.Ay], () => {
      var t, l, r, n;
      let i = u.Ay.getMember(e.guildId, e.userId);
      return {
        username: null != (t = u.Ay.getNick(e.guildId, e.userId)) ? t : null == (n = e.user) ? true : n.username,
        roleColor: null != (l = null == i ? true : i.colorString) ? l : null,
        roleColorStrings: null != (r = null == i ? true : i.colorStrings) ? r : null
      }
    }, [e]);
  return {
    timestamp: t,
    username: l,
    roleColor: r,
    roleColorStrings: i
  }
}