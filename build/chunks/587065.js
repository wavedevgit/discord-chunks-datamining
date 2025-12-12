/** Chunk was on 62934 **/
/** chunk id: 587065, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk345332 = require("./345332.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk572004 = require("./572004.js"),
  Chunk70956 = require("./70956.js"),
  Chunk578756 = require("./578756.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, n, t, d) {
  let u = r.useRef(null),
    [m, g] = r.useState(false);
  return {
    handleCopyServerIp: r.useCallback(() => (null != u.current && clearTimeout(u.current), (0, o.Se)(e, n, t), (0, l.JG)(null != d ? d : ""), (0, i.showToast)((0, a.Y)(c.intl.string(c.t["+5kSoW"]), i.ToastType.SUCCESS)), g(true), u.current = setTimeout(() => {
      g(false)
    }, 2 * s.Z.Millis.SECOND), () => {
      null != u.current && clearTimeout(u.current)
    }), [e, n, t, d]),
    animateCopyIcon: m
  }
}