/** Chunk was on 83789 **/
/** chunk id: 853072, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk567409 = require("./567409.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk652853 = require("./652853.jsx");

function c(e) {
  let {
    userId: t
  } = (0, o.z)(), r = (0, i.N)(e);
  return (0, n.Wu)([l.default], () => {
    let e = l.default.getCurrentUser(),
      n = new Set;
    return r.forEach(e => {
      n.add(e.author_id), e.participants.forEach(e => {
        n.add(e)
      })
    }), Array.from(n).filter(r => r !== (null == e ? true : e.id) && r !== t).map(e => l.default.getUser(e)).filter(a.lm)
  }, [r, t])
}