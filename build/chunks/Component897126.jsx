/** Chunk was on 17259 **/
/** chunk id: 897126, original params: t,s,i (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk720188 = require("./720188.js");
let u = t => {
  let {
    transitionState: s,
    processFiles: i,
    onClose: u
  } = t;
  return e.useEffect(() => {
    (async () => {
      s === c.ip4.ENTERED && (await i(), u())
    })()
  }, [u, i, s]), (0, a.jsx)(n.aFV, {
    title: r.intl.string(r.t["B/HSDd"]),
    subtitle: r.intl.string(r.t.k7OALr),
    actions: true,
    onClose: u,
    transitionState: s,
    children: (0, a.jsx)(c.y$y, {
      className: l.u
    })
  })
}