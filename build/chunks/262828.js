/** Chunk was on 67096 **/
/** chunk id: 262828, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk198982 = require("./198982.js"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js");

function o(e, A) {
  let t = (0, n.bG)([i.A], () => i.A.getGuildApplication(e, A)),
    [o, s] = r.useState(null == t),
    [d, u] = r.useState(),
    [c, g] = r.useState(false),
    p = r.useCallback(async () => {
      if (null == t && null != e) {
        g(true), s(true);
        try {
          await a.Ay.getApplicationsForGuild(e, {
            type: A,
            includeTeam: true
          })
        } catch (e) {
          u(new l.LG(e))
        } finally {
          s(false)
        }
      }
    }, [t, A, e]);
  return r.useEffect(() => {
    c || p()
  }, [c, p]), {
    application: t,
    error: d,
    loading: o
  }
}