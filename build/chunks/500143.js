/** Chunk was on 90882 **/
/** chunk id: 500143, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk473749 = require("./473749.js"),
  Chunk296009 = require("./296009.js"),
  Chunk399606 = require("./399606.js"),
  Chunk251296 = require("./251296.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk931847 = require("./931847.js"),
  Chunk836197 = require("./836197.js"),
  Chunk172416 = require("./172416.js"),
  Chunk517157 = require("./517157.js"),
  Chunk247397 = require("./247397.js");

function p(e) {
  let t = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
    n = (0, f.Z)(null == t ? true : t.id),
    p = (0, a.no)(e),
    m = (0, d.U)(e);
  return r.useMemo(() => {
    let e = new Set(n.filter(e => e instanceof s.q).map(e => e.applicationId)),
      t = new Set(n.map(e => e.type));
    return g.rR.flatMap(n => n === i.l.APPLICATION ? null == p ? [] : p.filter(t => !e.has(t.applicationId)).map(e => new s.q({
      applicationId: e.applicationId
    })) : (0, u.Sr)(n) ? !m || t.has(n) ? [] : new u.zy({
      type: n,
      games: []
    }) : void(0, c.vE)(n))
  }, [p, n, m])
}