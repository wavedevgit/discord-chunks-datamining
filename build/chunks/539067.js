/** Chunk was on 33397 **/
/** chunk id: 539067, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  y: () => s
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk19780 = require("./19780.js"),
  Chunk630759 = require("./630759.js"),
  Chunk760373 = require("./760373.js");

function s(e) {
  let {
    userId: t
  } = e, r = (0, l.e7)([o.Z], () => o.Z.getSecureFramesRosterMapEntry(t)), [s, a] = n.useState(true), [u, d] = n.useState(false), [f, p] = n.useState(false), b = n.useCallback(async (e, t) => {
    a(true);
    try {
      let r = i.GB,
        n = await (0, c.uX)(r),
        l = await (0, c.J6)(e, t, r);
      d(n), p(l)
    } catch (e) {
      d(false), p(false)
    } finally {
      a(false)
    }
  }, []);
  return n.useEffect(() => {
    null == r ? (d(false), p(false), a(false)) : b(t, r)
  }, [r, b, t]), {
    loading: s,
    isCurrentUserKeyPersistent: u,
    isOtherUserKeyPersistent: f
  }
}