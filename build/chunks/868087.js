/** Chunk was on 77069 **/
/** chunk id: 868087, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  p: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk5900 = require("./5900.js"),
  Chunk773275 = require("./773275.jsx"),
  Chunk960048 = require("./960048.js");
let u = () => {
  let t = (0, Chunk773275.xf)(t => t.doInstall),
    e = (0, Chunk773275.xf)(t => t.install),
    n = (0, Chunk773275.xf)(t => t.installationStatus),
    u = (0, Chunk773275.xf)(t => t.setDoInstall),
    a = (0, Chunk773275.xf)(t => t.setInstallationStatus);
  return (0, Chunk473749.useEffect)(() => {
    module && require === Chunk5900._n.NOT_INSTALLED && (u(false), a(Chunk5900._n.INSTALLING), exports().catch(t => {
      a(l._n.ERROR), r.Z.captureException(t, {
        tags: {
          source: "WARP_INSTALL_HELPER"
        }
      })
    }))
  }, [module, u, exports, require, a]), null
}