/** Chunk was on 67096 **/
/** chunk id: 262828, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk198982 = require("./198982.js"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js");

function s(e, A) {
  let t = (0, n.bG)([i.A], () => i.A.getGuildApplication(e, A)),
    [s, o] = r.useState(null == t),
    [d, c] = r.useState(),
    [u, g] = r.useState(false),
    f = r.useCallback(async () => {
      if (null == t && null != e) {
        g(true), o(true);
        try {
          await a.Ay.getApplicationsForGuild(e, {
            type: A,
            includeTeam: true
          })
        } catch (e) {
          c(new l.LG(e))
        } finally {
          o(false)
        }
      }
    }, [t, A, e]);
  return r.useEffect(() => {
    u || f()
  }, [u, f]), {
    application: t,
    error: d,
    loading: s
  }
}