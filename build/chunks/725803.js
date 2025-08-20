/** Chunk was on 73628 **/
/** chunk id: 725803, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk881052 = require("./881052.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js");

function i(e, t) {
  let A = (0, r.e7)([o.Z], () => o.Z.getGuildApplication(e, t)),
    [i, s] = n.useState(null == A),
    [d, c] = n.useState(),
    [u, f] = n.useState(false),
    g = n.useCallback(async () => {
      if (null == A && null != e) {
        f(true), s(true);
        try {
          await a.ZP.getApplicationsForGuild(e, {
            type: t,
            includeTeam: true
          })
        } catch (e) {
          c(new l.Hx(e))
        } finally {
          s(false)
        }
      }
    }, [A, t, e]);
  return n.useEffect(() => {
    u || g()
  }, [u, g]), {
    application: A,
    error: d,
    loading: i
  }
}