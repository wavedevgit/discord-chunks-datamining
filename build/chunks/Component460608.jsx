/** Chunk was on 44799 **/
/** chunk id: 460608, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./642613.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk597312 = require("./597312.js"),
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
  Chunk683365 = require("./683365.js");

function h(e) {
  let {
    guildId: t
  } = e, n = (0, a.Wu)([u.Z], () => {
    var e;
    return null != (e = u.Z.getAppliedGuildBoostsForGuild(t)) ? e : []
  }, [t]), h = o.useMemo(() => n.sort((e, t) => g.default.extractTimestamp(e.id) < g.default.extractTimestamp(t.id) ? 1 : false), [n]), x = (0, a.Wu)([p.ZP], () => {
    let e = new Set;
    return h.forEach(n => {
      null == p.ZP.getMember(t, n.userId) && e.add(n.userId)
    }), Array.from(e)
  }, [t, h]);
  o.useEffect(() => {
    x.length > 0 && x.forEach(e => d.Z.requestMember(t, e))
  }, [t, x]);
  let b = o.useMemo(() => x.length > 0 ? {
    [t]: x
  } : {}, [t, x]);
  (0, c.$)(b, "GuildPowerupsRecentActivity");
  let C = (0, a.e7)([m.Z], () => {
    var e;
    return null == (e = m.Z.getGuild(t)) ? true : e.premiumSubscriberCount
  });
  return (o.useEffect(() => {
    C !== n.length && (0, s.C0)(t)
  }, [t, C, n.length]), 0 === h.length) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.X6q, {
      className: _.header,
      variant: "eyebrow",
      color: "text-secondary",
      children: v.intl.string(v.t.yM9Krq)
    }), (0, r.jsx)(i.zJ, {
      className: _.container,
      fade: true,
      children: h.map((e, t) => (0, r.jsx)(f.Z, {
        boost: e
      }, "boost-activity-".concat(t)))
    })]
  })
}