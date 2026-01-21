/** Chunk was on 77069 **/
/** chunk id: 233751, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  R: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk594421 = require("./594421.js"),
  Chunk5900 = require("./5900.js"),
  Chunk773275 = require("./773275.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let S = t => {
  let {
    onClick: e
  } = t, n = (0, a.xf)(t => t.setDoInstall), S = (0, a.xf)(t => t.setInstallationStatus), c = (0, a.xf)(t => t.installationStatus), E = (0, l.useCallback)(() => {
    null == e || e(), (0, u.j)(o.rMx.NITRO_WARP_CTA_CLICKED, {
      is_enable_warp: false
    }), c === r._n.ERROR && S(r._n.NOT_INSTALLED), n(true)
  }, [n, c, S, e]);
  return (0, i.jsx)(s.zxk, {
    variant: "primary",
    onClick: E,
    text: T.intl.string(T.t["1WjMbC"])
  })
}