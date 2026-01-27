/** Chunk was on 19750 **/
/** chunk id: 500897, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk857250 = require("./857250.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk957565 = require("./957565.js"),
  Chunk927813 = require("./927813.js"),
  Chunk397400 = require("./397400.js"),
  Chunk985018 = require("./985018.jsx");

function d(e, t, n, d) {
  let u = r.useRef(null),
    [m, f] = r.useState(false);
  return {
    handleCopyServerIp: r.useCallback(() => (null != u.current && clearTimeout(u.current), (0, o.ed)(e, t, n), (0, l.C)(null != d ? d : ""), (0, i.showToast)((0, a.o)(c.intl.string(c.t["+5kSoW"]), i.ToastType.SUCCESS)), f(true), u.current = setTimeout(() => {
      f(false)
    }, 2 * s.A.Millis.SECOND), () => {
      null != u.current && clearTimeout(u.current)
    }), [e, t, n, d]),
    animateCopyIcon: m
  }
}