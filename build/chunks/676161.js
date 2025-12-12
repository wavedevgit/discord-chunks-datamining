/** Chunk was on web.js **/
/** chunk id: 676161, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./642613.js");
var Chunk473749 = require("./473749.js"),
  Chunk700089 = require("./700089.js"),
  Chunk654455 = require("./654455.js"),
  Chunk496158 = require("./496158.js");

function s(e) {
  let {
    context: t,
    commands: n,
    limit: s = n.length
  } = e, l = (0, a.D)(t), c = (0, i.R)(l), u = r.useMemo(() => n.reduce((e, t) => (e[t.id] = t, e), {}), [n]);
  return r.useMemo(() => c.map(e => u[e]).filter(e => null != e).sort((e, t) => {
    let n = o.ZP.getScoreWithoutLoadingLatest(l, e);
    return o.ZP.getScoreWithoutLoadingLatest(l, t) - n
  }).slice(0, s), [c, u, l, s])
}