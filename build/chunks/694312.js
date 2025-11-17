/** Chunk was on web.js **/
/** chunk id: 694312, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => f
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk835473 = require("./835473.js"),
  Chunk594174 = require("./594174.js"),
  Chunk695103 = require("./695103.js"),
  Chunk823379 = require("./823379.js"),
  Chunk358085 = require("./358085.js"),
  Chunk317381 = require("./317381.js"),
  Chunk761122 = require("./761122.js");

function f(e) {
  let t = (0, i.e7)([o.default], o.default.getCurrentUser),
    n = (0, i.Wu)([u.ZP], () => u.ZP.getShelfActivities(e)),
    f = (0, i.e7)([s.Z], () => s.Z.testModeEmbeddedApplicationId),
    _ = n.map(e => e.application_id),
    p = null != f ? [f, ..._] : _,
    h = (0, a.Z)(p),
    m = r.useMemo(() => h.filter(l.lm), [h]),
    g = r.useMemo(() => null != f && m.length > 0 && m[0].id === f && null != m[0].embeddedActivityConfig ? [{
      activity: m[0].embeddedActivityConfig,
      application: m[0]
    }] : [], [m, f]),
    E = r.useMemo(() => n.map(e => {
      let t = m.find(t => t.id === e.application_id);
      return null == t ? null : {
        activity: e,
        application: t
      }
    }).filter(l.lm), [n, m]);
  return r.useMemo(() => [...g, ...E].filter(e => {
    var t;
    let {
      activity: n
    } = e;
    return (null != (t = n.supported_platforms) ? t : []).includes((0, d.Z)((0, c.getOS)()))
  }).filter(e => {
    let {
      activity: n
    } = e;
    return !n.requires_age_gate || (null == t ? true : t.nsfwAllowed) === true || (null == t ? true : t.nsfwAllowed) == null
  }), [null == t ? true : t.nsfwAllowed, E, g])
}