/** Chunk was on 72651 **/
/** chunk id: 853072, original params: e,t,n (module,exports,require) **/
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
  } = (0, o.z)(), n = (0, i.N)(e);
  return (0, r.Wu)([a.default], () => {
    let e = a.default.getCurrentUser(),
      r = new Set;
    return n.forEach(e => {
      r.add(e.author_id), e.participants.forEach(e => {
        r.add(e)
      })
    }), Array.from(r).filter(n => n !== (null == e ? true : e.id) && n !== t).map(e => a.default.getUser(e)).filter(l.lm)
  }, [n, t])
}