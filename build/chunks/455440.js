/** Chunk was on web.js **/
/** chunk id: 455440, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk56494 = require("./56494.js"),
  Chunk26909 = require("./26909.js"),
  Chunk555045 = require("./555045.js");

function o(e) {
  let {
    context: t,
    commands: n,
    limit: o = n.length
  } = e, l = (0, s.e)(t), c = (0, i.F)(l), u = r.useMemo(() => n.reduce((e, t) => (e[t.id] = t, e), {}), [n]);
  return r.useMemo(() => c.map(e => u[e]).filter(e => null != e).sort((e, t) => {
    let n = a.Ay.getScoreWithoutLoadingLatest(l, e);
    return a.Ay.getScoreWithoutLoadingLatest(l, t) - n
  }).slice(0, o), [c, u, l, o])
}