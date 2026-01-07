/** Chunk was on 60646 **/
/** chunk id: 810473, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk836197 = require("./836197.js"),
  Chunk880421 = require("./880421.js"),
  Chunk172416 = require("./172416.js"),
  Chunk517157 = require("./517157.js");

function d() {
  let e = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
    t = (0, u.Z)(null == e ? true : e.id),
    n = t.some(e => o.Ki.includes(e.type)),
    d = (0, s.Un)({
      location: "useAvailableWidgetTypes"
    }),
    f = (0, c.k)({
      location: "useAvailableWidgetTypes"
    }),
    g = d || n;
  return r.useMemo(() => {
    let e = new Set(t.map(e => e.type));
    return Object.values(i.l).filter(t => (t !== i.l.APPLICATION || !!f) && (!o.Ki.includes(t) || !!g) && !e.has(t))
  }, [t, g, f])
}