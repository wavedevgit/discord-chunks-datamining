/** Chunk was on 33622 **/
/** chunk id: 298806, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  a: () => o
});
var Chunk594886 = require("./594886.js"),
  Chunk45728 = require("./45728.js"),
  Chunk872 = require("./872.js"),
  Chunk647438 = require("./647438.js");

function o(e) {
  e = (0, r.v)(null != e ? e : {}, l);
  let {
    locale: a
  } = (0, u.j)();
  return (0, i.useMemo)(() => new(0, n.C)(a, e), [a, e])
}

function l(e, a) {
  if (e === a) returntrue;
  let t = Object.keys(e),
    u = Object.keys(a);
  if (t.length !== u.length) returnfalse;
  for (let u of t)
    if (a[u] !== e[u]) returnfalse;
  returntrue
}