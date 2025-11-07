/** Chunk was on 13140 **/
/** chunk id: 718538, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => l
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk375954 = require("./375954.js");

function l(e, t) {
  return (0, r.e7)([i.Z], () => {
    if (null == t) return;
    let n = i.Z.getMessages(e),
      r = n.findOldest(e => e.author.id === t);
    if (null != r) {
      for (let e of n.toArray()) {
        if (e.author.id !== t) break;
        e.content.length > (null == r ? true : r.content.length) && (r = e)
      }
      return r
    }
  }, [e, t])
}