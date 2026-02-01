/** Chunk was on 61344 **/
/** chunk id: 977347, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => i
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk320501 = require("./320501.js");

function i(e, t) {
  return (0, l.bG)([r.A], () => {
    if (null == t) return;
    let n = r.A.getMessages(e),
      l = n.findOldest(e => e.author.id === t);
    if (null != l) {
      for (let e of n.toArray()) {
        if (e.author.id !== t) break;
        e.content.length > (null == l ? true : l.content.length) && (l = e)
      }
      return l
    }
  }, [e, t])
}