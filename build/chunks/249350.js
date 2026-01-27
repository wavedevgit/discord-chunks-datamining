/** Chunk was on web.js **/
/** chunk id: 249350, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => f
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk429913 = require("./429913.js"),
  Chunk287809 = require("./287809.js"),
  Chunk147964 = require("./147964.js"),
  Chunk403362 = require("./403362.js"),
  Chunk723702 = require("./723702.js"),
  Chunk933958 = require("./933958.js"),
  Chunk847381 = require("./847381.js");

function f(e) {
  let t = (0, i.bG)([o.default], o.default.getCurrentUser),
    n = (0, i.yK)([u.Ay], () => u.Ay.getShelfActivities(e)),
    f = (0, i.bG)([s.A], () => s.A.testModeEmbeddedApplicationId),
    p = n.map(e => e.application_id),
    _ = null != f ? [f, ...p] : p,
    h = (0, a.A)(_),
    m = r.useMemo(() => h.filter(l.Vq), [h]),
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
    }).filter(l.Vq), [n, m]);
  return r.useMemo(() => [...g, ...E].filter(e => {
    var t;
    let {
      activity: n
    } = e;
    return (null != (t = n.supported_platforms) ? t : []).includes((0, d.A)((0, c.getOS)()))
  }).filter(e => {
    let {
      activity: n
    } = e;
    return !n.requires_age_gate || (null == t ? true : t.nsfwAllowed) === true || (null == t ? true : t.nsfwAllowed) == null
  }), [null == t ? true : t.nsfwAllowed, E, g])
}