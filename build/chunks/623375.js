/** Chunk was on 30485 **/
/** chunk id: 623375, original params: t,e,i (module,exports,require) **/
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
  let t = (0, r.lV)(t => t.doInstall),
    e = (0, r.lV)(t => t.install),
    i = (0, r.lV)(t => t.installationStatus),
    d = (0, r.lV)(t => t.setDoInstall),
    T = (0, r.lV)(t => t.setInstallationStatus);
  return (0, n.useEffect)(() => {
    t && i === s.Lk.NOT_INSTALLED && (d(false), T(s.Lk.INSTALLING), e().catch(t => {
      T(s.Lk.ERROR), a.A.captureException(t, {
        tags: {
          source: l.q.WARP_INSTALL_HELPER
        }
      }), u.default.track(o.HAw.PREMIUM_FEATURE_ERROR, {
        error_message: t instanceof Error ? t.message : JSON.stringify(t),
        error_source: l.q.WARP_INSTALL_HELPER
      })
    }))
  }, [t, d, e, i, T]), null
}