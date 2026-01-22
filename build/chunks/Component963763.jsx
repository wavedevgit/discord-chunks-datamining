/** Chunk was on 22477 **/
/** chunk id: 963763, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk739560 = require("./739560.js"),
  Chunk387265 = require("./387265.jsx");

function o(e) {
  let {
    items: t,
    onChange: n
  } = e, [o, c] = (0, r.A)(), d = (0, l.useCallback)(e => {
    c(e), null == n || n(e)
  }, [c, n]);
  return (0, a.jsx)(i.BJc, {
    gap: 16,
    children: t.filter(e => isNaN(Number(e))).map(e => (0, a.jsx)(s.A, {
      content: e,
      onChange: d
    }, e))
  })
}