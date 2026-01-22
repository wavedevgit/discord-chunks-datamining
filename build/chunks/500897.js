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
    [f, b] = r.useState(false);
  return {
    handleCopyServerIp: r.useCallback(() => (null != u.current && clearTimeout(u.current), (0, c.ed)(e, t, n), (0, i.C)(null != d ? d : ""), (0, l.showToast)((0, a.o)(o.intl.string(o.t["+5kSoW"]), l.ToastType.SUCCESS)), b(true), u.current = setTimeout(() => {
      b(false)
    }, 2 * s.A.Millis.SECOND), () => {
      null != u.current && clearTimeout(u.current)
    }), [e, t, n, d]),
    animateCopyIcon: f
  }
}