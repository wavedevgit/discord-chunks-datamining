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
  let t = (0, i.e7)([a.default], a.default.getCurrentUser),
    n = (0, i.Wu)([u.ZP], () => u.ZP.getShelfActivities(e)),
    f = (0, i.e7)([s.Z], () => s.Z.testModeEmbeddedApplicationId),
    p = n.map(e => e.application_id),
    _ = null != f ? [f, ...p] : p,
    m = (0, o.Z)(_),
    h = r.useMemo(() => m.filter(l.lm), [m]),
    g = r.useMemo(() => null != f && h.length > 0 && h[0].id === f && null != h[0].embeddedActivityConfig ? [{
      activity: h[0].embeddedActivityConfig,
      application: h[0]
    }] : [], [h, f]),
    E = r.useMemo(() => n.map(e => {
      let t = h.find(t => t.id === e.application_id);
      return null == t ? null : {
        activity: e,
        application: t
      }
    }).filter(l.lm), [n, h]);
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