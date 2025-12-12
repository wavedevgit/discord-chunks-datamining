/** Chunk was on web.js **/
/** chunk id: 765907, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => h,
  Z: () => m
}), require("./472816.js"), require("./794429.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk353647 = require("./353647.js"),
  Chunk26033 = require("./26033.js"),
  Chunk931847 = require("./931847.js"),
  Chunk836197 = require("./836197.js"),
  Chunk621853 = require("./621853.js"),
  Chunk687158 = require("./687158.js"),
  Chunk158776 = require("./158776.js"),
  Chunk823379 = require("./823379.js"),
  Chunk699955 = require("./699955.js"),
  Chunk582113 = require("./582113.js");

function m(e) {
  let {
    displayProfile: t,
    location: n
  } = e, u = (0, p.cZ)({
    location: n
  }), m = (0, i.Wu)([c.Z], () => {
    var e;
    return (null == t ? true : t.userId) == null ? [] : null != (e = c.Z.getMutualGuilds(t.userId)) ? e : []
  }), h = (0, i.Wu)([d.Z], () => (null == t ? true : t.userId) == null ? [] : d.Z.getActivities(t.userId)), g = (0, i.e7)([o.Z], () => (null == t ? true : t.userId) != null ? o.Z.getUserOutbox(t.userId) : null), E = r.useMemo(() => null != m && m.some(e => e.guild.id === _.ON), [m]), b = r.useMemo(() => {
    if ((null == t ? true : t.widgets) == null) returnfalse;
    let e = new Set(null == t ? true : t.widgets.map(e => e instanceof l.zy ? e.games.map(e => e.applicationId) : e instanceof s.q ? e.applicationId : true).filter(f.lm).flat());
    for (let t of _.RI)
      if (e.has(t)) returntrue;
    returnfalse
  }, [null == t ? true : t.widgets]), y = r.useMemo(() => null != h && h.some(e => null != e.application_id && _.RI.has(e.application_id)), [h]), O = r.useMemo(() => {
    var e;
    return null != (e = null == g ? true : g.entries.some(e => null != e && (0, a.dX)(e) && _.RI.has(e.extra.application_id))) && e
  }, [g]);
  return {
    isDisplayProfileSocialLayerStorefrontEligible: (null == t ? true : t.application) == null && u && (E || b || y || O),
    hasMarketingApplicationInWidgets: b
  }
}

function h(e) {
  let {
    userId: t,
    location: n
  } = e;
  return m({
    displayProfile: (0, u.ZP)(t),
    location: n
  })
}