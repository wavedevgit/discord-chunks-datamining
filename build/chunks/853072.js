/** Chunk was on 21585 **/
/** chunk id: 853072, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk567409 = require("./567409.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js");

function o(e) {
  let t = (0, i.N)(e);
  return (0, n.Wu)([a.default], () => {
    let e = new Set;
    return t.forEach(t => {
      e.add(t.author_id), t.participants.forEach(t => {
        e.add(t)
      })
    }), Array.from(e).map(e => a.default.getUser(e)).filter(l.lm)
  }, [t])
}