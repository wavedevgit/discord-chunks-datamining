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
  } = e, n = (0, s.Wu)([u.Z], () => {
    var e;
    return null != (e = u.Z.getAppliedGuildBoostsForGuild(t)) ? e : []
  }, [t]), x = o.useMemo(() => n.sort((e, t) => g.default.extractTimestamp(e.id) < g.default.extractTimestamp(t.id) ? 1 : false), [n]), C = (0, s.Wu)([p.ZP], () => {
    let e = new Set;
    return x.forEach(n => {
      null == p.ZP.getMember(t, n.userId) && e.add(n.userId)
    }), Array.from(e)
  }, [t, x]);
  o.useEffect(() => {
    C.length > 0 && C.forEach(e => d.Z.requestMember(t, e))
  }, [t, C]);
  let h = o.useMemo(() => C.length > 0 ? {
    [t]: C
  } : {}, [t, C]);
  (0, c.$)(h, "GuildPowerupsRecentActivity");
  let b = (0, s.e7)([m.Z], () => {
    var e;
    return null == (e = m.Z.getGuild(t)) ? true : e.premiumSubscriberCount
  });
  return (o.useEffect(() => {
    b !== n.length && (0, l.C0)(t)
  }, [t, b, n.length]), 0 === x.length) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.X6q, {
      className: v.header,
      variant: "eyebrow",
      color: "text-secondary",
      children: _.intl.string(_.t.yM9Krq)
    }), (0, r.jsx)(i.zJ, {
      className: v.container,
      fade: true,
      children: x.map((e, t) => (0, r.jsx)(f.Z, {
        boost: e
      }, "boost-activity-".concat(t)))
    })]
  })
}