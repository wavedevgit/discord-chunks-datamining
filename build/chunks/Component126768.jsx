/** Chunk was on 86155 **/
/** chunk id: 126768, original params: a,e,c (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk707539 = require("./707539.js"),
  Chunk617011 = require("./617011.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk515470 = require("./515470.js");

function o(a) {
  let {
    channel: e,
    onClose: c,
    transitionState: o
  } = a;
  return b.useEffect(() => {
    (0, _.D3)()
  }, []), (0, f.jsx)(d.dWK, {
    transitionState: o,
    "aria-label": s.intl.string(s.t.B2panI),
    size: "lg",
    onClose: c,
    children: (0, f.jsx)(t.A, {
      className: n.T,
      channel: e,
      onClose: c,
      context: "modal"
    })
  })
}