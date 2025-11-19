/** Chunk was on web.js **/
/** chunk id: 868087, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk5900 = require("./5900.js"),
  Chunk953865 = require("./953865.jsx"),
  Chunk960048 = require("./960048.js");
let s = () => {
  let e = (0, Chunk953865.xf)(e => e.doInstall),
    t = (0, Chunk953865.xf)(e => e.install),
    n = (0, Chunk953865.xf)(e => e.installationStatus),
    s = (0, Chunk953865.xf)(e => e.setDoInstall),
    l = (0, Chunk953865.xf)(e => e.setInstallationStatus);
  return (0, Chunk473749.useEffect)(() => {
    module && require === Chunk5900._n.NOT_INSTALLED && (s(false), l(Chunk5900._n.INSTALLING), exports().catch(e => {
      l(i._n.ERROR), o.Z.captureException(e, {
        tags: {
          source: "WARP_INSTALL_HELPER"
        }
      })
    }))
  }, [module, s, exports, require, l]), null
}