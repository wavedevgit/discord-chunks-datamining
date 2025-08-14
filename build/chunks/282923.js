/** Chunk was on 58511 **/
/** chunk id: 282923, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => l
}), require("./539854.js"), require("./388685.js");
var Chunk658722 = require("./658722.js"),
  r = require.n(Chunk658722);

function l(e, t, n) {
  if ("" === n) return e;
  let i = n.toLowerCase(),
    l = [];
  for (let o of e) {
    let {
      id: e,
      names: a
    } = t(o);
    if (e === n) return [o];
    a.some(e => r()(i, e.toLowerCase())) && l.push(o)
  }
  return l
}