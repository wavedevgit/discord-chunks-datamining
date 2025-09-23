/** Chunk was on 73628 **/
/** chunk id: 725803, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk881052 = require("./881052.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js");

function o(e, t) {
  let A = (0, n.e7)([i.Z], () => i.Z.getGuildApplication(e, t)),
    [o, s] = r.useState(null == A),
    [d, c] = r.useState(),
    [u, g] = r.useState(false),
    f = r.useCallback(async () => {
      if (null == A && null != e) {
        g(true), s(true);
        try {
          await l.ZP.getApplicationsForGuild(e, {
            type: t,
            includeTeam: true
          })
        } catch (e) {
          c(new a.Hx(e))
        } finally {
          s(false)
        }
      }
    }, [A, t, e]);
  return r.useEffect(() => {
    u || f()
  }, [u, f]), {
    application: A,
    error: d,
    loading: o
  }
}