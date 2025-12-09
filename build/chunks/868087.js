/** Chunk was on 77069 **/
/** chunk id: 868087, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  p: () => c
}), require("./415506.js"), require("./49124.js");
var Chunk473749 = require("./473749.js"),
  Chunk323183 = require("./323183.js"),
  Chunk5900 = require("./5900.js"),
  Chunk773275 = require("./773275.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");
let c = () => {
  let t = (0, Chunk773275.xf)(t => t.doInstall),
    e = (0, Chunk773275.xf)(t => t.install),
    n = (0, Chunk773275.xf)(t => t.installationStatus),
    c = (0, Chunk773275.xf)(t => t.setDoInstall),
    d = (0, Chunk773275.xf)(t => t.setInstallationStatus);
  return (0, Chunk473749.useEffect)(() => {
    module && require === Chunk5900._n.NOT_INSTALLED && (c(false), d(Chunk5900._n.INSTALLING), exports().catch(t => {
      d(s._n.ERROR), a.Z.captureException(t, {
        tags: {
          source: l.D.WARP_INSTALL_HELPER
        }
      }), r.default.track(o.rMx.PREMIUM_FEATURE_ERROR, {
        error_message: t instanceof Error ? t.message : JSON.stringify(t),
        error_source: l.D.WARP_INSTALL_HELPER
      })
    }))
  }, [module, c, exports, require, d]), null
}