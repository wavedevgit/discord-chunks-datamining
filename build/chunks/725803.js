/** Chunk was on 73628 **/
/** chunk id: 725803, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk881052 = require("./881052.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js");

function o(A, e) {
  let t = (0, r.e7)([i.Z], () => i.Z.getGuildApplication(A, e)),
    [o, s] = n.useState(null == t),
    [d, c] = n.useState(),
    [u, g] = n.useState(false),
    f = n.useCallback(async () => {
      if (null == t && null != A) {
        g(true), s(true);
        try {
          await a.ZP.getApplicationsForGuild(A, {
            type: e,
            includeTeam: true
          })
        } catch (A) {
          c(new l.Hx(A))
        } finally {
          s(false)
        }
      }
    }, [t, e, A]);
  return n.useEffect(() => {
    u || f()
  }, [u, f]), {
    application: t,
    error: d,
    loading: o
  }
}