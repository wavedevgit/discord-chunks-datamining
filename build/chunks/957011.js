/** Chunk was on 22988 **/
/** chunk id: 957011, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk479531 = require("./479531.js"),
  Chunk601964 = require("./601964.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk53365 = require("./53365.js"),
  Chunk223892 = require("./223892.js");

function u(e, t) {
  let n = (0, i.e7)([s.Z], () => s.Z.getGuild(e)),
    [u, m] = r.useState(),
    [g, p] = r.useState(false),
    h = (0, d.Ob)(n);
  return {
    canSubmitAcceptance: (0, i.e7)([o.default], () => {
      let e = o.default.getCurrentUser();
      return null != n && (0, a.eM)(n, e)
    }, [n]),
    error: u,
    loading: g,
    submitAcceptTermsRequest: r.useCallback(async () => {
      if (null != e && (h || null != t)) {
        p(true), m(true);
        try {
          null != t ? await c.wE(e, t) : await c.zo(e)
        } catch (e) {
          m(new l.Z(e))
        } finally {
          p(false)
        }
      }
    }, [e, t, h])
  }
}