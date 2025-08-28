/** Chunk was on 83789 **/
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
  return (0, n.Wu)([l.default], () => {
    let e = l.default.getCurrentUser(),
      r = new Set;
    return t.forEach(e => {
      r.add(e.author_id), e.participants.forEach(e => {
        r.add(e)
      })
    }), Array.from(r).filter(t => t !== (null == e ? true : e.id)).map(e => l.default.getUser(e)).filter(a.lm)
  }, [t])
}