/** Chunk was on 60118 **/
/** chunk id: 725386, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js"), require("./114821.js"), require("./339614.js");
var Chunk64700 = require("./64700.js"),
  Chunk540185 = require("./540185.js"),
  Chunk417597 = require("./417597.js"),
  Chunk395332 = require("./395332.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk633075 = require("./633075.js"),
  Chunk289173 = require("./289173.js"),
  Chunk667049 = require("./667049.js"),
  Chunk229231 = require("./229231.js");

function p(e) {
  let t = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
    n = (0, d.A)(null == t ? true : t.id),
    p = (0, a.DB)(e);
  return r.useMemo(() => {
    let e = new Set(n.filter(e => e instanceof c.R).map(e => e.applicationId)),
      t = new Set(n.map(e => e.type));
    return f.Zc.flatMap(n => n === l.x.APPLICATION ? null == p ? [] : p.filter(t => !e.has(t.applicationId)).map(e => new c.R({
      applicationId: e.applicationId
    })) : (0, u.hL)(n) ? t.has(n) ? [] : new u.Yy({
      type: n,
      games: []
    }) : void(0, s.xb)(n))
  }, [p, n])
}