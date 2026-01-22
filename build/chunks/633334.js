/** Chunk was on 21968 **/
/** chunk id: 633334, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => l
}), require("./321073.js"), require("./896048.js");
var Chunk91871 = require("./91871.js"),
  r = require.n(Chunk91871);

function l(e, t, n) {
  if ("" === n) return e;
  let i = n.toLowerCase(),
    l = [];
  for (let a of e) {
    let {
      id: e,
      names: s
    } = t(a);
    if (e === n) return [a];
    s.some(e => r()(i, e.toLowerCase())) && l.push(a)
  }
  return l
}