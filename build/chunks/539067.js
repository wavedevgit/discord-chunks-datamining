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
  } = e, r = (0, l.e7)([i.Z], () => i.Z.getSecureFramesRosterMapEntry(t)), [s, o] = n.useState(true), [c, d] = n.useState(false), [f, E] = n.useState(false), y = n.useCallback(async (e, t) => {
    o(true);
    try {
      let r = a.GB,
        n = await (0, u.uX)(r),
        l = await (0, u.J6)(e, t, r);
      d(n), E(l)
    } catch (e) {
      d(false), E(false)
    } finally {
      o(false)
    }
  }, []);
  return n.useEffect(() => {
    null == r ? (d(false), E(false), o(false)) : y(t, r)
  }, [r, y, t]), {
    loading: s,
    isCurrentUserKeyPersistent: c,
    isOtherUserKeyPersistent: f
  }
}