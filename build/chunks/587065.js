/** Chunk was on 62934 **/
/** chunk id: 587065, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk345332 = require("./345332.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk572004 = require("./572004.js"),
  Chunk70956 = require("./70956.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let n = r.useRef(null),
    [t, c] = r.useState(false);
  return {
    handleCopyServerIp: r.useCallback(() => (null != n.current && clearTimeout(n.current), (0, l.JG)(null != e ? e : ""), (0, i.showToast)((0, a.Y)(o.intl.string(o.t["+5kSoa"]), i.ToastType.SUCCESS)), c(true), n.current = setTimeout(() => {
      c(false)
    }, 2 * s.Z.Millis.SECOND), () => {
      null != n.current && clearTimeout(n.current)
    }), [e]),
    animateCopyIcon: t
  }
}