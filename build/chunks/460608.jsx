/** Chunk was on 44799 **/
/** chunk id: 460608, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./642613.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk659679 = require("./659679.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk211886 = require("./211886.js");

function v(e) {
  let {
    guildId: t
  } = e, n = (0, s.Wu)([u.Z], () => {
    var e;
    return null != (e = u.Z.getAppliedGuildBoostsForGuild(t)) ? e : []
  }, [t]), v = o.useMemo(() => n.sort((e, t) => m.default.extractTimestamp(e.id) < m.default.extractTimestamp(t.id) ? 1 : false), [n]), b = (0, s.Wu)([p.ZP], () => {
    let e = new Set;
    return v.forEach(n => {
      null == p.ZP.getMember(t, n.userId) && e.add(n.userId)
    }), Array.from(e)
  }, [t, v]);
  o.useEffect(() => {
    b.length > 0 && b.forEach(e => d.Z.requestMember(t, e))
  }, [t, b]);
  let j = o.useMemo(() => b.length > 0 ? {
    [t]: b
  } : {}, [t, b]);
  (0, c.$)(j);
  let h = (0, s.e7)([f.Z], () => {
    var e;
    return null == (e = f.Z.getGuild(t)) ? true : e.premiumSubscriberCount
  });
  return (o.useEffect(() => {
    h !== n.length && (0, a.C0)(t)
  }, [t, h, n.length]), 0 === v.length) ? null : <r.Fragment>{<l.X6 className={_.header} variant={"eyebrow"} color={"text-secondary"}>{x.intl.string(x.t.yM9Krq)}</l.X6>}{<i.zJ className={_.container} fade={true}>{v.map((e, t) => (0, r.jsx)(g.Z, {
        boost: e
      }, "boost-activity-".concat(t)))}</i.zJ>}</r.Fragment>
}