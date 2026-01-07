/** Chunk was on 77069 **/
/** chunk id: 868087, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  p: () => T
}), require("./415506.js"), require("./49124.js");
var Chunk473749 = require("./473749.js"),
  Chunk323183 = require("./323183.js"),
  Chunk5900 = require("./5900.js"),
  Chunk773275 = require("./773275.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");
let T = () => {
  let t = (0, u.xf)(t => t.doInstall),
    e = (0, u.xf)(t => t.install),
    n = (0, u.xf)(t => t.installationStatus),
    T = (0, u.xf)(t => t.setDoInstall),
    S = (0, u.xf)(t => t.setInstallationStatus);
  return (0, i.useEffect)(() => {
    t && n === s._n.NOT_INSTALLED && (T(false), S(s._n.INSTALLING), e().catch(t => {
      S(s._n.ERROR), a.Z.captureException(t, {
        tags: {
          source: l.D.WARP_INSTALL_HELPER
        }
      }), r.default.track(o.rMx.PREMIUM_FEATURE_ERROR, {
        error_message: t instanceof Error ? t.message : JSON.stringify(t),
        error_source: l.D.WARP_INSTALL_HELPER
      })
    }))
  }, [t, T, e, n, S]), null
}