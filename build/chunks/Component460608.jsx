/** Chunk was on 44799 **/
/** chunk id: 460608, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  Chunk240379 = require("./240379.js");

function x(e) {
  let {
    guildId: t
  } = e, n = (0, l.Wu)([u.Z], () => {
    var e;
    return null != (e = u.Z.getAppliedGuildBoostsForGuild(t)) ? e : []
  }, [t]), x = o.useMemo(() => n.sort((e, t) => f.default.extractTimestamp(e.id) < f.default.extractTimestamp(t.id) ? 1 : false), [n]), h = (0, l.Wu)([p.ZP], () => {
    let e = new Set;
    return x.forEach(n => {
      null == p.ZP.getMember(t, n.userId) && e.add(n.userId)
    }), Array.from(e)
  }, [t, x]);
  o.useEffect(() => {
    h.length > 0 && h.forEach(e => d.Z.requestMember(t, e))
  }, [t, h]);
  let b = o.useMemo(() => h.length > 0 ? {
    [t]: h
  } : {}, [t, h]);
  (0, c.$)(b, "GuildPowerupsRecentActivity");
  let C = (0, l.e7)([m.Z], () => {
    var e;
    return null == (e = m.Z.getGuild(t)) ? true : e.premiumSubscriberCount
  });
  return (o.useEffect(() => {
    C !== n.length && (0, a.C0)(t)
  }, [t, C, n.length]), 0 === x.length) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.X6, {
      className: _.header,
      variant: "eyebrow",
      color: "text-secondary",
      children: v.intl.string(v.t.yM9Krq)
    }), (0, r.jsx)(i.zJ, {
      className: _.container,
      fade: true,
      children: x.map((e, t) => (0, r.jsx)(g.Z, {
        boost: e
      }, "boost-activity-".concat(t)))
    })]
  })
}