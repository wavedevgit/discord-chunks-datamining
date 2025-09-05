/** Chunk was on 88479 **/
/** chunk id: 725803, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk881052 = require("./881052.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js");

function o(e, t) {
  let n = (0, i.e7)([s.Z], () => s.Z.getGuildApplication(e, t)),
    [o, c] = r.useState(null == n),
    [d, u] = r.useState(),
    [m, g] = r.useState(false),
    p = r.useCallback(async () => {
      if (null == n && null != e) {
        g(true), c(true);
        try {
          await a.ZP.getApplicationsForGuild(e, {
            type: t,
            includeTeam: true
          })
        } catch (e) {
          u(new l.Hx(e))
        } finally {
          c(false)
        }
      }
    }, [n, t, e]);
  return r.useEffect(() => {
    m || p()
  }, [m, p]), {
    application: n,
    error: d,
    loading: o
  }
}