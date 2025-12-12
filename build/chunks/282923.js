/** Chunk was on 86736 **/
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
  for (let a of e) {
    let {
      id: e,
      names: o
    } = t(a);
    if (e === n) return [a];
    o.some(e => r()(i, e.toLowerCase())) && l.push(a)
  }
  return l
}