/** Chunk was on 384 **/
/** chunk id: 957011, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk479531 = require("./479531.js"),
  Chunk601964 = require("./601964.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk53365 = require("./53365.js"),
  Chunk223892 = require("./223892.js");

function u(e, t) {
  let n = (0, i.e7)([s.Z], () => s.Z.getGuild(e)),
    [u, g] = r.useState(),
    [m, p] = r.useState(false),
    f = (0, d.Ob)(n);
  return {
    canSubmitAcceptance: (0, i.e7)([o.default], () => {
      let e = o.default.getCurrentUser();
      return null != n && (0, a.eM)(n, e)
    }, [n]),
    error: u,
    loading: m,
    submitAcceptTermsRequest: r.useCallback(async () => {
      if (null != e && (f || null != t)) {
        p(true), g(true);
        try {
          null != t ? await c.wE(e, t) : await c.zo(e)
        } catch (e) {
          g(new l.Z(e))
        } finally {
          p(false)
        }
      }
    }, [e, t, f])
  }
}