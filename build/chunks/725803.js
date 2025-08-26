/** Chunk was on 73628 **/
/** chunk id: 725803, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk881052 = require("./881052.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js");

function i(e, A) {
  let t = (0, n.e7)([o.Z], () => o.Z.getGuildApplication(e, A)),
    [i, s] = r.useState(null == t),
    [d, c] = r.useState(),
    [u, f] = r.useState(false),
    g = r.useCallback(async () => {
      if (null == t && null != e) {
        f(true), s(true);
        try {
          await a.ZP.getApplicationsForGuild(e, {
            type: A,
            includeTeam: true
          })
        } catch (e) {
          c(new l.Hx(e))
        } finally {
          s(false)
        }
      }
    }, [t, A, e]);
  return r.useEffect(() => {
    u || g()
  }, [u, g]), {
    application: t,
    error: d,
    loading: i
  }
}