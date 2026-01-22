/** Chunk was on 16674 **/
/** chunk id: 636153, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  q: () => i
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk383501 = require("./383501.js"),
  Chunk814278 = require("./814278.js");

function i(e) {
  let {
    userId: t
  } = e, r = (0, l.bG)([u.A], () => u.A.getSecureFramesRosterMapEntry(t)), [i, c] = n.useState(true), [s, o] = n.useState(false), [f, d] = n.useState(false), b = n.useCallback(async (e, t) => {
    c(true);
    try {
      let r = await (0, a.A5)(1),
        n = await (0, a.iO)(e, t, 1);
      o(r), d(n)
    } catch (e) {
      o(false), d(false)
    } finally {
      c(false)
    }
  }, []);
  return n.useEffect(() => {
    null == r ? (o(false), d(false), c(false)) : b(t, r)
  }, [r, b, t]), {
    loading: i,
    isCurrentUserKeyPersistent: s,
    isOtherUserKeyPersistent: f
  }
}
require("./603266.js")