/** Chunk was on 11776 **/
/** chunk id: 853072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk567409 = require("./567409.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js");

function a(e) {
  let t = (0, l.N)(e);
  return (0, r.Wu)([i.default], () => {
    let e = new Set;
    return t.forEach(t => {
      e.add(t.author_id), t.participants.forEach(t => {
        e.add(t)
      })
    }), Array.from(e).map(e => i.default.getUser(e)).filter(o.lm)
  }, [t])
}