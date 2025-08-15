/** Chunk was on 35755 **/
/** chunk id: 676161, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./642613.js");
var Chunk73800 = require("./73800.js"),
  Chunk700089 = require("./700089.js"),
  Chunk654455 = require("./654455.js"),
  Chunk496158 = require("./496158.js");

function o(e) {
  let {
    context: t,
    commands: n,
    limit: o = n.length
  } = e, s = (0, a.D)(t), c = (0, i.R)(s), u = l.useMemo(() => n.reduce((e, t) => (e[t.id] = t, e), {}), [n]);
  return l.useMemo(() => c.map(e => u[e]).filter(e => null != e).sort((e, t) => {
    let n = r.ZP.getScoreWithoutLoadingLatest(s, e);
    return r.ZP.getScoreWithoutLoadingLatest(s, t) - n
  }).slice(0, o), [c, u, s, o])
}