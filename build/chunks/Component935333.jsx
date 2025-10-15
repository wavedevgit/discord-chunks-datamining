/** Chunk was on 16169 **/
/** chunk id: 935333, original params: t,n,s (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk370213 = require("./370213.js");
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