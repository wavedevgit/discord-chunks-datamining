/** Chunk was on 16169 **/
/** chunk id: 935333, original params: t,i,n (module,exports,require) **/
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
    transitionState: i,
    processFiles: n,
    onClose: p
  } = t;
  return e.useEffect(() => {
    (async () => {
      i === r.Dvm.ENTERED && (await n(), p())
    })()
  }, [p, n, i]), (0, s.jsx)(a.u_l, {
    title: c.intl.string(c.t["B/HSDQ"]),
    subtitle: c.intl.string(c.t.k7OALi),
    actions: true,
    onClose: p,
    transitionState: i,
    children: (0, s.jsx)(r.$jN, {
      className: l.spinner
    })
  })
}