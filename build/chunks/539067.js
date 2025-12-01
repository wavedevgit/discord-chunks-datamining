/** Chunk was on 33397 **/
/** chunk id: 539067, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  y: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk19780 = require("./19780.js"),
  Chunk630759 = require("./630759.js"),
  Chunk760373 = require("./760373.js");

function o(e) {
  let {
    userId: t
  } = e, r = (0, l.e7)([u.Z], () => u.Z.getSecureFramesRosterMapEntry(t)), [o, s] = n.useState(true), [a, f] = n.useState(false), [d, E] = n.useState(false), g = n.useCallback(async (e, t) => {
    s(true);
    try {
      let r = c.GB,
        n = await (0, i.uX)(r),
        l = await (0, i.J6)(e, t, r);
      f(n), E(l)
    } catch (e) {
      f(false), E(false)
    } finally {
      s(false)
    }
  }, []);
  return n.useEffect(() => {
    null == r ? (f(false), E(false), s(false)) : g(t, r)
  }, [r, g, t]), {
    loading: o,
    isCurrentUserKeyPersistent: a,
    isOtherUserKeyPersistent: d
  }
}