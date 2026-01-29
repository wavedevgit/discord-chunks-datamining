/** Chunk was on 4670 **/
/** chunk id: 623375, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  u: () => d
}), require("./65821.js"), require("./457529.js");
var Chunk64700 = require("./64700.js"),
  Chunk156186 = require("./156186.js"),
  Chunk602450 = require("./602450.js"),
  Chunk557571 = require("./557571.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk728458 = require("./728458.js"),
  Chunk652215 = require("./652215.js");
let d = () => {
  let e = (0, r.lV)(e => e.doInstall),
    t = (0, r.lV)(e => e.install),
    i = (0, r.lV)(e => e.installationStatus),
    d = (0, r.lV)(e => e.setDoInstall),
    T = (0, r.lV)(e => e.setInstallationStatus);
  return (0, n.useEffect)(() => {
    e && i === s.Lk.NOT_INSTALLED && (d(false), T(s.Lk.INSTALLING), t().catch(e => {
      T(s.Lk.ERROR), u.A.captureException(e, {
        tags: {
          source: l.q.WARP_INSTALL_HELPER
        }
      }), a.default.track(o.HAw.PREMIUM_FEATURE_ERROR, {
        error_message: e instanceof Error ? e.message : JSON.stringify(e),
        error_source: l.q.WARP_INSTALL_HELPER
      })
    }))
  }, [e, d, t, i, T]), null
}