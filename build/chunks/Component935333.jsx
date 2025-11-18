/** Chunk was on 16169 **/
/** chunk id: 935333, original params: t,n,s (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk149048 = require("./149048.js");
let p = t => {
  let {
    transitionState: n,
    processFiles: s,
    onClose: p
  } = t;
  return e.useEffect(() => {
    (async () => {
      n === r.Dvm.ENTERED && (await s(), p())
    })()
  }, [p, s, n]), (0, i.jsx)(a.u_l, {
    title: c.intl.string(c.t["B/HSDd"]),
    subtitle: c.intl.string(c.t.k7OALr),
    actions: true,
    onClose: p,
    transitionState: n,
    children: (0, i.jsx)(r.$jN, {
      className: l.spinner
    })
  })
}