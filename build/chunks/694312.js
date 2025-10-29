/** Chunk was on 35755 **/
/** chunk id: 694312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => p
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk835473 = require("./835473.js"),
  Chunk594174 = require("./594174.js"),
  Chunk695103 = require("./695103.js"),
  Chunk823379 = require("./823379.js"),
  Chunk358085 = require("./358085.js"),
  Chunk317381 = require("./317381.js"),
  Chunk761122 = require("./761122.js");

function p(e) {
  let t = (0, l.e7)([a.default], a.default.getCurrentUser),
    n = (0, l.Wu)([u.ZP], () => u.ZP.getShelfActivities(e)),
    p = (0, l.e7)([o.Z], () => o.Z.testModeEmbeddedApplicationId),
    m = n.map(e => e.application_id),
    f = null != p ? [p, ...m] : m,
    h = (0, r.Z)(f),
    v = i.useMemo(() => h.filter(s.lm), [h]),
    y = i.useMemo(() => null != p && v.length > 0 && v[0].id === p && null != v[0].embeddedActivityConfig ? [{
      activity: v[0].embeddedActivityConfig,
      application: v[0]
    }] : [], [v, p]),
    g = i.useMemo(() => n.map(e => {
      let t = v.find(t => t.id === e.application_id);
      return null == t ? null : {
        activity: e,
        application: t
      }
    }).filter(s.lm), [n, v]);
  return i.useMemo(() => [...y, ...g].filter(e => {
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
  }), [null == t ? true : t.nsfwAllowed, g, y])
}