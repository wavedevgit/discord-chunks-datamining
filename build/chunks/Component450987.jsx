/** Chunk was on 4670 **/
/** chunk id: 450987, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  y: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk890138 = require("./890138.js"),
  Chunk602450 = require("./602450.js"),
  Chunk557571 = require("./557571.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let T = e => {
  let {
    onClick: t
  } = e, i = (0, u.lV)(e => e.setDoInstall), T = (0, u.lV)(e => e.setInstallationStatus), c = (0, u.lV)(e => e.installationStatus), A = (0, l.useCallback)(() => {
    null == t || t(), (0, r.u)(o.HAw.NITRO_WARP_CTA_CLICKED, {
      is_enable_warp: false
    }), c === a.Lk.ERROR && T(a.Lk.NOT_INSTALLED), i(true)
  }, [i, c, T, t]);
  return (0, n.jsx)(s.$nd, {
    variant: "primary",
    onClick: A,
    text: d.intl.string(d.t["1WjMbC"])
  })
}