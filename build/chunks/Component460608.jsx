/** Chunk was on 44799 **/
/** chunk id: 460608, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./642613.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk179360 = require("./179360.js"),
  Chunk616780 = require("./616780.js"),
  Chunk899667 = require("./899667.js"),
  Chunk720202 = require("./720202.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk709054 = require("./709054.js"),
  Chunk659679 = require("./659679.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk240379 = require("./240379.js");

function x(e) {
  let {
    guildId: t
  } = e, n = (0, o.Wu)([c.Z], () => {
    var e;
    return null != (e = c.Z.getAppliedGuildBoostsForGuild(t)) ? e : []
  }, [t]), x = i.useMemo(() => n.sort((e, t) => f.default.extractTimestamp(e.id) < f.default.extractTimestamp(t.id) ? 1 : false), [n]), _ = (0, o.Wu)([d.ZP], () => {
    let e = new Set;
    return x.forEach(n => {
      null == d.ZP.getMember(t, n.userId) && e.add(n.userId)
    }), Array.from(e)
  }, [t, x]);
  i.useEffect(() => {
    _.length > 0 && _.forEach(e => u.Z.requestMember(t, e))
  }, [t, _]);
  let b = i.useMemo(() => _.length > 0 ? {
    [t]: _
  } : {}, [t, _]);
  (0, s.$)(b, "GuildPowerupsRecentActivity");
  let h = (0, o.e7)([p.Z], () => {
    var e;
    return null == (e = p.Z.getGuild(t)) ? true : e.premiumSubscriberCount
  });
  return (i.useEffect(() => {
    h !== n.length && (0, a.C0)(t)
  }, [t, h, n.length]), 0 === x.length) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.X6q, {
      className: v.header,
      variant: "eyebrow",
      color: "text-secondary",
      children: g.intl.string(g.t.yM9Krm)
    }), (0, r.jsx)(l.zJl, {
      className: v.container,
      fade: true,
      children: x.map((e, t) => (0, r.jsx)(m.Z, {
        boost: e
      }, "boost-activity-".concat(t)))
    })]
  })
}