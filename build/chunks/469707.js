/** Chunk was on 97492 **/
/** chunk id: 469707, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk401843 = require("./401843.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js");

function s(e, t) {
  let n = (0, r.bG)([a.default], () => a.default.getId()),
    s = (0, r.bG)([i.A], () => {
      let t = i.A.getCurrentUserActiveStream();
      return null != t && t.channelId === e
    }, [e]);
  return [(null == t || t === n) && s, (0, r.bG)([i.A], () => i.A.isSelfStreamHidden(e), [e]), t => {
    (0, l.Ho)(e, t)
  }]
}