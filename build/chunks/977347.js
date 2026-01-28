/** Chunk was on 78528 **/
/** chunk id: 977347, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => i
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk320501 = require("./320501.js");

function i(e, t) {
  return (0, r.bG)([l.A], () => {
    if (null == t) return;
    let n = l.A.getMessages(e),
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