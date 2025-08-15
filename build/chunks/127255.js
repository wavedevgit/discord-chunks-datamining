/** Chunk was on 35755 **/
/** chunk id: 127255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk115130 = require("./115130.js"),
  Chunk694312 = require("./694312.js"),
  Chunk405625 = require("./405625.js"),
  Chunk664097 = require("./664097.js");

function c(e) {
  let {
    guildId: t,
    enableFilter: n = false
  } = e, {
    filter: c
  } = (0, i.cj)([r.Z], () => ({
    filter: r.Z.getFilter()
  })), u = (0, a.E)(t), d = (0, o.Z)(u), p = (0, s.o)();
  return l.useMemo(() => {
    function e(e) {
      return !!(!n || "" === c || e.application.name.toLowerCase().includes(c.toLowerCase()))
    }
    let t = [...p].filter(e),
      l = new Set(t.map(e => e.application.id));
    for (let n of d) !l.has(n.application.id) && e(n) && t.push(n);
    return t
  }, [p, n, c, d])
}