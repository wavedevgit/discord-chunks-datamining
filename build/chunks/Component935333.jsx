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
  Chunk502465 = require("./502465.js");
let p = t => {
  let {
    transitionState: n,
    processFiles: s,
    onClose: p
  } = t;
  return e.useEffect(() => {
    (async () => {
      n === c.Dvm.ENTERED && (await s(), p())
    })()
  }, [p, s, n]), (0, i.jsx)(a.u_l, {
    title: r.intl.string(r.t["B/HSDd"]),
    subtitle: r.intl.string(r.t.k7OALr),
    actions: true,
    onClose: p,
    transitionState: n,
    children: (0, i.jsx)(c.$jN, {
      className: l.spinner
    })
  })
}