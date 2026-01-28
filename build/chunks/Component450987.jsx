/** Chunk was on 28979 **/
/** chunk id: 450987, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  y: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk890138 = require("./890138.js"),
  Chunk602450 = require("./602450.js"),
  Chunk557571 = require("./557571.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let d = t => {
  let {
    onClick: e
  } = t, i = (0, a.lV)(t => t.setDoInstall), d = (0, a.lV)(t => t.setInstallationStatus), A = (0, a.lV)(t => t.installationStatus), S = (0, l.useCallback)(() => {
    null == e || e(), (0, r.u)(o.HAw.NITRO_WARP_CTA_CLICKED, {
      is_enable_warp: false
    }), A === u.Lk.ERROR && d(u.Lk.NOT_INSTALLED), i(true)
  }, [i, A, d, e]);
  return (0, n.jsx)(s.$nd, {
    variant: "primary",
    onClick: S,
    text: T.intl.string(T.t["1WjMbC"])
  })
}