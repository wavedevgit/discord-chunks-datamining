/** Chunk was on 17259 **/
/** chunk id: 897126, original params: t,s,i (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk720188 = require("./720188.js");
let p = t => {
  let {
    transitionState: s,
    processFiles: i,
    onClose: p
  } = t;
  return a.useEffect(() => {
    (async () => {
      s === r.ip4.ENTERED && (await i(), p())
    })()
  }, [p, i, s]), (0, e.jsx)(n.aFV, {
    title: c.intl.string(c.t["B/HSDd"]),
    subtitle: c.intl.string(c.t.k7OALr),
    actions: true,
    onClose: p,
    transitionState: s,
    children: (0, e.jsx)(r.y$y, {
      className: l.u
    })
  })
}