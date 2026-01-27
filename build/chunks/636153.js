/** Chunk was on 16674 **/
/** chunk id: 636153, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  q: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk383501 = require("./383501.js"),
  Chunk814278 = require("./814278.js");

function s(e) {
  let {
    userId: t
  } = e, r = (0, l.bG)([u.A], () => u.A.getSecureFramesRosterMapEntry(t)), [s, a] = n.useState(true), [c, o] = n.useState(false), [f, d] = n.useState(false), E = n.useCallback(async (e, t) => {
    a(true);
    try {
      let r = await (0, i.A5)(1),
        n = await (0, i.iO)(e, t, 1);
      o(r), d(n)
    } catch (e) {
      o(false), d(false)
    } finally {
      a(false)
    }
  }, []);
  return n.useEffect(() => {
    null == r ? (o(false), d(false), a(false)) : E(t, r)
  }, [r, E, t]), {
    loading: s,
    isCurrentUserKeyPersistent: c,
    isOtherUserKeyPersistent: f
  }
}
require("./603266.js")