/** Chunk was on 33397 **/
/** chunk id: 539067, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  y: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk19780 = require("./19780.js"),
  Chunk630759 = require("./630759.js"),
  Chunk760373 = require("./760373.js");

function s(e) {
  let {
    userId: t
  } = e, r = (0, l.e7)([u.Z], () => u.Z.getSecureFramesRosterMapEntry(t)), [s, c] = n.useState(true), [o, f] = n.useState(false), [d, E] = n.useState(false), y = n.useCallback(async (e, t) => {
    c(true);
    try {
      let r = a.GB,
        n = await (0, i.uX)(r),
        l = await (0, i.J6)(e, t, r);
      f(n), E(l)
    } catch (e) {
      f(false), E(false)
    } finally {
      c(false)
    }
  }, []);
  return n.useEffect(() => {
    null == r ? (f(false), E(false), c(false)) : y(t, r)
  }, [r, y, t]), {
    loading: s,
    isCurrentUserKeyPersistent: o,
    isOtherUserKeyPersistent: d
  }
}