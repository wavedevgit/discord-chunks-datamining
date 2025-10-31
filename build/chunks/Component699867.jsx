/** Chunk was on 3020 **/
/** chunk id: 699867, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk98460 = require("./98460.js"),
  Chunk87454 = require("./87454.jsx");

function o(e) {
  let {
    items: t,
    onChange: n
  } = e, [o, c] = (0, r.Z)(), d = (0, i.useCallback)(e => {
    c(e), null == n || n(e)
  }, [c, n]);
  return (0, a.jsx)(l.Kqy, {
    gap: 16,
    children: t.filter(e => isNaN(Number(e))).map(e => (0, a.jsx)(s.Z, {
      content: e,
      onChange: d
    }, e))
  })
}