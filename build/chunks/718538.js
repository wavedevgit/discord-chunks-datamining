/** Chunk was on 7891 **/
/** chunk id: 718538, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => l
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk375954 = require("./375954.js");

function l(e, t) {
  return (0, i.e7)([r.Z], () => {
    if (null == t) return;
    let n = r.Z.getMessages(e),
      i = n.findOldest(e => e.author.id === t);
    if (null != i) {
      for (let e of n.toArray()) {
        if (e.author.id !== t) break;
        e.content.length > (null == i ? true : i.content.length) && (i = e)
      }
      return i
    }
  }, [e, t])
}